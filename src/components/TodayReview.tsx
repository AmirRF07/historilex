import React, { useState, useEffect } from 'react';
import { Volume2, RotateCcw, Sparkles, BookOpen, ChevronLeft, ArrowLeftRight, Lightbulb, Quote } from 'lucide-react';
import { WordEntry, ReviewGrade, StudyDirection } from '../types';
import { StorageService } from '../services/storage';
import { SpeechService } from '../services/speech';
import { REFERENCE_BOOKS } from '../data/books';

interface TodayReviewProps {
  onSelectWord: (word: WordEntry) => void;
}

export const TodayReview: React.FC<TodayReviewProps> = ({ onSelectWord }) => {
  const [deck, setDeck] = useState<WordEntry[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [direction, setDirection] = useState<StudyDirection>('en-to-fa');

  useEffect(() => {
    loadReviewDeck();
  }, []);

  const loadReviewDeck = () => {
    const allWords = StorageService.getAllWords();
    const records = StorageService.getRecords();
    const now = new Date();

    // Priority 1: Words due for review
    const dueWords = allWords.filter(w => {
      const rec = records[w.id];
      if (!rec) return false;
      return new Date(rec.nextReviewDate) <= now;
    });

    // Priority 2: New unstudied words
    const newWords = allWords.filter(w => !records[w.id]);

    const sessionCards = [...dueWords, ...newWords].slice(0, 15);

    setDeck(sessionCards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsFinished(sessionCards.length === 0);
  };

  const currentWord = deck[currentIndex];
  const book = currentWord ? REFERENCE_BOOKS.find(b => b.id === currentWord.bookId) : null;

  const handleGrade = (grade: ReviewGrade) => {
    if (!currentWord) return;

    StorageService.reviewWord(currentWord.id, grade);
    setCompletedCount(prev => prev + 1);

    if (currentIndex + 1 < deck.length) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    } else {
      setIsFinished(true);
    }
  };

  const progressPercent = deck.length > 0 ? Math.round((completedCount / deck.length) * 100) : 100;

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center max-w-md mx-auto my-12 bg-slate-900/80 border border-amber-500/30 rounded-3xl backdrop-blur-md shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-4 animate-bounce">
          <Sparkles size={32} />
        </div>
        <h2 className="text-2xl font-black text-amber-400 font-serif mb-2">
          جلسه مرور امروز تکمیل شد!
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          شما تمام واژگان مقرر برای امروز را با موفقیت مرور کردید و زنجیره مطالعه شما تداوم یافت.
        </p>

        <button
          onClick={loadReviewDeck}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20"
        >
          <RotateCcw size={16} />
          <span>مرور کارت‌های بیشتر</span>
        </button>
      </div>
    );
  }

  if (!currentWord) return null;

  return (
    <div className="max-w-xl mx-auto px-4 py-4 flex flex-col gap-4">
      {/* Top Bar: Progress and Direction Switch */}
      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
        <span>کارت {currentIndex + 1} از {deck.length} ({progressPercent}% تکمیل)</span>

        {/* Direction Switch Toggle */}
        <button
          onClick={() => {
            setDirection(d => (d === 'en-to-fa' ? 'fa-to-en' : 'en-to-fa'));
            setIsFlipped(false);
          }}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition"
          title="تغییر جهت یادگیری"
        >
          <ArrowLeftRight size={13} />
          <span>{direction === 'en-to-fa' ? 'انگلیسی ➔ فارسی' : 'فارسی ➔ انگلیسی'}</span>
        </button>
      </div>

      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Flashcard */}
      <div className="relative w-full rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-7 flex flex-col gap-5 text-right transition-all">
        {/* Card Header: Category & Audio */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/25">
            {currentWord.categoryFa}
          </span>

          <button
            onClick={() => SpeechService.speak(currentWord.term)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-amber-400 bg-slate-800 hover:bg-slate-700 transition"
          >
            <Volume2 size={16} />
            <span>تلفظ صوتی</span>
          </button>
        </div>

        {/* FRONT OF CARD */}
        {direction === 'en-to-fa' ? (
          /* Show English Term, student recalls Persian meaning */
          <div className="text-left py-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              اصطلاح تخصصی در مقالات و کتب:
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-wide mb-2">
              {currentWord.term}
            </h2>
            <span className="text-sm font-mono text-slate-400 dir-ltr bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
              {currentWord.ipa}
            </span>
          </div>
        ) : (
          /* Show Persian Concept, student recalls English academic jargon */
          <div className="text-right py-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              مفهوم و معادل فارسی در تاریخ‌پژوهی:
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 leading-snug mb-2">
              {currentWord.persianMeaning}
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              این مفهوم در متون انگلیسی چه نامیده می‌شود؟
            </p>
          </div>
        )}

        {/* Book Reference tag */}
        {book && (
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
            <BookOpen size={14} className="text-amber-400 shrink-0" />
            <span className="truncate">
              کتاب منبع: {book.author} — <span className="italic">{book.title}</span>
            </span>
          </div>
        )}

        {/* REVEAL BUTTON OR BACK OF CARD */}
        {!isFlipped ? (
          <button
            onClick={() => setIsFlipped(true)}
            className="w-full py-4 mt-2 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 font-bold text-base transition flex items-center justify-center gap-2 shadow-sm"
          >
            <span>نمایش پاسخ، معنای روان و کاربرد تاریخی</span>
            <ChevronLeft size={18} />
          </button>
        ) : (
          <div className="flex flex-col gap-4 animate-in fade-in duration-300 border-t border-slate-800 pt-4">
            {/* Target answer counterpart */}
            {direction === 'en-to-fa' ? (
              <div className="bg-amber-500/10 border border-amber-500/30 p-3.5 rounded-2xl">
                <span className="text-[11px] font-bold text-amber-400 block mb-1">
                  معادل فارسی در متون تاریخی:
                </span>
                <p className="text-xl font-extrabold text-amber-200">
                  {currentWord.persianMeaning}
                </p>
              </div>
            ) : (
              <div className="bg-amber-500/10 border border-amber-500/30 p-3.5 rounded-2xl text-left">
                <span className="text-[11px] font-bold text-amber-400 block mb-1">
                  Academic English Term:
                </span>
                <p className="font-serif text-2xl font-extrabold text-amber-300">
                  {currentWord.term}
                </p>
                <span className="text-xs font-mono text-slate-400 dir-ltr inline-block mt-0.5">
                  {currentWord.ipa}
                </span>
              </div>
            )}

            {/* "💡 به زبان ساده در تاریخ ایران یعنی چی؟" */}
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-amber-500/20">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs mb-2">
                <Lightbulb size={16} />
                <span>به زبان ساده در تاریخ ایران یعنی چی؟</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                {currentWord.simpleExplanationFa}
              </p>
            </div>

            {/* Quote with parallel translation */}
            {currentWord.quoteOrContext && (
              <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 text-xs">
                <div className="flex items-center gap-1.5 text-slate-400 font-semibold mb-1.5">
                  <Quote size={13} className="text-amber-400" />
                  <span>شاهد متنی از کتاب اصلی:</span>
                </div>
                <p className="font-serif italic text-slate-300 text-left dir-ltr mb-1.5">
                  "{currentWord.quoteOrContext}"
                </p>
                <p className="text-amber-200/90 border-t border-slate-800/80 pt-1.5 text-right">
                  ترجمه: {currentWord.quoteTranslation}
                </p>
              </div>
            )}

            {/* Collocations with Persian translations */}
            {currentWord.collocationsList && currentWord.collocationsList.length > 0 && (
              <div>
                <span className="text-[11px] font-bold text-slate-400 block mb-1.5">
                  هم‌آیی‌های مهم همراه با ترجمه فارسی (در مقالات ISI):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {currentWord.collocationsList.map((col, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs"
                    >
                      <span className="font-mono text-amber-300 text-left dir-ltr text-[11px]">
                        {col.en}
                      </span>
                      <span className="text-slate-300 text-[11px] font-medium mr-2">
                        {col.fa}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Read more button to open complete detail modal */}
            <button
              onClick={() => onSelectWord(currentWord)}
              className="text-xs text-amber-400 hover:text-amber-300 underline text-left self-start mt-1"
            >
              مشاهده تمامی جزئیات و یادداشت‌های تخصصی ↗
            </button>

            {/* FSRS Review Grades (Again, Hard, Good, Easy) */}
            <div className="grid grid-cols-4 gap-2 pt-3 border-t border-slate-800">
              <button
                onClick={() => handleGrade('again')}
                className="flex flex-col items-center py-2.5 px-1 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition text-xs font-bold"
              >
                <span>دوباره</span>
                <span className="text-[10px] opacity-75 font-mono mt-0.5">۱ روز</span>
              </button>

              <button
                onClick={() => handleGrade('hard')}
                className="flex flex-col items-center py-2.5 px-1 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 border border-orange-500/30 transition text-xs font-bold"
              >
                <span>دشوار</span>
                <span className="text-[10px] opacity-75 font-mono mt-0.5">۲ روز</span>
              </button>

              <button
                onClick={() => handleGrade('good')}
                className="flex flex-col items-center py-2.5 px-1 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 transition text-xs font-bold shadow-sm"
              >
                <span>خوب</span>
                <span className="text-[10px] opacity-75 font-mono mt-0.5">۴ روز</span>
              </button>

              <button
                onClick={() => handleGrade('easy')}
                className="flex flex-col items-center py-2.5 px-1 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition text-xs font-bold"
              >
                <span>آسان</span>
                <span className="text-[10px] opacity-75 font-mono mt-0.5">۷ روز</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

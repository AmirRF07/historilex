import React from 'react';
import { X, Volume2, Bookmark, BookOpen, Quote, Sparkles, Link2, Lightbulb } from 'lucide-react';
import { WordEntry, StudyRecord } from '../types';
import { SpeechService } from '../services/speech';
import { REFERENCE_BOOKS } from '../data/books';

interface WordDetailModalProps {
  word: WordEntry | null;
  record?: StudyRecord;
  onClose: () => void;
  onToggleBookmark: (wordId: string) => void;
  onSelectRelated?: (term: string) => void;
}

export const WordDetailModal: React.FC<WordDetailModalProps> = ({
  word,
  record,
  onClose,
  onToggleBookmark,
  onSelectRelated
}) => {
  if (!word) return null;

  const book = REFERENCE_BOOKS.find(b => b.id === word.bookId);
  const isBookmarked = record?.bookmarked;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 text-right relative flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with Category, Audio, Bookmark, Close */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
              {word.categoryFa}
            </span>
            {word.isCustom && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                واژه پژوهشگر
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => SpeechService.speak(word.term)}
              className="p-2 rounded-xl text-slate-300 hover:text-amber-400 bg-slate-800 hover:bg-slate-700 transition"
              title="پخش تلفظ انگلیسی"
            >
              <Volume2 size={18} />
            </button>
            <button
              onClick={() => onToggleBookmark(word.id)}
              className={`p-2 rounded-xl transition ${
                isBookmarked
                  ? 'text-amber-400 bg-amber-500/15 border border-amber-500/30'
                  : 'text-slate-400 bg-slate-800 hover:text-slate-200'
              }`}
              title="نشان‌گذاری"
            >
              <Bookmark size={18} fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-200 bg-slate-800 hover:bg-slate-700 transition"
              title="بستن"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Word Header (Bilingual) */}
        <div>
          <div className="flex items-baseline gap-3 flex-wrap text-left">
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-400">
              {word.term}
            </h2>
            <span className="text-sm font-mono text-slate-400 dir-ltr bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
              {word.ipa}
            </span>
          </div>
          <p className="text-lg font-bold text-slate-100 mt-2 text-right">
            {word.persianMeaning}
          </p>
        </div>

        {/* "💡 به زبان ساده در تاریخ ایران یعنی چه؟" */}
        {word.simpleExplanationFa && (
          <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs mb-1.5">
              <Lightbulb size={16} />
              <span>به زبان ساده در تاریخ ایران یعنی چی؟</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              {word.simpleExplanationFa}
            </p>
          </div>
        )}

        {/* Academic Definitions */}
        <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-amber-400/90 uppercase block mb-1">
              تعریف آکادمیک فارسی (در تاریخ‌پژوهی):
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              {word.academicDefinitionFa}
            </p>
          </div>

          <div className="border-t border-slate-800/80 pt-2.5 text-left">
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1">
              Academic Definition (English):
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {word.academicDefinitionEn}
            </p>
          </div>
        </div>

        {/* Historical Significance */}
        {word.historicalSignificance && (
          <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-2xl">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs mb-1.5">
              <Sparkles size={14} />
              <span>اهمیت تاریخی و تحلیلی در تاریخ ایران</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {word.historicalSignificance}
            </p>
          </div>
        )}

        {/* Source Citation & Quote with Parallel Translation */}
        {word.quoteOrContext && (
          <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-2xl relative">
            <Quote className="absolute top-3 left-3 text-slate-700/60" size={28} />
            <div className="text-left mb-2 pl-6">
              <p className="text-xs sm:text-sm font-serif italic text-slate-300 leading-relaxed">
                "{word.quoteOrContext}"
              </p>
            </div>
            <p className="text-xs text-amber-200/90 border-t border-slate-800/80 pt-2 text-right">
              ترجمه فارسی: {word.quoteTranslation}
            </p>

            {book && (
              <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-800/60 text-xs text-amber-400">
                <BookOpen size={14} />
                <span>
                  مأخذ: {book.author}، <span className="font-semibold">{book.title}</span> ({book.publisherYear})
                </span>
              </div>
            )}
          </div>
        )}

        {/* Collocations with Persian translations */}
        {word.collocationsList && word.collocationsList.length > 0 && (
          <div>
            <span className="text-xs font-bold text-slate-400 block mb-2">
              هم‌آیی‌ها و اصطلاحات دانشگاهی همراه با ترجمه فارسی (Collocations):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {word.collocationsList.map((col, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs"
                >
                  <span className="font-mono text-amber-300 text-left dir-ltr text-xs">
                    {col.en}
                  </span>
                  <span className="text-slate-300 text-xs font-medium mr-2">
                    {col.fa}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Terms */}
        {word.relatedTerms && word.relatedTerms.length > 0 && (
          <div>
            <span className="text-xs font-bold text-slate-400 block mb-2">
              مفاهیم وابسته:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {word.relatedTerms.map((rel, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectRelated && onSelectRelated(rel)}
                  className="flex items-center gap-1 text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-amber-300 px-2.5 py-1 rounded-lg border border-slate-700 transition"
                >
                  <Link2 size={12} />
                  <span>{rel}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

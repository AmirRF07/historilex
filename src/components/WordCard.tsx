import React from 'react';
import { Volume2, Bookmark, Book } from 'lucide-react';
import { WordEntry, StudyRecord } from '../types';
import { SpeechService } from '../services/speech';
import { REFERENCE_BOOKS } from '../data/books';

interface WordCardProps {
  word: WordEntry;
  record?: StudyRecord;
  onSelect: (word: WordEntry) => void;
  onToggleBookmark: (wordId: string, e: React.MouseEvent) => void;
}

export const WordCard: React.FC<WordCardProps> = ({
  word,
  record,
  onSelect,
  onToggleBookmark
}) => {
  const book = REFERENCE_BOOKS.find(b => b.id === word.bookId);

  const handlePlayAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    SpeechService.speak(word.term);
  };

  const isBookmarked = record?.bookmarked;
  const stateColor =
    record?.state === 'mastered'
      ? 'border-emerald-500/30 bg-emerald-500/5'
      : record?.state === 'review'
      ? 'border-amber-500/30 bg-amber-500/5'
      : record?.state === 'learning'
      ? 'border-blue-500/30 bg-blue-500/5'
      : 'border-slate-800 bg-slate-900/60';

  return (
    <div
      onClick={() => onSelect(word)}
      className={`group relative rounded-2xl border p-4 transition-all duration-200 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 cursor-pointer backdrop-blur-sm ${stateColor}`}
    >
      {/* Top Header: Category & Actions */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700/60">
          {word.categoryFa}
        </span>

        <div className="flex items-center gap-1">
          <button
            onClick={handlePlayAudio}
            className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition"
            title="تلفظ صوتی"
            aria-label="تلفظ"
          >
            <Volume2 size={16} />
          </button>
          <button
            onClick={(e) => onToggleBookmark(word.id, e)}
            className={`p-1.5 rounded-lg transition ${
              isBookmarked
                ? 'text-amber-400 bg-amber-500/10'
                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
            }`}
            title="نشان‌گذاری واژه"
            aria-label="نشان‌گذاری"
          >
            <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Main Term */}
      <div className="mb-2 text-left">
        <h3 className="font-serif text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
          {word.term}
        </h3>
        <span className="text-xs font-mono text-slate-400 tracking-wide dir-ltr inline-block">
          {word.ipa}
        </span>
      </div>

      {/* Persian Gloss */}
      <div className="text-right mb-3">
        <p className="text-sm font-semibold text-amber-200/90 leading-snug">
          {word.persianMeaning}
        </p>
      </div>

      {/* Book Citation snippet */}
      {book && (
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 border-t border-slate-800/80 pt-2.5 mt-2">
          <Book size={12} className="text-amber-400/80 shrink-0" />
          <span className="truncate" title={book.title}>
            {book.author} — <span className="italic">{book.title}</span>
          </span>
        </div>
      )}
    </div>
  );
};

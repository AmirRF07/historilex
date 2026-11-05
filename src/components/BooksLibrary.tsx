import React, { useState } from 'react';
import { Book, Copy, Check, ExternalLink } from 'lucide-react';
import { REFERENCE_BOOKS } from '../data/books';
import { BookReference } from '../types';

interface BooksLibraryProps {
  onFilterByBook: (bookId: string) => void;
}

export const BooksLibrary: React.FC<BooksLibraryProps> = ({ onFilterByBook }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyQuery = (book: BookReference) => {
    navigator.clipboard.writeText(book.searchQuery);
    setCopiedId(book.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-5">
      {/* Introduction Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/25 p-5 text-right">
        <h2 className="text-xl font-bold font-serif text-amber-400 mb-2">
          کتاب‌شناسی و منابع مرجع زبان تخصصی
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          این سامانه بر پایه ۱۱ منبع مرجع و درجه‌یک در زمینه نظریه تاریخ‌نگاری، متون اسلام‌شناسی و تاریخ ایران پس از اسلام تدوین شده است. می‌توانید عبارات دقیق جستجوی فایل PDF هر کتاب را کپی نموده یا اصطلاحات استخراج‌شده از هر کتاب را مطالعه فرمایید.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
        {REFERENCE_BOOKS.map((book) => {
          const isCopied = copiedId === book.id;

          return (
            <div
              key={book.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col justify-between gap-4 hover:border-slate-700 transition backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-amber-400 font-medium mb-1.5">
                  <span className="bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                    {book.category}
                  </span>
                  <Book size={16} className="text-slate-500" />
                </div>

                <h3 className="font-serif font-bold text-base text-slate-100 text-left mt-1 mb-1">
                  {book.title}
                </h3>
                <p className="text-xs font-semibold text-amber-300/90 text-left mb-2">
                  {book.author} — <span className="font-normal text-slate-400">{book.publisherYear}</span>
                </p>

                <p className="text-xs text-slate-300 leading-relaxed text-right">
                  {book.description}
                </p>
              </div>

              {/* Actions: Copy search query & view words */}
              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyQuery(book)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition font-medium"
                    title="کپی عبارت دقیق برای جستجوی گوگل"
                  >
                    {isCopied ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span className="text-emerald-300">کپی شد!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} className="text-amber-400" />
                        <span>کپی عبارت جستجوی PDF</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onFilterByBook(book.id)}
                    className="flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-xs font-bold transition"
                  >
                    <span>اصطلاحات کتاب</span>
                    <ExternalLink size={12} />
                  </button>
                </div>

                <div className="text-[10px] text-slate-500 font-mono dir-ltr truncate bg-slate-950 px-2 py-1 rounded border border-slate-800/80">
                  {book.searchQuery}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

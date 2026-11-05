import React, { useState, useMemo } from 'react';
import { Search, Filter, Bookmark, Plus, X } from 'lucide-react';
import { WordEntry, WordCategory } from '../types';
import { WordCard } from './WordCard';
import { StorageService } from '../services/storage';
import { REFERENCE_BOOKS } from '../data/books';

interface AtlasListProps {
  onSelectWord: (word: WordEntry) => void;
  onOpenAddModal: () => void;
  initialBook?: string;
}

export const AtlasList: React.FC<AtlasListProps> = ({ onSelectWord, onOpenAddModal, initialBook = 'all' }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<WordCategory | 'all'>('all');
  const [selectedBook, setSelectedBook] = useState<string>(initialBook);
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [records, setRecords] = useState(StorageService.getRecords());

  const allWords = useMemo(() => StorageService.getAllWords(), [records]);

  const categories: { id: WordCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'همه موضوعات' },
    { id: 'historiography', label: 'روش‌شناسی و تاریخ‌نگاری' },
    { id: 'islamicate', label: 'تمدن و جهان اسلام' },
    { id: 'agrarian', label: 'نظام‌های ارضی و فئودالیسم' },
    { id: 'institutions', label: 'دیوان و نهادهای صفوی' },
    { id: 'fiscal', label: 'مالیه و اقتصاد تاریخی' },
    { id: 'modern', label: 'تاریخ معاصر و قاجار' }
  ];

  const handleToggleBookmark = (wordId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    StorageService.toggleBookmark(wordId);
    setRecords(StorageService.getRecords());
  };

  const filteredWords = useMemo(() => {
    return allWords.filter(w => {
      // Search match
      const q = search.trim().toLowerCase();
      const matchSearch =
        !q ||
        w.term.toLowerCase().includes(q) ||
        w.persianMeaning.toLowerCase().includes(q) ||
        w.academicDefinitionFa.toLowerCase().includes(q) ||
        w.collocations.some(c => c.toLowerCase().includes(q));

      // Category match
      const matchCat = selectedCategory === 'all' || w.category === selectedCategory;

      // Book match
      const matchBook = selectedBook === 'all' || w.bookId === selectedBook;

      // Bookmark match
      const matchBookmark = !showBookmarksOnly || records[w.id]?.bookmarked;

      return matchSearch && matchCat && matchBook && matchBookmark;
    });
  }, [allWords, search, selectedCategory, selectedBook, showBookmarksOnly, records]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-5">
      {/* Search Bar & Action Buttons */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جست‌وجوی واژه، اصطلاح انگلیسی، معنای فارسی یا هم‌آیی..."
            className="w-full pl-10 pr-10 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <button
          onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
          className={`p-3 rounded-2xl border transition flex items-center justify-center ${
            showBookmarksOnly
              ? 'bg-amber-500/20 border-amber-500 text-amber-300'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
          title="فقط نشان‌شده‌ها"
        >
          <Bookmark size={18} fill={showBookmarksOnly ? 'currentColor' : 'none'} />
        </button>

        <button
          onClick={onOpenAddModal}
          className="flex items-center gap-1.5 px-3.5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition shrink-0 shadow-lg shadow-amber-500/15"
          title="افزودن واژه جدید"
        >
          <Plus size={18} />
          <span className="hidden sm:inline">افزودن واژه</span>
        </button>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Book Filter Dropdown */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-amber-400" />
          <span>فیلتر بر اساس کتاب مرجع:</span>
          <select
            value={selectedBook}
            onChange={(e) => setSelectedBook(e.target.value)}
            className="bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1 text-slate-200 text-xs focus:outline-none focus:border-amber-500/50"
          >
            <option value="all">تمام ۱۱ کتاب مرجع</option>
            {REFERENCE_BOOKS.map(b => (
              <option key={b.id} value={b.id}>
                {b.author} — {b.title.substring(0, 36)}...
              </option>
            ))}
          </select>
        </div>

        <span>{filteredWords.length} واژه</span>
      </div>

      {/* Words Grid */}
      {filteredWords.length === 0 ? (
        <div className="text-center py-12 text-slate-500 text-sm">
          واژه‌ای با مشخصات جستجو شده یافت نشد.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pb-20">
          {filteredWords.map(word => (
            <WordCard
              key={word.id}
              word={word}
              record={records[word.id]}
              onSelect={onSelectWord}
              onToggleBookmark={handleToggleBookmark}
            />
          ))}
        </div>
      )}
    </div>
  );
};

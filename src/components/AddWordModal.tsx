import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { WordCategory, WordEntry } from '../types';
import { StorageService } from '../services/storage';
import { REFERENCE_BOOKS } from '../data/books';

interface AddWordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdded: () => void;
}

export const AddWordModal: React.FC<AddWordModalProps> = ({ isOpen, onClose, onAdded }) => {
  const [term, setTerm] = useState('');
  const [ipa, setIpa] = useState('');
  const [persianMeaning, setPersianMeaning] = useState('');
  const [academicDefinitionFa, setAcademicDefinitionFa] = useState('');
  const [academicDefinitionEn, setAcademicDefinitionEn] = useState('');
  const [category, setCategory] = useState<WordCategory>('historiography');
  const [bookId, setBookId] = useState(REFERENCE_BOOKS[0].id);
  const [quoteOrContext, setQuoteOrContext] = useState('');
  const [quoteTranslation, setQuoteTranslation] = useState('');
  const [collocationsInput, setCollocationsInput] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!term.trim() || !persianMeaning.trim()) {
      alert('لطفاً عنوان اصطلاح و معنای فارسی آن را وارد کنید.');
      return;
    }

    const catObj: Record<WordCategory, string> = {
      historiography: 'نظریه و تاریخ‌نگاری',
      islamicate: 'تمدن و جهان اسلام',
      agrarian: 'نظام‌های ارضی و کشاورزی',
      institutions: 'تشکیلات اداری صفوی',
      fiscal: 'مالیه و اقتصاد تاریخی',
      modern: 'تاریخ معاصر و قاجار'
    };

    const newWord: WordEntry = {
      id: `custom_${Date.now()}`,
      term: term.trim(),
      ipa: ipa.trim() || `/${term.trim().toLowerCase()}/`,
      persianMeaning: persianMeaning.trim(),
      simpleExplanationFa: academicDefinitionFa.trim() || persianMeaning.trim(),
      academicDefinitionFa: academicDefinitionFa.trim() || persianMeaning.trim(),
      academicDefinitionEn: academicDefinitionEn.trim() || 'Scholarly term in historical analysis.',
      category,
      categoryFa: catObj[category],
      bookId,
      quoteOrContext: quoteOrContext.trim(),
      quoteTranslation: quoteTranslation.trim(),
      historicalSignificance: 'اضافه شده توسط پژوهشگر.',
      collocations: collocationsInput
        ? collocationsInput.split(',').map(s => s.trim()).filter(Boolean)
        : [],
      relatedTerms: [],
      isCustom: true
    };

    StorageService.addCustomWord(newWord);
    onAdded();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full sm:max-w-lg max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 text-right flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
            <Plus size={18} />
            <span>افزودن اصطلاح تخصصی جدید</span>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 text-xs">
          {/* Term & IPA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                اصطلاح علمی انگلیسی (Academic Term):
              </label>
              <input
                type="text"
                required
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="مثال: Feudal Rent"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-left dir-ltr focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                تلفظ آوانگاری IPA (اختیاری):
              </label>
              <input
                type="text"
                value={ipa}
                onChange={(e) => setIpa(e.target.value)}
                placeholder="/ˈfjuːdəl rɛnt/"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-left dir-ltr focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Persian Meaning */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              معنا و معادل فارسی در تاریخ‌پژوهی:
            </label>
            <input
              type="text"
              required
              value={persianMeaning}
              onChange={(e) => setPersianMeaning(e.target.value)}
              placeholder="مثال: رانت فئودالی / بهره مالکانه"
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Academic Definition En */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              تعریف آکادمیک انگلیسی (English Definition):
            </label>
            <input
              type="text"
              value={academicDefinitionEn}
              onChange={(e) => setAcademicDefinitionEn(e.target.value)}
              placeholder="The surplus value extracted by landlords..."
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-left dir-ltr focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Quote & Translation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                نقل‌قول یا شاهد متنی (انگلیسی):
              </label>
              <input
                type="text"
                value={quoteOrContext}
                onChange={(e) => setQuoteOrContext(e.target.value)}
                placeholder="Quote from book..."
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-left dir-ltr focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                ترجمه شاهد متنی (فارسی):
              </label>
              <input
                type="text"
                value={quoteTranslation}
                onChange={(e) => setQuoteTranslation(e.target.value)}
                placeholder="ترجمه فارسی نقل قول..."
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Category & Book */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                دسته‌بندی موضوعی:
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as WordCategory)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500"
              >
                <option value="historiography">روش‌شناسی و تاریخ‌نگاری</option>
                <option value="islamicate">تمدن و جهان اسلام</option>
                <option value="agrarian">نظام‌های ارضی و کشاورزی</option>
                <option value="institutions">تشکیلات اداری صفوی</option>
                <option value="fiscal">مالیه و اقتصاد تاریخی</option>
                <option value="modern">تاریخ معاصر و قاجار</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                کتاب مرجع:
              </label>
              <select
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500 truncate"
              >
                {REFERENCE_BOOKS.map(b => (
                  <option key={b.id} value={b.id}>
                    {b.author} ({b.title.substring(0, 20)}...)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Academic Definition Fa */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              تعریف تفصیلی آکادمیک (فارسی):
            </label>
            <textarea
              rows={2}
              value={academicDefinitionFa}
              onChange={(e) => setAcademicDefinitionFa(e.target.value)}
              placeholder="توضیح نقش و جایگاه این مفهوم در تحلیل اسناد و متون تاریخی..."
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Collocations */}
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              هم‌آیی‌ها / عبارات ترکیبی انگلیسی (با کاما جدا کنید):
            </label>
            <input
              type="text"
              value={collocationsInput}
              onChange={(e) => setCollocationsInput(e.target.value)}
              placeholder="feudal exaction, rent in kind, agrarian surplus"
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 dir-ltr text-left focus:outline-none focus:border-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20"
          >
            ذخیره در اطلس اصطلاحات
          </button>
        </form>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Flame, CheckCircle, Clock, Download, Upload, Sparkles } from 'lucide-react';
import { StorageService } from '../services/storage';

export const StatsView: React.FC = () => {
  const [stats, setStats] = useState(StorageService.getStats());
  const [records, setRecords] = useState(StorageService.getRecords());
  const allWords = StorageService.getAllWords();

  const masteredCount = Object.values(records).filter(r => r.state === 'mastered').length;
  const learningCount = Object.values(records).filter(r => r.state === 'learning' || r.state === 'review').length;
  const newCount = allWords.length - (masteredCount + learningCount);

  const handleExportData = () => {
    const data = {
      records: StorageService.getRecords(),
      customWords: StorageService.getCustomWords(),
      stats: StorageService.getStats(),
      exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `historilex-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json.records) StorageService.saveRecords(json.records);
        if (json.customWords) {
          localStorage.setItem('historilex:custom_words', JSON.stringify(json.customWords));
        }
        setRecords(StorageService.getRecords());
        setStats(StorageService.getStats());
        alert('اطلاعات با موفقیت بازیابی شد.');
      } catch {
        alert('فایل پشتیبان نامعتبر است.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 flex flex-col gap-5 text-right pb-24">
      {/* Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
          <Flame className="text-amber-400 mb-1" size={24} />
          <span className="text-2xl font-black text-slate-100 font-mono">{stats.streakDays}</span>
          <span className="text-xs text-slate-400">روز استمرار</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
          <CheckCircle className="text-emerald-400 mb-1" size={24} />
          <span className="text-2xl font-black text-slate-100 font-mono">{masteredCount}</span>
          <span className="text-xs text-slate-400">واژه مسلط‌شده</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
          <Clock className="text-blue-400 mb-1" size={24} />
          <span className="text-2xl font-black text-slate-100 font-mono">{learningCount}</span>
          <span className="text-xs text-slate-400">در حال یادگیری</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
          <Sparkles className="text-purple-400 mb-1" size={24} />
          <span className="text-2xl font-black text-slate-100 font-mono">{allWords.length}</span>
          <span className="text-xs text-slate-400">کل واژگان اطلس</span>
        </div>
      </div>

      {/* Progress Breakdown */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 flex flex-col gap-3">
        <h3 className="font-serif font-bold text-base text-amber-400">
          توزیع تسلط بر اصطلاحات
        </h3>
        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
          <div
            className="bg-emerald-500 transition-all"
            style={{ width: `${(masteredCount / allWords.length) * 100}%` }}
            title="مسلط‌شده"
          />
          <div
            className="bg-amber-500 transition-all"
            style={{ width: `${(learningCount / allWords.length) * 100}%` }}
            title="در جریان مرور"
          />
          <div
            className="bg-slate-700 transition-all"
            style={{ width: `${(newCount / allWords.length) * 100}%` }}
            title="جدید"
          />
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span>مسلط ({masteredCount})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <span>در حال مرور ({learningCount})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
            <span>جدید ({newCount})</span>
          </div>
        </div>
      </div>

      {/* Backup and Restore */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 flex flex-col gap-3">
        <h3 className="font-serif font-bold text-base text-slate-100">
          پشتیبان‌گیری و انتقال داده‌ها
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          تمام پیشرفت‌های شما و واژگانی که به صورت دستی اضافه کرده‌اید در حافظه لوکال گوشی یا مرورگر ذخیره می‌شود. می‌توانید از آن‌ها خروجی فایل بگیرید تا در هر دستگاه دیگری بارگذاری شوند.
        </p>

        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={handleExportData}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition font-medium border border-slate-700"
          >
            <Download size={14} className="text-amber-400" />
            <span>خروجی پشتیبان (JSON)</span>
          </button>

          <label className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition font-medium border border-slate-700 cursor-pointer">
            <Upload size={14} className="text-blue-400" />
            <span>بازیابی اطلاعات</span>
            <input type="file" accept=".json" onChange={handleImportData} className="hidden" />
          </label>
        </div>
      </div>

      {/* About & Instructions */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 flex flex-col gap-3">
        <h3 className="font-serif font-bold text-base text-amber-400">
          درباره سامانه HistoriLex (تاریخ‌واژه)
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          طراحی‌شده ویژه پژوهشگران و دانشجویان تاریخ ایران و مطالعات خاورمیانه جهت تسلط بر واژگان و ادبیات تخصصی مقالات بین‌المللی و متون مرجع.
        </p>
      </div>
    </div>
  );
};

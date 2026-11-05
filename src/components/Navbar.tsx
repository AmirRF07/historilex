import React from 'react';
import { BookOpen, Compass, Library, Award, BarChart3 } from 'lucide-react';
import { Logo } from './Logo';

export type NavTab = 'today' | 'atlas' | 'practice' | 'books' | 'stats';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  streak: number;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, streak }) => {
  const tabs = [
    { id: 'today', label: 'امروز', icon: Compass },
    { id: 'atlas', label: 'اطلس واژگان', icon: BookOpen },
    { id: 'practice', label: 'آزمون', icon: Award },
    { id: 'books', label: 'کتب مرجع', icon: Library },
    { id: 'stats', label: 'پیشرفت', icon: BarChart3 }
  ];

  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80 px-4 pt-safe-top md:pt-3 pb-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Logo size="md" />

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id as NavTab)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Streak pill */}
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/25 px-3 py-1 rounded-full text-xs font-semibold text-amber-300 shadow-inner">
            <span className="text-amber-400 text-sm">🔥</span>
            <span>{streak} روز پیاپی</span>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/90 pb-safe">
        <div className="grid grid-cols-5 px-1 py-1.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id as NavTab)}
                className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-all ${
                  isActive
                    ? 'text-amber-400 font-bold scale-105'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className={`p-1 rounded-lg ${isActive ? 'bg-amber-500/20' : ''}`}>
                  <Icon size={20} strokeWidth={isActive ? 2.3 : 1.8} />
                </div>
                <span className="text-[11px] mt-0.5 tracking-tight">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

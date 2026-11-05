import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const dim = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-10 h-10';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className={`relative ${dim} rounded-xl bg-gradient-to-br from-amber-500/20 via-slate-800 to-slate-900 border border-amber-500/30 p-1.5 shadow-lg shadow-amber-500/5 flex items-center justify-center shrink-0`}>
        {/* Astrolabe / Arch stylized vector */}
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-amber-400 stroke-[3.5] drop-shadow">
          <circle cx="50" cy="50" r="42" strokeOpacity="0.3" strokeDasharray="4 3" />
          <path d="M 24 75 L 24 45 C 24 30, 50 18, 50 18 C 50 18, 76 30, 76 45 L 76 75" strokeWidth="3" />
          {/* Scroll / Book */}
          <path d="M 28 65 C 38 60, 46 65, 50 68 C 54 65, 62 60, 72 65 L 72 45 C 62 40, 54 45, 50 48 C 46 45, 38 40, 28 45 Z" fill="#1e293b" strokeWidth="2.5" />
          {/* Pen / Quill Tip */}
          <path d="M 50 25 L 53 45 L 47 45 Z" fill="#f59e0b" stroke="none" />
          <circle cx="50" cy="50" r="2.5" fill="#fef3c7" stroke="none" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-right">
          <div className="flex items-center gap-1.5">
            <span className="font-serif font-black tracking-wider text-amber-400 text-lg leading-tight">HistoriLex</span>
            <span className="text-[10px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20 px-1.5 py-0.2 rounded">تاریخ ایران</span>
          </div>
          <span className="text-xs text-slate-400 font-medium">واژه‌نامه تخصصی تاریخ‌نگاری</span>
        </div>
      )}
    </div>
  );
};

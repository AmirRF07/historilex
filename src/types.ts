export interface BookReference {
  id: string;
  title: string;
  author: string;
  publisherYear: string;
  searchQuery: string;
  category: string;
  description: string;
}

export type WordCategory =
  | 'historiography'
  | 'islamicate'
  | 'agrarian'
  | 'institutions'
  | 'fiscal'
  | 'modern';

export interface CollocationItem {
  en: string;
  fa: string;
}

export interface WordEntry {
  id: string;
  term: string;
  ipa: string;
  persianMeaning: string;
  simpleExplanationFa: string; // به زبان ساده و کاربردی در تاریخ ایران
  academicDefinitionEn: string;
  academicDefinitionFa: string;
  category: WordCategory;
  categoryFa: string;
  bookId: string;
  quoteOrContext: string;
  quoteTranslation: string;
  historicalSignificance: string;
  collocations: string[];
  collocationsList?: CollocationItem[];
  relatedTerms: string[];
  isCustom?: boolean;
}

export type ReviewGrade = 'again' | 'hard' | 'good' | 'easy';
export type StudyDirection = 'en-to-fa' | 'fa-to-en';

export interface StudyRecord {
  wordId: string;
  state: 'new' | 'learning' | 'review' | 'mastered';
  repetitions: number;
  intervalDays: number;
  easeFactor: number;
  nextReviewDate: string; // ISO date string
  lastReviewedDate: string | null;
  bookmarked: boolean;
}

export interface UserSettings {
  soundEnabled: boolean;
  accent: 'en-GB' | 'en-US';
  dailyGoal: number;
  theme: 'dark' | 'light' | 'system';
  direction: StudyDirection;
}

export interface UserStats {
  streakDays: number;
  lastActiveDate: string;
  totalReviewed: number;
  todayReviewed: number;
}

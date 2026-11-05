import { ReviewGrade, StudyRecord, UserSettings, UserStats, WordEntry } from '../types';
import { INITIAL_WORDS } from '../data/words';

const STORAGE_KEY_RECORDS = 'historilex:records';
const STORAGE_KEY_SETTINGS = 'historilex:settings';
const STORAGE_KEY_STATS = 'historilex:stats';
const STORAGE_KEY_CUSTOM = 'historilex:custom_words';

const DEFAULT_SETTINGS: UserSettings = {
  soundEnabled: true,
  accent: 'en-GB',
  dailyGoal: 10,
  theme: 'dark',
  direction: 'en-to-fa'
};

const DEFAULT_STATS: UserStats = {
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  totalReviewed: 0,
  todayReviewed: 0
};

export class StorageService {
  static getRecords(): Record<string, StudyRecord> {
    try {
      const data = localStorage.getItem(STORAGE_KEY_RECORDS);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  static saveRecords(records: Record<string, StudyRecord>) {
    localStorage.setItem(STORAGE_KEY_RECORDS, JSON.stringify(records));
  }

  static getCustomWords(): WordEntry[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY_CUSTOM);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  static addCustomWord(word: WordEntry) {
    const list = this.getCustomWords();
    list.unshift(word);
    localStorage.setItem(STORAGE_KEY_CUSTOM, JSON.stringify(list));
  }

  static getAllWords(): WordEntry[] {
    const custom = this.getCustomWords();
    return [...custom, ...INITIAL_WORDS];
  }

  static getRecordForWord(wordId: string): StudyRecord {
    const records = this.getRecords();
    if (records[wordId]) return records[wordId];

    return {
      wordId,
      state: 'new',
      repetitions: 0,
      intervalDays: 0,
      easeFactor: 2.5,
      nextReviewDate: new Date().toISOString(),
      lastReviewedDate: null,
      bookmarked: false
    };
  }

  static toggleBookmark(wordId: string): boolean {
    const records = this.getRecords();
    const record = records[wordId] || this.getRecordForWord(wordId);
    record.bookmarked = !record.bookmarked;
    records[wordId] = record;
    this.saveRecords(records);
    return record.bookmarked;
  }

  // FSRS-inspired spaced repetition scheduler
  static reviewWord(wordId: string, grade: ReviewGrade): StudyRecord {
    const records = this.getRecords();
    const current = records[wordId] || this.getRecordForWord(wordId);

    let nextInterval = 1;
    let nextEase = current.easeFactor;
    let nextState = current.state;

    switch (grade) {
      case 'again':
        nextInterval = 1;
        nextEase = Math.max(1.3, current.easeFactor - 0.2);
        nextState = 'learning';
        break;
      case 'hard':
        nextInterval = Math.max(1, Math.round((current.intervalDays || 1) * 1.2));
        nextEase = Math.max(1.3, current.easeFactor - 0.15);
        nextState = current.repetitions > 1 ? 'review' : 'learning';
        break;
      case 'good':
        if (current.repetitions === 0) {
          nextInterval = 1;
        } else if (current.repetitions === 1) {
          nextInterval = 3;
        } else {
          nextInterval = Math.round(current.intervalDays * current.easeFactor);
        }
        nextState = nextInterval > 14 ? 'mastered' : 'review';
        break;
      case 'easy':
        if (current.repetitions === 0) {
          nextInterval = 3;
        } else {
          nextInterval = Math.round((current.intervalDays || 1) * current.easeFactor * 1.4);
        }
        nextEase = current.easeFactor + 0.15;
        nextState = nextInterval > 10 ? 'mastered' : 'review';
        break;
    }

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + nextInterval);

    const updated: StudyRecord = {
      ...current,
      state: nextState,
      repetitions: grade === 'again' ? 0 : current.repetitions + 1,
      intervalDays: nextInterval,
      easeFactor: Number(nextEase.toFixed(2)),
      nextReviewDate: nextDate.toISOString(),
      lastReviewedDate: new Date().toISOString()
    };

    records[wordId] = updated;
    this.saveRecords(records);
    this.incrementReviewStats();

    return updated;
  }

  static getStats(): UserStats {
    try {
      const data = localStorage.getItem(STORAGE_KEY_STATS);
      const stats: UserStats = data ? JSON.parse(data) : { ...DEFAULT_STATS };
      const today = new Date().toISOString().split('T')[0];

      // reset today counter if on a new day
      if (stats.lastActiveDate !== today) {
        const lastDate = new Date(stats.lastActiveDate);
        const diffDays = Math.round((new Date(today).getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
        if (diffDays === 1) {
          stats.streakDays += 1;
        } else if (diffDays > 1) {
          stats.streakDays = 1;
        }
        stats.todayReviewed = 0;
        stats.lastActiveDate = today;
        localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
      }

      return stats;
    } catch {
      return { ...DEFAULT_STATS };
    }
  }

  static incrementReviewStats() {
    const stats = this.getStats();
    stats.totalReviewed += 1;
    stats.todayReviewed += 1;
    localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
  }

  static getSettings(): UserSettings {
    try {
      const data = localStorage.getItem(STORAGE_KEY_SETTINGS);
      return data ? JSON.parse(data) : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  }

  static saveSettings(settings: UserSettings) {
    localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(settings));
  }
}

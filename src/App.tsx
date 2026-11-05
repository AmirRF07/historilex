import { useState } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { TodayReview } from './components/TodayReview';
import { AtlasList } from './components/AtlasList';
import { PracticeQuiz } from './components/PracticeQuiz';
import { BooksLibrary } from './components/BooksLibrary';
import { StatsView } from './components/StatsView';
import { WordDetailModal } from './components/WordDetailModal';
import { AddWordModal } from './components/AddWordModal';
import { WordEntry } from './types';
import { StorageService } from './services/storage';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('today');
  const [selectedWord, setSelectedWord] = useState<WordEntry | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [filterBook, setFilterBook] = useState<string>('all');

  const stats = StorageService.getStats();

  const handleSelectWord = (word: WordEntry) => {
    setSelectedWord(word);
  };

  const handleToggleBookmark = (wordId: string) => {
    StorageService.toggleBookmark(wordId);
    setRefreshTrigger(prev => prev + 1);
  };

  const handleFilterByBook = (bookId: string) => {
    setFilterBook(bookId);
    setActiveTab('atlas');
  };

  const handleSelectRelated = (termName: string) => {
    const allWords = StorageService.getAllWords();
    const found = allWords.find(w => w.term.toLowerCase().includes(termName.toLowerCase()));
    if (found) {
      setSelectedWord(found);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30">
      {/* Navigation Header & Mobile Bottom Bar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        streak={stats.streakDays}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto pb-20 md:pb-8 pt-2">
        {activeTab === 'today' && (
          <TodayReview onSelectWord={handleSelectWord} />
        )}

        {activeTab === 'atlas' && (
          <AtlasList
            key={`${filterBook}_${refreshTrigger}`}
            initialBook={filterBook}
            onSelectWord={handleSelectWord}
            onOpenAddModal={() => setIsAddModalOpen(true)}
          />
        )}

        {activeTab === 'practice' && (
          <PracticeQuiz />
        )}

        {activeTab === 'books' && (
          <BooksLibrary onFilterByBook={handleFilterByBook} />
        )}

        {activeTab === 'stats' && (
          <StatsView />
        )}
      </main>

      {/* Word Detail Modal */}
      {selectedWord && (
        <WordDetailModal
          word={selectedWord}
          record={StorageService.getRecordForWord(selectedWord.id)}
          onClose={() => setSelectedWord(null)}
          onToggleBookmark={handleToggleBookmark}
          onSelectRelated={handleSelectRelated}
        />
      )}

      {/* Add Custom Word Modal */}
      <AddWordModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdded={() => setRefreshTrigger(prev => prev + 1)}
      />
    </div>
  );
}

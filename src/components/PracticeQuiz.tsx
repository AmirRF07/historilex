import React, { useState, useEffect } from 'react';
import { Award, Check, X, Volume2, ArrowLeft } from 'lucide-react';
import { WordEntry } from '../types';
import { StorageService } from '../services/storage';
import { SpeechService } from '../services/speech';

interface Question {
  word: WordEntry;
  type: 'en-to-fa' | 'fa-to-en';
  prompt: string;
  correctAnswer: string;
  options: string[];
}

export const PracticeQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);

  useEffect(() => {
    generateNewQuestion();
  }, []);

  const generateNewQuestion = () => {
    const allWords = StorageService.getAllWords();
    if (allWords.length < 4) return;

    // Pick random target word
    const target = allWords[Math.floor(Math.random() * allWords.length)];
    const isEnToFa = Math.random() > 0.4;

    // Pick 3 random distractor words
    const distractors = allWords
      .filter(w => w.id !== target.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    let prompt = '';
    let correctAnswer = '';
    let options: string[] = [];

    if (isEnToFa) {
      prompt = target.term;
      correctAnswer = target.persianMeaning;
      options = [correctAnswer, ...distractors.map(d => d.persianMeaning)].sort(() => 0.5 - Math.random());
    } else {
      prompt = target.academicDefinitionFa;
      correctAnswer = target.term;
      options = [correctAnswer, ...distractors.map(d => d.term)].sort(() => 0.5 - Math.random());
    }

    setCurrentQuestion({
      word: target,
      type: isEnToFa ? 'en-to-fa' : 'fa-to-en',
      prompt,
      correctAnswer,
      options
    });
    setSelectedOption(null);
  };

  const handleSelectOption = (opt: string) => {
    if (selectedOption !== null || !currentQuestion) return;

    setSelectedOption(opt);
    setTotalAttempts(prev => prev + 1);

    if (opt === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
      // Give positive reinforcement in FSRS storage
      StorageService.reviewWord(currentQuestion.word.id, 'good');
    } else {
      StorageService.reviewWord(currentQuestion.word.id, 'again');
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="max-w-xl mx-auto px-4 py-4 flex flex-col gap-5">
      {/* Quiz Stats Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-900 border border-slate-800 p-3 rounded-2xl">
        <div className="flex items-center gap-1.5 font-bold text-amber-400">
          <Award size={16} />
          <span>آزمون اصطلاح‌شناسی تاریخ</span>
        </div>
        <div className="flex items-center gap-2">
          <span>امتیاز: {score} از {totalAttempts}</span>
          {totalAttempts > 0 && (
            <span className="font-mono text-amber-300 bg-slate-800 px-2 py-0.5 rounded">
              {Math.round((score / totalAttempts) * 100)}%
            </span>
          )}
        </div>
      </div>

      {/* Question Card */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col gap-6 shadow-xl text-right">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-xs text-amber-400 font-semibold">
            {currentQuestion.type === 'en-to-fa' ? 'معنای فارسی اصطلاح زیر کدام است؟' : 'این مفهوم بیانگر کدام اصطلاح تخصصی است؟'}
          </span>

          {currentQuestion.type === 'en-to-fa' && (
            <button
              onClick={() => SpeechService.speak(currentQuestion.word.term)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 bg-slate-800"
              title="تلفظ صوتی"
            >
              <Volume2 size={16} />
            </button>
          )}
        </div>

        {/* Prompt */}
        <div className={`${currentQuestion.type === 'en-to-fa' ? 'text-left font-serif' : 'text-right'} py-3`}>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 leading-relaxed">
            {currentQuestion.prompt}
          </h2>
          {currentQuestion.type === 'en-to-fa' && (
            <span className="text-xs font-mono text-slate-400 dir-ltr inline-block mt-1">
              {currentQuestion.word.ipa}
            </span>
          )}
        </div>

        {/* Options */}
        <div className="flex flex-col gap-2.5">
          {currentQuestion.options.map((opt, idx) => {
            const isSelected = selectedOption === opt;
            const isCorrect = opt === currentQuestion.correctAnswer;
            const hasAnswered = selectedOption !== null;

            let btnStyle = 'border-slate-800 bg-slate-950/60 text-slate-200 hover:border-amber-500/40 hover:bg-slate-800';

            if (hasAnswered) {
              if (isCorrect) {
                btnStyle = 'border-emerald-500/80 bg-emerald-500/20 text-emerald-200 font-bold';
              } else if (isSelected) {
                btnStyle = 'border-rose-500/80 bg-rose-500/20 text-rose-200 line-through';
              } else {
                btnStyle = 'opacity-40 border-slate-800 bg-slate-950';
              }
            }

            return (
              <button
                key={idx}
                disabled={hasAnswered}
                onClick={() => handleSelectOption(opt)}
                className={`w-full p-4 rounded-2xl border text-sm transition text-right flex items-center justify-between ${btnStyle}`}
              >
                <span className={currentQuestion.type === 'fa-to-en' ? 'font-serif font-bold text-left dir-ltr' : ''}>
                  {opt}
                </span>

                {hasAnswered && isCorrect && <Check size={18} className="text-emerald-400 shrink-0" />}
                {hasAnswered && isSelected && !isCorrect && <X size={18} className="text-rose-400 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Next Question Button */}
        {selectedOption !== null && (
          <div className="flex justify-end pt-2">
            <button
              onClick={generateNewQuestion}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20"
            >
              <span>سوال بعدی</span>
              <ArrowLeft size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

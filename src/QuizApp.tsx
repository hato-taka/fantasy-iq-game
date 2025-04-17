import { useEffect, useState } from 'react';
import QuizImage from './components/QuizImage';
import AnswerInput from './components/AnswerInput';
import ResultModal from './components/ResultModal';

const QuizApp = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number | null>(null);
  const [iq, setIQ] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  // クイズ開始時に時間を記録
  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const calculateIQ = (seconds: number): number => {
    const min = 100;
    const max = 180;
    const k = 0.01155; // 平均120秒でIQ120になるよう調整
    const iq = min + (max - min) * Math.exp(-k * seconds);
    return Math.round(iq);
  };


  const handleCorrect = () => {
    const now = Date.now();
    const seconds = Math.floor((now - (startTime ?? now)) / 1000);
    const resultIQ = calculateIQ(seconds);
    setElapsedTime(seconds);
    setIQ(resultIQ);
    setShowModal(true);
  };

  const handleIncorrect = () => {
    // 現時点では何もせず。ログ出力なども可能
    console.log('不正解でした');
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-4 text-rose-600">
        練習問題
      </h1>

      <QuizImage />

      <AnswerInput
        onCorrect={handleCorrect}
        onIncorrect={handleIncorrect}
      />

      {showModal && elapsedTime !== null && iq !== null && (
        <ResultModal
          time={elapsedTime}
          iq={iq}
          onClose={() => setShowModal(false)}
        />
      )}
    </main>
  );
};

export default QuizApp;

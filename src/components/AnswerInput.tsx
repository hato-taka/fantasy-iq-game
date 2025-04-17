import { useState } from 'react';

interface Props {
  onCorrect: () => void;
  onIncorrect: () => void;
}

const AnswerInput = ({ onCorrect, onIncorrect }: Props) => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const normalize = (str: string) => str.replace(/\s/g, '').toLowerCase();
    if (normalize(answer) === normalize('爆弾解除')) {
      setError('');
      onCorrect();
    } else {
      setError('不正解です');
      onIncorrect();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        className="p-3 border-2 border-rose-400 rounded-lg w-full text-lg"
        placeholder="答えを入力してね"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      {error && <p className="text-red-600 mt-2 font-bold">{error}</p>}
      <button
        className="mt-4 w-full py-3 bg-rose-500 text-white font-bold rounded-lg hover:bg-rose-600 transition"
        onClick={handleSubmit}
      >
        回答する！
      </button>
    </div>
  );
};

export default AnswerInput;

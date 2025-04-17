interface Props {
    time: number;
    iq: number;
    onClose: () => void;
  }
  
  const ResultModal = ({ time, iq, onClose }: Props) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-xl w-11/12 max-w-sm text-center">
          <h2 className="text-2xl font-bold mb-4 text-rose-600">正解！</h2>
          <p className="text-lg mb-2">
            かかった時間：<span className="font-bold">{time}</span> 秒
          </p>
          <p className="text-lg mb-4">
            あなたのIQ：<span className="font-bold">{iq}</span>
          </p>
          <button
            onClick={onClose}
            className="mt-2 px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition"
          >
            閉じる
          </button>
        </div>
      </div>
    );
  };
  
  export default ResultModal;
  
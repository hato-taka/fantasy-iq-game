import quiz1 from "../assets/quiz1.png";
import quiz1Title from "../assets/quiz1-title.png";
import quiz2 from "../assets/quiz2.png";
import quiz2Title from "../assets/quiz2-title.png";
import quiz3 from "../assets/quiz3.png";

const QuizImage = () => (
  <div>
    <img
      src={quiz1}
      alt="謎1"
      className="w-full max-w-xs rounded-xl shadow-lg mb-6 mx-auto"
    />
    <img
      src={quiz1Title}
      alt="謎2"
      className="w-full max-w-xs rounded-xl shadow-lg mb-6 mx-auto"
    />
    <img
      src={quiz2}
      alt="謎3"
      className="w-full max-w-xs rounded-xl shadow-lg mb-6 mx-auto"
    />
    <img
      src={quiz2Title}
      alt="謎4"
      className="w-full max-w-xs rounded-xl shadow-lg mb-6 mx-auto"
    />
    <img
      src={quiz3}
      alt="謎5"
      className="w-full max-w-xs rounded-xl shadow-lg mb-6 mx-auto"
    />
  </div>
);

export default QuizImage;

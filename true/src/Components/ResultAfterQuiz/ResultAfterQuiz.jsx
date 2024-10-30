import React from "react";
import "./ResultAfterQuiz.css";

const ResultAfterQuiz = ({
  correctAnswersCount,
  totalQuestions,
  restartQuiz,
}) => {
  return (
    <div className="result-after-quiz-container">
      <div className="result-after-quiz-block">
        <div className="result-after-quiz-image-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJF44XSBdvp2owaTQZpsymxu7Zlv_xqebsQ&s"
            className="result-after-quiz-image"
            alt="Result After Quiz Image"
          />
        </div>

        <h2 className="result-after-quiz-message">
          Вы отгадали {correctAnswersCount} из {totalQuestions} ответов
        </h2>
        <button onClick={restartQuiz} className="result-after-quiz-button">
          Попробовать снова
        </button>
      </div>
    </div>
  );
};

export default ResultAfterQuiz;

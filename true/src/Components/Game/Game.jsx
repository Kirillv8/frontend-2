import React from "react";
import "./Game.css";

const Game = ({
  currentQuestion,
  setCurrentQuestionIndex,
  onCorrectAnswer,
  questionsLength,
  showFinalResult,
}) => {
  const variants = currentQuestion.variants || [];

  const list = variants.map((variant, index) => {
    return (
      <li key={`variant${index}`} className="quiz-item">
        <span className="question">{variant}</span>
        <button
          onClick={() => {
            setCurrentQuestionIndex(
              (prevIndex) => (prevIndex + 1) % questionsLength
            );
            onCorrectAnswer(currentQuestion.correct === index);
          }}
          className="app-button"
        >
          Ответить
        </button>
      </li>
    );
  });

  return (
    <div className="container-quiz">
      <h1>{currentQuestion.title}</h1>
      <ul className="quiz-list">{list}</ul>
      <div className="progressbar-container">
        <div className="progressbar">
          {/* <span
            style={{
              width: `${(
                ( / questionsLength) *
                100
              ).toFixed(0)}%`,
            }}
          ></span> */}
        </div>
      </div>
      <button
        onClick={showFinalResult}
        disabled={currentQuestion >= questionsLength - 1}
      >
        Закончить тест
      </button>
    </div>
  );
};

export default Game;

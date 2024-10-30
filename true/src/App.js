import React, { useState } from "react";
import Game from "./Components/Game/Game";
import ResultAfterQuiz from "./Components/ResultAfterQuiz/ResultAfterQuiz";
import { questions } from "./data/data";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showGame, setShowGame] = useState(true);

  const handleClick = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
  };

  const showFinalResult = () => {
    setShowResult(true);
    setShowGame(false);
  };

  const restartQuiz = () => {
    setShowResult(false);
    setShowGame(true);
    setCurrentQuestionIndex(0);
    setCorrectAnswersCount(0);
  };

  return (
    <div className="container">
      {showGame && (
        <>
          <Game
            currentQuestion={questions[currentQuestionIndex]}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            onCorrectAnswer={handleCorrectAnswer}
            questionsLength={questions.length}
            showFinalResult={showFinalResult}
          />
        </>
      )}
      {showResult && (
        <ResultAfterQuiz
          correctAnswersCount={correctAnswersCount}
          totalQuestions={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;

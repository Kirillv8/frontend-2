import React from "react";
import { useState } from "react";
import ButtonDecrease from "../Button/Button-decrease";
import ButtonIncrease from "../Button/Button-increase";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Счетчик:</h1>
      <p>{count}</p>
      <div className="container-button">
        <ButtonDecrease decreaseCounter={decreaseCounter} />
        <ButtonIncrease increaseCounter={increaseCounter} />
      </div>
    </div>
  );
}

export default App;

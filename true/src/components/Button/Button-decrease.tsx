import React from "react";
import "./Button.css";

type DecreaseCounterProps = {
  decreaseCounter: () => void;
};

const ButtonDecrease: React.FC<DecreaseCounterProps> = ({
  decreaseCounter,
}) => {
  return (
    <>
      <button
        className="glow-on-hover"
        onClick={() => {
          decreaseCounter();
        }}
      >
        <span>- Минус</span>
      </button>
    </>
  );
};
export default ButtonDecrease;

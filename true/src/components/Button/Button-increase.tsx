import React from "react";
import "./Button.css";

type IncreaseCounterProps = {
  increaseCounter: () => void;
};

const ButtonIncrease: React.FC<IncreaseCounterProps> = ({
  increaseCounter,
}) => {
  return (
    <>
      <button className="glow-on-hover" onClick={increaseCounter}>
        <span>Плюс +</span>
      </button>
    </>
  );
};

export default ButtonIncrease;

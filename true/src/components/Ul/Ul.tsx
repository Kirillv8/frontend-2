import React from "react";
import Value from "../../types/type";

interface UlProps extends Value {}

const Ul: React.FC<UlProps> = ({ value }) => {

  const [...rest] = value;

  return (
    <>
      <ul>
        {rest.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </>
  );
};

export default Ul;

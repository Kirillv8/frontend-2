import React from "react";
import Value from "../../types/type";
import "./Ul.css";

interface UlProps {
  todo: string[];
}

const Ul: React.FC<UlProps> = ({ todo }) => {
  return (
    <div className="container-ul">
      <ul>
        {todo.map((element, index) => (
          <li key={index}>
            <span>{element}</span>
            <button className="image-btn"></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ul;

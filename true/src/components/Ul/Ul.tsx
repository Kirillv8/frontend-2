import React from "react";
import Value from "../../types/type";
import "./Ul.css";

interface UlProps {
  todo: { id: number; value: string }[];
  deleteItem: (itemId: number) => void;
}

const Ul: React.FC<UlProps> = ({ todo, deleteItem }) => {
  return (
    <div className="container-ul">
      <ul>
        {todo.map((element) => (
          <li
            key={element.id}
            onClick={() => {
              deleteItem(element.id);
            }}
          >
            <span>{element.value}</span>
            <button className="image-btn"></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ul;

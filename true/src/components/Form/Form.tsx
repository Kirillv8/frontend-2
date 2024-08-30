import React, { useState } from "react";
import Ul from "../Ul/Ul";
import "./Form.css";

const Form = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState<string[]>([]);

  const showTask = (todo: any): void => {
    setTodo([...todo, value, { id: Date.now() }]);
  };

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();

    if (todo) {
      console.log(todo);
      showTask(todo);
    } else {
      alert("Добавьте задачу!");
    }

    setValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log("событие работает");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Введите текст"
          value={value}
          onChange={handleChange}
          className="input"
        />
      </form>
      <Ul todo={todo} />
    </>
  );
};

export default Form;

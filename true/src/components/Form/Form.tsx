import React, { useState } from "react";
import Ul from "../Ul/Ul";

const Form = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([value]);

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    setValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log("событие работает");
  };

  const showTask = (value: any): void => {
    setTodo(todo);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="введите текст"
          value={value}
          onChange={handleChange}
        />
      </form>
      <Ul value={value} />
    </>
  );
};

export default Form;

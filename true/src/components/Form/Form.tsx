import React, { useState } from "react";
import Ul from "../Ul/Ul";
import "./Form.css";

const Form = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState<{ id: number; value: string }[]>([]);

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    if (value.trim()) {
      setTodo([...todo, { id: Date.now(), value }]);
      setValue("");
    } else {
      alert("Добавьте задачу!");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log("событие работает");
  };

  const deleteItem = (itemId: number) => {
    setTodo(
      todo.filter((item) => {
        return item.id !== item.id;
      })
    );
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
      <Ul todo={todo} deleteItem={deleteItem} />
    </>
  );
};

export default Form;

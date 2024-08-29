import React, { useState } from "react";
import Form from "../Form/Form";

function App() {
  // const [todo, setTodo] = useState([]);

  // const showTask = (): void => {
  //   setTodo(todo);
  // };

  return (
    <div className="wrapper">
      <h1 className="paragraph">To-do list</h1>
      <Form />
      {/* <ul>
        {todo.map((element, item) => {
          return <li key={item}>{element}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default App;

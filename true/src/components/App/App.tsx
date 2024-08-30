import React, { useState } from "react";
import Form from "../Form/Form";
import "./App.css";
function App() {
  // const [todo, setTodo] = useState([]);

  // const showTask = (): void => {
  //   setTodo(todo);
  // };

  return (
    <>
      {/* <div className="container-app"> */}
      <div className="container-paragraph">
        <h1>To-do list</h1>
      </div>
      <div className="container-form">
        <Form />
      </div>
      {/* </div> */}
      {/* <ul>
        {todo.map((element, item) => {
          return <li key={item}>{element}</li>;
        })}
      </ul> */}
    </>
  );
}

export default App;

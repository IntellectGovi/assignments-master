import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  function addtodos() {
    if (title && description) {
      setTodos([...todos, { title, description }]);
      // setTitle('');
      // setDescription('');
    }
  }

  return (
    <>
      <input
        onChange={(e) => setTitle(e.target.value)}
        placeholder="enter the title"
      ></input>
      <input
        onChange={(e) => setDescription(e.target.value)}
        placeholder="enter the Description"
      ></input>
      <button onClick={addtodos}>Add todos</button>

      <div className="todoboxes">
        {todos.map((todo) => {
          return <div>
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
            </div>
        })}
      </div>
    </>
  );
}

function Todos({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default App;

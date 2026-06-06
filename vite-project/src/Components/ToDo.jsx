import "./style.css";
import { useState } from "react";

const ToDo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  function handleSubmit() {
    if (input.trim()) {
      setTodo((prevTodo) =>
        prevTodo.concat({
          text: input,
          id: Math.floor(Math.random() * 1000), // safer range
        })
      );
      setInput("");
    }
  }

  function removeTodo(id) {
    setTodo((prevTodo) => prevTodo.filter((t) => t.id !== id));
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="ADD TASK"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>ADD TO LIST!</button>
      <ul className="TodoList">
        {todo.map((t) => (
          <li key={t.id}>
            <span>{t.text}</span>
            <button className="close" onClick={() => removeTodo(t.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;

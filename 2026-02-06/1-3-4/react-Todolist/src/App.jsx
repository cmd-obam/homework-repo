import { useState } from "react";
import TodoList from "./components/Todolist";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleRemove = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleAdd = () => {
    const text = input.trim();
    if (!text) return;

    setTodos((prev) => [...prev, { id: Date.now(), text }]);
    setInput("");
  };

  return (
    <div
      style={{
        width: "300px",
        padding: "10px",
        backgroundColor: "rgba(59, 60, 83, 1)",
        border: "1px solid black",
      }}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="내용을 입력해주세요"
        style={{
          backgroundColor: "gray",
          color: "white",
        }}
      />

      <button
        onClick={handleAdd}
        style={{
          marginLeft: "10px",
          backgroundColor: " rgba(59, 60, 83, 1)",
          color: "white",
        }}
      >
        추가
      </button>

      <TodoList todos={todos} onRemove={handleRemove} />
    </div>
  );
}

export default App;

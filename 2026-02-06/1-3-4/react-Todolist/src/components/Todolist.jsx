import { useState } from "react";

function TodoList({ todos, onRemove }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
      }}
    >
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "8px",
            padding: "8px 12px",
            border: "2px solid #6c6f8a",
            borderRadius: "6px",
          }}
        >
          <span
            style={{
              color: "#ffd369",
              fontWeight: "600",
            }}
          >
            {todo.text}
          </span>

          <button
            onClick={() => onRemove(todo.id)}
            style={{
              width: "60px",
              height: "25px",
              marginLeft: "10px",
              border: "2px solid black",
              backgroundColor: "rgba(59, 60, 83, 1)",
              color: "white",
              cursor: "pointer",
            }}
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

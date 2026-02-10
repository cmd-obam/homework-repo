import { useState } from "react";
import useCounter from "../Hooks/useCounter";

function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        border: "3px solid black",
        width: "100px",
        margin: "0 auto",
        backgroundColor: "pink",
      }}
    >
      <h1>{count}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: "2px",
        }}
      >
        <button
          onClick={increment}
          style={{
            border: "none",
            backgroundColor: "yellow",
            border: "1px solid black",
          }}
        >
          +
        </button>
        <button
          onClick={decrement}
          style={{
            border: "none",
            backgroundColor: "yellow",
            border: "1px solid black",
          }}
        >
          -
        </button>
        <button
          onClick={reset}
          style={{
            border: "none",
            backgroundColor: "red",
            border: "1px solid black",
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

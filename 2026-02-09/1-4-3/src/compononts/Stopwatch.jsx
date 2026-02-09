import { useState, useRef } from "react";

function Stopwatch() {
  const [ticks, setTicks] = useState(0);
  const intervalRef = useRef(null);

  const handleReset = () => {
    setTicks(0);
  };

  const handleStart = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTicks((prev) => prev + 10);
    }, 10);
  };

  const handleStop = () => {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const formatTime = (ms) => {
    const cs = Math.floor(ms / 10) % 100;
    const totalSec = Math.floor(ms / 1000);
    const sec = totalSec % 60;
    const min = Math.floor(totalSec / 60);

    const pad2 = (n) => String(n).padStart(2, "0");
    return `${pad2(min)}:${pad2(sec)}:${pad2(cs)}`;
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        border: "3px solid black",
        textAlign: "center",
      }}
    >
      <h1>{formatTime(ticks)}</h1>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;

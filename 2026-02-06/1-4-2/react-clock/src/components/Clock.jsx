import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning]);

  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl mb-4">{time}</h1>
      <button
        onClick={() => setIsRunning((p) => !p)}
        className="px-4 py-2 bg-blue-500 rounded"
      >
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default Clock;

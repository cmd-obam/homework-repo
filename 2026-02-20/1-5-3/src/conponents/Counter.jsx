import { useCounterStore } from "../stores/useCounterStore";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

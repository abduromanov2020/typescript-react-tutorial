import { ChangeEvent, ReactNode, useReducer } from "react";
import "./App.css";
import { useCounter, useCounterText } from "./context/CounterContext";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

function Counter({ children }: ChildrenType) {
  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = useCounterText();

  return (
    <>
      <h1>{children(count)}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <div>
        <input onChange={handleTextInput} type="text" />
        <h2>{text}</h2>
      </div>
    </>
  );
}

export default Counter;

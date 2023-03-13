import "./App.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface User {
  id: number;
  username: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  type fibFunc = (n: number) => number;

  const fib: fibFunc = (n) => {
    if (n < 2) return n;
    return fib(n - 1) + (n - 2);
  };

  const myNum: number = 37;

  useEffect(() => {
    console.log("mounting...");
    console.log("users : ", users);

    return () => console.log("unmounting...");
  }, [users]);

  const addTwo = useCallback((): void => setCount((prev) => prev + 1), []);

  const result = useMemo(() => fib(myNum), [myNum]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Click Me</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default App;

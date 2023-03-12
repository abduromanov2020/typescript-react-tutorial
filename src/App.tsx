import Heading from "./components/Heading";
import Section from "./components/Section";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <Heading title="Hello" />
      <Section>This is MySection</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
    </>
  );
}

export default App;

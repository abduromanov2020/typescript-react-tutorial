import Heading from "./components/Heading";
import Section from "./components/Section";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <Heading title="Hello" />
      <Section>This is MySection</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["Coffee", "Tacos", "Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";

// State in React -
//?[https://hygraph.com/blog/usestate-react]
// Whenever an interaction happens, react components often need to change and show the latest data after an interaction.
// Why? if we have variable
// The value of a local variable does not persist across renders, meaning that on every re-render count will be re-initialized to 0.

// The useState() hook:
// The useState hook Allows us to combine functional components with stateful logic.
// Instead of using a class, we can create a functional component instead, and call the useState method anywhere that we want to declare some state (and associated handlers). Let’s refactor our counter, using this new syntax.

function App() {
  // counterValue = variable
  // setCounterValue = setCounterValue
  // const setCounterValue: React.Dispatch<React.SetStateAction<number>>
  const [counterValue, setCounterValue] = useState(0);

  // increment button
  const incrementButtonClick = () => {
    setCounterValue(counterValue + 1);
  };

  // decrement button
  const decrementButtonClick = () => {
    setCounterValue(counterValue - 1);
  };

  // any side-efforts can be happend
  useEffect(() => {
    console.log("useEffect called!");
  }, [counterValue]);

  return (
    <div>
      <div className="counter-app">
        <h1>Counter App :: </h1>
        <p> Counter : {counterValue < 0 ? 0 : counterValue}</p>
        <button onClick={incrementButtonClick}>increment button</button>
        <button onClick={decrementButtonClick}>decrement button</button>
      </div>
    </div>
  );
}

export default App;

// let counter = 1;
// ternimal update the counter, but not into UI
// function addCounterByOne() {
//   counter = counter + 1;
//   console.log(counter);
// }
//   <div className="not-work">
//   <h1>counter : {counter}</h1>
//   <button onClick={addCounterByOne}> add one</button>
// </div>

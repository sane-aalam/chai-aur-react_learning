import { useState } from "react";
import "./App.css";

function App() {
  // current-counter_value = 15
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    //counter = counter + 1
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    // increment by 4
    console.log(counter);
  };

  // function to remove the counter by 1.
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;

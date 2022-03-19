import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handle = (value) => {
    setCounter(counter + value);
    if (counter <= 0) {
      stop();
    }
  };
  const double = (value) => {
    setCounter(counter * value);
  };

  return (
    <div className="main">
      <p>Counter : {counter}</p>
      <button onClick={() => handle(1)}>Increment</button>
      <button onClick={() => handle(-1)}>Decrement</button>
      <button
        onClick={() => {
          double(2);
        }}
      >
        Double
      </button>
    </div>
  );
}

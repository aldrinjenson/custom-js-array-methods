import React, { useState } from "react";

const Counter = () => {
  const [counterVal, setCounterVal] = useState(0);
  return (
    <div>
      <h1 data-testid='counterVal'> {counterVal}</h1>
      <button
        data-testid='inc-button'
        onClick={() => setCounterVal(counterVal + 1)}
      >
        Increment
      </button>
      <button
        data-testid='dec-button'
        onClick={() => setCounterVal(counterVal - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;

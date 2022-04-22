import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Arttır</button>
      <button onClick={() => setCounter(counter - 1)}>Eksilt</button>
    </div>
  );
}

export default Counter;

import React, { useState } from 'react';

export const StateComponent = () => {

  const [count, setCount] = useState(10);

  return (
    <div>
      <h2>useState</h2>
      <p>Value: {count}</p>
      <button onClick={e => setCount((currentValue) => currentValue + 1)}>Count !</button>
    </div>
  )
}
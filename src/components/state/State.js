import React, { useState } from 'react';

export const StateComponent = () => {

  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });

  return (
    <div>
      <h2>useState</h2>
      <p>Count 1: {count}</p>
      <p>Count 2: {count2}</p>
      <button onClick={e => setCount((currentState) => Object.assign({}, currentState, { count: count + 1 }))}>Count !</button>
    </div>
  )
}
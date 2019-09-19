import React, { useState, useCallback, useEffect } from 'react';
import { Button } from './Button';
import { Square } from './Square';

export const CallbackComponent = () => {

  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];

  const increment = useCallback(n => {
    setCount(c => c + n);
  }, [setCount])

  return (
    <div>
      <h2>useCallback</h2>
      <p>Count: {count}</p>
      <Button increment={increment} />
      <p>Favorite Numbers:</p>
      {
        favoriteNums.map(num => (
          <Square increment={increment} n={num} key={num} />
        ))
      }
    </div>
  )
}
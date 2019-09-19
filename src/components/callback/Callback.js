import React, { useState, useCallback } from 'react';
import { Button } from './Button';

export const CallbackComponent = () => {

  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount])

  return (
    <div>
      <h2>useCallback</h2>
      <p>Count: {count}</p>
      <Button increment={increment} />
    </div>
  )
}
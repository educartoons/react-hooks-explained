import React, { useState } from 'react';
import { Button } from './Button';

export const CallbackComponent = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Callback</h2>
      <p>Count: {count}</p>
      <Button increment={() => setCount(count + 1)} />
    </div>
  )
}
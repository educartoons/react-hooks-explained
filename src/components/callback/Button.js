import React, { memo } from 'react';
import { countRenders } from './countRenders';

export const Button = memo(({ increment }) => {

  //countRenders();
  return <button onClick={() => increment(5)}>Count ! </button>

})
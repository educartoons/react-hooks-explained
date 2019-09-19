import React, { memo } from 'react';
import { countRenders } from './countRenders';

export const Square = memo(({ n, increment }) => {
  countRenders();
  return <button onClick={() => increment(n)}>{n}</button>

})
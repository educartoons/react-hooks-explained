import React, { useState } from 'react';
import { useInput } from './useInput';

export const StateComponent = () => {

  const [values, handleChange] = useInput({ email: '', password: '' })

  return (
    <div>
      <h2>useState</h2>
      <input name="email" type="text" value={values.email} onChange={handleChange} /> <br /> <br />
      <input name="password" type="password" value={values.password} onChange={handleChange} />
    </div>
  )
}
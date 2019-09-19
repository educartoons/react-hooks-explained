import React, { useState } from 'react';

export const StateComponent = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h2>useState</h2>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} /> <br /> <br />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
  )
}
import React from 'react';
import { render } from 'react-dom';
import { CallbackComponent } from './components/callback/Callback';


const App = () => {
  return (
    <div>
      <h1>React Hooks</h1>
      <CallbackComponent />
    </div>
  )
}

render(<App />, document.getElementById('root'));
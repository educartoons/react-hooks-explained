import React from 'react';
import { render } from 'react-dom';
import { CallbackComponent } from './components/callback/Callback';
import { StateComponent } from './components/state/State';


const App = () => {
  return (
    <div>
      <h1>React Hooks</h1>
      {/* <CallbackComponent /> */}
      <StateComponent />
    </div>
  )
}

render(<App />, document.getElementById('root'));
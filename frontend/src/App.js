import React, { useState } from 'react';

import Header from './Header'

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>
        Semana OmniStack 11<br />
        contador: {counter}
      </Header>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;

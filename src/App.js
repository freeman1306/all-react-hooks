import React, { useState } from 'react';
import './App.css';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const clear = () => setValue('');

  return {
    bind: { value, onChange },
    value,
    clear,
  };
}

function App() {
  const input = useInput('');

  return (
    <div className="container">
      <input type="text" {...input.bind} />
      <button className="btn btn-warning" onClick={input.clear}>
        Clean
      </button>

      <h1>{input.value}</h1>
    </div>
  );
}

export default App;

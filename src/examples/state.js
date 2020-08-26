import React, {useState} from 'react';
import './App.css';


function computeInitialCounter() {
  return Math.trunc(Math.random() * 20)
}

function App() {
  const [counter, setCounter] = useState(computeInitialCounter())
  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  })
  
  function increment() {
    setCounter(counter +1)
  }

  function decrement() {
    setCounter(counter -1)
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'A New name'
      }
    })
  }
  return (
    <div>
      <h1>Счетчик {counter}</h1>
      <button onClick={increment} className="btn btn-success">Add</button>
      <button onClick={decrement} className="btn btn-danger">Delete</button>
      <button onClick={updateTitle} className="btn btn-default">Change the name</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
   </div>
  );
}

export default App;

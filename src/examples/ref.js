import React, {useState, useEffect, useRef} from 'react';
import './App.css';


function App() {
  // const [renderCount, setRenderCount] = useState(1)
  const renderCount = useRef(1)
  const [value, setValue] = useState('initial')
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value);
    
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>the quantity of renders: {renderCount.current}</h1>
      <h2>The  last state: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button className="btn btn-success" onClick={focus}>Focus</button>
   </div>
  );
}

export default App;

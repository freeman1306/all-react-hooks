import React, {useState, useMemo} from 'react';
import './App.css';

function complexCompute(num) {
  let i = 0
  while (i < 10000000) i ++

  return num * 2
}



function App() {
 const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)
  
  const styles = {
  color: colored ? 'darkred': 'black'
}


  const computed = useMemo(() => {
    
    return complexCompute(number)
  }, [number])
  
  return (
    <div>
      <h1 style={styles}>Value: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)} className="btn btn-success">Add</button>
      <button onClick={() => setNumber(prev => prev - 1)} className="btn btn-danger">Delete</button>
      <button onClick={() => setColored(prev => !prev)} className="btn btn-warning">Change</button>

   </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Main from './Main';
import {AlertProvider} from './alert/AlertContext';
import Alert from './alert/Alert';


function App() {
 
  return (
      <AlertProvider>
      <div className="container">
      <Alert/>
      <Main toggle={()=> {}}/>
      </div>
      </AlertProvider>
  );
}

export default App;

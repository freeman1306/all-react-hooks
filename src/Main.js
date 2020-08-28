import React from 'react';
import { useAlert } from './alert/AlertContext';

function Main() {
  const { show } = useAlert();
  return (
    <div>
      <h1>Hi with Context example</h1>
      <button onClick={() => show('this is text from Main.js')} className="btn btn-success">
        Show an alert
      </button>
    </div>
  );
}

export default Main;

import React from 'react';
import { useAlert } from './AlertContext';

function Alert() {
  const alert = useAlert();

  if (!alert.visible) return null;

  return (
    <div>
      <div className="alert alert-danger" onClick={alert.hide}>
        {alert.text}
      </div>
    </div>
  );
}

export default Alert;

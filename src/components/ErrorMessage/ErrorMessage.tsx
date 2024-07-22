import React from 'react';
import './ErrorMessage.css';

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className="error-message">
      <p>Error: {message}</p>
    </div>
  );
};

export default ErrorMessage;

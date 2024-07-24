import React from 'react';
import './ErrorMessage.css';

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return <p className="error-message">{message}</p>;
};

export default ErrorMessage;

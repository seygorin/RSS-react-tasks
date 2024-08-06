import React from 'react';
import styles from './ErrorMessage.module.css';

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className={styles['error-message']}>
      <p>Error: {message}</p>
    </div>
  );
};

export default ErrorMessage;

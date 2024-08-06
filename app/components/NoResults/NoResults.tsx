import React from 'react';
import styles from './NoResults.module.css';

interface Props {
  message?: string;
}

const NoResults: React.FC<Props> = ({ message = 'Nothing found' }) => {
  return <p className={styles['no-results']}>{message}</p>;
};

export default NoResults;

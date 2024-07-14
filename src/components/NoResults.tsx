import React from 'react';
import './NoResults.css';

interface Props {
  message?: string;
}

const NoResults: React.FC<Props> = ({ message = 'Nothing found' }) => {
  return <p className="no-results">{message}</p>;
};

export default NoResults;

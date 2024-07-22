import React from 'react';
import { useParams } from 'react-router-dom';
import usePersonDetails from '../hooks/usePersonDetails';
import Card from '../components/Card/Card';
import Loading from '../components/Loading/Loading';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import NoResults from '../components/NoResults/NoResults';
import './DetailsPage.css';

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { person, isLoading, error } = usePersonDetails(id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error.message || 'An error occurred'} />;
  }

  if (!person) {
    return <NoResults />;
  }

  return (
    <div className="details-container">
      <Card person={person} onClick={() => {}} />
    </div>
  );
};

export default DetailsPage;

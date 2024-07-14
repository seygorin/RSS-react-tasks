import React from 'react';
import { useParams } from 'react-router-dom';
import usePersonDetails from '../hooks/usePersonDetails';
import Card from '../components/Card';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import NoResults from '../components/NoResults';
import './DetailsPage.css';

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { person, loading, error } = usePersonDetails(id);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
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

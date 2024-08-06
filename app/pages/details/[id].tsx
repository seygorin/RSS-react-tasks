import React from 'react';
import usePersonDetails from '../../hooks/usePersonDetails';
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import NoResults from '../../components/NoResults/NoResults';
import styles from './DetailsPage.module.css';

interface DetailsPageProps {
  id?: string;
}

const DetailsPage: React.FC<DetailsPageProps> = ({ id }) => {
  const { person, isLoading, error } = usePersonDetails(id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error.toString()} />;
  }

  if (!person) {
    return <NoResults />;
  }

  return (
    <div className={styles['details-container']}>
      <Card person={person} />
    </div>
  );
};

export default DetailsPage;

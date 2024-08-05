import React from 'react';
import { useParams } from 'react-router-dom';
import usePersonDetails from '../hooks/usePersonDetails';
import Card from '../components/Card/Card';
import Loading from '../components/Loading/Loading';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import NoResults from '../components/NoResults/NoResults';
import './DetailsPage.css';

type ApiError =
  | { message: string }
  | { data: { message: string } }
  | { status: number; data: string }
  | string
  | undefined;

const getErrorMessage = (error: ApiError): string => {
  if (typeof error === 'string') {
    return error;
  }
  if (error && typeof error === 'object') {
    if ('message' in error && typeof error.message === 'string') {
      return error.message;
    }
    if (
      'data' in error &&
      typeof error.data === 'object' &&
      error.data !== null
    ) {
      if ('message' in error.data && typeof error.data.message === 'string') {
        return error.data.message;
      }
    }
    if ('status' in error && 'data' in error) {
      return `Error ${error.status}: ${error.data}`;
    }
  }
  return 'An unknown error occurred';
};

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { person, isLoading, error } = usePersonDetails(id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    const errorMessage = getErrorMessage(error as ApiError);
    return <ErrorMessage message={errorMessage} />;
  }

  if (!person) {
    return <NoResults />;
  }

  return (
    <div className="details-container">
      <Card person={person} />
    </div>
  );
};

export default DetailsPage;

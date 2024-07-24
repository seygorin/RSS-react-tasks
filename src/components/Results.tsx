import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchPeople } from '../services/api';
import { Person } from '../services/interfaces';
import CardList from './CardList';
import Pagination from './Pagination';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import NoResults from './NoResults';
import './Results.css';

interface Props {
  searchTerm: string;
  onItemClick: (id: number) => void;
}

const Results: React.FC<Props> = ({ searchTerm, onItemClick }) => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  useEffect(() => {
    loadPeople();
  }, [searchTerm, currentPage]);

  const loadPeople = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchPeople(searchTerm, currentPage);
      setPeople(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 10));
    } catch (error) {
      console.error(error);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="results-container">
      {people.length > 0 ? (
        <>
          <CardList people={people} onItemClick={onItemClick} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default Results;

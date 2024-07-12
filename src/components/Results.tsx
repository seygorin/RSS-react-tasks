import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchPeople } from '../services/api';
import { Person } from '../services/interfaces';
import Button from './Button';
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

  const extractIdFromUrl = (url: string): string => {
    const idPattern = /\/([0-9]+)\/$/;
    const match = url.match(idPattern);
    return match ? match[1] : '';
  };

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
    if (newPage === 1) {
      setSearchParams({ search: searchTerm });
    } else {
      setSearchParams({ search: searchTerm, page: newPage.toString() });
    }
  };

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="results-container">
      {people.length > 0 ? (
        <>
          <ul className="results-list">
            {people.map((person) => (
              <li
                className="result-item"
                key={person.name}
                onClick={() =>
                  onItemClick(parseInt(extractIdFromUrl(person.url), 10))
                }
              >
                <h3>{person.name}</h3>
                <div className="attributes-grid">
                  <p>
                    <strong>Height</strong>: {person.height}
                  </p>
                  <p>
                    <strong>Mass</strong>: {person.mass}
                  </p>
                  <p>
                    <strong>Hair Color</strong>: {person.hair_color}
                  </p>
                  <p>
                    <strong>Skin Color</strong>: {person.skin_color}
                  </p>
                  <p>
                    <strong>Eye Color</strong>: {person.eye_color}
                  </p>
                  <p>
                    <strong>Birth Year</strong>: {person.birth_year}
                  </p>
                  <p>
                    <strong>Gender</strong>: {person.gender}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="pagination">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="pagination"
            >
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="pagination"
            >
              Next
            </Button>
          </div>
        </>
      ) : (
        <p>Nothing found</p>
      )}
    </div>
  );
};

export default Results;

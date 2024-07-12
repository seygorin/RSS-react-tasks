import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPersonDetails } from '../services/api';
import { Person } from '../services/interfaces';
import './DetailsPage.css';

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      loadPersonDetails(id);
    }
  }, [id]);

  const loadPersonDetails = async (personId: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchPersonDetails(personId);
      setPerson(response.data);
    } catch (error) {
      console.error(error);
      setError('Failed to fetch details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!person) {
    return <p>No details available</p>;
  }

  return (
    <div className="details-container">
      <h2>{person.name}</h2>
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
    </div>
  );
};

export default DetailsPage;

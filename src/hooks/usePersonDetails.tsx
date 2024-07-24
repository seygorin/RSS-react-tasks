import { useState, useEffect } from 'react';
import { fetchPersonDetails } from '../services/api';
import { Person } from '../services/interfaces';

const usePersonDetails = (id: string | undefined) => {
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

  return { person, loading, error };
};

export default usePersonDetails;

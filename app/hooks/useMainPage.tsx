import { useState, useEffect } from 'react';
import { useNavigate } from '@remix-run/react';

const useMainPage = () => {
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsInitialLoadComplete(true);
  }, []);

  const throwError = () => {
    setHasError(true);
  };

  const closeDetails = () => {
    navigate('/', { replace: true });
  };

  return {
    isInitialLoadComplete,
    hasError,
    throwError,
    closeDetails,
  };
};

export default useMainPage;

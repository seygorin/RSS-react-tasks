import { useState, useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

const useMainPage = () => {
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);

  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';

  useEffect(() => {
    setIsInitialLoadComplete(true);
  }, []);

  const throwError = () => {
    setHasError(true);
  };

  const closeDetails = () => {
    navigate(`/?page=${page}`);
  };

  return {
    isInitialLoadComplete,
    hasError,
    throwError,
    closeDetails,
  };
};

export default useMainPage;

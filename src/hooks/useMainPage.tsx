import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const useMainPage = () => {
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsInitialLoadComplete(true);
  }, []);

  const throwError = () => {
    setHasError(true);
  };

  const closeDetails = () => {
    router.push('/', undefined, { shallow: true });
  };

  return {
    isInitialLoadComplete,
    hasError,
    throwError,
    closeDetails,
  };
};

export default useMainPage;

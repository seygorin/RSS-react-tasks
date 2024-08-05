import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const useMainPage = () => {
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  const [hasError, setHasError] = useState(false);
  const router = useRouter();
  const page = (router.query.page as string) || '1';

  useEffect(() => {
    setIsInitialLoadComplete(true);
  }, []);

  const throwError = () => {
    setHasError(true);
  };

  const closeDetails = () => {
    router.push(`/?page=${page}`);
  };

  return {
    isInitialLoadComplete,
    hasError,
    throwError,
    closeDetails,
  };
};

export default useMainPage;

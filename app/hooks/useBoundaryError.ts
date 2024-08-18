import { useState } from 'react';

const useBoundaryError = () => {
  const [hasError, setHasError] = useState(false);

  const throwError = () => {
    setHasError(true);
  };

  return {
    hasError,
    throwError,
  };
};

export default useBoundaryError;

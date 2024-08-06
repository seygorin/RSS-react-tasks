import React from 'react';
import { useRouteError } from '@remix-run/react';
import Button from '../Button/Button';

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const error = useRouteError();

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <p>Something went wrong:</p>
        <p>{(error as Error).message || String(error)}</p>
        <Button variant="pagination" onClick={() => window.location.reload()}>
          Reload
        </Button>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;

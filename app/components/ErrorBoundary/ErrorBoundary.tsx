import React from 'react';
import { useRouteError } from '@remix-run/react';
import Button from '../Button/Button';

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

const ErrorFallback: React.FC = () => {
  const error = useRouteError();

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <p>Something went wrong:</p>
      <p>{(error as Error).message || String(error)}</p>
      <Button variant="pagination" onClick={() => window.location.reload()}>
        Reload
      </Button>
    </div>
  );
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  try {
    return <>{children}</>;
  } catch (error) {
    return <ErrorFallback />;
  }
};

export default ErrorBoundary;

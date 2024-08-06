import React from 'react';
import { useRouteError } from '@remix-run/react';
import NotFoundPage from '../pages/404/NotFoundPage';

export function ErrorBoundary() {
  const error = useRouteError();

  if (error && (error as { statusText?: string }).statusText === 'Not Found') {
    return <NotFoundPage />;
  }

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}

export default function CatchAll() {
  return <NotFoundPage />;
}

import React, { useEffect } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import useMainPage from '../hooks/useMainPage';

import useBoundaryError from '../hooks/useBoundaryError';
import Results from '../components/Result/Results';
import Button from '../components/Button/Button';
import Flyout from '../components/Flyout/Flyout';
import Header from '../components/Header/Header';
import { useTheme } from '../context/ThemeContext';
import './MainPage.css';

const MainPage: React.FC = () => {
  const { isInitialLoadComplete, closeDetails } = useMainPage();
  const { theme } = useTheme();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const showDetails = location.pathname.includes('/details');

  const { hasError, throwError } = useBoundaryError();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    console.log('Search Params:', searchParams.get('search'));
  }, [searchParams]);

  if (hasError) {
    throw new Error('Test error');
  }

  return (
    <main className="main-page">
      <Header throwError={throwError} />
      <div className="content-section">
        <div className="left-section">
          {isInitialLoadComplete && (
            <Results searchTerm={searchParams.get('search') || ''} />
          )}
        </div>
        {showDetails && (
          <div className="right-section">
            <Outlet />
            <Button variant="pagination" onClick={closeDetails}>
              Close
            </Button>
          </div>
        )}
      </div>
      <Flyout />
    </main>
  );
};

export default MainPage;

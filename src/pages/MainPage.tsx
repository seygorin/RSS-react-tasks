import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useMainPage from '../hooks/useMainPage';
import SearchInput from '../components/SearchInput/SearchInput';
import Results from '../components/Result/Results';
import Button from '../components/Button/Button';
import Flyout from '../components/Flyout/Flyout';
import './MainPage.css';

const MainPage: React.FC = () => {
  const {
    searchTerm,
    isInitialLoadComplete,

    hasError,
    handleSearch,
    throwError,
    closeDetails,
  } = useMainPage();

  const location = useLocation();
  const showDetails = location.pathname.includes('/details');

  if (hasError) {
    throw new Error('Test error');
  }

  return (
    <main className="main-page">
      <Button variant="errorBoundary" onClick={throwError}>
        Throw Error
      </Button>
      <div className="top-section">
        <SearchInput onSearch={handleSearch} initialSearchTerm={searchTerm} />
      </div>
      <div className="content-section">
        <div className="left-section">
          {isInitialLoadComplete && <Results searchTerm={searchTerm} />}
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

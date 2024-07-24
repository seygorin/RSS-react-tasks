import React from 'react';
import { Outlet } from 'react-router-dom';
import useMainPageLogic from '../hooks/useMainPage';
import SearchInput from '../components/SearchInput';
import Results from '../components/Results';
import Button from '../components/Button';
import './MainPage.css';

const MainPage: React.FC = () => {
  const {
    searchTerm,
    isInitialLoadComplete,
    selectedItemDetails,
    hasError,
    handleSearch,
    throwError,
    handleItemClick,
    closeDetails,
  } = useMainPageLogic();

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
      <div
        className="content-section"
        onClick={() => selectedItemDetails && closeDetails()}
      >
        <div className="left-section">
          {isInitialLoadComplete && (
            <Results searchTerm={searchTerm} onItemClick={handleItemClick} />
          )}
        </div>
        {selectedItemDetails && (
          <div className="right-section">
            <Outlet />
            <Button variant="pagination" onClick={closeDetails}>
              Close
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default MainPage;

// src/pages/MainPage.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import useMainPage from '../hooks/useMainPage';
import SearchInput from '../components/SearchInput';
import Results from '../components/Results';
import Button from '../components/Button';
import './MainPage.css';

const MainPage: React.FC = () => {
  const {
    searchTerm,
    isInitialLoadComplete,
    selectedItem,
    hasError,
    handleSearch,
    throwError,
    handleItemClick,
    closeDetails,
  } = useMainPage();

  if (hasError) {
    throw new Error('Test error');
  }

  const handleOutsideClick = () => {
    if (selectedItem !== null) {
      closeDetails();
    }
  };

  const handleInsideClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <main className="main-page">
      <Button variant="errorBoundary" onClick={throwError}>
        Throw Error
      </Button>
      <div className="top-section">
        <SearchInput onSearch={handleSearch} initialSearchTerm={searchTerm} />
      </div>
      <div className="content-section" onClick={handleOutsideClick}>
        <div className="left-section">
          {isInitialLoadComplete && (
            <Results searchTerm={searchTerm} onItemClick={handleItemClick} />
          )}
        </div>
        {selectedItem !== null && (
          <div className="right-section" onClick={handleInsideClick}>
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

import React from 'react';
import { Outlet } from 'react-router-dom';
import useMainPage from '../hooks/useMainPage';
import SearchInput from '../components/SearchInput/SearchInput';
import Results from '../components/Result/Results';
import Button from '../components/Button/Button';
import './MainPage.css';

const MainPage: React.FC = () => {
  const {
    searchTerm,
    isInitialLoadComplete,
    selectedItems,
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
    if (Object.keys(selectedItems).length > 0) {
      closeDetails();
    }
  };

  const handleInsideClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Остановить всплытие события
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
        {Object.keys(selectedItems).length > 0 && (
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

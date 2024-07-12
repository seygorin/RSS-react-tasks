import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useSearchParams } from 'react-router-dom';
import useLocalStorage from '../utils/useLocalStorage';

import SearchInput from '../components/SearchInput';
import Results from '../components/Results';
import Button from '../components/Button';
import './MainPage.css';

type ItemDetails = {
  id: number;
};

const MainPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  const [selectedItemDetails, setSelectedItemDetails] =
    useState<ItemDetails | null>(null);
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';

  useEffect(() => {
    setIsInitialLoadComplete(true);
  }, []);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setSearchParams({ page: '1' });
  };

  const throwError = () => {
    setHasError(true);
  };

  const handleItemClick = (id: number) => {
    setSelectedItemDetails({ id });
    navigate(`/details/${id}?page=${page}`);
  };

  const closeDetails = () => {
    setSelectedItemDetails(null);
    navigate(`/?page=${page}`);
  };

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

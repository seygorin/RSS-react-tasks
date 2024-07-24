import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import { useNavigate, useSearchParams } from 'react-router-dom';
import useLocalStorage from '../utils/useLocalStorage';

const useMainPage = () => {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItem.selectedItems,
  );

  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';

  useEffect(() => {
    setIsInitialLoadComplete(true);
  }, []);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const throwError = () => {
    setHasError(true);
  };

  const closeDetails = () => {
    navigate(`/?page=${page}`);
  };

  return {
    searchTerm,
    isInitialLoadComplete,
    selectedItems,
    hasError,
    handleSearch,
    throwError,
    closeDetails,
  };
};

export default useMainPage;

// src/hooks/useMainPage.ts
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { setSelectedItem } from '../store/slices/selectedItemSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useLocalStorage from '../utils/useLocalStorage';
import { Person } from '../store/api/interfaces';
import { extractIdFromUrl } from '../utils/urlUtils';

const useMainPage = () => {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  const selectedItem = useSelector(
    (state: RootState) => state.selectedItem.selectedItem,
  );
  const dispatch = useDispatch<AppDispatch>();
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

  const handleItemClick = (person: Person) => {
    const id = parseInt(extractIdFromUrl(person.url), 10);
    dispatch(setSelectedItem(person));
    navigate(`/details/${id}?page=${page}`);
  };

  const closeDetails = () => {
    dispatch(setSelectedItem(null));
    navigate(`/?page=${page}`);
  };

  return {
    searchTerm,
    isInitialLoadComplete,
    selectedItem,
    hasError,
    handleSearch,
    throwError,
    handleItemClick,
    closeDetails,
  };
};

export default useMainPage;

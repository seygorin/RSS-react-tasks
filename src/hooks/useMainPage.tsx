import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import {
  setItems,
  selectItem,
  unselectItem,
} from '../store/slices/selectedItemSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useLocalStorage from '../utils/useLocalStorage';
import { Person } from '../store/api/interfaces';

const useMainPage = () => {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItem.selectedItems,
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
    if (selectedItems[person.url]) {
      dispatch(unselectItem(person.url));
    } else {
      dispatch(selectItem(person));
    }
    navigate(`/details/${person.url.split('/')[5]}?page=${page}`);
  };

  const closeDetails = () => {
    dispatch(setItems({}));
    navigate(`/?page=${page}`);
  };

  return {
    searchTerm,
    isInitialLoadComplete,
    selectedItems,
    hasError,
    handleSearch,
    throwError,
    handleItemClick,
    closeDetails,
  };
};

export default useMainPage;

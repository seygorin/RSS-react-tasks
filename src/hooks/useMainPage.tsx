import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useLocalStorage from '../utils/useLocalStorage';

type ItemDetails = {
  id: number;
};

const useMainPageLogic = () => {
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

  return {
    searchTerm,
    isInitialLoadComplete,
    selectedItemDetails,
    hasError,
    handleSearch,
    throwError,
    handleItemClick,
    closeDetails,
  };
};

export default useMainPageLogic;

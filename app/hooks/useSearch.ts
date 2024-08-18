import useLocalStorage from '../utils/useLocalStorage';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return {
    searchTerm,
    handleSearch,
  };
};

export default useSearch;

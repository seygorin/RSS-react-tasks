import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from '@remix-run/react';
import Button from '../Button/Button';
import styles from './SearchInput.module.css';

interface Props {
  onSearch: (searchTerm: string) => void;
  initialSearchTerm: string;
}

const SearchInput: React.FC<Props> = ({ onSearch, initialSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmedSearchTerm = searchTerm.trim();
    onSearch(trimmedSearchTerm);

    if (trimmedSearchTerm) {
      navigate(`/?search=${trimmedSearchTerm}`);
    } else {
      navigate('/');
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className={styles.searchInput}
        placeholder="Search..."
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchInput;

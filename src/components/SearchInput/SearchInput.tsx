import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import Button from '../Button/Button';
import styles from './SearchInput.module.css';

interface Props {
  onSearch: (searchTerm: string) => void;
  initialSearchTerm: string;
}

const SearchInput: React.FC<Props> = ({ onSearch, initialSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const router = useRouter();

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
      router.push(`/?search=${trimmedSearchTerm}`);
    } else {
      router.push('/');
    }
  };

  return (
    <form className={styles['search-form']} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles['search-input']}
        value={searchTerm}
        onChange={handleChange}
      />
      <Button type="submit" variant="search">
        Search
      </Button>
    </form>
  );
};

export default SearchInput;

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './SearchInput.css';

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
      navigate(`/`);
    }
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
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

import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import useSearch from '../../hooks/useSearch';
import Button from '../Button/Button';
import SearchInput from '../SearchInput/SearchInput';
import styles from './Header.module.css';

interface HeaderProps {
  throwError: () => void;
}

const Header: React.FC<HeaderProps> = ({ throwError }) => {
  const { theme, toggleTheme } = useTheme();
  const { searchTerm, handleSearch } = useSearch();

  const handleToggleTheme = async () => {
    await toggleTheme();
  };

  return (
    <header className={styles['header']}>
      <Button variant="errorBoundary" onClick={throwError}>
        Throw Error
      </Button>
      <Button variant="toggleTheme" onClick={handleToggleTheme}>
        {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
      </Button>
      <SearchInput onSearch={handleSearch} initialSearchTerm={searchTerm} />
    </header>
  );
};

export default Header;

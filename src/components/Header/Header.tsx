import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Button from '../Button/Button';
import './Header.css';

interface HeaderProps {
  throwError: () => void;
}

const Header: React.FC<HeaderProps> = ({ throwError }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <Button variant="errorBoundary" onClick={throwError}>
        Throw Error
      </Button>
      <Button variant="toggleTheme" onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
      </Button>
    </header>
  );
};

export default Header;

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from '../../components/Header/Header';
import { useTheme } from '../../context/ThemeContext';
import useSearch from '../../hooks/useSearch';

vi.mock('../../context/ThemeContext');
vi.mock('../../hooks/useSearch');
vi.mock('../../components/Button/Button', () => ({
  default: ({ onClick, children }) => (
    <button onClick={onClick} data-testid="button">
      {children}
    </button>
  ),
}));
vi.mock('../../components/SearchInput/SearchInput', () => ({
  default: ({ onSearch, initialSearchTerm }) => (
    <input
      data-testid="search-input"
      value={initialSearchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  ),
}));

describe('Header Component', () => {
  const mockToggleTheme = vi.fn();
  const mockHandleSearch = vi.fn();
  const mockThrowError = vi.fn();

  beforeEach(() => {
    vi.mocked(useTheme).mockReturnValue({
      theme: 'light',
      toggleTheme: mockToggleTheme,
    });
    vi.mocked(useSearch).mockReturnValue({
      searchTerm: 'test search',
      handleSearch: mockHandleSearch,
    });
  });

  it('renders the Header component correctly', () => {
    render(<Header throwError={mockThrowError} />);

    expect(screen.getByText('Throw Error')).toBeInTheDocument();
    expect(screen.getByText('Switch to Dark Theme')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });

  it('calls throwError when the Throw Error button is clicked', () => {
    render(<Header throwError={mockThrowError} />);

    fireEvent.click(screen.getByText('Throw Error'));
    expect(mockThrowError).toHaveBeenCalled();
  });

  it('toggles the theme when the toggle theme button is clicked', async () => {
    render(<Header throwError={mockThrowError} />);

    fireEvent.click(screen.getByText('Switch to Dark Theme'));
    expect(mockToggleTheme).toHaveBeenCalled();
  });

  it('calls handleSearch with the correct input value', () => {
    render(<Header throwError={mockThrowError} />);

    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'new search' } });

    expect(mockHandleSearch).toHaveBeenCalledWith('new search');
  });
});

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchInput from './SearchInput';

describe('SearchInput Component', () => {
  const mockOnSearch = vi.fn();

  beforeEach(() => {
    mockOnSearch.mockReset();
  });

  it('renders with initial search term', () => {
    render(
      <MemoryRouter>
        <SearchInput onSearch={mockOnSearch} initialSearchTerm="initial term" />
      </MemoryRouter>,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('initial term');
  });

  it('updates search term on input change', () => {
    render(
      <MemoryRouter>
        <SearchInput onSearch={mockOnSearch} initialSearchTerm="initial term" />
      </MemoryRouter>,
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new term' } });
    expect(input).toHaveValue('new term');
  });

  it('calls onSearch and navigates on form submit with non-empty term', () => {
    render(
      <MemoryRouter>
        <SearchInput onSearch={mockOnSearch} initialSearchTerm="initial term" />
      </MemoryRouter>,
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: 'search term' } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith('search term');
  });

  it('calls onSearch and navigates on form submit with empty term', () => {
    render(
      <MemoryRouter>
        <SearchInput onSearch={mockOnSearch} initialSearchTerm="initial term" />
      </MemoryRouter>,
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith('');
  });
});

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

// const mockPush = vi.fn();
// vi.mock('next/router', () => ({
//   useRouter: () => ({
//     push: mockPush,
//   }),
// }));

describe('SearchInput Component', () => {
  const mockOnSearch = vi.fn();

  beforeEach(() => {
    mockOnSearch.mockReset();
    mockPush.mockReset();
  });

  it('renders with initial search term', () => {
    render(
      <SearchInput onSearch={mockOnSearch} initialSearchTerm="initial term" />,
    );
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('initial term');
  });

  it('updates search term on input change', () => {
    render(
      <SearchInput onSearch={mockOnSearch} initialSearchTerm="initial term" />,
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'new term' } });
    expect(input.value).toBe('new term');
  });

  it('calls onSearch and navigates on form submit with non-empty term', () => {
    render(
      <SearchInput onSearch={mockOnSearch} initialSearchTerm="initial term" />,
    );
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });
    fireEvent.change(input, { target: { value: 'search term' } });
    fireEvent.click(button);
    expect(mockOnSearch).toHaveBeenCalledWith('search term');
    expect(mockPush).toHaveBeenCalledWith('/?search=search term');
  });

  it('calls onSearch and navigates on form submit with empty term', () => {
    render(
      <SearchInput onSearch={mockOnSearch} initialSearchTerm="initial term" />,
    );
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);
    expect(mockOnSearch).toHaveBeenCalledWith('');
    expect(mockPush).toHaveBeenCalledWith('/');
  });

  it('updates search term when initialSearchTerm prop changes', () => {
    const { rerender } = render(
      <SearchInput onSearch={mockOnSearch} initialSearchTerm="initial term" />,
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('initial term');

    rerender(
      <SearchInput
        onSearch={mockOnSearch}
        initialSearchTerm="new initial term"
      />,
    );
    expect(input.value).toBe('new initial term');
  });
});

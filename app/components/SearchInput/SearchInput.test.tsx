import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchInput from './SearchInput';

const mockNavigate = vi.fn();
vi.mock('@remix-run/react', () => ({
  useNavigate: () => mockNavigate,
}));

vi.mock('./SearchInput.module.css', () => ({
  default: {
    'search-form': 'mockedSearchForm',
    'search-input': 'mockedSearchInput',
  },
}));

describe('SearchInput Component', () => {
  const mockOnSearch = vi.fn();

  beforeEach(() => {
    mockOnSearch.mockReset();
    mockNavigate.mockReset();
  });

  const renderComponent = (initialSearchTerm = '') => {
    return render(
      <MemoryRouter>
        <SearchInput
          onSearch={mockOnSearch}
          initialSearchTerm={initialSearchTerm}
        />
      </MemoryRouter>,
    );
  };

  it('renders with initial search term', () => {
    renderComponent('initial term');
    const input = screen.getByLabelText('Search input') as HTMLInputElement;
    expect(input.value).toBe('initial term');
  });

  it('updates search term on input change', () => {
    renderComponent();
    const input = screen.getByLabelText('Search input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'new term' } });
    expect(input.value).toBe('new term');
  });

  it('calls onSearch and navigates on form submit with non-empty term', () => {
    renderComponent();
    const input = screen.getByLabelText('Search input');
    const form = screen.getByRole('search');
    fireEvent.change(input, { target: { value: 'search term' } });
    fireEvent.submit(form);
    expect(mockOnSearch).toHaveBeenCalledWith('search term');
    expect(mockNavigate).toHaveBeenCalledWith('/?search=search term');
  });

  it('calls onSearch and navigates on form submit with empty term', () => {
    renderComponent();
    const form = screen.getByRole('search');
    fireEvent.submit(form);
    expect(mockOnSearch).toHaveBeenCalledWith('');
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('updates search term when initialSearchTerm prop changes', () => {
    const { rerender } = renderComponent('initial term');
    const input = screen.getByLabelText('Search input') as HTMLInputElement;
    expect(input.value).toBe('initial term');

    rerender(
      <MemoryRouter>
        <SearchInput
          onSearch={mockOnSearch}
          initialSearchTerm="new initial term"
        />
      </MemoryRouter>,
    );
    expect(input.value).toBe('new initial term');
  });

  it('applies correct CSS classes', () => {
    renderComponent();
    const form = screen.getByRole('search');
    const input = screen.getByLabelText('Search input');

    expect(form).toHaveClass('mockedSearchForm');
    expect(input).toHaveClass('mockedSearchInput');
  });
});

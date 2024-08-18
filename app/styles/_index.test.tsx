import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { useNavigate, useSearchParams, useLoaderData } from '@remix-run/react';
import MainPage from '../routes/_index';
import useMainPage from '../hooks/useMainPage';
import { ThemeProvider } from '../context/ThemeContext';

vi.mock('@remix-run/react', async () => {
  const actual = await vi.importActual('@remix-run/react');
  return {
    ...actual,
    useNavigate: vi.fn(),
    useSearchParams: vi.fn(),
    useLoaderData: vi.fn(),
  };
});

vi.mock('../hooks/useMainPage');
vi.mock('../components/Result/Results', () => ({
  default: ({ searchTerm }: { searchTerm: string }) => (
    <div data-testid="results">Results Component: {searchTerm}</div>
  ),
}));
vi.mock('../components/Flyout/Flyout', () => ({
  default: () => <div data-testid="flyout">Flyout Component</div>,
}));
vi.mock('../routes/details.$id', () => ({
  default: ({ id }: { id: string | null }) => (
    <div data-testid="details">Details Component: {id}</div>
  ),
}));
vi.mock('../components/Header/Header', () => ({
  default: ({ throwError }: { throwError: () => void }) => (
    <header data-testid="header" onClick={throwError}>
      Header Component
    </header>
  ),
}));

describe('MainPage', () => {
  const mockUseMainPage = useMainPage as ReturnType<typeof vi.fn>;
  const mockNavigate = vi.fn();
  const mockCloseDetails = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseMainPage.mockReturnValue({
      isInitialLoadComplete: true,
      closeDetails: mockCloseDetails,
    });
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams(),
      vi.fn(),
    ]);
    vi.mocked(useLoaderData).mockReturnValue({ searchTerm: '' });
  });

  const renderWithProviders = (ui: React.ReactElement) => {
    return render(
      <MemoryRouter>
        <ThemeProvider>{ui}</ThemeProvider>
      </MemoryRouter>,
    );
  };

  it('should render the main page components correctly', () => {
    renderWithProviders(<MainPage />);

    expect(screen.getByTestId('results')).toBeInTheDocument();
    expect(screen.getByTestId('flyout')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should not render Results when isInitialLoadComplete is false', () => {
    mockUseMainPage.mockReturnValue({
      isInitialLoadComplete: false,
      closeDetails: mockCloseDetails,
    });

    renderWithProviders(<MainPage />);

    expect(screen.queryByTestId('results')).not.toBeInTheDocument();
  });

  it('should render details when id is present in the search params', () => {
    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams('id=1'),
      vi.fn(),
    ]);

    renderWithProviders(<MainPage />);

    expect(screen.getByTestId('details')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
    expect(screen.getByTestId('details')).toHaveTextContent(
      'Details Component: 1',
    );
  });

  it('should call closeDetails and navigate to main page when the close button is clicked', () => {
    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams('id=1'),
      vi.fn(),
    ]);

    renderWithProviders(<MainPage />);

    fireEvent.click(screen.getByText('Close'));
    expect(mockCloseDetails).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true });
  });

  it('should pass searchTerm to Results component', () => {
    const searchTerm = 'test search';
    vi.mocked(useLoaderData).mockReturnValue({ searchTerm });

    renderWithProviders(<MainPage />);

    const results = screen.getByTestId('results');
    expect(results).toHaveTextContent(`Results Component: ${searchTerm}`);
  });
});

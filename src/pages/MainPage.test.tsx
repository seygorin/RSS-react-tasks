import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import MainPage from './MainPage';
import useMainPage from '../hooks/useMainPage';
import useBoundaryError from '../hooks/useBoundaryError';
import { ThemeProvider } from '../context/ThemeContext';

vi.mock('../hooks/useMainPage');
vi.mock('../hooks/useBoundaryError');
vi.mock('../components/Result/Results', () => ({
  default: () => <div data-testid="results">Results Component</div>,
}));
vi.mock('../components/Flyout/Flyout', () => ({
  default: () => <div data-testid="flyout">Flyout Component</div>,
}));

describe('MainPage', () => {
  const mockUseMainPage = useMainPage as ReturnType<typeof vi.fn>;
  const mockUseBoundaryError = useBoundaryError as ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockUseMainPage.mockReturnValue({
      isInitialLoadComplete: true,
      closeDetails: vi.fn(),
    });
    mockUseBoundaryError.mockReturnValue({
      hasError: false,
      throwError: vi.fn(),
    });
  });

  const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={ui}>
              <Route path="details/:id" element={<div>Details</div>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </MemoryRouter>,
    );
  };

  it('should render the main page components correctly', () => {
    renderWithRouter(<MainPage />);

    expect(screen.getByTestId('results')).toBeInTheDocument();
    expect(screen.getByTestId('flyout')).toBeInTheDocument();
  });

  it('should not render Results when isInitialLoadComplete is false', () => {
    mockUseMainPage.mockReturnValue({
      isInitialLoadComplete: false,
      closeDetails: vi.fn(),
    });

    renderWithRouter(<MainPage />);

    expect(screen.queryByTestId('results')).not.toBeInTheDocument();
  });

  it('should render details when on a details route', () => {
    renderWithRouter(<MainPage />, { route: '/details/1' });

    expect(screen.getByText('Details')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('should call closeDetails when the close button is clicked', () => {
    const mockCloseDetails = vi.fn();
    mockUseMainPage.mockReturnValue({
      isInitialLoadComplete: true,
      closeDetails: mockCloseDetails,
    });

    renderWithRouter(<MainPage />, { route: '/details/1' });

    fireEvent.click(screen.getByText('Close'));
    expect(mockCloseDetails).toHaveBeenCalled();
  });

  it('should throw an error when hasError is true', () => {
    mockUseBoundaryError.mockReturnValue({
      hasError: true,
      throwError: vi.fn(),
    });

    expect(() => renderWithRouter(<MainPage />)).toThrow('Test error');
  });

  it('should log search params when they change', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    renderWithRouter(<MainPage />, { route: '/?search=test' });

    expect(consoleSpy).toHaveBeenCalledWith('Search Params:', 'test');
  });
});

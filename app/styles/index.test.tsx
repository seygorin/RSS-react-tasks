import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import MainPage from '../routes/_index';
import useMainPage from '../hooks/useMainPage';
import useBoundaryError from '../hooks/useBoundaryError';
import { ThemeProvider } from '../context/ThemeContext';
// import { useRouter, NextRouter } from 'next/router';

// vi.mock('next/router', () => ({
//   useRouter: vi.fn(),
// }));

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
  const mockRouterPush = vi.fn();

  beforeEach(() => {
    mockUseMainPage.mockReturnValue({
      isInitialLoadComplete: true,
      closeDetails: vi.fn(),
    });
    mockUseBoundaryError.mockReturnValue({
      hasError: false,
      throwError: vi.fn(),
    });
    vi.mocked(useRouter).mockReturnValue({
      query: {},
      push: mockRouterPush,
    } as unknown as NextRouter);
  });

  const renderWithProviders = (ui: React.ReactElement) => {
    return render(<ThemeProvider>{ui}</ThemeProvider>);
  };

  it('should render the main page components correctly', () => {
    renderWithProviders(<MainPage />);

    expect(screen.getByTestId('results')).toBeInTheDocument();
    expect(screen.getByTestId('flyout')).toBeInTheDocument();
  });

  it('should not render Results when isInitialLoadComplete is false', () => {
    mockUseMainPage.mockReturnValue({
      isInitialLoadComplete: false,
      closeDetails: vi.fn(),
    });

    renderWithProviders(<MainPage />);

    expect(screen.queryByTestId('results')).not.toBeInTheDocument();
  });

  it('should render details when id is present in the query', () => {
    vi.mocked(useRouter).mockReturnValue({
      query: { id: '1' },
      push: mockRouterPush,
    } as unknown as NextRouter);

    renderWithProviders(<MainPage />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('should call closeDetails and navigate to main page when the close button is clicked', () => {
    const mockCloseDetails = vi.fn();
    mockUseMainPage.mockReturnValue({
      isInitialLoadComplete: true,
      closeDetails: mockCloseDetails,
    });
    vi.mocked(useRouter).mockReturnValue({
      query: { id: '1' },
      push: mockRouterPush,
    } as unknown as NextRouter);

    renderWithProviders(<MainPage />);

    fireEvent.click(screen.getByText('Close'));
    expect(mockCloseDetails).toHaveBeenCalled();
    expect(mockRouterPush).toHaveBeenCalledWith('/', undefined, {
      shallow: true,
    });
  });

  it('should throw an error when hasError is true', () => {
    mockUseBoundaryError.mockReturnValue({
      hasError: true,
      throwError: vi.fn(),
    });

    expect(() => renderWithProviders(<MainPage />)).toThrow('Test error');
  });
});

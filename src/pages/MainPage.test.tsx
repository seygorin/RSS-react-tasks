import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import MainPage from './MainPage';
import useMainPageLogic from '../hooks/useMainPage';

vi.mock('../hooks/useMainPage');

describe('MainPage', () => {
  const mockedUseMainPageLogic = vi.mocked(useMainPageLogic);

  beforeEach(() => {
    mockedUseMainPageLogic.mockReturnValue({
      searchTerm: '',
      isInitialLoadComplete: false,
      selectedItemDetails: null,
      hasError: false,
      handleSearch: vi.fn(),
      throwError: vi.fn(),
      handleItemClick: vi.fn(),
      closeDetails: vi.fn(),
    });
  });

  it('should render the main page components correctly', () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>,
    );

    expect(screen.getByText('Throw Error')).toBeInTheDocument();
  });

  it('should call throwError when the "Throw Error" button is clicked', () => {
    const throwError = vi.fn();
    mockedUseMainPageLogic.mockReturnValueOnce({
      ...mockedUseMainPageLogic(),
      throwError,
    });

    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByText('Throw Error'));
    expect(throwError).toHaveBeenCalled();
  });

  it('should render the selected item details and close button when an item is selected', () => {
    mockedUseMainPageLogic.mockReturnValueOnce({
      ...mockedUseMainPageLogic(),
      selectedItemDetails: { id: 1 },
    });

    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>,
    );

    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('should call closeDetails when the close button is clicked', () => {
    const closeDetails = vi.fn();
    mockedUseMainPageLogic.mockReturnValueOnce({
      ...mockedUseMainPageLogic(),
      selectedItemDetails: { id: 1 },
      closeDetails,
    });

    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByText('Close'));
    expect(closeDetails).toHaveBeenCalled();
  });
});

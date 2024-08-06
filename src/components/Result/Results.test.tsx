import React from 'react';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Results from './Results';
import peopleReducer from '../../store/slices/peopleSlice';
import pageReducer from '../../store/slices/pageSlice';
import selectedItemReducer from '../../store/slices/selectedItemSlice';

const mockPeople = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    url: 'http://swapi.dev/api/people/1/',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    url: 'http://swapi.dev/api/people/2/',
  },
];

const mockUseFetchPeopleQuery = vi.fn();

vi.mock('../../store/api/personApi', () => ({
  useFetchPeopleQuery: () => mockUseFetchPeopleQuery(),
}));

const mockPush = vi.fn();
vi.mock('next/router', () => ({
  useRouter: () => ({
    query: { page: '1' },
    push: mockPush,
  }),
}));

const mockProps = {
  searchTerm: 'Luke',
};

describe('Results Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderWithRedux = (ui: React.ReactNode, initialState = {}) => {
    const store = configureStore({
      reducer: {
        people: peopleReducer,
        page: pageReducer,
        selectedItem: selectedItemReducer,
      },
      preloadedState: {
        people: { currentPageData: [] },
        page: { currentPage: 1 },
        selectedItem: { selectedItems: {} },
        ...initialState,
      },
    });

    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      store,
    };
  };

  it('renders loading state', () => {
    mockUseFetchPeopleQuery.mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });

    renderWithRedux(<Results {...mockProps} />);
    expect(screen.getByText(/loading/i)).toBeDefined();
  });

  it('renders error state', () => {
    mockUseFetchPeopleQuery.mockReturnValue({
      isLoading: false,
      error: { message: 'An error occurred' },
      data: null,
    });

    renderWithRedux(<Results {...mockProps} />);
    expect(screen.getByText(/failed to fetch data/i)).toBeDefined();
  });

  it('renders people when data is available', async () => {
    mockUseFetchPeopleQuery.mockReturnValue({
      isLoading: false,
      error: null,
      data: { results: mockPeople, count: 2 },
    });

    renderWithRedux(<Results {...mockProps} />, {
      people: { currentPageData: mockPeople },
    });

    await waitFor(() => {
      expect(screen.getByText('Luke Skywalker')).toBeDefined();
      expect(screen.getByText('C-3PO')).toBeDefined();
    });
  });
});

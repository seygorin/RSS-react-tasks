import React from 'react';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Results from './Results';
import peopleReducer from '../../store/slices/peopleSlice';
import pageReducer from '../../store/slices/pageSlice';
import selectedItemReducer from '../../store/slices/selectedItemSlice';

const mockPeople = [
  { name: 'John Doe', age: 30, job: 'Developer', url: '/1/' },
  { name: 'Jane Smith', age: 25, job: 'Designer', url: '/2/' },
];

vi.mock('../../store/api/personApi', () => ({
  useFetchPeopleQuery: () => ({
    data: { results: mockPeople, count: 2 },
    error: null,
    isLoading: false,
  }),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useSearchParams: () => [new URLSearchParams(), vi.fn()],
  };
});

const mockProps = {
  searchTerm: 'Developer',
};

describe('Results Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderWithRedux = (ui: React.ReactNode) => {
    const store = configureStore({
      reducer: {
        people: peopleReducer,
        page: pageReducer,
        selectedItem: selectedItemReducer,
      },
      preloadedState: {
        people: { currentPageData: mockPeople },
        page: { currentPage: 1 },
        selectedItem: { selectedItems: {} },
      },
    });

    return {
      ...render(
        <Provider store={store}>
          <MemoryRouter>{ui}</MemoryRouter>
        </Provider>,
      ),
      store,
    };
  };

  it('renders people', async () => {
    renderWithRedux(<Results {...mockProps} />);

    const items = await waitFor(() =>
      screen.getAllByRole('heading', { level: 3 }),
    );
    expect(items).toHaveLength(2);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('updates Redux store when a person is clicked', async () => {
    const { store } = renderWithRedux(<Results {...mockProps} />);

    const items = await waitFor(() =>
      screen.getAllByRole('heading', { level: 3 }),
    );
    fireEvent.click(items[0]);

    await waitFor(() => {
      const state = store.getState();

      expect(state.selectedItem).not.toEqual({ selectedItems: {} });
    });

    console.log('Current Redux State:', store.getState());
  });

  it('updates current page when pagination is clicked', async () => {
    const { store } = renderWithRedux(<Results {...mockProps} />);

    const nextPageButton = await waitFor(() =>
      screen.getByRole('button', { name: /next/i }),
    );
    fireEvent.click(nextPageButton);

    await waitFor(() => {
      const pageState = store.getState().page;
      expect(pageState.currentPage).toBe(1);
    });
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import DetailsPage from '../routes/details.$id';
import usePersonDetails from '../hooks/usePersonDetails';

vi.mock('../hooks/usePersonDetails');
vi.mock('../components/Card/Card', () => ({
  default: ({ person }) => (
    <div data-testid="person-card">
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div>{person.occupation}</div>
    </div>
  ),
}));
vi.mock('../components/Loading/Loading', () => ({
  default: () => <div>Loading...</div>,
}));
vi.mock('../components/ErrorMessage/ErrorMessage', () => ({
  default: ({ message }) => <div>{message}</div>,
}));
vi.mock('../components/NoResults/NoResults', () => ({
  default: () => <div>Nothing found</div>,
}));

const createMockStore = (initialState = {}) => {
  return configureStore({
    reducer: (state = initialState) => state,
    preloadedState: initialState,
  });
};

const renderWithRedux = (ui, initialState = {}) => {
  const store = createMockStore(initialState);
  return render(<Provider store={store}>{ui}</Provider>);
};

describe('DetailsPage', () => {
  const mockId = '123';

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders Loading component when loading is true', () => {
    vi.mocked(usePersonDetails).mockReturnValue({
      person: null,
      isLoading: true,
      error: null,
    });

    renderWithRedux(<DetailsPage id={mockId} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders ErrorMessage component when error exists', () => {
    vi.mocked(usePersonDetails).mockReturnValue({
      person: null,
      isLoading: false,
      error: new Error('Failed to fetch details'),
    });

    renderWithRedux(<DetailsPage id={mockId} />);

    expect(screen.getByText(/failed to fetch details/i)).toBeInTheDocument();
  });

  it('renders NoResults component when person is null', () => {
    vi.mocked(usePersonDetails).mockReturnValue({
      person: null,
      isLoading: false,
      error: null,
    });

    renderWithRedux(<DetailsPage id={mockId} />);

    expect(screen.getByText(/nothing found/i)).toBeInTheDocument();
  });

  it('renders person details when data is successfully loaded', () => {
    const mockPerson = {
      name: 'John Doe',
      age: 30,
      occupation: 'Developer',
    };

    vi.mocked(usePersonDetails).mockReturnValue({
      person: mockPerson,
      isLoading: false,
      error: null,
    });

    renderWithRedux(<DetailsPage id={mockId} />);

    expect(screen.getByText(mockPerson.name)).toBeInTheDocument();
    expect(screen.getByText(String(mockPerson.age))).toBeInTheDocument();
    expect(screen.getByText(mockPerson.occupation)).toBeInTheDocument();
  });
});

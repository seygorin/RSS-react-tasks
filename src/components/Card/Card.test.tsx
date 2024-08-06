import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Card from './Card';
import { Person } from '../../store/api/interfaces';
import { selectItem, unselectItem } from '../../store/slices/selectedItemSlice';
import { RootState } from '../../store/store';

const mockPush = vi.fn();
vi.mock('next/router', () => ({
  useRouter: () => ({
    query: { page: '1' },
    push: mockPush,
  }),
}));

const mockStore = configureStore([]);

describe('Card', () => {
  const mockPerson: Person = {
    name: 'John Doe',
    height: '180',
    mass: '75',
    hair_color: 'brown',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '1990',
    gender: 'male',
    url: 'https://swapi.dev/api/people/1/',
  };

  const renderWithProviders = (
    component: React.ReactNode,
    initialState: Partial<RootState> = {},
  ) => {
    const store = mockStore(initialState);
    return render(<Provider store={store}>{component}</Provider>);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders relevant card data', () => {
    renderWithProviders(<Card person={mockPerson} />, {
      selectedItem: { selectedItems: {} },
    });

    expect(screen.getByText(mockPerson.name)).toBeDefined();
    expect(screen.getByText(/height/i)).toBeDefined();
    expect(screen.getByText(/180/i)).toBeDefined();
    expect(screen.getByText(/mass/i)).toBeDefined();
    expect(screen.getByText(/75/i)).toBeDefined();
    expect(screen.getByText(/hair color/i)).toBeDefined();
    expect(screen.getByText(/brown/i)).toBeDefined();
    expect(screen.getByText(/skin color/i)).toBeDefined();
    expect(screen.getByText(/fair/i)).toBeDefined();
    expect(screen.getByText(/eye color/i)).toBeDefined();
    expect(screen.getByText(/blue/i)).toBeDefined();
    expect(screen.getByText(/birth year/i)).toBeDefined();
    expect(screen.getByText(/1990/i)).toBeDefined();
    expect(screen.getByText(/gender/i)).toBeDefined();
    expect(screen.getByText(/male/i)).toBeDefined();
  });

  it('dispatches selectItem action when checkbox is checked', () => {
    const store = mockStore({ selectedItem: { selectedItems: {} } });
    render(
      <Provider store={store}>
        <Card person={mockPerson} />
      </Provider>,
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    const actions = store.getActions();
    expect(actions).toContainEqual(selectItem(mockPerson));
  });

  it('dispatches unselectItem action when checkbox is unchecked', () => {
    const store = mockStore({
      selectedItem: {
        selectedItems: { 'https://swapi.dev/api/people/1/': mockPerson },
      },
    });
    render(
      <Provider store={store}>
        <Card person={mockPerson} />
      </Provider>,
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    const actions = store.getActions();
    expect(actions).toContainEqual(unselectItem(mockPerson.url));
  });

  it('navigates to details page on card click', () => {
    renderWithProviders(<Card person={mockPerson} />, {
      selectedItem: { selectedItems: {} },
    });

    const cardElement = screen.getByText(mockPerson.name).closest('div');
    if (cardElement) {
      fireEvent.click(cardElement);
    } else {
      throw new Error('Card element is not found');
    }

    expect(mockPush).toHaveBeenCalledWith('/?id=1&page=1', undefined, {
      shallow: true,
    });
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { useNavigate, useSearchParams, MemoryRouter } from 'react-router-dom';
import Card from './Card';
import { Person } from '../../store/api/interfaces';
import { selectItem, unselectItem } from '../../store/slices/selectedItemSlice';
import { RootState } from '../../store/store';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
    useSearchParams: vi.fn(),
  };
});

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
    return render(
      <Provider store={store}>
        <MemoryRouter>{component}</MemoryRouter>
      </Provider>,
    );
  };

  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(vi.fn());
    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams(),
      vi.fn(),
    ]);
  });

  it('renders relevant card data', () => {
    renderWithProviders(<Card person={mockPerson} />, {
      selectedItem: { selectedItems: {} },
    });

    expect(screen.getByText(mockPerson.name)).toBeInTheDocument();
    expect(screen.getByText(/height/i)).toBeInTheDocument();
    expect(screen.getByText(/180/i)).toBeInTheDocument();
    expect(screen.getByText(/mass/i)).toBeInTheDocument();
    expect(screen.getByText(/75/i)).toBeInTheDocument();
    expect(screen.getByText(/hair color/i)).toBeInTheDocument();
    expect(screen.getByText(/brown/i)).toBeInTheDocument();
    expect(screen.getByText(/skin color/i)).toBeInTheDocument();
    expect(screen.getByText(/fair/i)).toBeInTheDocument();
    expect(screen.getByText(/eye color/i)).toBeInTheDocument();
    expect(screen.getByText(/blue/i)).toBeInTheDocument();
    expect(screen.getByText(/birth year/i)).toBeInTheDocument();
    expect(screen.getByText(/1990/i)).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
    expect(screen.getByText(/male/i)).toBeInTheDocument();
  });

  it('dispatches selectItem action when checkbox is checked', () => {
    const store = mockStore({ selectedItem: { selectedItems: {} } });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card person={mockPerson} />
        </MemoryRouter>
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
        <MemoryRouter>
          <Card person={mockPerson} />
        </MemoryRouter>
      </Provider>,
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    const actions = store.getActions();
    expect(actions).toContainEqual(unselectItem(mockPerson.url));
  });

  it('navigates to details page on card click', () => {
    const navigate = vi.mocked(useNavigate)();
    renderWithProviders(<Card person={mockPerson} />, {
      selectedItem: { selectedItems: {} },
    });

    const cardElement = screen.getByText(mockPerson.name).closest('div');
    if (cardElement) {
      fireEvent.click(cardElement);
    } else {
      throw new Error('Card element is not found');
    }

    expect(navigate).toHaveBeenCalledWith('/details/1?page=1');
  });
});

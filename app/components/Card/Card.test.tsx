import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Card from './Card';
import { Person } from '../../store/api/interfaces';
import { RootState } from '../../store/store';

vi.mock('@remix-run/react', async () => {
  const actual = await vi.importActual('@remix-run/react');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
    useLocation: () => ({ search: '?page=1' }),
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
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={component} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
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
});

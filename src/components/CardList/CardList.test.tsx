import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import CardList from './CardList';

const mockStore = configureStore([]);

describe('CardList', () => {
  const renderWithProvider = (
    component: React.ReactNode,
    initialState = {},
  ) => {
    const store = mockStore(initialState);
    return render(<Provider store={store}>{component}</Provider>);
  };

  it('displays appropriate message if no cards are present', () => {
    renderWithProvider(<CardList people={[]} />);

    expect(screen.getByText(/Nothing found/i)).toBeInTheDocument();
  });
});

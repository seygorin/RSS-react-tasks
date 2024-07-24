import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Flyout from './Flyout';
import { unselectAllItems } from '../../store/slices/selectedItemSlice';

const mockStore = configureStore([]);

describe('Flyout', () => {
  it('renders nothing when no items are selected', () => {
    const store = mockStore({
      selectedItem: {
        selectedItems: {},
      },
    });

    const { container } = render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    expect(container.firstChild).toBeNull();
  });

  it('renders correctly when items are selected', () => {
    const store = mockStore({
      selectedItem: {
        selectedItems: {
          '1': { name: 'Luke Skywalker' },
          '2': { name: 'Darth Vader' },
        },
      },
    });

    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    expect(screen.getByText('2 items are selected')).toBeInTheDocument();
    expect(screen.getByText('Unselect all')).toBeInTheDocument();
    expect(screen.getByText('Download')).toBeInTheDocument();
  });

  it('dispatches unselectAllItems when "Unselect all" is clicked', () => {
    const store = mockStore({
      selectedItem: {
        selectedItems: {
          '1': { name: 'Luke Skywalker' },
        },
      },
    });
    store.dispatch = vi.fn();

    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Unselect all'));
    expect(store.dispatch).toHaveBeenCalledWith(unselectAllItems());
  });
});

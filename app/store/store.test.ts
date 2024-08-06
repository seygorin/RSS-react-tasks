import { describe, it, expect } from 'vitest';
import { store } from './store';
import {
  selectItem,
  unselectItem,
  unselectAllItems,
} from './slices/selectedItemSlice';
import { personApi } from './api/personApi';

describe('Redux store configuration', () => {
  it('should configure store with correct reducers and middleware', () => {
    const state = store.getState();

    expect(state.selectedItem).toEqual({ selectedItems: {} });
    expect(state.page).toBeDefined();
    expect(state.people).toBeDefined();
    expect(state[personApi.reducerPath]).toBeDefined();
  });

  it('should handle actions correctly', () => {
    const mockPerson = {
      url: 'http://example.com/1',
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
    };

    store.dispatch(selectItem(mockPerson));
    let state = store.getState();
    expect(state.selectedItem.selectedItems[mockPerson.url]).toEqual(
      mockPerson,
    );

    store.dispatch(unselectItem(mockPerson.url));
    state = store.getState();
    expect(state.selectedItem.selectedItems[mockPerson.url]).toBeUndefined();

    store.dispatch(selectItem(mockPerson));
    store.dispatch(unselectAllItems());
    state = store.getState();
    expect(state.selectedItem.selectedItems).toEqual({});
  });
});

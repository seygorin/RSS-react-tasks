import { describe, it, expect } from 'vitest';
import reducer, {
  selectItem,
  unselectItem,
  unselectAllItems,
  SelectedItemState,
} from './selectedItemSlice';
import { Person } from '../../store/api/interfaces';

describe('selectedItemSlice', () => {
  const initialState: SelectedItemState = {
    selectedItems: {},
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle selectItem', () => {
    const person: Person = {
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

    const expectedState = {
      selectedItems: {
        [person.url]: person,
      },
    };

    expect(reducer(initialState, selectItem(person))).toEqual(expectedState);
  });

  it('should handle unselectItem', () => {
    const person: Person = {
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
    const initialStateWithItem = {
      selectedItems: {
        [person.url]: person,
      },
    };

    const expectedState = {
      selectedItems: {},
    };

    expect(reducer(initialStateWithItem, unselectItem(person.url))).toEqual(
      expectedState,
    );
  });

  it('should handle unselectAllItems', () => {
    const person1: Person = {
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
    const person2: Person = {
      url: 'http://example.com/2',
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      hair_color: 'none',
      skin_color: 'white',
      eye_color: 'yellow',
      birth_year: '41.9BBY',
      gender: 'male',
    };

    const initialStateWithItems = {
      selectedItems: {
        [person1.url]: person1,
        [person2.url]: person2,
      },
    };

    const expectedState = {
      selectedItems: {},
    };

    expect(reducer(initialStateWithItems, unselectAllItems())).toEqual(
      expectedState,
    );
  });
});

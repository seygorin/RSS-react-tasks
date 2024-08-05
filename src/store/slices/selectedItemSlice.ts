import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Person } from '../../store/api/interfaces';

export interface SelectedItemState {
  selectedItems: Record<string, Person>;
}

const initialState: SelectedItemState = {
  selectedItems: {},
};

const selectedItemSlice = createSlice({
  name: 'selectedItem',
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<Person>) => {
      state.selectedItems[action.payload.url] = action.payload;
    },
    unselectItem: (state, action: PayloadAction<string>) => {
      delete state.selectedItems[action.payload];
    },
    unselectAllItems: (state) => {
      state.selectedItems = {};
    },
  },
});

export const { selectItem, unselectItem, unselectAllItems } =
  selectedItemSlice.actions;
export default selectedItemSlice.reducer;

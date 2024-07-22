import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Person } from '../api/interfaces';

interface SelectedItemState {
  selectedItems: { [id: string]: Person };
}

const initialSelectedItemState: SelectedItemState = {
  selectedItems: {},
};

const selectedItemSlice = createSlice({
  name: 'selectedItem',
  initialState: initialSelectedItemState,
  reducers: {
    selectItem: (state, action: PayloadAction<Person>) => {
      state.selectedItems[action.payload.url] = action.payload;
    },
    unselectItem: (state, action: PayloadAction<string>) => {
      delete state.selectedItems[action.payload];
    },
    setItems: (state, action: PayloadAction<{ [id: string]: Person }>) => {
      state.selectedItems = action.payload;
    },
  },
});

export const { selectItem, unselectItem, setItems } = selectedItemSlice.actions;
export default selectedItemSlice.reducer;

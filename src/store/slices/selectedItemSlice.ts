import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Person } from '../api/interfaces';

export interface SelectedItemState {
  selectedItem: Person | null;
}

const initialSelectedItemState: SelectedItemState = {
  selectedItem: null,
};

const selectedItemSlice = createSlice({
  name: 'selectedItem',
  initialState: initialSelectedItemState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<Person | null>) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setSelectedItem } = selectedItemSlice.actions;
export default selectedItemSlice.reducer;

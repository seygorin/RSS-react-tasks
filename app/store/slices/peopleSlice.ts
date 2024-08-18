import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Person } from '../api/interfaces';

export interface PeopleState {
  currentPageData: Person[];
}

const initialState: PeopleState = {
  currentPageData: [],
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeople: (state, action: PayloadAction<Person[]>) => {
      state.currentPageData = action.payload;
    },
  },
});

export const { setPeople } = peopleSlice.actions;
export default peopleSlice.reducer;

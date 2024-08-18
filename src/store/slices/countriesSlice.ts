import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = ['Asia', 'America', 'Europe', 'World'];

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;

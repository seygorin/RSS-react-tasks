import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoredUserData } from './types';

const initialState: StoredUserData = {
  name: '',
  age: null,
  email: '',
  password: '',
  gender: '',
  termsAccepted: false,
  picture: null,
  country: '',
};

const uncontrolledFormSlice = createSlice({
  name: 'uncontrolledForm',
  initialState,
  reducers: {
    setUncontrolledFormData: (_, action: PayloadAction<StoredUserData>) =>
      action.payload,
  },
});

export const { setUncontrolledFormData } = uncontrolledFormSlice.actions;
export default uncontrolledFormSlice.reducer;

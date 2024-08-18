import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoredUserData } from './types';

const initialState: StoredUserData = {
  name: '',
  age: 0,
  email: '',
  password: '',
  gender: '',
  termsAccepted: false,
  picture: null,
  country: '',
};

const reactHookFormSlice = createSlice({
  name: 'reactHookForm',
  initialState,
  reducers: {
    setReactHookFormData: (_, action: PayloadAction<StoredUserData>) => {
      return action.payload;
    },
  },
});

export const { setReactHookFormData } = reactHookFormSlice.actions;
export default reactHookFormSlice.reducer;

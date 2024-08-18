import { configureStore } from '@reduxjs/toolkit';
import uncontrolledFormReducer from './slices/uncontrolledFormSlice';
import reactHookFormReducer from './slices/reactHookFormSlice';
import countriesReducer from './slices/countriesSlice';

export const store = configureStore({
  reducer: {
    uncontrolledForm: uncontrolledFormReducer,
    reactHookForm: reactHookFormReducer,
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

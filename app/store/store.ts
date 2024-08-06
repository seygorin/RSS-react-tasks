import { configureStore } from '@reduxjs/toolkit';
import { personApi } from './api/personApi';
import pageReducer from './slices/pageSlice';
import peopleReducer from './slices/peopleSlice';
import selectedItemReducer from './slices/selectedItemSlice';

export const store = configureStore({
  reducer: {
    [personApi.reducerPath]: personApi.reducer,
    page: pageReducer,
    people: peopleReducer,
    selectedItem: selectedItemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(personApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

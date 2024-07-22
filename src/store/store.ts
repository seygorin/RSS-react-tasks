import { configureStore } from '@reduxjs/toolkit';
import { personApi } from './api/personApi';
import pageReducer from './slices/pageSlice';
import selectedItemReducer from './slices/selectedItemSlice';

export const store = configureStore({
  reducer: {
    [personApi.reducerPath]: personApi.reducer,
    page: pageReducer,
    selectedItem: selectedItemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(personApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

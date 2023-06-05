import { configureStore } from '@reduxjs/toolkit';
import { globalReducer, setMode } from './slices/globalSlice';
import { productsApi, useGetProductsQuery } from './apis/productsApi';

const store = configureStore({
  reducer: {
    global: globalReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(productsApi.middleware),
});

export { store, setMode, useGetProductsQuery };

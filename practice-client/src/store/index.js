import { configureStore } from '@reduxjs/toolkit';
import { globalReducer, setMode } from './slices/globalSlice';
import { productsApi, useGetProductsQuery } from './apis/productsApi';
import { customersApi, useGetCustomersQuery } from './apis/customersApi';
import {
  transactionsApi,
  useGetTransactionsQuery,
} from './apis/transactionsApi';

const store = configureStore({
  reducer: {
    global: globalReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [customersApi.reducerPath]: customersApi.reducer,
    [transactionsApi.reducerPath]: transactionsApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault()
      .concat(productsApi.middleware)
      .concat(customersApi.middleware)
      .concat(transactionsApi.middleware),
});

export {
  store,
  setMode,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
};

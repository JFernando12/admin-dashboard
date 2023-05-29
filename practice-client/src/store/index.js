import { configureStore } from '@reduxjs/toolkit';
import { globalReducer, setMode } from './slices/globalSlice';

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  middleware: (getDefault) => getDefault().concat(),
});

export { store, setMode };

import { configureStore } from '@reduxjs/toolkit';
import  coinsReducer from '../features/coins/coinSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    coins: coinsReducer
  },
});

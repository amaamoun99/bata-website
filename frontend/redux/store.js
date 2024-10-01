// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './authSlice';
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    token: tokenReducer,
    cart: cartReducer,
  },
});

export default store;

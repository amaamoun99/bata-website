// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Store cart items here
  isCartOpen: false, // Control cart visibility
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      console.log('Removing item:', action.payload); // Debugging step
      state.items = state.items.filter(item => item._id !== action.payload._id);
    },
    clearCart: (state) => {
      state.items = [];
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, toggleCart } = cartSlice.actions;

export default cartSlice.reducer;

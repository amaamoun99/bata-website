import { createSlice } from '@reduxjs/toolkit';

// Retrieve JWT from localStorage (if it exists) when initializing state
const tokenFromStorage = typeof window !== 'undefined' ? localStorage.getItem('jwtToken') : null;

const initialState = {
  token: tokenFromStorage || null,
  user: null,
  isAuthenticated: !!tokenFromStorage,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      // Store token in localStorage
      localStorage.setItem('jwtToken', action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      // Remove token from localStorage
      localStorage.removeItem('jwtToken');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

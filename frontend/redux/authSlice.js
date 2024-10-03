import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

// Retrieve JWT from cookies (if it exists) when initializing state
const jwtFromCookies = typeof window !== 'undefined' ? Cookies.get('jwt') : null;


const initialState = {
  jwt: jwtFromCookies || null,
  user: null,
  isAuthenticated: !!jwtFromCookies,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.jwt = action.payload;
      state.isAuthenticated = true;
      // Store jwt in cookies
      Cookies.set('jwt', action.payload, { expires: 1 }); // Expires in 1 day // Expires in 1 day
    },
    logout: (state) => {
      state.jwt = null;
      state.isAuthenticated = false;
      // Remove jwt from cookies
      Cookies.remove('jwt');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

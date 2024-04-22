// reducers/authReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      localStorage.setItem('token', state.token)
    },
    logout(state) {
      state.token = null;
      localStorage.setItem('token', "")
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;

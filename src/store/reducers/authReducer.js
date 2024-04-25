// reducers/authReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'),
  user: null
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
    getUser(state, action) {
      state.user = action.payload.user;
    }
  },
});

export const { loginSuccess, logout, getUser } = authSlice.actions;

export default authSlice.reducer;

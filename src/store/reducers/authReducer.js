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
      localStorage.setItem('token', state.token)
      return {
        ...state,
        isLoggedIn:true,
        token:action.payload.token
      }
    },
    logout(state) {
      localStorage.setItem('token', "")
      return {
        ...state,
        isLoggedIn:false,
        token: null
      }
    },
    getUser(state, action) {
      return {
        ...state,
        user: action.payload.user
      }
    }
  },
});

export const { loginSuccess, logout, getUser } = authSlice.actions;

export default authSlice.reducer;

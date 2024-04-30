// reducers/authReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: false,
};

const authSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeMenu(state, action) {
      state.menu = action.payload.menu;
    }
  },
});

export const { changeMenu } = authSlice.actions;

export default authSlice.reducer;

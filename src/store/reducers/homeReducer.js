// reducers/authReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: false,
  dreamModel: "",
  modelConfig: []
};

const authSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeMenu(state, action) {
      state.menu = action.payload.menu;
    },
    changeModel(state, action) {
      state.dreamModel = action.payload.dreamModel;
    },
    getModelConfig(state, action) {
      state.modelConfig = action.payload.modelConfig;
    },
  },
});

export const { changeMenu, changeModel, getModelConfig } = authSlice.actions;

export default authSlice.reducer;

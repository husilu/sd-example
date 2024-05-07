// reducers/authReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: false,
  dreamModel: "",
  modelConfig: [],
  dreamModelInfo:{}
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
    getDreamModelInfo(state, action){
      state.dreamModelInfo = action.payload.dreamModelInfo;
    }
  },
});

export const { changeMenu, changeModel, getModelConfig,getDreamModelInfo } = authSlice.actions;

export default authSlice.reducer;

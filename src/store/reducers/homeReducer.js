// reducers/authReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: false,
  dreamModel: "",
  modelConfig: [],
  dreamModelInfo:{conceptsList:[]}
};

const authSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeMenu(state, action) {
      return {
        ...state,
        menu: action.payload.menu
      };
    },
    changeModel(state, action) {
      return {
        ...state,
        dreamModel: action.payload.dreamModel
      };
    },
    getModelConfig(state, action) {
      return {
        ...state,
        modelConfig: action.payload.modelConfig
      };
    },
    getDreamModelInfo(state, action){
      return {
        ...state,
        dreamModelInfo: action.payload.dreamModelInfo
      };
    }
  },
});

export const { changeMenu, changeModel, getModelConfig,getDreamModelInfo } = authSlice.actions;

export default authSlice.reducer;

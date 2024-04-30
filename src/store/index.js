// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import homeReducer from './reducers/homeReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer
  },
});

export default store;

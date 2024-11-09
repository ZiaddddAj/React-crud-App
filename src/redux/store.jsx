import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './reducer';

const store = configureStore({
  reducer: {
    items: itemsReducer
  }
});

export default store;
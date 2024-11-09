import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: '1', name: 'John Doe', username: 'johndoe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', username: 'janesmith', email: 'jane@example.com' },
    { id: '3', name: 'Bob Johnson', username: 'bobjohnson', email: 'bob@example.com' }
  ]
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    editItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addItem, editItem, updateItem, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;
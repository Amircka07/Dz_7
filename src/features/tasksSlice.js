import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.status = todo.status === 'pending' ? 'completed' : 'pending';
      }
    },
  },
});

export const { addTodo, toggleTodoStatus } = todosSlice.actions;

export default todosSlice.reducer;

import { createReducer } from '@reduxjs/toolkit';
import { v4 as uniqueId } from 'uuid';

import { addTodo, deleteTodo } from './actions';

type Todo = {
  id: string;
  value: string;
  completed: boolean;
};

const initialState: Todo[] = [];

export const todosReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.push({ value: action.payload, id: uniqueId(), completed: false });
  });
  builder.addCase(deleteTodo, (state, action) => {
    state.filter((todo) => todo.id !== action.payload);
  });

  builder.addDefaultCase((state, action) => {});
});

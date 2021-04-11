import { createReducer } from '@reduxjs/toolkit';
import { v4 as uniqueId } from 'uuid';

import { addTodo, completeTodo, deleteTodo } from './actions';

export type Todo = {
  id: string;
  value: string;
  completed: boolean;
};

type TodoState = Record<Todo['id'], Todo>;

const initialState: TodoState = {};

export const todosReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    const id = uniqueId();
    state[id] = { value: action.payload, id, completed: false };
  });

  builder.addCase(deleteTodo, (state, action) => {
    delete state[action.payload];
  });

  builder.addCase(completeTodo, (state, action) => {
    const todo = state[action.payload];
    state[action.payload] = { ...todo, completed: !todo.completed };
  });

  builder.addDefaultCase((state, action) => {});
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uniqueId } from 'uuid';

import type { AddTodo, TodosState } from './types';

const initialState: TodosState = {
  todoLists: {},
  todos: {},
  selectedList: ''
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddTodo>) => {
      const { listId, value } = action.payload;
      const id = uniqueId();

      state.todos[id] = {
        value,
        id,
        completed: false,
        listId
      };
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      delete state.todos[action.payload];
    },

    completeTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos[action.payload];
      state.todos[action.payload] = { ...todo, completed: !todo.completed };
    },

    addTodoToList: (state, action: PayloadAction<string>) => {
      const todoId = action.payload;

      state.todos[todoId].listId = state.selectedList;
    },

    addTodoList: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      const listId = uniqueId();

      state.todoLists[listId] = { listId, name };
    },

    setSelectedList: (state, action: PayloadAction<string>) => {
      state.selectedList = action.payload;
    }
  }
});

export const { reducer: todosReducer } = todosSlice;

export const {
  addTodo,
  addTodoToList,
  deleteTodo,
  completeTodo,
  setSelectedList,
  addTodoList
} = todosSlice.actions;

export const actions = {
  addTodo,
  addTodoToList,
  deleteTodo,
  completeTodo,
  setSelectedList,
  addTodoList
};

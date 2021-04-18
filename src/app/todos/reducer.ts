import { createReducer } from '@reduxjs/toolkit';
import { v4 as uniqueId } from 'uuid';

import {
  addTodo,
  completeTodo,
  deleteTodo,
  addTodoToList,
  addTodoList,
  deleteList,
  setSelectedList
} from './actions';

import type { TodosState } from './types';

const initialState: TodosState = {
  todoLists: {},
  todos: {},
  selectedList: ''
};

export const todosReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    const { listId, value } = action.payload;
    const id = uniqueId();

    state.todos[id] = {
      value,
      id,
      completed: false,
      listId
    };
  });

  builder.addCase(deleteTodo, (state, action) => {
    delete state.todos[action.payload];
  });

  builder.addCase(completeTodo, (state, action) => {
    const todo = state.todos[action.payload];
    state.todos[action.payload] = { ...todo, completed: !todo.completed };
  });

  builder.addCase(addTodoToList, (state, action) => {
    const todoId = action.payload;
    state.todos[todoId] = {
      ...state.todos[todoId],
      listId: state.selectedList
    };
  });

  builder.addCase(addTodoList, (state, action) => {
    const name = action.payload;
    const listId = uniqueId();

    state.todoLists[listId] = { listId, name };
  });

  builder.addCase(deleteList, (state, action) => {
    const id = action.payload;

    delete state.todoLists[id];

    state.todos = Object.values(state.todos).reduce(
      (object, todo) => ({ ...object, [todo.id]: todo }),
      {}
    );
  });

  builder.addCase(setSelectedList, (state, action) => {
    state.selectedList = action.payload;
  });

  builder.addDefaultCase((state, action) => {});
});

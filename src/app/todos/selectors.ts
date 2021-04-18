import { createSelector } from 'reselect';

import { RootState } from '../store';

import type { Todo } from './types';

const todosSelector = (state: RootState) => state?.todos || {};

const selectedListSelector = (state: RootState) => state?.selectedList || '';

const todosListSelector = (state: RootState) => state?.todoLists || {};

export const getTodoLists = createSelector(todosListSelector, (todos) =>
  Object.values(todos)
);

export const getSelectedList = createSelector(
  todosListSelector,
  selectedListSelector,
  (todos, selectedTodoId) => todos[selectedTodoId]
);

export const getTodos = createSelector(todosSelector, (todos): Todo[] =>
  Object.values(todos)
);

export const getSelectedTodos = createSelector(
  getTodos,
  selectedListSelector,
  (todos, selectedList) => todos.filter((todo) => todo.listId === selectedList)
);

import { createSelector } from 'reselect';

import { RootState } from '../store';
import { Todo } from './reducer';

const todosSelector = (state: RootState) => state?.todos || {};

export const getSelectedList = (state: RootState) => state?.selectedList || '';

const todosListSelector = (state: RootState) => state?.todoLists || {};

export const getTodoLists = createSelector(todosListSelector, (todos) =>
  Object.values(todos)
);

export const getTodos = createSelector(todosSelector, (todos): Todo[] =>
  Object.values(todos)
);

export const getSelectedTodos = createSelector(
  getTodos,
  getSelectedList,
  (todos, selectedList) => todos.filter((todo) => todo.listId === selectedList)
);

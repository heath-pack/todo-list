import { createAction } from '@reduxjs/toolkit';

import type { Todo } from './types';

type AddTodo = { value: string; listId: Todo['listId'] };

export const addTodo = createAction<AddTodo>('addTodo');

export const deleteTodo = createAction<string>('deleteTodo');

export const completeTodo = createAction<string>('completeTodo');

export const addTodoToList = createAction<string>('addTodoToList');

export const addTodoList = createAction<string>('addTodoList');

export const deleteList = createAction<string>('deleteList');

export const setSelectedList = createAction<string>('setSelectedList');

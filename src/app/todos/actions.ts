import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction<string>('addTodo');

export const deleteTodo = createAction<string>('deleteTodo');

export const completeTodo = createAction<string>('completeTodo');

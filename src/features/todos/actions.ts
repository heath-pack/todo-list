import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction<string>('addTodo');

export const deleteTodo = createAction<string>('deleteTodo');

import { createSelector } from 'reselect';
import { RootState } from '../store';

const todosSelector = (state: RootState) => state?.todos || {};

export const getTodos = createSelector(todosSelector, (state) =>
  Object.values(state)
);

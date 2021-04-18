import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { todosReducer } from './todos/reducer';

export const store = configureStore({
  reducer: todosReducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

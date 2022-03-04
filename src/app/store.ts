import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { todosReducer, actions } from './todos/slice';

export const store = configureStore({
  devTools: { actionCreators: { ...actions } },
  reducer: {
    todos: todosReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

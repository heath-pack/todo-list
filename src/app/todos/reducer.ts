import { createReducer } from '@reduxjs/toolkit';
import { v4 as uniqueId } from 'uuid';

import {
  addTodo,
  completeTodo,
  deleteTodo,
  addTodoToList,
  addTodoList,
  deleteList
} from './actions';

export type Todo = {
  id: string;
  value: string;
  completed: boolean;
  listId: string;
};

type Todos = Record<Todo['id'], Todo>;

type TodoList = { listId: Todo['listId']; name: string };

type TodoLists = Record<TodoList['listId'], TodoList>;

type TodosState = {
  todos: Todos;
  todoLists: TodoLists;
  selectedList: TodoList['listId'];
};

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

    const matchingTodos = Object.values(state.todos).filter(
      (todo) => todo.listId !== id
    );

    state.todos = matchingTodos.reduce(
      (object, todo) => ({ ...object, [todo.id]: todo }),
      {}
    );
  });

  builder.addDefaultCase((state, action) => {});
});

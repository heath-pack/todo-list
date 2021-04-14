import React from 'react';

import { CreateTodo } from './createTodo/CreateTodo';
import { TodoList } from './todoList/TodoList';

export const TodoPage = () => {
  return (
    <div>
      <CreateTodo />
      <TodoList />
    </div>
  );
};

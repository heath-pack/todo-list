import React from 'react';
import { useSelector } from 'react-redux';

import { CreateTodo } from './createTodo/CreateTodo';
import { getSelectedList } from './selectors';
import { TodoList } from './todoList/TodoList';

export const TodoPage = () => {
  const selectedList = useSelector(getSelectedList);

  return (
    <div>
      <h1>{selectedList}</h1>
      <CreateTodo />
      <TodoList />
    </div>
  );
};

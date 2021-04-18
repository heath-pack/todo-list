import React from 'react';
import { useSelector } from 'react-redux';

import { getSelectedTodos } from '../selectors';
import { TodoItem } from './todoItem/Todo';

export const TodoList = () => {
  const todos = useSelector(getSelectedTodos);

  return (
    <div>
      {todos?.map?.((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

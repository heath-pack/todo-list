import React, { FC } from 'react';
import { Checkbox, Button } from 'antd';

import { useTodoDispatch } from './hooks';

import type { Todo } from '../../types';

import './todo.scss';

export const TodoItem: FC<Todo> = ({ id, completed, value }) => {
  const { markCompleted, deleteTodoItem } = useTodoDispatch();

  const completeTodo = () => markCompleted(id);
  const deleteTodo = () => deleteTodoItem(id);

  return (
    <div className="todo">
      <div>{value}</div>

      <div>
        <Checkbox checked={completed} onClick={completeTodo} />
        <Button onClick={deleteTodo}>Delete Item</Button>
      </div>
    </div>
  );
};

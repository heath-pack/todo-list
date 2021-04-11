import React, { FC } from 'react';
import { Checkbox, Button } from 'antd';

import { Todo } from '../reducer';
import { useTodoDispatch } from './hooks';

export const TodoItem: FC<Todo> = ({ id, completed, value }) => {
  const { markCompleted, deleteTodoItem } = useTodoDispatch();

  const completeTodo = () => markCompleted(id);
  const deleteTodo = () => deleteTodoItem(id);

  return (
    <div className="todo">
      <div className="todo-content">{value}</div>

      <div>
        <Checkbox checked={completed} onClick={completeTodo} />
        <Button onClick={deleteTodo}>Delete Item</Button>
      </div>
    </div>
  );
};

import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { CreateTodo } from './createTodo/CreateTodo';
import { getSelectedList } from '../selectors';
import { TodoList } from './TodoList';

import './todoPage.scss';

export const TodoPage = () => {
  const selectedList = useSelector(getSelectedList);

  useEffect(() => {
    if (selectedList) {
      window.history.replaceState(null, '', `/${selectedList.name}`);
    }
  }, [selectedList]);

  return (
    <div className="todo-page">
      {selectedList ? (
        <Fragment>
          <h1>{selectedList.name}</h1>
          <CreateTodo />
          <TodoList />
        </Fragment>
      ) : (
        <h1>Create and select a list to start adding todos</h1>
      )}
    </div>
  );
};

import React from 'react';
<<<<<<< HEAD

import { useNavList } from './hooks';

import './navList.scss';

import type { TodoList } from '../types';

export const NavList = () => {
  const { lists, selectList } = useNavList();

  const handleOnClick = (listId: TodoList['listId']) => () => {
    selectList(listId);
  };
=======
import { useSelector } from 'react-redux';

import { getTodoLists } from '../selectors';

import './navList.scss';

export const NavList = () => {
  const lists = useSelector(getTodoLists);
>>>>>>> origin/master

  return (
    <ul className="navlist">
      {lists.map(({ listId, name }) => (
<<<<<<< HEAD
        <li key={listId} onClick={handleOnClick(listId)}>
          {name}
        </li>
=======
        <li key={listId}>{name}</li>
>>>>>>> origin/master
      ))}
    </ul>
  );
};

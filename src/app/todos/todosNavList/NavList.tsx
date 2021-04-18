import React from 'react';

import { useNavList } from './hooks';

import './navList.scss';

import type { TodoList } from '../types';

export const NavList = () => {
  const { lists, selectList } = useNavList();

  const handleOnClick = (listId: TodoList['listId']) => () => {
    selectList(listId);
  };

  return (
    <ul className="navlist">
      {lists.map(({ listId, name }) => (
        <li key={listId} onClick={handleOnClick(listId)}>
          {name}
        </li>
      ))}
    </ul>
  );
};

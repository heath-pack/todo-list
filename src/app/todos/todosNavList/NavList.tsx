import React from 'react';
import { useSelector } from 'react-redux';

import { getTodoLists } from '../selectors';

import './navList.scss';

export const NavList = () => {
  const lists = useSelector(getTodoLists);

  return (
    <ul className="navlist">
      {lists.map(({ listId, name }) => (
        <li key={listId}>{name}</li>
      ))}
    </ul>
  );
};

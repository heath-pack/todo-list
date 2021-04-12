import React from 'react';
import { useSelector } from 'react-redux';

import { getTodoLists } from '../selectors';

export const NavList = () => {
  const lists = useSelector(getTodoLists);

  return (
    <ul>
      {lists.map(({ listId, name }) => (
        <li key={listId}>
          <div>{name}</div>
        </li>
      ))}
    </ul>
  );
};

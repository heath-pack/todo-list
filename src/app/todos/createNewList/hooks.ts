import { useDispatch } from 'react-redux';

import { addTodoList } from '../slice';

export const useCreateList = () => {
  const dispatch = useDispatch();

  const createTodoList = (name: string) => dispatch(addTodoList(name));

  return { createTodoList };
};

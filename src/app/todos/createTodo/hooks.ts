import { useDispatch, useSelector } from 'react-redux';

import { addTodo } from '../slice';
import { getSelectedList } from '../selectors';

export const useCreateTodo = () => {
  const dispatch = useDispatch();

  const selectedList = useSelector(getSelectedList);

  const createTodo = (value: string) =>
    dispatch(addTodo({ value, listId: selectedList.listId }));

  return { createTodo };
};

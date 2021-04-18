import { useDispatch, useSelector } from 'react-redux';

import { setSelectedList } from '../actions';
import { getTodoLists } from '../selectors';

export const useNavList = () => {
  const dispatch = useDispatch();

  const lists = useSelector(getTodoLists);
  const selectList = (id: string) => dispatch(setSelectedList(id));

  return { lists, selectList };
};

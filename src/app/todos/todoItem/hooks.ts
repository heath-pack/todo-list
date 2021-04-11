import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../actions';

export const useTodoDispatch = () => {
  const dispatch = useDispatch();

  const markCompleted = (id: string) => dispatch(completeTodo(id));

  const deleteTodoItem = (id: string) => dispatch(deleteTodo(id));

  return { markCompleted, deleteTodoItem };
};

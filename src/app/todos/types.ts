export type Todo = {
  id: string;
  value: string;
  completed: boolean;
  listId: string;
};

export type Todos = Record<Todo['id'], Todo>;

export type TodoList = { listId: Todo['listId']; name: string };

export type TodoLists = Record<TodoList['listId'], TodoList>;

export type TodosState = {
  todos: Todos;
  todoLists: TodoLists;
  selectedList: TodoList['listId'];
};

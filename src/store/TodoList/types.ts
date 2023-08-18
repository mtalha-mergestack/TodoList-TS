interface ITodoListProps {
  todos: string[];
  loading: boolean;
  error: null | string;
  addTask: (index: number, text: string) => void;
  removeTask: (index: number) => void;
  editTask: (index: number, value: string) => void;
  fetchTasks: () => void;
}
interface ITodoList {
  id: number;
  todo: string;
  userId: number;
  completed: boolean;
}

interface ITodoState {
  todos: ITodoList;
  loading: boolean;
  error: null | string;
}
interface IPayload {
  index: number;
  value: string;
}
interface IAction {
  type: string;
  payload: IPayload;
}
interface IRootState {
  todo: ITodoState;
}
interface ITodoItemProps {
  keyId: number;
  value: number;
  completed: boolean;
  editListHandler: (index: number, value: string) => void;
  removeListHandler: (index: number) => void;
}
export enum TodoActionTypes {
  FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE",
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  EDIT_TODO = "EDIT_TODO",
}
export type { ITodoList, ITodoListProps, IAction, ITodoState, IRootState, ITodoItemProps };

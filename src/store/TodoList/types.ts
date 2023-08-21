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
  _id: string;
  todo: string;
  userId: number;
  completed: boolean;
}

interface ITodoState {
  todos: ITodoList[];
  loading: boolean;
  error: null | string;
}
interface IPayload {
  id: string;
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
interface IFormData {
  task: string;
}
export enum TodoActionTypes {
  FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST",
  FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
  FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE",
  ADD_TASK_REQUEST = "ADD_TASK_REQUEST",
  ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS",
  ADD_TASK_FAILURE = "ADD_TASK_FAILURE",
  DELETE_TASK_REQUEST = "DELETE_TASK_REQUEST",
  DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS",
  DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE",
  UPDATE_TASK_REQUEST = "UPDATE_TASK_REQUEST",
  UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS",
  UPDATE_TASK_FAILURE = "UPDATE_TASK_FAILURE",
}
export type {
  ITodoList,
  ITodoListProps,
  IAction,
  ITodoState,
  IRootState,
  ITodoItemProps,
  IFormData,
};

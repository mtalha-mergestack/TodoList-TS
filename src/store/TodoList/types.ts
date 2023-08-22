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
export type {
  ITodoList,
  ITodoListProps,
  IAction,
  ITodoState,
  IRootState,
  ITodoItemProps,
  IFormData,
};

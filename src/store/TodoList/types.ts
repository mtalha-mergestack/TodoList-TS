export interface ITodoListProps {
  todos: string[];
  loading: boolean;
  error: null | string;
  addTask: (text: string) => void;
  removeTask: (index: number) => void;
  editTask: (index: number, value: string) => void;
  fetchTasks: () => void;
}

export interface ITodoList {
  _id: string;
  todo: string;
  userId: number;
  completed: boolean;
}

export interface ITodoState {
  todos: ITodoList[];
  loading: boolean;
  error: null | string;
}

export interface IPayload {
  id: string;
  value: string;
}

export interface IAction {
  type: string;
  payload: IPayload;
}

export interface IRootState {
  todo: ITodoState;
}

export interface ITodoItemProps {
  taskId: string;
  value: number;
  completed: boolean;
  editTaskHandler: (index: number, value: string) => void;
  removeTaskHandler: (index: number) => void;
}

export interface IFormData {
  Task: string;
}

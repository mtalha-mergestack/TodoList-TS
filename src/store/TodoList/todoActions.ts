import { ITodoList } from "src/store/TodoList/types";
import { TodoActionTypes } from "src/utils/constants";

export const fetchTasks = () => ({ type: TodoActionTypes.FETCH_TASKS });

export const fetchTasksSuccess = (todos: ITodoList) => ({
  type: TodoActionTypes.FETCH_TASKS_SUCCESS,
  payload: todos,
});

export const fetchTodosFailure = (error: string) => ({
  type: TodoActionTypes.FETCH_TASKS_FAILURE,
  payload: error,
});

export const addTask = (task) => ({
  type: TodoActionTypes.ADD_TASK,
  payload: task,
});

export const addTaskSuccess = (task) => ({
  type: TodoActionTypes.ADD_TASK_SUCCESS,
  payload: task,
});

export const addTaskFailure = (error: string) => ({
  type: TodoActionTypes.ADD_TASK_FAILURE,
  payload: error,
});
export const deleteTask = (id) => ({
  type: TodoActionTypes.DELETE_TASK,
  payload: id,
});

export const deleteTaskSuccess = (id) => ({
  type: TodoActionTypes.DELETE_TASK_SUCCESS,
  payload: id,
});

export const deleteTaskFailure = (error: string) => ({
  type: TodoActionTypes.DELETE_TASK_FAILURE,
  payload: error,
});
export const updateTask = (id, text) => ({
  type: TodoActionTypes.UPDATE_TASK,
  payload: { id: id, todo: text },
});

export const updateTaskSuccess = (id, text) => ({
  type: TodoActionTypes.UPDATE_TASK_SUCCESS,
  payload: { id: id, todo: text },
});

export const updateTaskFailure = (error: string) => ({
  type: TodoActionTypes.UPDATE_TASK_FAILURE,
  payload: error,
});

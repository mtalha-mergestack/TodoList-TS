import { ITodoList } from "src/store/TodoList/types";
import { TODO_ACTIONS_TYPES } from "src/utils/constants";

export const fetchTasks = () => ({ type: TODO_ACTIONS_TYPES.FETCH_TASKS });

export const fetchTasksSuccess = (todos: ITodoList) => ({
  type: TODO_ACTIONS_TYPES.FETCH_TASKS_SUCCESS,
  payload: todos,
});

export const fetchTodosFailure = (error: string) => ({
  type: TODO_ACTIONS_TYPES.FETCH_TASKS_FAILURE,
  payload: error,
});

export const addTask = (task) => ({
  type: TODO_ACTIONS_TYPES.ADD_TASK,
  payload: task,
});

export const addTaskSuccess = (task) => ({
  type: TODO_ACTIONS_TYPES.ADD_TASK_SUCCESS,
  payload: task,
});

export const addTaskFailure = (error: string) => ({
  type: TODO_ACTIONS_TYPES.ADD_TASK_FAILURE,
  payload: error,
});

export const deleteTask = (id) => ({
  type: TODO_ACTIONS_TYPES.DELETE_TASK,
  payload: id,
});

export const deleteTaskSuccess = (id) => ({
  type: TODO_ACTIONS_TYPES.DELETE_TASK_SUCCESS,
  payload: id,
});

export const deleteTaskFailure = (error: string) => ({
  type: TODO_ACTIONS_TYPES.DELETE_TASK_FAILURE,
  payload: error,
});

export const updateTask = (id, text) => ({
  type: TODO_ACTIONS_TYPES.UPDATE_TASK,
  payload: { id: id, todo: text },
});

export const updateTaskSuccess = (id, text) => ({
  type: TODO_ACTIONS_TYPES.UPDATE_TASK_SUCCESS,
  payload: { id: id, todo: text },
});

export const updateTaskFailure = (error: string) => ({
  type: TODO_ACTIONS_TYPES.UPDATE_TASK_FAILURE,
  payload: error,
});

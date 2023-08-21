import { TodoActionTypes, ITodoList } from "@/store/TodoList/types";

export const fetchTodosRequest = () => ({ type: TodoActionTypes.FETCH_TODOS_REQUEST });
export const fetchTodosSuccess = (todos: ITodoList) => ({
  type: TodoActionTypes.FETCH_TODOS_SUCCESS,
  payload: todos,
});
export const fetchTodosFailure = (error: string) => ({
  type: TodoActionTypes.FETCH_TODOS_FAILURE,
  payload: error,
});
export const addTodo = (index: number, text: string) => ({
  type: TodoActionTypes.ADD_TODO,
  payload: { id: index, todo: text },
});

export const removeTodo = (id: number) => ({
  type: TodoActionTypes.REMOVE_TODO,
  payload: id,
});
export const editTodo = (editTaskIndex: number, editTaskValue: string) => ({
  type: TodoActionTypes.EDIT_TODO,
  payload: { index: editTaskIndex, value: editTaskValue },
});

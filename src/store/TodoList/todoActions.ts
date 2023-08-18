import { TodoActionTypes } from "@/store/TodoList/types";

export const addTodo = (index: number,text: string) => ({
  type: TodoActionTypes.ADD_TODO,
  payload: {id:index,todo:text},
});

export const removeTodo = (id: number) => ({
  type: TodoActionTypes.REMOVE_TODO,
  payload: id,
});
export const editTodo = (editTaskIndex: number, editTaskValue: string) => ({
  type: TodoActionTypes.EDIT_TODO,
  payload: { index: editTaskIndex, value: editTaskValue },
});

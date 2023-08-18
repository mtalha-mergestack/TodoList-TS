/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import TodoList from "@/components/TodoList/TodoList";
import { addTodo, removeTodo, editTodo } from "@/store/TodoList/todoActions";
import { IRootState } from "@/store/TodoList/types";
import { getTodos } from "@/store/utils/api";

const mapStateToProps = (state: IRootState) => ({
  todos: state.todos,
  loading: state.loading,
  error: state.error,
});
const maptDispatchToProps = (dispatch) => ({
  addTask: (index: number, text: string): void => {
    dispatch(addTodo(index, text));
  },
  removeTask: (id: number): void => {
    dispatch(removeTodo(id));
  },
  editTask: (editTaskIndex: number, editTaskValue: string): void => {
    dispatch(editTodo(editTaskIndex, editTaskValue));
  },
  fetchTasks: () => {
    getTodos(dispatch);
  },
});
const TodoListContainer = connect(mapStateToProps, maptDispatchToProps)(TodoList);
export default TodoListContainer;

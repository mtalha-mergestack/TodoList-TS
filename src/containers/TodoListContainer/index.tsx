/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import TodoList from "@/components/TodoList/TodoList";
import { addTodo, removeTodo, editTodo } from "@/store/actions";

const mapStateToProps = (state: object) => ({
  todos: state.todos,
});
const maptDispatchToProps = (dispatch) => ({
  addTask: (text: string): void => {
    dispatch(addTodo(text));
  },
  removeTask: (id: number): void => {
    dispatch(removeTodo(id));
  },
  editTask: (editTaskIndex: number, editTaskValue: string): void => {
    dispatch(editTodo(editTaskIndex, editTaskValue));
  },
});
const TodoListContainer = connect(mapStateToProps, maptDispatchToProps)(TodoList);
export default TodoListContainer;

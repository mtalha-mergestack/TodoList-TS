/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import TodoList from "src/components/TodoList/TodoList";
import { fetchTasks, addTask, deleteTask, updateTask } from "src/store/TodoList/todoActions";
import { IRootState } from "src/store/TodoList/types";

const mapStateToProps = (state: IRootState) => ({
  todos: state.todo.todos,
  loading: state.todo.loading,
  error: state.todo.error,
});

const maptDispatchToProps = (dispatch) => ({
  addTask: (index: number, text: string): void => {
    dispatch(addTask({ todo: text, isCompleted: false, userId: 1 }));
  },
  removeTask: (id: string): void => {
    dispatch(deleteTask(id));
  },
  editTask: (id: string, value: string): void => {
    dispatch(updateTask(id, value));
  },
  fetchTasks: () => {
    dispatch(fetchTasks());
  },
});
const TodoListContainer = connect(mapStateToProps, maptDispatchToProps)(TodoList);
export default TodoListContainer;

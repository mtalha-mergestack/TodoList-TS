/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import TodoList from "src/components/TodoList/TodoList";
import {
  fetchTasksRequest,
  addTaskRequest,
  deleteTaskRequest,
  updateTaskRequest,
} from "src/store/TodoList/todoActions";
import { IRootState } from "src/store/TodoList/types";

const mapStateToProps = (state: IRootState) => ({
  todos: state.todo.todos,
  loading: state.todo.loading,
  error: state.todo.error,
});

const maptDispatchToProps = (dispatch) => ({
  addTask: (index: number, text: string): void => {
    dispatch(addTaskRequest({ todo: text, isCompleted: false, userId: 1 }));
  },
  removeTask: (id: string): void => {
    dispatch(deleteTaskRequest(id));
  },
  editTask: (id: string, value: string): void => {
    dispatch(updateTaskRequest(id, value));
  },
  fetchTasks: () => {
    dispatch(fetchTasksRequest());
  },
});
const TodoListContainer = connect(mapStateToProps, maptDispatchToProps)(TodoList);
export default TodoListContainer;

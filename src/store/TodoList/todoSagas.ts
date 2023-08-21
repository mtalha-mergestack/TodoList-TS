import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { TodoActionTypes } from "src/store/TodoList/types";
import {
  fetchTasksSuccess,
  fetchTodosFailure,
  addTaskSuccess,
  addTaskFailure,
  deleteTaskSuccess,
  deleteTaskFailure,
  updateTaskSuccess,
  updateTaskFailure,
} from "src/store/TodoList/todoActions";

function* fetchTasksSaga() {
  try {
    const response = yield call(axios.get, `${import.meta.env.VITE_BASE_URL}todos`);
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTodosFailure(error));
  }
}

function* addTodo(action) {
  try {
    const response = yield call(
      axios.post,
      `${import.meta.env.VITE_BASE_URL}todos`,
      action.payload
    );
    yield put(addTaskSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(addTaskFailure(error));
  }
}

function* deleteTodo(action) {
  try {
    console.log(action);
    yield call(axios.delete, `${import.meta.env.VITE_BASE_URL}todos/${action.payload}`);
    yield put(deleteTaskSuccess(action.payload));
  } catch (error) {
    console.log(error);
    yield put(deleteTaskFailure(error));
  }
}
function* updateTodo(action) {
  try {
    console.log(action);
    yield call(axios.put, `${import.meta.env.VITE_BASE_URL}todos/${action.payload.id}`, {
      todo: action.payload.todo,
    });

    yield put(updateTaskSuccess(action.payload.id, action.payload.todo));
  } catch (error) {
    console.log(error);
    yield put(updateTaskFailure(error));
  }
}

export function* watchFetchTasksSaga() {
  yield takeEvery(TodoActionTypes.FETCH_TASKS_REQUEST, fetchTasksSaga);
}
export function* watchAddTaskSaga() {
  yield takeEvery(TodoActionTypes.ADD_TASK_REQUEST, addTodo);
}
export function* watchDeleteTaskSaga() {
  yield takeEvery(TodoActionTypes.DELETE_TASK_REQUEST, deleteTodo);
}
export function* watchUpdateTaskSaga() {
  yield takeEvery(TodoActionTypes.UPDATE_TASK_REQUEST, updateTodo);
}

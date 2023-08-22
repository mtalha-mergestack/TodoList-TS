import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { TodoActionTypes } from "src/utils/constants";
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
    const response = yield call(axios.get, `${import.meta.env.VITE_BASE_URL}/todos`);
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTodosFailure(error));
  }
}

function* addTodo(action) {
  try {
    const response = yield call(
      axios.post,
      `${import.meta.env.VITE_BASE_URL}/todos`,
      action.payload
    );
    yield put(addTaskSuccess(response.data));
  } catch (error) {
    yield put(addTaskFailure(error));
  }
}

function* deleteTodo(action) {
  try {
    yield call(axios.delete, `${import.meta.env.VITE_BASE_URL}/todos/${action.payload}`);
    yield put(deleteTaskSuccess(action.payload));
  } catch (error) {
    yield put(deleteTaskFailure(error));
  }
}
function* updateTodo(action) {
  try {
    yield call(axios.put, `${import.meta.env.VITE_BASE_URL}/todos/${action.payload.id}`, {
      todo: action.payload.todo,
    });

    yield put(updateTaskSuccess(action.payload.id, action.payload.todo));
  } catch (error) {
    yield put(updateTaskFailure(error));
  }
}

export function* watchFetchTasksSaga() {
  yield takeEvery(TodoActionTypes.FETCH_TASKS, fetchTasksSaga);
}
export function* watchAddTaskSaga() {
  yield takeEvery(TodoActionTypes.ADD_TASK, addTodo);
}
export function* watchDeleteTaskSaga() {
  yield takeEvery(TodoActionTypes.DELETE_TASK, deleteTodo);
}
export function* watchUpdateTaskSaga() {
  yield takeEvery(TodoActionTypes.UPDATE_TASK, updateTodo);
}

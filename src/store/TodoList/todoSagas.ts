import axios from "axios";
import { TODO_ACTIONS_TYPES } from "src/utils/constants";
import { BASE_URL } from "src/env-config";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
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
    const response = yield call(axios.get, `${BASE_URL}/todos`);
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTodosFailure(error));
  }
}

function* addTodo(action) {
  try {
    const response = yield call(
      axios.post,
      `${BASE_URL}/todos`,
      action.payload
    );
    yield put(addTaskSuccess(response.data));
  } catch (error) {
    yield put(addTaskFailure(error));
  }
}

function* deleteTodo(action) {
  try {
    yield call(axios.delete, `${BASE_URL}/todos/${action.payload}`);
    yield put(deleteTaskSuccess(action.payload));
  } catch (error) {
    yield put(deleteTaskFailure(error));
  }
}

function* updateTodo(action) {
  try {
    yield call(axios.put, `${BASE_URL}/todos/${action.payload.id}`, {
      todo: action.payload.todo,
    });

    yield put(updateTaskSuccess(action.payload.id, action.payload.todo));
  } catch (error) {
    yield put(updateTaskFailure(error));
  }
}

export function* watchTodoSaga() {
  yield takeLatest(TODO_ACTIONS_TYPES.FETCH_TASKS, fetchTasksSaga);
  yield takeEvery(TODO_ACTIONS_TYPES.ADD_TASK, addTodo);
  yield takeEvery(TODO_ACTIONS_TYPES.DELETE_TASK, deleteTodo);
  yield takeEvery(TODO_ACTIONS_TYPES.UPDATE_TASK, updateTodo);
}

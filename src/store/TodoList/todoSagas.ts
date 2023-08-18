import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { TodoActionTypes } from "@/store/TodoList/types";
import { fetchTodosSuccess, fetchTodosFailure } from "@/store/TodoList/todoActions";

function* fetchTodosSaga() {
  try {
    const response = yield call(axios.get, "https://dummyjson.com/todos"); // Adjust the URL
    yield put(fetchTodosSuccess(response.data.todos));
  } catch (error) {
    yield put(fetchTodosFailure(error));
  }
}

function* watchFetchTodos() {
  yield takeEvery(TodoActionTypes.FETCH_TODOS_REQUEST, fetchTodosSaga);
}

export default watchFetchTodos;

import { all } from "redux-saga/effects";
import {
  watchFetchTasksSaga,
  watchAddTaskSaga,
  watchDeleteTaskSaga,
  watchUpdateTaskSaga,
} from "src/store/TodoList/todoSagas";

function* rootSaga() {
  yield all([
    watchFetchTasksSaga(),
    watchAddTaskSaga(),
    watchDeleteTaskSaga(),
    watchUpdateTaskSaga(),
  ]);
}

export default rootSaga;

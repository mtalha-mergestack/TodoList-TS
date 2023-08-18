import { all } from "redux-saga/effects";
import watchFetchTodos from "@/store/TodoList/todoSagas";

function* rootSaga() {
  yield all([watchFetchTodos()]);
}

export default rootSaga;

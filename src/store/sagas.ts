import { all } from "redux-saga/effects";
import { watchTodoSaga } from "src/store/TodoList/todoSagas";

function* rootSaga() {
  yield all([watchTodoSaga()]);
}

export default rootSaga;

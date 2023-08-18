import { createStore, applyMiddleware } from "redux";
import todoReducer from "@/store/TodoList/todoReducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "@/store/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(todoReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;

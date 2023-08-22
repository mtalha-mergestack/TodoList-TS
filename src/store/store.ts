import { createStore, applyMiddleware } from "redux";
import {rootReducer} from "src/store/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "src/store/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;

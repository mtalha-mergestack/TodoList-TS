import {combineReducers } from 'redux';
import todoReducer from 'src/store/TodoList/todoReducers';

export const rootReducer = combineReducers({
  todo: todoReducer,
});
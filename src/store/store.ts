import { createStore } from "redux";
import todoReducer from "@/store/TodoList/todoReducers";

const store = createStore(todoReducer);

export default store;

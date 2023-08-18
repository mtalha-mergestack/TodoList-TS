import axios from "axios";
import { TodoActionTypes } from "../TodoList/types";

export const getTodos = async (dispatch) => {
  dispatch({ type: TodoActionTypes.FETCH_TODOS_REQUEST });
  try {
    const response = await axios.get("https://dummyjson.com/todos");
    dispatch({
      type: TodoActionTypes.FETCH_TODOS_SUCCESS,
      payload: response.data.todos,
    });
  } catch (error) {
    dispatch({ type: TodoActionTypes.FETCH_TODOS_FAILURE, payload: error });
  }
};

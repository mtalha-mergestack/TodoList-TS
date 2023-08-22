import { ITodoState, IAction, ITodoList } from "src/store/TodoList/types";
import { TodoActionTypes } from "src/utils/constants";

const initialState: ITodoState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TASKS:
      return { ...state, loading: true, error: null };

    case TodoActionTypes.FETCH_TASKS_SUCCESS:
      return { ...state, loading: false, todos: action.payload, error: null };

    case TodoActionTypes.FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case TodoActionTypes.ADD_TASK:
      return { ...state, loading: true, error: null };

    case TodoActionTypes.ADD_TASK_SUCCESS:
      return {
        todos: [...state.todos, action.payload],
        loading: false,
        error: null,
      };

    case TodoActionTypes.ADD_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TodoActionTypes.DELETE_TASK:
      return { ...state, loading: true, error: null };

    case TodoActionTypes.DELETE_TASK_SUCCESS:
      return {
        todos: state.todos.filter((todoItem: ITodoList) => todoItem._id != action.payload),
        loading: false,
        error: null,
      };

    case TodoActionTypes.DELETE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TodoActionTypes.UPDATE_TASK:
      return { ...state, loading: true, error: null };

    case TodoActionTypes.UPDATE_TASK_SUCCESS:
      return {
        todos: state.todos.map((todoItem: ITodoList) =>
          todoItem._id == action.payload.id ? { ...todoItem, todo: action.payload.todo } : todoItem
        ),
        loading: false,
        error: null,
      };

    case TodoActionTypes.UPDATE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;

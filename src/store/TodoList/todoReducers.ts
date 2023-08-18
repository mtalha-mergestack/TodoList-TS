import { ITodoState, IAction, ITodoList } from "@/store/TodoList/types";
import { TodoActionTypes } from "@/store/TodoList/types";

const initialState: ITodoState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS_REQUEST:
      return { ...state, loading: true, error: null };

    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload, error: null };

    case TodoActionTypes.FETCH_TODOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case TodoActionTypes.ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case TodoActionTypes.REMOVE_TODO:
      return {
        todos: state.todos.filter((todoItem: ITodoList) => todoItem.id != action.payload),
      };
    case TodoActionTypes.EDIT_TODO:
      return {
        todos: state.todos.map((todoItem: ITodoList) =>
          todoItem.id == action.payload.index ? action.payload.value : todoItem.todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;

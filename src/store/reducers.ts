interface TodoState {
  todos: string[];
}

const initialState: TodoState = {
  todos: [],
};
interface RootState {
  todo: TodoState;
}

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((_, index: number) => index != action.payload),
      };
    case "EDIT_TODO":
      return {
        todos: state.todos.map((todo: string, index: number) =>
          index == action.payload.index ? action.payload.value : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
export type { RootState };

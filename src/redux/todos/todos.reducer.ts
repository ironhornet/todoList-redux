import { ITodosState } from "../../components/inputField/inputField.interface";
import { toggleTodo, deleteTodo } from "./helpers/todoHelpers";
import { ITodoActions } from "./todos.interface";

const INITIAL_STATE: ITodosState = {
  todos: [],
  loading: true,
  error: null,
};

const todoReducer = (
  state: ITodosState = INITIAL_STATE,
  action: ITodoActions
): ITodosState => {
  switch (action.type) {
    case "ADD_TODO_SUCCESS": {
      const { id, content } = action.payload;
      return {
        ...state,
        loading: false,
        todos: [...state.todos, { content, completed: false, id }],
      };
    }

    case "TOGGLE_TODO_SUCCESS": {
      const todos = toggleTodo(state, action);
      return { ...state, todos, loading: false };
    }

    case "GET_TODO_LIST_SUCCESS": {
      const { loading, error } = action.payload;

      return {
        ...state,
        todos: action.payload.todos,
        loading: loading,
        error: error,
      };
    }

    case "DELETE_TODO_SUCCESS": {
      const todos = deleteTodo(state, action);
      return { ...state, todos, loading: false };
    }

    case "IS_LOADING": {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case "IS_ERROR": {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;

import axios from "axios";
import { Dispatch } from "redux";

import { ITodo } from "../../components/todo/todo.interface";
import { ITodosState } from "../../components/inputField/inputField.interface";
import {
  ITodoActions,
  IAddTodoAction,
  IToggleTodoAction,
  ILoadingAction,
  IErrorAction,
  IDeleteTodoAction,
  IGetTodoListAction,
} from "./todos.interface";

import {
  ADD_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS,
  GET_TODO_LIST_SUCCESS,
  IS_LOADING,
  IS_ERROR,
} from "./todos.actionTypes";

export const isLoading = (flag: boolean): ILoadingAction => ({
  type: IS_LOADING,
  payload: flag,
});

export const isError = (error: string): IErrorAction => ({
  type: IS_ERROR,
  payload: error,
});

export const getTodosListSuccess = (
  todos: ITodosState
): IGetTodoListAction => ({
  type: GET_TODO_LIST_SUCCESS,
  payload: todos,
});

export const addTodoSuccess = (todo: ITodo): IAddTodoAction => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    ...todo,
  },
});

export const toggleTodoSuccess = (id: string): IToggleTodoAction => ({
  type: TOGGLE_TODO_SUCCESS,
  payload: id,
});

export const deleteTodoSuccess = (id: string): IDeleteTodoAction => ({
  type: DELETE_TODO_SUCCESS,
  payload: id,
});

export const addTodo = (todo: ITodo) => {
  return (dispatch: Dispatch<ITodoActions>) => {
    dispatch(isLoading(true));
    axios
      .post("http://localhost:3004/todos", {
        ...todo,
      })
      .then((response) => dispatch(addTodoSuccess(response.data)))
      .catch((error) => dispatch(isError("Error adding todo")));
  };
};

// export const getTodoList = () => {
//   return (dispatch: Dispatch<ITodoActions>) => {
//     dispatch(isLoading(true));
//     axios
//       .get("http://localhost:3004/todos")
//       .then((response) => {
//         dispatch(
//           getTodosListSuccess({
//             todos: response.data,
//             loading: false,
//             error: null,
//           })
//         );
//       })
//       .catch((error) => dispatch(isError("Error getting todoList")));
//   };
// };

export const deleteTodo = (id: string) => {
  return (dispatch: Dispatch<ITodoActions>) => {
    axios
      .delete(`http://localhost:3004/todos/${id}`)
      .then((response) => {
        dispatch(deleteTodoSuccess(id));
      })
      .catch((error) => dispatch(isError("Error deleting todo")));
  };
};

export const upadateTodo = (id: string, completed: boolean) => {
  return (dispatch: Dispatch<ITodoActions>) => {
    axios
      .patch(`http://localhost:3004/todos/${id}`, {
        completed,
      })
      .then((response) => {})
      .catch((error) => dispatch(isError("Error updating todo")));
  };
};

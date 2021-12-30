import { Dispatch } from "redux";

import { request } from "../../utils/axiosUtils";
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
    request(
      { url: "/todos", data: { ...todo }, method: "post" },
      (response: any) => {
        dispatch(addTodoSuccess(response.data));
      },
      (error: string) => {
        dispatch(isError("Error adding todo"));
      }
    );
  };
};

export const getTodoList = () => {
  return (dispatch: Dispatch<ITodoActions>) => {
    dispatch(isLoading(true));
    request(
      { url: "/todos", method: "get" },
      (response: any) => {
        dispatch(
          getTodosListSuccess({
            todos: response.data,
            loading: false,
            error: null,
          })
        );
      },
      (error: string) => {
        dispatch(isError("Error getting todoList"));
      }
    );
  };
};

export const deleteTodo = (id: string) => {
  return (dispatch: Dispatch<ITodoActions>) => {
    dispatch(isLoading(true));
    request(
      { url: `/todos/${id}`, method: "delete" },
      (response: any) => {
        dispatch(deleteTodoSuccess(id));
      },
      (error: string) => {
        dispatch(isError("Error deleting todo"));
      }
    );
  };
};

export const upadateTodo = (id: string, completed: boolean) => {
  return (dispatch: Dispatch<ITodoActions>) => {
    dispatch(isLoading(true));
    request(
      { url: `/todos/${id}`, data: { completed }, method: "patch" },
      (response: any) => {
        dispatch(toggleTodoSuccess(id));
      },
      (error: string) => {
        dispatch(isError("Error updating todo"));
      }
    );
  };
};

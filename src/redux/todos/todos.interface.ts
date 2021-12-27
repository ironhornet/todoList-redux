import { ITodo } from "../../components/todo/todo.interface";
import { ITodosState } from "../../components/inputField/inputField.interface";

export interface IAddTodoAction {
  type: "ADD_TODO_SUCCESS";
  payload: ITodo;
}
export interface IToggleTodoAction {
  type: "TOGGLE_TODO_SUCCESS";
  payload: string;
}
export interface IGetTodoListAction {
  type: "GET_TODO_LIST_SUCCESS";
  payload: ITodosState;
}
export interface IDeleteTodoAction {
  type: "DELETE_TODO_SUCCESS";
  payload: string;
}
export interface IErrorAction {
  type: "IS_ERROR";
  payload: string;
}
export interface ILoadingAction {
  type: "IS_LOADING";
  payload: boolean;
}

export type ITodoActions =
  | IAddTodoAction
  | IToggleTodoAction
  | IGetTodoListAction
  | IDeleteTodoAction
  | IErrorAction
  | ILoadingAction;


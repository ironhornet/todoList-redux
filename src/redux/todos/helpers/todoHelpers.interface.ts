import {ITodo} from "../../../components/todo/todo.interface"
export interface IToggleTodoAction {
    type: string;
    payload: ITodo;
  }

  export interface IDeleteTodoAction {
    type: string;
    payload: any;
  }
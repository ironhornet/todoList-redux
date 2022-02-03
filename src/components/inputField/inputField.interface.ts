import { ITodo, ITodoResponse } from "../todo/todo.interface";

export interface IInputFieldProps {
    todos: ITodoResponse[];
  }
export interface ITodosState extends IInputFieldProps{
  loading: boolean
  error: null | string | undefined
}
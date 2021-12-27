import { ITodo } from "../todo/todo.interface";

export interface IInputFieldProps {
    todos: ITodo[];
  }
export interface ITodosState extends IInputFieldProps{
  loading: boolean
  error: null | string
}
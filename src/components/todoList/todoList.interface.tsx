import { ITodo, ITodoResponse } from "../todo/todo.interface";

export interface ITodoListProps {
    todos: ITodoResponse[],
    loading: boolean,
    error: null | string | undefined
}
import { ITodo } from "../todo/todo.interface";

export interface ITodoListProps {
    todos: ITodo[],
    loading: boolean,
    error: null | string
}
import { ITodosState } from "../../../components/inputField/inputField.interface";
import { ITodo } from "../../../components/todo/todo.interface";
import { IToggleTodoAction, IDeleteTodoAction } from "./todoHelpers.interface";

export const toggleTodo = (state: ITodosState, action: IToggleTodoAction) => {
  const todos = state.todos.map((todo: ITodo) =>
    todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
  );
  return todos;
};

export const deletedTodo = (state: ITodosState, action: IDeleteTodoAction) => {
  const todos = state.todos.filter((todo: ITodo) => todo.id !== action.payload);
  return todos;
};

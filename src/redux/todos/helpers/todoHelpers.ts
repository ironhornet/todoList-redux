import { ITodosState } from "../../../components/inputField/inputField.interface";
import { ITodo } from "../../../components/todo/todo.interface";
import { ITodoActions } from "../todos.interface";

export const toggleTodo = (state: ITodosState, action: ITodoActions) => {
  const todos = state.todos.map((todo: ITodo) =>
    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
  );
  return todos;
};

export const deleteTodo = (state: ITodosState, action: ITodoActions) => {
  const todos = state.todos.filter((todo: ITodo) => todo.id !== action.payload);
  return todos;
};

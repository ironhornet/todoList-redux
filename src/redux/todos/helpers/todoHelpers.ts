import { current } from "@reduxjs/toolkit";
import { ITodosState } from "../../../components/inputField/inputField.interface";
import { ITodo } from "../../../components/todo/todo.interface";
import { IToggleTodoAction, IDeleteTodoAction } from "./todoHelpers.interface";

export const toggleTodo = (state: ITodosState, action: any) => {
  const todos = state.todos.map((todo) => {   
    return todo.id === action.payload.id
      ? { ...todo, payload:{ ...todo.payload, completed: !todo.payload.completed } }
      : todo;
  });
  return todos;
};

export const deletedTodo = (state: ITodosState, action: IDeleteTodoAction) => {
  console.log(action);
  

  const todos = state.todos.filter((todo) => todo.id !== action.payload);

  return todos;
};

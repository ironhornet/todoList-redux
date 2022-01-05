import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { ITodo } from "../../../components/todo/todo.interface";
import {  IUpdateTodoData } from "./actionCrators.interface";

export const getTodoList = createAsyncThunk(
  "todos/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3004/todos");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error getting Todo List");
    }
  }
);

export const addTodo = createAsyncThunk<ITodo, Partial<ITodo>>(
  "todos/addTodo",
  async (todo, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3004/todos", {
        ...todo,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error adding ToDo");
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3004/todos/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error deleting todo");
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (data: IUpdateTodoData, thunkAPI) => {
    const { id, completed } = data;
    try {
      const response = await axios.patch(
        `http://localhost:3004/todos/${id}`,
        { completed }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error updating todo");
    }
  }
);

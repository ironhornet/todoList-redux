// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {IValidationErrors} from "./actionCrators.interface"
// import axiosRequest from "../../../utils/axiosUtils";
// import { ITodo } from "../../../components/todo/todo.interface";
// import {  IUpdateTodoData } from "./actionCrators.interface";

// export const getTodoList = createAsyncThunk<ITodo[], undefined, {rejectValue: IValidationErrors}>(
//   "todos/getAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axiosRequest.get("/todos");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({errorMessage: "Error adding ToDo"});
//     }
//   }
// );

// export const addTodo = createAsyncThunk<ITodo, Partial<ITodo>, {rejectValue: IValidationErrors}>(
//   "todos/addTodo",
//   async (todo, thunkAPI) => {
//     try {
//       const response = await axiosRequest.post("/todos", {
//         ...todo,
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({errorMessage: "Error adding ToDo"});
//     }
//   }
// );

// export const deleteTodo = createAsyncThunk<string, string, {rejectValue: IValidationErrors}>(
//   "todos/deleteTodo",
//   async (id, thunkAPI) => {
//     try {
//       await axiosRequest.delete(`/todos/${id}`);
//       return id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({errorMessage: "Error deleting ToDo"});
//     }
//   }
// );

// export const updateTodo = createAsyncThunk<ITodo, IUpdateTodoData, {rejectValue: IValidationErrors}>(
//   "todos/updateTodo",
//   async (data, thunkAPI) => {
//     const { id, completed } = data;
//     try {
//       const response = await axiosRequest.patch(
//         `/todos/${id}`,
//         { completed }
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({errorMessage: "Error deleting ToDo"});
//     }
//   }
// );

export {}

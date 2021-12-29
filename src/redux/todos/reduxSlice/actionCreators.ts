import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { ITodo } from "../../../components/todo/todo.interface";
import { AppDispatch } from "../../store";
import { todoSlice } from "../reduxSlice/reduxSlice";

// export const getTodoList = () => {
//   return (dispatch: AppDispatch) => {
//     dispatch(todoSlice.actions.getTodoList);
//     axios
//       .get<ITodo[]>("http://localhost:3004/todos")
//       .then((response) => {
//         dispatch(todoSlice.actions.getTodoListSuccess(response.data));
//         console.log(response.data)
//       })
//       .catch((error) =>
//         dispatch(todoSlice.actions.getTodoListFailure(error.message))
//       );
//   };
// };

export const getTodoList = createAsyncThunk(
  "todos/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ITodo[]>("http://localhost:3004/todos");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Some error");
    }
  }
);

export const addTodo = createAsyncThunk("todos/addTodo", async (_, thunkAPI) => {
  try {
    const response = await axios.post<ITodo>("http://localhost:3004/todos");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Some error");
  }
});

export const deleteTodo = createAsyncThunk(
  "todos/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ITodo[]>("http://localhost:3004/todos");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Some error");
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todos/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ITodo[]>("http://localhost:3004/todos");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Some error");
    }
  }
);

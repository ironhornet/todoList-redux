import { createSlice} from "@reduxjs/toolkit";

import { ITodosState } from "../../../components/inputField/inputField.interface";
import { getTodoList, addTodo, deleteTodo, updateTodo } from "./actionCreators";
import { deletedTodo, toggleTodo } from "../helpers/todoHelpers";

const initialState: ITodosState = {
  todos: [],
  loading: true,
  error: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodoList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodoList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.todos = action.payload;
      })
      .addCase(getTodoList.rejected, (state, action ) => {
        state.loading = true;
        state.error = action.payload?.errorMessage;
      })
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        const { id, content } = action.payload;
        state.loading = false;
        state.error = "";
        state.todos = [...state.todos, { content, completed: false, id }];
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload?.errorMessage; 
      })
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.todos = deletedTodo(state, action);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload?.errorMessage;
      })
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.todos = [...toggleTodo(state, action)];
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload?.errorMessage;
      });
  },
});

export default todoSlice.reducer;

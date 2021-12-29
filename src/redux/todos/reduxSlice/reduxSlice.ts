import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { ITodosState } from "../../../components/inputField/inputField.interface";
import { ITodo } from "../../../components/todo/todo.interface";
import { getTodoList } from "./actionCreators";

const initialState: ITodosState = {
  todos: [],
  loading: true,
  error: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // addTodoSuccess: (state, action) => {
    //   const { id, content } = action.payload;
    //   state.todos.push({ content, completed: false, id });
    //   state.loading = false;
    // },
    getTodoList(state) {
      state.loading = true;
    },
    getTodoListSuccess(state, action: PayloadAction<ITodo[]>) {
      state.loading = false;
      state.error = "";
      state.todos = action.payload;
    },
    getTodoListFailure(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [getTodoList.fulfilled.type]: (state, action: PayloadAction<ITodo[]>) => {
      state.loading = false;
      state.error = "";
      state.todos = action.payload;
    },
    [getTodoList.pending.type]: (state) => {
      state.loading = true;
    },
    [getTodoList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = action.payload;
    },
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;

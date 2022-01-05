import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITodosState } from "../../../components/inputField/inputField.interface";
import { ITodo } from "../../../components/todo/todo.interface";
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

    [addTodo.fulfilled.type]: (state, action: PayloadAction<ITodo>) => {
      const { id, content } = action.payload;
      state.loading = false;
      state.error = "";
      state.todos = [...state.todos, { content, completed: false, id }]
    },
    [addTodo.pending.type]: (state) => {
      state.loading = true;
    },
    [addTodo.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = action.payload;
    },

    [deleteTodo.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = ""
      state.todos = deletedTodo(state, action)
    },
    [deleteTodo.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteTodo.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = action.payload;
    },

    [updateTodo.fulfilled.type]: (state, action: PayloadAction<ITodo>) => {
      state.loading = false;
      state.error = ""
      state.todos = [...toggleTodo(state, action)]
    },
    [updateTodo.pending.type]: (state) => {
      state.loading = true;
    },
    [updateTodo.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = action.payload;
    },
  },
});

// export const {} = todoSlice.actions;
export default todoSlice.reducer;

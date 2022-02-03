import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITodosState } from "../../../components/inputField/inputField.interface";
// import { getTodoList, addTodo, deleteTodo, updateTodo } from "./actionCreators";
import { deletedTodo, toggleTodo } from "../helpers/todoHelpers";
import { createRoutine } from "redux-saga-routines";
import { ITodo, ITodoResponse } from "../../../components/todo/todo.interface";

const payloadCreator = {
  success: (payload: any) => ({ ...payload }), // or to change payload on the fly
};

export const getTodos = createRoutine("GET_TODOS");
export const addTodo = createRoutine("ADD_TODO");
export const deleteTodo = createRoutine("DELETE_TODO");
export const updateTodo = createRoutine("UPDATE_TODO");

const initialState: ITodosState = {
  todos: [],
  loading: true,
  error: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // [getTodos.TRIGGER]: (state) => {
    //   state.loading = true;
    // },
    // [getTodos.SUCCESS]: (state, action) => {
    //   state.loading = false;
    //   state.error = "";
    //   state.todos = action.payload;
    // },
    // [getTodos.FULFILL]: (
    //   state,
    //   action: PayloadAction<{ loading: boolean }>
    // ) => {
    //   state.loading = action.payload.loading;
    // },
    // [getTodos.FAILURE]: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload?.errorMessage;
    // },
    // [getTodos.REQUEST](state) {
    //   state.loading = state.loading = true;
    // },
    // [addTodo.REQUEST](state) {
    //   state.loading = state.loading = true;
    // },
    // [addTodo.SUCCESS](state, action) {
    //   const { id, content } = action.payload;
    //     state.loading = false;
    //     state.error = "";
    //     state.todos = [...state.todos, { content, completed: false, id }];
    // },
    // [addTodo.FAILURE](state, action) {
    //   state.loading = true;
    //   state.error = action.payload?.errorMessage;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.REQUEST, (state) => {
        state.loading = state.loading = true;
      })
      .addCase(
        getTodos.SUCCESS,
        (state, action: PayloadAction<ITodoResponse[]>) => {
          state.loading = false;
          state.error = "";
          state.todos = action.payload;
        }
      )
      .addCase(
        getTodos.FAILURE,
        (state, action: PayloadAction<{ errorMessage: string }>) => {
          state.loading = false;
          state.error = action.payload?.errorMessage;
        }
      )
      .addCase(addTodo.REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(
        addTodo.SUCCESS,
        (state, action: PayloadAction<ITodoResponse>) => {
          const { id, content } = action.payload.payload;

          state.loading = false;
          state.error = "";
          state.todos = [
            ...state.todos,
            {
              payload: { content, completed: false, id },
              id: action.payload.id,
            },
          ];
        }
      )
      .addCase(
        addTodo.FAILURE,
        (state, action: PayloadAction<{ errorMessage: string }>) => {
          state.loading = false;
          state.error = action.payload?.errorMessage;
        }
      )
      .addCase(deleteTodo.REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(deleteTodo.SUCCESS, (state, action: PayloadAction) => {
        const newState = deletedTodo(state, action);
        state.loading = false;
        state.error = "";
        state.todos = newState;
      })
      .addCase(
        deleteTodo.FAILURE,
        (state, action: PayloadAction<{ errorMessage: string }>) => {
          state.loading = false;
          state.error = action.payload?.errorMessage;
        }
      )
      .addCase(updateTodo.REQUEST, (state) => {
        state.loading = true;
      })
      .addCase(updateTodo.SUCCESS, (state, action: PayloadAction) => {
        state.loading = false;
        state.error = "";
        state.todos = [...toggleTodo(state, action)];
      })
      .addCase(
        updateTodo.FAILURE,
        (state, action: PayloadAction<{ errorMessage: string }>) => {
          state.loading = false;
          state.error = action.payload?.errorMessage;
        }
      );
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getTodoList.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(getTodoList.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.error = "";
  //       state.todos = action.payload;
  //     })
  //     .addCase(getTodoList.rejected, (state, action ) => {
  //       state.loading = true;
  //       state.error = action.payload?.errorMessage;
  //     })
  //     .addCase(addTodo.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(addTodo.fulfilled, (state, action) => {
  //       const { id, content } = action.payload;
  //       state.loading = false;
  //       state.error = "";
  //       state.todos = [...state.todos, { content, completed: false, id }];
  //     })
  //     .addCase(addTodo.rejected, (state, action) => {
  //       state.loading = true;
  //       state.error = action.payload?.errorMessage;
  //     })
  //     .addCase(deleteTodo.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(deleteTodo.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.error = "";
  //       state.todos = deletedTodo(state, action);
  //     })
  //     .addCase(deleteTodo.rejected, (state, action) => {
  //       state.loading = true;
  //       state.error = action.payload?.errorMessage;
  //     })
  //     .addCase(updateTodo.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(updateTodo.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.error = "";
  //       state.todos = [...toggleTodo(state, action)];
  //     })
  //     .addCase(updateTodo.rejected, (state, action) => {
  //       state.loading = true;
  //       state.error = action.payload?.errorMessage;
  //     });
  // },
});

export default todoSlice.reducer;

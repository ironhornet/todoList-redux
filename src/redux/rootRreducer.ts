import { combineReducers } from "redux";

import todoReducer from "./todos/todos.reducer";

export default combineReducers({
  todosState: todoReducer,
});

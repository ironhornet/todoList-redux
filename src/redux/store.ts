import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

import todosReducer from "./todos/reduxSlice/todoSlice";
import rootSaga from "./todos/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
  getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);

const rootReducer = combineReducers({
  todosReducer,
});

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

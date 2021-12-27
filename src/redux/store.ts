import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger"
import thunk from "redux-thunk";

import rootReducer from "./rootRreducer"

const middleWares = applyMiddleware(thunk);

const store = createStore(rootReducer, composeWithDevTools(middleWares))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

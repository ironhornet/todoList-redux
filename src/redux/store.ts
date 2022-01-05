import {  combineReducers, configureStore } from "@reduxjs/toolkit"
import todosReducer from "../redux/todos/reduxSlice/reduxSlice"

const rootReducer = combineReducers({
    todosReducer
})

export const setupStore = () => {
    return configureStore ({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]



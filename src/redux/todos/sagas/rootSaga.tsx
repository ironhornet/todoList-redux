import { getTodos, addTodo, deleteTodo, updateTodo } from "../reduxSlice/todoSlice";
import { takeEvery, all, call, put, takeLatest } from "redux-saga/effects";
import axiosRequest from "../../../utils/axiosUtils";
import axios, { AxiosResponse } from "axios";
import { ITodo } from "../../../components/todo/todo.interface";

export function* getTodoListWatcher() {
  yield takeEvery(getTodos.TRIGGER, getTodoList);
}

export function* getTodoList() {
  const { success, failure, fulfill, request } = getTodos;
  try {
    yield put(request());
    const response: AxiosResponse = yield call(axiosRequest.get, "/todos");
    yield put(success(response.data));
  } catch (error) {
    yield put(failure({ errorMessage: "Error getting ToDo list" }));
  } finally {
    yield put(fulfill({ loading: false }));
  }
}

export function* addNewTodo(todo: any) {
  const { success, failure, fulfill, request } = addTodo;
  try {
    yield put(request());
    const response: AxiosResponse = yield call(axiosRequest.post, "/todos", todo);
    yield put(success(response.data));
  } catch (error) {
    yield put(failure({ errorMessage: "Error adding ToDo" }));
  }
}
export function* addTodoWatcher() {
  yield takeEvery(addTodo.TRIGGER, addNewTodo);
}

export function* deletingTodo(id:any) {
    const { success, failure, fulfill, request } = deleteTodo

    try {
        yield put(request())
        yield call(axiosRequest.delete,`/todos/${id.payload}`)
        yield put(success(id.payload))
    } catch (error) {
        yield put(failure({ errorMessage: "Error deleting ToDo" }));
        console.log(error);
        
    }
}

export function* deletingTodoWatcher() {
    yield takeEvery(deleteTodo.TRIGGER, deletingTodo)
}

export function* updatingTodo(data:any) {
  const { success, failure, fulfill, request } = updateTodo
  const {id, todo} = data.payload
  try {
    yield put(request())
    const response: AxiosResponse = yield call(axiosRequest.patch, `/todos/${id}`, { ...todo, payload:{...todo, completed: !todo.completed }})    
    console.log(response);
    
    yield put(success(response.data))
  } catch (error) {
    console.log(error);
    
    yield put(failure({ errorMessage: "Error updating ToDo" }))
  }
}
export function* updatingTodoWatcher() {
  yield takeEvery(updateTodo.TRIGGER ,updatingTodo)
}

export default function* rootSaga() {
  yield all([
      getTodoListWatcher(), 
      addTodoWatcher(),
      deletingTodoWatcher(),
      updatingTodoWatcher()
    ]);
}

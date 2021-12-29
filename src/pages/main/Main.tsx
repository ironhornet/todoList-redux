import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./main.style.css";
import TodoList from "../../components/todoList/TodoList";
import InputField from "../../components/inputField/InputField";
import { RootState } from "../../redux/store";
import {useAppSelector} from "../../hooks/redux"
import { getTodoList } from "../../redux/todos/reduxSlice/actionCreators"

const Main: FC = () => {
  const { 
    todos, 
    loading, 
    error 
  } = useAppSelector(
    (state: RootState) => state.todosReducer
  );
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return (
    <main className="container">
      <div>Todo List</div>
      <InputField />
      <TodoList 
        todos={todos} 
        loading={loading} 
        error={error} 
      />
    </main>
  );
};

export default Main;

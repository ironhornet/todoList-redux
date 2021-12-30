import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./main.style.css";
import TodoList from "../../components/todoList/TodoList";
import InputField from "../../components/inputField/InputField";
import { RootState } from "../../redux/store";
import { getTodoList } from "../../redux/todos/todos.actions";

const Main: FC = () => {
  const { 
    todos, 
    loading, 
    error 
  } = useSelector(
    (state: RootState) => state.todosState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoList());
  }, [])

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

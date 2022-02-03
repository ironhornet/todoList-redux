import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

import "./main.style.css";
import SignInAndSignUp from "../signInAndSignUp/SignInAndSignUp";
import TodoList from "../../components/todoList/TodoList";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../hooks/redux";
// import { getTodoList } from "../../redux/todos/reduxSlice/actionCreators";
import { getTodos } from "../../redux/todos/reduxSlice/todoSlice";

const Main: FC = () => {
  const { todos, loading, error } = useAppSelector(
    (state: RootState) => state.todosReducer
  );
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getTodos());
    // dispatch(getTodoList());
  }, []);

  return (
    <main className="container">
      <Link to="./signin">SignIn</Link>
      <Routes>
        <Route
          path="/"
          element={<TodoList 
              todos={todos} 
              loading={loading} 
              error={error} 
            />}
        />
        <Route path="/signin" element={<SignInAndSignUp />} />
      </Routes>
    </main>
  );
};

export default Main;

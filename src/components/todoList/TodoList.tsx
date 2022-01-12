import { Box } from "@mui/system";
import { FC } from "react";

import { ITodoListProps } from "./todoList.interface";
import Todo from "../todo/Todo";
import InputField from "../inputField/InputField";

const TodoList: FC<ITodoListProps> = (props) => {
  const { todos, loading, error } = props;

  const checkIsInputValue = () => {
    if (todos && todos.length) {
      return mapTodos();
    }

    return (
      <Box textAlign="center" sx={{ mt: "10px" }}>
        You've done with all todos
      </Box>
    );
  };

  const mapTodos = () => {
    return todos.map((todo) => (
      <Box key={todo.id}>
        <Todo todo={todo} />
      </Box>
    ));
  };

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <Box>
      <Box>Todo List</Box>

      <InputField />

      {loading ? <h3>Loading...</h3> : checkIsInputValue()}
    </Box>
  );
};

export default TodoList;

import { Box } from "@mui/system";
import React, { FC } from "react";
import { Checkbox, Button, ButtonGroup } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoSuccess } from "../../redux/todos/todos.actions";
import { ITodoProps } from "./todo.interface";
import { upadateTodo } from "../../redux/todos/todos.actions";
import "./todo.styles.css";

const Todo: FC<ITodoProps> = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const handleChange = () => {
    // update state
    dispatch(toggleTodoSuccess(todo.id));
    //update serverData
    dispatch(upadateTodo(todo.id, !todo.completed));
  };
  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Box className="todo_container">
      <p className={todo.completed ? "crossed-line" : ""}>{todo.content}</p>
      <Box>
        <Checkbox 
          onChange={handleChange} 
          checked={todo.completed} 
        />
        <ButtonGroup>
          <Button 
            color="primary" 
            onClick={() => handleDelete(todo.id)}
          >
            Delette
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Todo;

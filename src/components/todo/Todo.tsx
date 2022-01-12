import { Box } from "@mui/system";
import React, { FC } from "react";
import { Checkbox, Button, ButtonGroup } from "@mui/material";
import { useDispatch } from "react-redux";

import { deleteTodo, updateTodo } from "../../redux/todos/reduxSlice/actionCreators";
import { ITodoProps } from "./todo.interface";
import "./todo.styles.css";

const Todo: FC<ITodoProps> = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(updateTodo({id:todo.id, completed:!todo.completed}));
  };
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <Box className="todo_container">
      <p className={todo.completed ? "crossed-line" : ""}>
        {todo.content}
      </p>

      <Box>
        <Checkbox 
          onChange={handleChange} 
          checked={todo.completed} 
        />

        <ButtonGroup>
          <Button 
            color="primary" 
            onClick={handleDelete}
          >
            Delette
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Todo;

import { FormControl, Box, Input, Button, Alert } from "@mui/material";
import React, { FC, KeyboardEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

import { addTodo } from "../../redux/todos/todos.actions";

const InputField: FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [alertVisibility, setAlertVisibility] = useState(false);

  const handleSubmit = () => {
    if (inputValue.length > 3) {
      dispatch(
        addTodo({
          content: inputValue,
          id: uuidv4(),
          completed: false,
        })
      );
      setInputValue("");
      setAlertVisibility(false);
    } else {
      setAlertVisibility(true);
    }
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Box className="input">
      {alertVisibility ? (
        <Alert variant="filled" severity="error">
          You should type at least 4 characters
        </Alert>
      ) : null}

      <FormControl>
        <Input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button 
          type="submit" 
          disabled={!inputValue} 
          onClick={handleSubmit}
        >
          Add ToDo
        </Button>
      </FormControl>
    </Box>
  );
};

export default InputField;

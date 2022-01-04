import { FormControl, Box, Input, Button, Alert } from "@mui/material";
import React, { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

import { addTodo } from "../../redux/todos/todos.actions";

const InputField: FC = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({inputValue:"", alertVisibility: false})

  //delete alerrt, add label to input with alert. label hang on handle change 
  const handleSubmit = () => { //TODO ? 
    if (state.inputValue.length > 3) {
      dispatch(
        addTodo({
          content: state.inputValue,
          id: uuidv4(),
          completed: false,
        })
      );
      setState({...state, inputValue: "", alertVisibility: false});
    } else {
      setState({...state, alertVisibility: true});
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({...state, inputValue: event.target.value})
  }

  return (
    <Box className="input">
      {state.alertVisibility ? (
        <Alert 
          variant="filled" 
          severity="error"
        >
          You should type at least 4 characters
        </Alert>
      ) : null}

      <FormControl>
        <Input
          type="text"
          value={state.inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <Button 
          type="submit" 
          disabled={!state.inputValue} 
          onClick={handleSubmit}
        >
          Add ToDo
        </Button>
      </FormControl>
    </Box>
  );
};

export default InputField;

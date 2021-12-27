import { Box } from "@mui/system";
import { FC } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodoList } from "../../redux/todos/todos.actions";
import { ITodoListProps } from "./todoList.interface";
import Todo from "../todo/Todo";

const TodoList: FC<ITodoListProps> = (props) => {
  const { todos, loading, error } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  const mapTodos = () => {
    if (todos && todos.length) {
      return todos.map((todo) => (
        <div key={todo.id}>
          <Todo todo={todo} />
        </div>
      ));
    } else {
      return (<Box textAlign="center" sx={{ mt: "10px" }}>
        You've done with all todos
      </Box>);
    }
  };
 if(error){
   return <h3>{error}</h3>
 }
  return (
    <Box>
      {loading ? <h3>Loading...</h3> : mapTodos()}
    </Box>
  );
};

export default TodoList;

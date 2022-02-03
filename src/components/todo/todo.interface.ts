export interface ITodoResponse {
  payload: {
    id: string;
    completed: boolean;
    content: string;
  };
  loading?: boolean;
  id: string
}
export interface ITodo {
  id: string;
  completed: boolean;
  content: string;
  loading?: boolean;
}

export interface ITodoProps {
  todo: ITodo;
  id: string;
}

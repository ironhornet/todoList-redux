export interface ITodo {
    id: string;
    completed: boolean;
    content: string;
    loading?: boolean
  }
  
export interface ITodoProps {
    todo: ITodo
  }

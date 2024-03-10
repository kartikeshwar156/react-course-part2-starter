import axios from "axios";
import { useQuery as ReactQueryUseQuery } from "@tanstack/react-query";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  // here get returns a promise or an object containing data, but we want to store actual data in cache so we use '.then' in this case.

  // below we gave a new name to our 'data' which is 'todos'
  const { data: todos, error } = ReactQueryUseQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data),
  });

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {/* we applied '?' below because todos might be empty in some cases */}
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
function useQuery(arg0: {}) {
  throw new Error("Function not implemented.");
}

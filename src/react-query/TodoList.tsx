import axios from "axios";
import React, { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {

  // below we gave a new name to our 'data' which is 'todos'
  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: () => {
      axios
        .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.data);

      // here get returns a promise or an object containing data, but we want to store actual data in cache so we use '.then' in this case.
    },
  });

  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => setTodos(res.data))
  //     .catch((error) => setError(error));
  // }, []);

  // if (error) return <p>{error}</p>;

  return (
    <ul className="list-group">
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

import useTodos from "./Hooks/useTodos";



const TodoList = () => {
  
  
  const { data: todos, error, isLoading } = useTodos();

  if(isLoading) return <p>Loading...</p>;

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

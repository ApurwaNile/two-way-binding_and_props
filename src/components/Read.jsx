import { useContext } from "react";
import { toast } from "react-toastify";
import { todoContext } from "../Wrapper";

const Read = () => {
  const [todos, settodos] = useContext(todoContext);

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((e) => e.id != id);
    settodos(filteredTodos);
    toast.error("Todo deleted successfully");
  };

  const toggleCompleteHandler = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    toast.success("task completed!");
    settodos(updatedTodos);
  };

  let rendertodos = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className="p-4 bg-gray-800 flex justify-between items-center mb-4"
      >
        <span
          onClick={() => toggleCompleteHandler(todo.id)}
          className={`text-2xl   cursor-pointer ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.title}
        </span>
        <button
          onClick={() => deleteHandler(todo.id)}
          className="text-red-500 text-xl  "
        >
          Delete
        </button>
      </li>
    );
  });
  return (
    <div className="w-[40%] p-10">
      <h1 className="text-5xl mb-10 ">
        <span className="text-orange-500">Pending </span>Todos
      </h1>
      <ol>{rendertodos}</ol>
    </div>
  );
};

export default Read;

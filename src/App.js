import { useState } from "react";

import TodoCard from "./components/TodoCard";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Task 1",
      status: false,
    },
    {
      id: 1,
      title: "Task 2",
      status: false,
    },
  ]);

  return (
    // Main body
    <div className="max-w-[720px] mx-auto my-9 flex flex-col gap-2">
      <h1 className="text-center text-2xl font-semibold">My ToDo App</h1>
      {/* Button Box */}
      <div className="flex justify-between">
        <button className="bg-green-500 shadow-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Task
        </button>
        <button className="bg-red-500 shadow-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Delete Task
        </button>
      </div>

      {todoList.map((todo, index) => {
        return <TodoCard key={index} title={todo.title} status={todo.status} />;
      })}
    </div>
  );
}

export default App;

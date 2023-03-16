import { useState } from "react";
import InputBox from "./components/InputBox";

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

  const [addform, setAddform] = useState(false);
  const [editform, setEditform] = useState(false);
  const [newTask, setNewTask] = useState("");

  const addTaskOnChange = (e) => setNewTask(e.target.value);

  const addTaskSubmit = () =>{
    let newId = todoList.length+1
    let newTaskEntry = {
      id:newId,
      status:false,
      title:newTask
    }
    newTask && setTodoList((prev) => [...prev, newTaskEntry])};

  return (
    // Main body
    <div className="max-w-[720px] mx-auto my-9 flex flex-col gap-2">
      <h1 className="text-center text-2xl font-semibold">My ToDo App</h1>
      {/*add task Button Box */}

      <InputBox
        text={"Add Task"}
        color={"bg-green-600"}
        hovColor={"hover:bg-green-700"}
        placeholder="Write your Task here"
        addTaskOnChange={addTaskOnChange}
        addTaskSubmit={addTaskSubmit}
      />

      <InputBox
        text={"Edit Task"}
        color={"bg-yellow-500"}
        hovColor={"hover:bg-yellow-700"}
        placeholder="Edit your Task here"
      />

      {todoList.map((todo, index) => {
        return <TodoCard key={index} title={todo.title} status={todo.status} />;
      })}
    </div>
  );
}

export default App;

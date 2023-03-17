import { useState } from "react";
import Clock from "./components/Clock";
import InputBox from "./components/InputBox";

import TodoCard from "./components/TodoCard";

function App() {
  const [todoList, setTodoList] = useState([]);

  const [addform, setAddform] = useState(false);
  const [editform, setEditform] = useState(false);
  const [newTask, setNewTask] = useState("");

  // Callback for get the input value from form and save it to state

  const addTaskOnChange = (e) => setNewTask(e.target.value);

  // Call back for Add a Task on Submit
  const addTaskSubmit = () => {
    let newId = todoList.length + 1;
    let newTaskEntry = {
      id: newId,
      status: false,
      title: newTask,
    };
    newTask && setTodoList((prev) => [...prev, newTaskEntry]);
  };

  // delete a task

  const deleteTask = (id) => {
    let currentTasks = todoList.filter((t) => t.id !== id);
    setTodoList(currentTasks);
    // console.log(id);
  };

  // complete a task

  const completeTask = (currId) => {
    let finishTask = todoList.map((td) => {
      if (td.id === currId) {
        return {
          ...td,
          status: !td.status,
        };
      }
      return td;
    });

    return setTodoList(finishTask);
  };
  // console.log(todoList);

  // Main body

  return (
    <div className="max-w-[720px] mx-auto my-9 flex flex-col gap-2">
      <h1 className="text-center text-2xl font-semibold">My ToDo App</h1>
      {/*add task Button Box */}
      <Clock/>
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

      {todoList.length ? (
        todoList.map((todo, index) => {
          return (
            <TodoCard
              key={index}
              id={todo.id}
              title={todo.title}
              status={todo.status}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })
      ) : (
        <h1 className="text-center text-2xl">You have No ToDo, Hurrayh</h1>
      )}
    </div>
  );
}

export default App;

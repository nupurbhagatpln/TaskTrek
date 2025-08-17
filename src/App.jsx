import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import TodoImg from "./assets/direct-hit.png";
import DoingImg from "./assets/glowing-star.png";
import DoneImg from "./assets/check-mark-button.png";

const oldTask = localStorage.getItem("task");
console.log("oldTask", oldTask);
const App = () => {
  const [task, setTask] = useState(JSON.parse(oldTask) || []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  const handleDelete = (taskIndex) => {
    const newTask = task.filter((item, index) => index !== taskIndex);
    setTask(newTask);
  };
  const onDrop = (status, position) => {
    console.log(
      `${activeCard} is going to place in ${status} at position ${position}`
    );
    if (activeCard === null || activeCard === undefined) return;

    const taskToMove = task[activeCard];
    const updatedTask = task.filter((item, index) => index !== activeCard);

    updatedTask.splice(position, 0, {
      ...taskToMove,
      status: status,
    });
    setTask(updatedTask);
  };

  return (
    <div className="app">
      <TaskForm setTask={setTask} />
      <main className="app_main">
        <TaskColumn
          sectionName="To Do"
          sectionImg={TodoImg}
          task={task}
          status="todo"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          sectionName="Doing"
          sectionImg={DoingImg}
          task={task}
          status="doing"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          sectionName="Done"
          sectionImg={DoneImg}
          task={task}
          status="done"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
};

export default App;

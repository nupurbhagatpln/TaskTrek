import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTask }) => {
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");
  // const handleChange = (e) => {
  //   setTask(e.target.value);
  // };
  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  const [taskData, setTaskdata] = useState({
    task: "",
    status: "todo",
    tag: [],
  });
  const selectTags = (tag) => {
    if (taskData.tag.some((item) => item === tag)) {
      const filterTags = taskData.tag.filter((item) => item !== tag);
      setTaskdata((prev) => {
        return { ...prev, tag: filterTags };
      });
    } else {
      setTaskdata((prev) => {
        return { ...prev, tag: [...prev.tag, tag] };
      });
    }
  };
  const selectedTag = (tag) => {
    return taskData.tag.some((item) => item === tag);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setTaskdata((prev) => {
      return { ...prev, [name]: value };
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault(); // stop the defaultt behaviour
    // console.log("task and status", taskData;
    setTask((prev) => {
      return [...prev, taskData];
    });
    setTaskdata({
      task: "",
      status: "todo",
      tag: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter you task"
          onChange={handleChange}
        />

        <div className="taks_form_bottom_line">
          <div className="tag_container">
            <Tag
              tagName="HTML"
              selectTags={selectTags}
              selected={selectedTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTags={selectTags}
              selected={selectedTag("CSS")}
            />
            <Tag
              tagName="JAVA"
              selectTags={selectTags}
              selected={selectedTag("JAVA")}
            />
            <Tag
              tagName="C++"
              selectTags={selectTags}
              selected={selectedTag("C++")}
            />
            <Tag
              tagName="JS"
              selectTags={selectTags}
              selected={selectedTag("JS")}
            />
            <Tag
              tagName="REACT"
              selectTags={selectTags}
              selected={selectedTag("REACT")}
            />
          </div>

          <div className="status_container">
            <select
              className="task_statuc"
              onChange={handleChange}
              name="status"
              value={taskData.status}
            >
              <option value="todo"> To Do</option>
              <option value="doing"> Doing</option>
              <option value="done"> Done</option>
            </select>

            <button type="submit" className="task_submit">
              Add task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;

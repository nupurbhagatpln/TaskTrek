import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const TaskColumn = ({
  sectionName,
  sectionImg,
  task,
  status,
  handleDelete,
  setActiveCard,
  onDrop,
}) => {
  // const { sectionName, sectionImg } = props; // works the same as below
  return (
    <section className="task_column">
      <div className="title-heading">
        <h1>
          <img className="task-column-img" src={sectionImg} />
          {sectionName}
        </h1>
      </div>
      <DropArea onDrop={() => onDrop(status, 0)} />

      <div className="task-card-wrapper">
        {task.map(
          (item, index) =>
            item?.status === status && (
              <React.Fragment>
                <TaskCard
                  key={index}
                  title={item.task}
                  tags={item.tag}
                  handleDelete={handleDelete}
                  index={index}
                  setActiveCard={setActiveCard}
                />

                <DropArea onDrop={() => onDrop(status, index + 1)} />
              </React.Fragment>
            )
        )}
      </div>
    </section>
  );
};

export default TaskColumn;

import React from "react";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";
import Tag from "./Tag";

const TaskCard = ({ title, tags, handleDelete, index, setActiveCard }) => {
  console.log("Title:", title);
  console.log("Tags:", tags);
  return (
    <article
      className="task-card"
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task-text">{title}</p>
      <div className="task-card-bottom">
        <div className="task-card-bottom-tags">
          {tags?.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>
        <div
          className="task-card-bottom-delete"
          onClick={() => handleDelete(index)}
        >
          <img className="delete-img" src={deleteIcon} />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;

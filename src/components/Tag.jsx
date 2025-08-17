import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTags, selected }) => {
  const tagStyle = {
    selected: { backgroundColor: "#fda821" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle["selected"] : tagStyle["default"]}
      onClick={() => {
        selectTags(tagName);
      }}
    >
      {tagName}
    </button>
  );
};

export default Tag;

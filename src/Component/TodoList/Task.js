import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

const propTypes = {
  name: PropTypes.string,
  completed: PropTypes.bool,
  onStatusChange: PropTypes.func,
  onDelete: PropTypes.func,
};

function Task({ name, completed, onStatusChange, onDelete }) {
  return (
    <div className="task">
      <Button
        className={completed ? "task-completed" : "task-incompleted"}
        name={name}
        onAction={onStatusChange}
      />
      <img
        className="trash"
        src={require("../../assets/trash.png")}
        alt="trash"
        onClick={onDelete}
      />
    </div>
  );
}

Task.propTypes = propTypes;

export default Task;

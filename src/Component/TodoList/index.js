import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import Modal from "../Modal";
import Task from "./Task";

function TodoList() {
  const [task, setTask] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [tasks, setTasks] = useState([]);

  function handleTaskChange(event) {
    setTask(event.target.value);
  }

  function handleModalActiveToggle() {
    setModalActive((state) => !state);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (task === "") {
      return;
    }

    setTasks((tasks) => [
      ...tasks,
      {
        name: task,
        completed: false,
      },
    ]);

    setTask("");

    setModalActive((state) => !state);
  }

  function handleTaskStatusChange(_index) {
    setTasks((tasks) =>
      tasks.map(function (task, index) {
        return index === _index
          ? {
              ...task,
              completed: !task.completed,
            }
          : task;
      })
    );
  }

  function handleTaskDelete(_index) {
    setTasks((tasks) => tasks.filter((task, index) => index !== _index));
  }

  const tasksMarkup = tasks.map(function (task, index) {
    return (
      <Task
        key={index}
        name={task.name}
        completed={task.completed}
        onStatusChange={() => handleTaskStatusChange(index)}
        onDelete={() => handleTaskDelete(index)}
      />
    );
  });

  return (
    <div className="todo-list">
      <div className="tasks">{tasksMarkup}</div>
      <Button
        name="+ New Task"
        className="new-task"
        onAction={handleModalActiveToggle}
      />
      <Modal
        title="New Todo"
        active={modalActive}
        onClose={handleModalActiveToggle}
      >
        <form onSubmit={handleSubmit}>
          <label>New Todo</label>
          <input value={task} onChange={handleTaskChange} />
          <Button name="Add task" className="add-task" />
        </form>
      </Modal>
    </div>
  );
}

export default TodoList;

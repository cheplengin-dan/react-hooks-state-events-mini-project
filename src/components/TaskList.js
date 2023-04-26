import React from "react";
import Task from "./Task"

function TaskList({tasks}) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text} // Use a unique key for each task
          category={task.category}
          text={task.text}
        />
      ))}
    </div>
  );
}

export default TaskList;

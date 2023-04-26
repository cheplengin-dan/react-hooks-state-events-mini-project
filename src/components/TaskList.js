
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const handleDeleteTask = (taskText) => {
    onDeleteTask(taskText);
  };

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          category={task.category}
          text={task.text}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;

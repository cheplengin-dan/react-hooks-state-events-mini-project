import React, { useState } from "react";
import Task from "./Task"

function TaskList({tasks}) {
  const [taskList, setTaskList] = useState(tasks);

  const handleDeleteTask = (taskText) => {
    setTaskList((prevList) =>
      prevList.filter((task) => task.text !== taskText)
    );
  };


  return (
    <div className="tasks">
      {taskList.map((task) => (
        <Task
          key={task.text} // Use a unique key for each task
          category={task.category}
          text={task.text}
          onDelete={handleDeleteTask} // Pass the callback function to the task component
        />
      ))}
    </div>
  );
}

export default TaskList;

import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, updateTask, deleteTask }) => (
  <div className="space-y-2">
    {tasks.map((task) => (
      <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
    ))}
  </div>
);

export default TaskList;
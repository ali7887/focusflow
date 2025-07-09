import React from "react";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const toggleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className="flex justify-between items-center bg-white p-3 shadow rounded">
      <div>
        <input type="checkbox" checked={task.completed} onChange={toggleComplete} className="mr-2" />
        <span className={task.completed ? "line-through" : ""}>{task.text}</span>
        <span className="ml-2 text-xl">{task.mood}</span>
      </div>
      <button onClick={() => deleteTask(task.id)} className="text-red-500">🗑️</button>
    </div>
  );
};

export default TaskItem;
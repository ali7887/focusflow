import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import MoodFilter from "./components/MoodFilter";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filterMood, setFilterMood] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = filterMood === "All"
    ? tasks
    : tasks.filter((task) => task.mood === filterMood);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">🧠 FocusFlow</h1>
      <TaskForm addTask={addTask} />
      <MoodFilter filterMood={filterMood} setFilterMood={setFilterMood} />
      <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App
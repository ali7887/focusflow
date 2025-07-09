import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState("");
  const [mood, setMood] = useState("😐");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({ id: Date.now(), text, mood, completed: false });
    setText("");
    setMood("😐");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
        className="flex-1 p-2 border rounded"
      />
      <select value={mood} onChange={(e) => setMood(e.target.value)} className="border p-2 rounded">
        <option value="😄">😄</option>
        <option value="😐">😐</option>
        <option value="😞">😞</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
};

export default TaskForm;
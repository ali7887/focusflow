import React from "react";

const MoodFilter = ({ filterMood, setFilterMood }) => {
  return (
    <div className="mb-4 flex gap-2">
      {["All", "😄", "😐", "😞"].map((m) => (
        <button
          key={m}
          onClick={() => setFilterMood(m)}
          className={`px-3 py-1 rounded border ${filterMood === m ? "bg-blue-500 text-white" : "bg-white"}`}
        >
          {m}
        </button>
      ))}
    </div>
  );
};

export default MoodFilter;
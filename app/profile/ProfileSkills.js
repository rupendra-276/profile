"use client";
import { useState } from "react";

export default function ProfileSkills({ skills = [], onSkillsChange }) {
  const [list, setList] = useState(skills);
  const [input, setInput] = useState("");

  const addSkill = () => {
    const val = input.trim();
    if (!val) return;
    const next = [...list, val];
    setList(next);
    setInput("");
    onSkillsChange && onSkillsChange(next);
  };

  return (
    <section className="bg-white rounded-xl shadow-sm p-5">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">Skills</h3>
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add skill"
            className="border rounded px-2 py-1 text-sm"
          />
          <button onClick={addSkill} className="px-3 py-1 rounded bg-blue-600 text-white text-sm">
            Add
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {list.length === 0 ? (
          <span className="text-gray-500">No skills added.</span>
        ) : (
          list.map((s, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-gray-100 text-sm">
              {s}
            </span>
          ))
        )}
      </div>
    </section>
  );
}

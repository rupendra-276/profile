import React, { useState } from "react";
import FormField from "./FormField";
import FormInput from "./FormInput";

export default function FormAchievements({ label, icon, values, onChange, buttonshow=true }) {
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim()) {
      onChange([...(values || []), input.trim()]);
      setInput("");
    }
  };

  const removeItem = (index) => {
    onChange(values.filter((_, i) => i !== index));
  };

  return (
  <FormField label={label} icon={icon}>
  <div className="space-y-2">
    {/* Input + Add Button (Full width with button on right) */}
    <div className="flex gap-1">
      <div className="w-[90%] ">
      <FormInput
        value={input}
        formInputClass="flex-1 rounded-r-none" // full width input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add an item"
        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addItem())}
      />
      </div>
      {
        buttonshow ? <button
        type="button"
        onClick={addItem}
        className="w-[10%] px-3 mt-0.5 border border-black text-gray-600 hover:cursor-pointer  rounded-md  whitespace-nowrap"
      >
        Add
      </button> : ''
      }
      
    </div>

    {/* Items Inline (chips) */}
    <div className="flex flex-wrap gap-2">
      {values?.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 px-3 py-1 bg-gray-100 border border-gray-300 rounded-full"
        >
          <span className="text-sm">{item}</span>
          <button
            type="button"
            onClick={() => removeItem(idx)}
            className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-bold"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  </div>
</FormField>

  );
}

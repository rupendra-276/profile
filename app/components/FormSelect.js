import React from "react";
import FormField from "./FormField";

export default function SelectField({ label, options = [], error, ...props }) {
  return (
    <FormField label={label}>
      <select
        className={`w-full px-3 py-2 text-gray-600 border border-gray-300 rounded-xs  focus:border focus:border-blue-300 focus:outline
          ${error ? "border-red-500" : "border-gray-300"} 
          `}
        {...props}
      >
        {options.map((opt, i) => (
          <option key={i}  value={opt.value} >
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </FormField>
  );
}

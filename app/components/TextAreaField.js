import React from "react";
import FormField from "./FormField";

export default function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  rows=4,

}) {
  return (
    <FormField label={label}>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 mt-3 text-[#fff] border border-gray-200 rounded-xl resize-none 
          ${error ? "border-red-500" : "borderblack"} 
          focus:border focus:border-blue-300 focus:outline`}
        rows={rows}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </FormField>
  );
}

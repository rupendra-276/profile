import React from "react";
import FormField from "./FormField";

export default function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <FormField label={label}>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-lg outline-none resize-none 
          ${error ? "border-red-500" : "borderblack"} 
          focus:outline-none`}
        rows={4}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </FormField>
  );
}

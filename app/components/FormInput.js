import React from "react";
import FormField from "./FormField";

export default function FormInput({ label, icon, type = "text", formInputClass, error,...props }) {
  return (
    <FormField label={label} icon={icon}>
      <input
        type={type}
        className={`w-full px-3 text-gray-600 py-2 border border-gray-300 rounded-xs  focus:border focus:border-blue-300 focus:outline ${formInputClass}`}
        {...props}
      />
      { error && <p className="text-red-500 text-sm mt-1">{error}</p> }
    </FormField>
  );
}
import React from "react";
export default function FormField({ label, icon, children }) {
  return (
    <div className="space-y-1">
      <label className="form-label flex items-center gap-2 text-gray-700 font-medium">
        {icon && <span className="text-blue-600">{icon}</span>} 
        {label}
      </label>
      {children}
    </div>
  );
}

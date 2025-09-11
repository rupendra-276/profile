import React from "react";

export default function Button({ children, type = "button", buttonclass = "", ...props }) {
  return (
    <button
      type={type}
      className={`px-4 py-1.5 rounded-3xl hover:cursor-pointer transition ${buttonclass} bg-blue-600 hover:text-white  hover:bg-blue-700`}
      {...props}
    >
      {children}
    </button>
  );
}

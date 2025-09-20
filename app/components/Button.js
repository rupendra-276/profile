
import React from "react";

export default function Button({
  children,
  type = "button",
  buttonclass = "",
  icon: Icon, // icon component (optional)
  showIcon = false, // only show icon when true
  ...props
}) {
  return (
    <button
      type={type}
      className={`flex items-center gap-2 px-4 py-1.5 rounded-3xl hover:cursor-pointer transition bg-[rgb(3,94,220)] hover:text-white hover:bg-[#] ${buttonclass}`}
      {...props}
    >
      {showIcon && Icon && <Icon className="text-lg" />}
      {children}
    </button>
  );
}

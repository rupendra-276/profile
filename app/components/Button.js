// import React from "react";

// export default function Button({ children, type = "button", buttonclass = "", ...props }) {
//   return (
//     <button
//       type={type}
//       className={`px-4 py-1.5 rounded-3xl hover:cursor-pointer transition  bg-blue-600  hover:text-white  hover:bg-blue-700 ${buttonclass} `}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }

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
      className={`flex items-center gap-2 px-4 py-1.5 rounded-3xl hover:cursor-pointer transition bg-blue-600 hover:text-white hover:bg-blue-700 ${buttonclass}`}
      {...props}
    >
      {showIcon && Icon && <Icon className="text-lg" />}
      {children}
    </button>
  );
}

import React from "react";

const sizeClasses = {
  txtInterBold20: "font-bold font-inter",
  txtInterMedium20: "font-inter font-medium",
  txtInterRegular20: "font-inter font-normal",
  txtInterMedium20Bluegray100: "font-inter font-medium",
  txtInterMedium20Blue500: "font-inter font-medium",
  txtCabinBold60: "font-bold font-cabin",
  txtInterExtraBold40: "font-extrabold font-inter",
  txtCabinRegular20Black900: "font-cabin font-normal",
  txtCabinRegular30: "font-cabin font-normal",
  txtCabinRegular20: "font-cabin font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

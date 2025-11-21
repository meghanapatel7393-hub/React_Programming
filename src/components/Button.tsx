import React from "react";

interface ButtonProps {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger"; //restricting color to 3 values only
  //   color?: string; //pass color as prop from app.tsx if we add ? then its optional
}
//by default create class need shortcut write racfe
const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;

import React from "react";
import "./AppButtoon.scss";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  variant?: "default" | "transparent" | "warning" | "reset";
}

const AppButton: React.FC<AppButtonProps> = ({
  label,
  className = "",
  variant = "default",
  ...rest
}) => {
  return (
    <button className={`${variant}-app-button btn ${className}`} {...rest}>
      {label}
    </button>
  );
};

export default AppButton;

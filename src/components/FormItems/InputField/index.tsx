import React from "react";
import "./InputField.scss";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  className = "",
  ...rest
}) => {
  return (
    <div className={`input-field ${className}`}>
      {label && <label htmlFor={rest.name}>{label}</label>}
      <input {...rest} />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default InputField;

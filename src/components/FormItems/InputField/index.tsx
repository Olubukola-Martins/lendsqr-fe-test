import React from "react";
import "./InputField.scss";

interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  className = "",
  inputClassName = "",
  ...rest
}) => {
  return (
    <div className={`input-field ${className}`}>
      {label && <label htmlFor={rest.name}>{label}</label>}
      <input className={inputClassName} {...rest} />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default InputField;

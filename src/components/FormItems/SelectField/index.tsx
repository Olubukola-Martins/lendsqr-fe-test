import React from "react";
import "./SelectField.scss";

interface SelectFieldProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "className"> {
  label?: string;
  error?: string;
  className?: string;
  selectInputClassName?: string;
  options?: SelectFieldOption[];
}

interface SelectFieldOption
  extends React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  > {
  value: string;
  label: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  error,
  className = "",
  selectInputClassName = "",
  options = [],
  ...rest
}) => {
  return (
    <div className={`select-field ${className}`}>
      {label && <label htmlFor={rest.name}>{label}</label>}
      <select className={selectInputClassName} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default SelectField;

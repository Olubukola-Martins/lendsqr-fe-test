import React from 'react';
import './AppButtoon.scss';

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  label,
  className = '',
  ...rest
}) => {
  return (
    <button className={`app-button ${className}`} {...rest}>
      {label}
    </button>
  );
};

export default AppButton;

import React from "react";
import "./DashboardCard.scss";

interface DashboardCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  className?: string;
  iconColor?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  icon,
  label,
  value,
  className,
  iconColor = "#000",
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`dashboard-card  ${
        className || ""
      }`} id={`${isActive ? "active" : ""}`}
      onClick={onClick}>
      <div
        className="dashboard-card__icon-bg"
        style={{ backgroundColor: `${iconColor}1A` }}>
        <div className="dashboard-card__icon" style={{ color: iconColor }}>
          {icon}
        </div>
      </div>
      <p className="dashboard-card__label">{label}</p>
      <h3 className="dashboard-card__value">{value}</h3>
    </div>
  );
};

export default DashboardCard;

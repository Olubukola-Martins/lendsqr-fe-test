
import React from "react";
import "./DashboardCard.scss";

interface DashboardCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ icon, label, value, className }) => {
  return (
    <div className={`dashboard-card ${className || ""}`}>
      <div className="dashboard-card__icon">{icon}</div>
      <p className="dashboard-card__label">{label}</p>
      <h3 className="dashboard-card__value">{value}</h3>
    </div>
  );
};

export default DashboardCard;

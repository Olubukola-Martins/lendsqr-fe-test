import React from "react";
import "./StatusTag.scss";

export type StatusType = "Inactive" | "Pending" | "Blacklisted" | "Active";

interface StatusTagProps {
  status: StatusType;
}

const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  return <span className={`status-tag status-tag--${status.toLowerCase()}`}>{status}</span>;
};

export default StatusTag;

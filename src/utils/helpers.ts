import React from "react";

export const renderCell = (value: unknown): React.ReactNode => {
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    React.isValidElement(value)
  ) {
    return value;
  }
  return null;
};

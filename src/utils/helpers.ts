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

export const hasAtLeastOneValue = (obj: Record<string, string | null | undefined>): boolean =>
  obj &&
  typeof obj === "object" &&
  !Array.isArray(obj) &&
  Object.values(obj).some((value) => value?.trim() !== "");

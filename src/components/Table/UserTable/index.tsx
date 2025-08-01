import React from "react";
import "./UserTable.scss";
import Pagination, { type PaginationProps } from "../Pagination";
import { renderCell } from "../../../utils/helpers";
import FilterDropdown, {
  type FilterValues,
} from "../../../pages/Dashboard/components/FilterDropdown";

type TableColumn<T> = {
  header: string;
  accessor?: keyof T;
  render?: (value: React.ReactNode, row: T) => React.ReactNode;
};

type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  pagination: PaginationProps;
  loading?: boolean;
  onFilter: (values: FilterValues) => void;
  onReset?: () => void;
};

function UserTable<T>({
  columns,
  data,
  pagination,
  loading = false,
  onFilter,
  onReset,
}: TableProps<T>) {
  const cellContent = (col: TableColumn<T>, row: T) => {
    if (col.accessor) {
      return col.render
        ? col.render(row[col.accessor] as React.ReactNode, row)
        : renderCell(row[col.accessor]);
    } else {
      return col.render ? col.render(col.header, row) : "";
    }
  };

  const isNotLastColumn = (i: number) => i !== columns.length - 1;

  return (
    <div>
      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i}>
                  {col.header}
                  {isNotLastColumn(i) && (
                    <FilterDropdown onFilter={onFilter} onReset={onReset} />
                  )}
                </th>
              ))}
              <th />
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length + 1} className="loadingRow">
                  Loading...
                </td>
              </tr>
            ) : data.length > 0 ? (
              data.map((row, idx) => (
                <tr key={idx}>
                  {columns.map((col, i) => (
                    <td key={i}>{cellContent(col, row)}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="emptyRow">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination {...pagination} />
    </div>
  );
}

export default UserTable;

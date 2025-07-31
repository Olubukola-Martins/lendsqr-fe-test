import React from "react";
import "./UserTable.scss";
import Pagination from "../Pagination";
import { renderCell } from "../../../utils/helpers";
import { IoFilter } from "react-icons/io5";

type TableColumn<T> = {
  header: string;
  accessor?: keyof T;
  render?: (value: React.ReactNode, row: T) => React.ReactNode;
};

type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  rowsPerPage?: number;
};

function UserTable<T>({ columns, data, rowsPerPage = 10 }: TableProps<T>) {
  const [currentPage, setCurrentPage] = React.useState(1);

  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const cellContent = (col: TableColumn<T>, row: T) => {
    if (col.accessor) {
      return col.render
        ? col.render(row[col.accessor] as React.ReactNode, row)
        : renderCell(row[col.accessor]);
    } else {
      return col.render ? col.render(col.header, row) : "";
    }
  };
  const isLastColumn = (i: number) => i !== columns.length - 1;

  return (
    <div>
      <div className={"tableContainer"}>
        <table className={"table"}>
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i}>
                  {col.header}{" "}
                  {isLastColumn(i) && <IoFilter className={"sortIcon"} />}
                </th>
              ))}
              <th />
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, idx) => (
              <tr key={idx}>
                {columns.map((col, i) => (
                  <td key={i}>{cellContent(col, row)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        total={totalPages}
        currentPage={currentPage}
        onChange={setCurrentPage}
      />
    </div>
  );
}

export default UserTable;

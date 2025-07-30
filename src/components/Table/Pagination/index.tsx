import React from "react";
import "./Pagination.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type PaginationProps = {
  total: number;
  currentPage: number;
  onChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  total,
  currentPage,
  onChange,
}) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className={"pagination"}>
      <div>
        Showing
        <select defaultValue={"100"} className={"select"}>
          <option value="100">10</option>
          <option value="100">20</option>
          <option value="100">50</option>
          <option value="100">100</option>
        </select>
        <span>out of {total * 10}</span>
      </div>

      <div className={"pageList"}>
        <button
          onClick={() => onChange(currentPage - 1)}
          disabled={currentPage === 1}>
          <FaAngleLeft />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            className={currentPage === page ? "active" : ""}
            onClick={() => onChange(page)}>
            {page}
          </button>
        ))}

        <button
          onClick={() => onChange(currentPage + 1)}
          disabled={currentPage === total}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

import React, { useState } from "react";
import "./Pagination.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export type PaginationProps = {
  total: number;
  currentPage: number;
  onChange: (page: number) => void;
  onLimitChange?: (limit: number) => void;
  limit?: number;
};

const Pagination: React.FC<PaginationProps> = ({
  total,
  currentPage,
  onChange,
  onLimitChange,
  limit = 10,
}) => {
  const [selectedLimit, setSelectedLimit] = useState<number>(limit);

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(e.target.value, 10);
    setSelectedLimit(newLimit);
    onLimitChange?.(newLimit);
  };

  const renderPageButtons = () => {
    const pages = [];

    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(total - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < total - 2) {
        pages.push("...");
      }

      pages.push(total);
    }

    return pages.map((page, index) =>
      typeof page === "number" ? (
        <button
          key={index}
          className={currentPage === page ? "active" : ""}
          onClick={() => onChange(page)}
        >
          {page}
        </button>
      ) : (
        <span key={index} className="ellipsis">
          {page}
        </span>
      )
    );
  };

  return (
    <div className="pagination">
      <div>
        Showing
        <select
          value={selectedLimit}
          onChange={handleLimitChange}
          className="select"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span>out of {total * 10}</span>
      </div>

     <div className="pageList">
        <button
          onClick={() => onChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaAngleLeft />
        </button>

        {renderPageButtons()}

        <button
          onClick={() => onChange(currentPage + 1)}
          disabled={currentPage === total}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

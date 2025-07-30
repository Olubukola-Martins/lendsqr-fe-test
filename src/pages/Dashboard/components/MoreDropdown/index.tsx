import React, { useState } from "react";
import { RiMore2Fill } from "react-icons/ri";
import "./MoreDropdown.scss";
import type { TrowData } from "../..";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuUserRoundCheck, LuUserRoundX } from "react-icons/lu";

const MoreDropdown: React.FC<{rowData: TrowData}> = ({ rowData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="more-dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <RiMore2Fill className="dashboard__userTable__moreIcon" />
      {isOpen && (
        <ul className="more-dropdown__menu">
          <li onClick={() => alert("View Details")}><MdOutlineRemoveRedEye /> View Details</li>
          <li onClick={() => alert("Blacklist User")}><LuUserRoundX /> Blacklist User</li>
          <li onClick={() => alert("Activate User")}><LuUserRoundCheck />Activate User</li>
        </ul>
      )}
    </div>
  );
};

export default MoreDropdown;

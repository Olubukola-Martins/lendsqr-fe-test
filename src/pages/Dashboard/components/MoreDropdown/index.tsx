import React, { useState } from "react";
import { RiMore2Fill } from "react-icons/ri";
import "./MoreDropdown.scss";
import type { TrowData } from "../..";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuUserRoundCheck, LuUserRoundX } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const MoreDropdown: React.FC<{rowData: TrowData}> = ({ rowData }) => {
      const navigate = useNavigate()
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
          <li onClick={() => navigate(`/dashboard/users/${rowData.username}`)}><MdOutlineRemoveRedEye /> View Details</li>
          <li onClick={() => ''}><LuUserRoundX /> Blacklist User</li>
          <li onClick={() => ''}><LuUserRoundCheck />Activate User</li>
        </ul>
      )}
    </div>
  );
};

export default MoreDropdown;

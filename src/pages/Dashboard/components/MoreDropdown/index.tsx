import React, { useState } from "react";
import { RiMore2Fill } from "react-icons/ri";
import "./MoreDropdown.scss";
import type { TrowData } from "../..";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuUserRoundCheck, LuUserRoundX } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import type { User } from "../../../UserDetails/types";

const MoreDropdown: React.FC<{
  rowData: TrowData;
  setTableData: React.Dispatch<React.SetStateAction<User[]>>;
}> = ({ rowData, setTableData }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="more-dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}>
      <RiMore2Fill className="dashboard__userTable__moreIcon" />
      {isOpen && (
        <ul className="more-dropdown__menu">
          <li
            onClick={() =>
              navigate(`/dashboard/users/${rowData.username}`, {
                state: rowData,
              })
            }>
            <MdOutlineRemoveRedEye /> View Details
          </li>
          {rowData.status !== "Blacklisted" && (
            <li
              onClick={() =>
                setTableData((prev) => {
                  const userIndex = prev.findIndex(
                    (user) => user.username === rowData.username
                  );
                  prev.splice(userIndex, 1, {
                    ...prev[userIndex],
                    status: "Blacklisted",
                  });
                  setIsOpen(false);
                  return [...prev];
                })
              }>
              <LuUserRoundX /> Blacklist User
            </li>
          )}
          {rowData.status !== "Active" && (
            <li
              onClick={() =>
                setTableData((prev) => {
                  const userIndex = prev.findIndex(
                    (user) => user.username === rowData.username
                  );
                  prev.splice(userIndex, 1, {
                    ...prev[userIndex],
                    status: "Active",
                  });
                  setIsOpen(false);
                  return [...prev];
                })
              }>
              <LuUserRoundCheck />
              Activate User
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default MoreDropdown;

import React from "react";
import "./Sidebar.scss";
import { sidebarData } from "./utils/constants";
import { icons } from "../../../assets/sideNavIcons";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar: React.FC<{hide?:boolean}> = ({hide }) => {
  const { organization, dashboard } = icons;
  return (
    <aside className={`sidebar ${hide ? "hide" : ""}`}>
      <nav >
        <div className="section">
          <ul>
            <li key={"switch"} className={"switch"}>
              {organization}
              Switch Organization <IoIosArrowDown />
            </li>
            <li key={"dashboard"} className={"dashboard"}>
              {dashboard} Dashboard
            </li>
          </ul>
          {sidebarData.map((section, index) => (
            <div key={index}>
              <p className="title">{section.title}</p>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx} className={item.active ? "active" : ""}>
                    {item.icon} {item.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

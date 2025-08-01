import React from "react";
import "./SideBar.scss";
import { sidebarData } from "./utils/constants";
import { icons } from "../../../assets/sideNavIcons";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC<{ hide?: boolean }> = ({ hide }) => {
  const { organization, dashboard } = icons;
  const navigate = useNavigate();
  return (
    <aside className={`sidebar ${hide ? "hide" : ""}`}>
      <nav>
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
          <ul className="footer">
            <li className="logout" onClick={() => navigate("/")}>
              {icons.logout} Logout
            </li>
            <li className="version"> v1.2.0</li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

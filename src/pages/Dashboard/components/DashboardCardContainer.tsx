import DashboardCard from "../../../components/Cards/DashboardCard";
import "./../Dashboard.scss";
import { colors } from "../../../styles/colors";
import { dashBoardIcons } from "../../../assets/dashboardIcons";
import { useState } from "react";
const DashboardCardContainer: React.FC<{
  onClick: {
    handleUsers: () => void;
    handleActiveUsers: () => void;
    // usersWithLoans: () => void;
    // usersWithSavings: () => void;
  };
}> = ({ onClick }) => {
  const [activeCard, setActiveCard] = useState("users");
  const { blueTag, orangeTag, pinkTag, purpleTag } = colors;
  const { activeUsers, users, usersWithLoans, usersWithSavings } =
    dashBoardIcons.cardIcon;
  const { handleActiveUsers, handleUsers } = onClick;
  return (
    <div className="dashboard-grid">
      <DashboardCard
        icon={users}
        label="Users"
        value="2,453"
        iconColor={purpleTag}
        isActive={activeCard === "users"}
        onClick={() => {
          setActiveCard("users");
          handleUsers();
        }}
      />
      <DashboardCard
        icon={activeUsers}
        label="Active Users"
        value="2,453"
        iconColor={blueTag}
        isActive={activeCard === "activeUsers"}
        onClick={() => {
          setActiveCard("activeUsers");
          handleActiveUsers();
        }}
      />
      <DashboardCard
        icon={usersWithLoans}
        label="Users with Loans"
        value="12,453"
        iconColor={orangeTag}
      />
      <DashboardCard
        icon={usersWithSavings}
        label="Users with Savings"
        value="102,453"
        iconColor={pinkTag}
      />
    </div>
  );
};

export default DashboardCardContainer;

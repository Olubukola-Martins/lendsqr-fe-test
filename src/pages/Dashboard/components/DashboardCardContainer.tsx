import DashboardCard from "../../../components/Cards/DashboardCard";
import "./../Dashboard.scss";
import { colors } from "../../../styles/colors";
import { dashBoardIcons } from "../../../assets/dashboardIcons";
const DashboardCardContainer = () => {
  const { blueTag, orangeTag, pinkTag, purpleTag } = colors;
  const {activeUsers,users,usersWithLoans,usersWithSavings} = dashBoardIcons.cardIcon
  return (
    <div className="dashboard-grid">
      <DashboardCard
        icon={users}
        label="Users"
        value="2,453"
        iconColor={purpleTag}
      />
      <DashboardCard
        icon={activeUsers}
        label="Active Users"
        value="2,453"
        iconColor={blueTag}
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

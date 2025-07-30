import { FiUsers } from "react-icons/fi";
import DashboardCard from "../../../components/Cards/DashboardCard";
import "./../Dashboard.scss";
const DashboardCardContainer = () => {
  return (
    <div className="dashboard-grid">
      <DashboardCard icon={<FiUsers />} label="Users" value="2,453" />
      <DashboardCard icon={<FiUsers />} label="Active Users" value="2,453" />
      <DashboardCard
        icon={<FiUsers />}
        label="Users with Loans"
        value="12,453"
      />
      <DashboardCard
        icon={<FiUsers />}
        label="Users with Savings"
        value="102,453"
      />
    </div>
  );
};

export default DashboardCardContainer;

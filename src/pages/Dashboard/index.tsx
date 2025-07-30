import UserTable from "../../components/Table/UserTable";
import DashboardCardContainer from "./components/DashboardCardContainer";
import "./Dashboard.scss";
import MoreDropdown from "./components/MoreDropdown";
import StatusTag, { type StatusType } from "../../components/Tag/StatusTag";

export type TrowData = {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
};
const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardCardContainer />
      <UserTable
        columns={[
          { header: "Organization", accessor: "organization" },
          { header: "Username", accessor: "username" },
          { header: "Email", accessor: "email" },
          { header: "Phone Number", accessor: "phone" },
          { header: "Date Joined", accessor: "dateJoined" },
          {
            header: "Status",
            accessor: "status",
            render: (value) => <StatusTag status={value as StatusType} />,
          },
          {
            header: "",
            render: (_, row) => <MoreDropdown rowData={row} />,
          },
        ]}
        data={mockUserData}
      />
    </div>
  );
};

export default Dashboard;

const mockUserData: TrowData[] = [
  {
    organization: "Lendstar",
    username: "Adedeji",
    email: "adedeji@lendstar.com",
    phone: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    organization: "Ironun",
    username: "Debby Ogana",
    email: "debby@ironun.com",
    phone: "08078907892",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Pending",
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phone: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted",
  },
  {
    organization: "Lendstar",
    username: "Tosin Dokunmu",
    email: "tosin@lendstar.com",
    phone: "07700389236",
    dateJoined: "Apr 10, 2020 10:30 AM",
    status: "Pending",
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace1@lendstar.com",
    phone: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Active",
  },
  {
    organization: "Lendstar",
    username: "Tosin Dokunmu",
    email: "tosin1@lendstar.com",
    phone: "0806780900",
    dateJoined: "May 10, 2020 10:00 AM",
    status: "Active",
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace2@lendstar.com",
    phone: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Blacklisted",
  },
  {
    organization: "Lendstar",
    username: "Tosin Dokunmu",
    email: "tosin2@lendstar.com",
    phone: "07700389236",
    dateJoined: "Apr 10, 2020 10:30 AM",
    status: "Pending",
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace3@lendstar.com",
    phone: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Inactive",
  },
  {
    organization: "Ironun",
    username: "Debby Ogana",
    email: "debby2@ironun.com",
    phone: "08078907892",
    dateJoined: "Apr 25, 2020 9:00 AM",
    status: "Pending",
  },
  {
    organization: "Lendstar",
    username: "Adedeji",
    email: "adedeji2@lendstar.com",
    phone: "08078903721",
    dateJoined: "May 18, 2020 11:00 AM",
    status: "Inactive",
  },
  {
    organization: "Lendstar",
    username: "Tosin Dokunmu",
    email: "tosin3@lendstar.com",
    phone: "0806780900",
    dateJoined: "May 10, 2020 10:00 AM",
    status: "Active",
  },
  {
    organization: "Ironun",
    username: "Debby Ogana",
    email: "debby3@ironun.com",
    phone: "08078907892",
    dateJoined: "Apr 20, 2020 10:00 AM",
    status: "Blacklisted",
  },
  {
    organization: "Lendstar",
    username: "Grace Effiom",
    email: "grace4@lendstar.com",
    phone: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: "Active",
  },
  {
    organization: "Lendstar",
    username: "Adedeji",
    email: "adedeji3@lendstar.com",
    phone: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Inactive",
  },
];

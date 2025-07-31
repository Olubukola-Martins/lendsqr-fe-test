import UserTable from "../../components/Table/UserTable";
import DashboardCardContainer from "./components/DashboardCardContainer";
import "./Dashboard.scss";
import MoreDropdown from "./components/MoreDropdown";
import StatusTag, { type StatusType } from "../../components/Tag/StatusTag";
import PageHeader from "../../components/PageHeader";
import useFetchUsers from "../../hooks/useFetchUsers";
import React from "react";

export type TrowData = {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
};
const Dashboard = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const { data, loading } = useFetchUsers({
    pagination: { offset: (currentPage - 1) * 10, limit },
    filters: {
      organization: "",
      username: "",
      email: "",
      dateJoined: "",
      phone: "",
      status: "",
    },
  });

  // total={totalPages}
  // currentPage={currentPage}
  // onChange={setCurrentPage}

  return (
    <div className="dashboard">
      <PageHeader title="Users" />
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
        data={data}
        loading={loading}
        pagination={{
          total: 50,
          currentPage: currentPage,
          onChange: (page) => setCurrentPage(page),
          onLimitChange(limit) {
            setLimit(limit);
          },
        }}
      />
    </div>
  );
};

export default Dashboard;


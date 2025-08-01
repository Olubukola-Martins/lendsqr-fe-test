import UserTable from "../../components/Table/UserTable";
import DashboardCardContainer from "./components/DashboardCardContainer";
import "./Dashboard.scss";
import MoreDropdown from "./components/MoreDropdown";
import StatusTag, { type StatusType } from "../../components/Tag/StatusTag";
import PageHeader from "../../components/PageHeader";
import useFetchUsers from "../../hooks/useFetchUsers";
import React, { useEffect, useState } from "react";
import type { FilterParams } from "../UserDetails/types";

export type TrowData = {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
};

const defaultFilterValues: FilterParams = {
  organization: "",
  username: "",
  email: "",
  dateJoined: "",
  phone: "",
  status: "",
};
const Dashboard = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [pageHeader, setpageHeader] = useState("Users");
  const [filterValues, setFilterValues] =
    useState<FilterParams>(defaultFilterValues);
  const { data, loading } = useFetchUsers({
    pagination: { offset: (currentPage - 1) * 10, limit },
    filters: filterValues,
  });
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    if (data) {
      setTableData(data);
    }
  }, [data, loading]);

  return (
    <div className="dashboard">
      <PageHeader title={pageHeader} />
      <DashboardCardContainer
        onClick={{
          handleUsers: () => {
            setFilterValues(defaultFilterValues);
            setpageHeader("Users");
          },
          handleActiveUsers: () => {
            setFilterValues({ ...defaultFilterValues, status: "Active" });
            setpageHeader("Active Users");
          },
        }}
      />

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
            render: (_, row) => (
              <MoreDropdown rowData={row} setTableData={setTableData} />
            ),
          },
        ]}
        data={tableData}
        loading={loading}
        pagination={{
          total: 50,
          currentPage: currentPage,
          onChange: (page) => setCurrentPage(page),
          onLimitChange(limit) {
            setLimit(limit);
          },
        }}
        onFilter={(values) => {
          setFilterValues(values);
        }}
        onReset={() => setFilterValues(defaultFilterValues)}
      />
    </div>
  );
};

export default Dashboard;

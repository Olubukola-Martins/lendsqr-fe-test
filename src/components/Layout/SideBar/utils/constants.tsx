import { FaCoins, FaRegHandshake } from "react-icons/fa6";
import { icons } from "../../../../assets/sideNavIcons";
import type { SidebarSection } from "../types";

const {
  audit,
  fees,
  preference,
  service,
  serviceAcc,
  organization,
  users,
  guarantors,
  loans,
  karma,
  loanRequests,
  savings,
  whiteList,
  savingsProd,
  transactions,
  reports,
  settlement,
} = icons;

export const sidebarData: SidebarSection[] = [
  {
    title: "Customers",
    items: [
      { label: "Users", icon: users, active: true },
      { label: "Guarantors", icon: guarantors },
      { label: "Loans", icon: loans },
      { label: "Decision Models", icon: <FaRegHandshake /> },
      { label: "Savings", icon: savings },
      { label: "Loan Requests", icon: loanRequests },
      { label: "Whitelist", icon: whiteList },
      { label: "Karma", icon: karma },
    ],
  },
  {
    title: "Businesses",
    items: [
      { label: "Organization", icon: organization },
      { label: "Loan Products", icon: loanRequests },
      { label: "Savings Products", icon: savingsProd },
      { label: "Fees and Charges", icon: <FaCoins /> },
      { label: "Transactions", icon: transactions },
      { label: "Services", icon: service },
      { label: "Service Account", icon: serviceAcc },
      { label: "Settlements", icon: settlement },
      { label: "Reports", icon: reports },
    ],
  },
  {
    title: "Settings",
    items: [
      { label: "Preferences", icon: preference },
      { label: "Fees and Pricing", icon: fees },
      { label: "Audit Logs", icon: audit },
    ],
  },
];

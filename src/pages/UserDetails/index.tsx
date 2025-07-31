import React, { useState } from "react";
import "./UserDetails.scss";
import { UserAvatar } from "../../features/UserDetails/components/UserAvatar";
import { Section } from "../../features/UserDetails/components/Section";
import { Field } from "../../features/UserDetails/components/Field";
import Tabs from "../../features/UserDetails/components/Tabs";
import AppButton from "../../components/AppButton";
import PageHeader from "../../components/PageHeader";

const userData = {
  name: "Grace Effiom",
  tier: 2,
  balance: "200,000.00",
  accountNumber: "9123456789/Providus Bank",
  personal: {
    "Full Name": "Grace Effiom",
    "Phone Number": "07060780922",
    "Email Address": "grace@mail.com",
    BVN: "07060780922",
    Gender: "Female",
    "Marital Status": "Single",
    Children: "None",
    Residence: "Parent’s Apartment",
  },
  education: {
    "Level of Education": "B.Sc",
    "Employment Status": "Employed",
    Sector: "Fintech",
    Duration: "2 years",
    "Office Email": "grace@lendager.com",
    "Monthly Income": "₦200,000.00 - ₦400,000.00",
    "Loan Repayment": "40,000",
  },
  socials: {
    Twitter: "@grace_effiom",
    Facebook: "Grace Effiom",
    Instagram: "@grace_effiom",
  },
  guarantor: {
    "Full Name": "Debby Ogana",
    "Phone Number": "07060780922",
    Email: "debby@gmail.com",
    Relationship: "Sister",
  },
};

export const UserDetails: React.FC = () => {
  const tabItem = [
    { label: "General Details", element: <GeneralDetails /> },
    { label: "Documents", element: "" },
    { label: "Bank Details", element: "" },
    { label: "Loans", element: "" },
    { label: "Savings", element: "" },
    { label: "App and System", element: "" },
  ];

  const tabLabels = tabItem.map((item) => item.label);

  const [activeTab, setActiveTab] = useState(tabLabels[0]);

  return (
    <div className="user-details">
      <div>
        <div></div>

        <div className="user-details__header--title">
          <PageHeader title="User Details" />
          <div className="user-details__header--buttons">
            <AppButton label="BLACKLIST USER" variant="warning" />
            <AppButton label="ACTIVATE USER" variant="transparent" />
          </div>
        </div>
      </div>
      <div className="user-details__header">
        <UserAvatar
          name={userData.name}
          tier={userData.tier}
          balance={userData.balance}
          accountNumber={userData.accountNumber}
          userCode="LSQFf587g90"
        />
        <div className="user-details__header--tabs">
          <Tabs
            tabs={tabLabels}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </div>

      <div className="user-details__content">
        {tabItem.find((item) => item.label === activeTab)?.element}
      </div>
    </div>
  );
};

const GeneralDetails = () => {
  return (
    <>
      <Section title="Personal Information">
        {Object.entries(userData.personal).map(([label, value]) => (
          <Field key={label} label={label} value={value} />
        ))}
      </Section>
      <Section title="Education and Employment">
        {Object.entries(userData.education).map(([label, value]) => (
          <Field key={label} label={label} value={value} />
        ))}
      </Section>
      <Section title="Socials">
        {Object.entries(userData.socials).map(([label, value]) => (
          <Field key={label} label={label} value={value} />
        ))}
      </Section>
      <Section title="Guarantor">
        {Object.entries(userData.guarantor).map(([label, value]) => (
          <Field key={label} label={label} value={value} />
        ))}
      </Section>
    </>
  );
};

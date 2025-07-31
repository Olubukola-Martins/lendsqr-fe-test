import React from "react";
import "./UserDetails.scss";
import { UserAvatar } from "../../features/UserDetails/components/UserAvatar";
import { Section } from "../../features/UserDetails/components/Section";
import { Field } from "../../features/UserDetails/components/Field";

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
  return (
    <div className="user-details">
      <UserAvatar
        name={userData.name}
        tier={userData.tier}
        balance={userData.balance}
        accountNumber={userData.accountNumber}
      />

<div className="user-details__content">

      <Section title="Personal Information" >
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
</div>
    </div>
  );
};

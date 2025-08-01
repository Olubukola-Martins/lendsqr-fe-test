import { useState } from "react";
import "./FilterDropdown.scss";
import { IoFilter } from "react-icons/io5";
import InputField from "../../../../components/FormItems/InputField";
import AppButton from "../../../../components/AppButton";
import SelectField from "../../../../components/FormItems/SelectField";
import { hasAtLeastOneValue } from "../../../../utils/helpers";

export type FilterValues = {
  organization: string;
  username: string;
  email: string;
  dateJoined: string;
  phone: string;
  status: "Inactive" | "Pending" | "Blacklisted" | "Active" | "";
};

type FilterFormProps = {
  onFilter: (values: FilterValues) => void;
  onReset?: () => void;
  //   isOpen: boolean;
  //   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterDropdown: React.FC<FilterFormProps> = ({
  onFilter,
  onReset,
  //   isOpen,
  //   setIsOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [formState, setFormState] = useState<FilterValues>({
    organization: "",
    username: "",
    email: "",
    dateJoined: "",
    phone: "",
    status: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(formState);
  };

  const handleReset = () => {
    const resetState: FilterValues = {
      organization: "",
      username: "",
      email: "",
      dateJoined: "",
      phone: "",
      status: "",
    };
    setFormState(resetState);
    onReset?.();
  };

  return (
    <div className="filter-dropdown dropdown">
      <IoFilter
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="sortIcon"
      />
      {isOpen && (
        <form
          onSubmit={handleFilter}
          className="filter-dropdown__form"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}>
          <InputField
            label="Organization"
            type="text"
            name="organization"
            value={formState.organization}
            onChange={handleChange}
            placeholder="Select"
          />
          <InputField
            label="Username"
            type="text"
            name="username"
            value={formState.username}
            onChange={handleChange}
            placeholder="Username"
          />

          <InputField
            label="Email"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <InputField
            label="Date Joined"
            type="date"
            name="dateJoined"
            value={formState.dateJoined}
            onChange={handleChange}
          />

          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            placeholder="Phone"
          />

          <SelectField
            label="Status"
            name="status"
            value={formState.status}
            onChange={handleChange}
            options={[
              { value: "", label: "Select Status" },
              { value: "Inactive", label: "Inactive" },
              { value: "Pending", label: "Pending" },
              { value: "Blacklisted", label: "Blacklisted" },
              { value: "Active", label: "Active" },
            ]}
          />

          <div className="form-actions">
            <AppButton
              label="Reset"
              type="reset"
              variant="reset"
              onClick={handleReset}
              disabled={!hasAtLeastOneValue(formState)}
            />
            <AppButton
              label="Filter"
              type="submit"
              disabled={!hasAtLeastOneValue(formState)}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default FilterDropdown;

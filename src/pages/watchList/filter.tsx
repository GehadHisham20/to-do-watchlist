import React, { ChangeEvent } from "react";
import styles from "./watchList.module.css";

interface IWatchItemFilterProps {
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
}

const options = [
  { label: "All", value: "all" },
  { label: "Completed", value: "true" },
  { label: "Not Completed", value: "false" },
];

export default function Filter({ setSelectedStatus }: IWatchItemFilterProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    let value = event.target.value;
    setSelectedStatus(value);
  };

  return (
    <div className={styles.filters}>
      <p style={{ marginBottom: "0.5em" }}>Filter by status</p>
      <select
        id="status-filter"
        className={"inputField select"}
        onChange={handleChange}
        defaultValue="all"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

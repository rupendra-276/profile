"use client";
import React from "react";
import SelectField from "./FormSelect";

const months = [
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" }
];

export default function MonthYearSelect({
  label,
  startYear = 1970,
  endYear = new Date().getFullYear() + 10,
  value = {},
  onChange
}) {
  // Years list generate (dynamic)
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => {
    const year = startYear + i;
    return { value: year.toString(), label: year.toString() };
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <SelectField
        label={`${label} Month`}
        options={months}
        value={value.month || ""}
        onChange={(e) => onChange({ type: "month", value: e.target.value })}
      />

      <SelectField
        label={`${label} Year`}
        options={years}
        value={value.year || ""}
        onChange={(e) => onChange({ type: "year", value: e.target.value })}
      />
    </div>
  );
}

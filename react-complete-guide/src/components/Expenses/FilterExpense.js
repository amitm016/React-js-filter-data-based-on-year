import React from "react";
import "./FilterExpense.scss";

export default function FilterExpense(props) {
  let years = ["2020", "2021", "2022"];
  const handleSelectedYear = (selectedYear) => {
    props.filteredYear(selectedYear);
  };
  return (
    <div className="expense-filter">
      <div>Filter by Year</div>
      <select
        className="expense-filter-year"
        onChange={(e) => handleSelectedYear(e.target.value)}
        name="Years"
        id="Years"
      >
        {years &&
          years.length > 0 &&
          years.map((year, id) => {
            return <option key={id} value={year}>{year}</option>;
          })}
      </select>
    </div>
  );
}

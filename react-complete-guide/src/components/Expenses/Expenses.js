import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import FilterExpense from "./FilterExpense";
// import { expenseData } from "./ExpenseData";

import "./Expenses.scss";

function Expense(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const getFilterYearData = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filterData = props.expenseData.filter((data) => {
    return data.expenseDate.getFullYear().toString() === selectedYear;
  });

  let expenseContent = (
    <div className="no-filter-data-message">
      Data is not available for filtered year
    </div>
  );

  if (filterData.length > 0) {
    expenseContent = filterData.map((data, id) => {
      return (
        <ExpenseItem
          key={id}
          expenseDate={data.expenseDate}
          expenseTitle={data.expenseTitle}
          expensePrice={data.expensePrice}
        />
      );
    });
  }
	
  return (
    <Card className="expenses">
      <FilterExpense filteredYear={getFilterYearData} />
      {expenseContent}
    </Card>
  );
}

export default Expense;

import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./AddNewExpense.scss";

const AddNewExpense = (props) => {
  const [OpenAddnewExpenses, setOpenAddnewExpenses] = useState(false);

  const onSaveExpenseData = (enteredExpenseData) => {
    if (props.onAddData) {
      props.onAddData(enteredExpenseData);
    }
  };

  const handleClick = () => {
    setOpenAddnewExpenses(!OpenAddnewExpenses);
  };

  return (
    <div className="add-new-expense">
      {!OpenAddnewExpenses && (
				<div className="add-new-expense-button">
					<button className="add-new-expense-button-style" onClick={handleClick}>
						Add new Expenses
					</button>
				</div>
      )}
      {OpenAddnewExpenses && (
        <ExpenseForm onSaveExpenseData={onSaveExpenseData} cancel={handleClick} />
      )}
    </div>
  );
};

export default AddNewExpense;

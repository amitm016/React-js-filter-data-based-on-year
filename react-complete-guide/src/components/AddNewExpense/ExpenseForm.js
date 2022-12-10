import "./ExpenseForm.scss";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTilte, setEnteredTilte] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredCost, setEnteredCost] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredDate: "",
  //   enteredCost: "",
  // });
  const titleChangeHandler = (event) => {
    setEnteredTilte(event.target.value);
    // setUserInput({
    //   ...userInput,                      not correct way of updating state
    //   enteredTitle: event.target.value,
    // });
    // below is the correct way
    // setUserInput((prevState) => {
    // 	return {
    // 		...prevState,
    // 		enteredTitle: event.target.value,
    // 	}
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    // 		...prevState,
    // 		enteredDate: event.target.value,
    // 	}
    // });
  };

  const costChangeHandler = (event) => {
    setEnteredCost(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    // 		...prevState,
    // 		enteredCost: event.target.value,
    // 	}
    // });
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    const data = {
      expenseTitle: enteredTilte,
      expenseDate: new Date(enteredDate),
      expensePrice: `${enteredCost} Rs`,
    };
		// const [onSaveExpenseData] = props
		if(props.onSaveExpenseData) {
			props.onSaveExpenseData(data)
		}
    setEnteredTilte("");
    setEnteredDate("");
    setEnteredCost("");
  };

  const handleCancel = () => {
    props.cancel()
  }

  return (
    <form onSubmit={handleSubmitClick}>
      <div className="add-new-expense-form">
        <div className="split">
          <div className="add-new-expense-title">
            <label>Title</label>
            <input
              type="text"
              value={enteredTilte}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="add-new-expense-Date">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
              min="2020-01-01"
            />
          </div>
        </div>
        <div className="add-new-expense-Cost">
          <label>Cost</label>
          <input
            type="number"
            value={enteredCost}
            onChange={costChangeHandler}
            min="1"
            step="1"
          />
        </div>
      </div>
      <div className="add-new-expense-buttons">
        <div className="add-new-expense--button-cancel">
          <button onClick={handleCancel}>Cancel</button>
        </div>
        <div className="add-new-expense--button-submit">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

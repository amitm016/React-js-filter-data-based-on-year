// import logo from './images/logo.svg'
import Expense from "./components/Expenses/Expenses"
import React, { useState } from "react";
import AddNewExpense from "./components/AddNewExpense/AddNewExpense"

function App() {
  const [ expenseData, setExpenseData ] = useState([])
  const onAddData = (enteredExpenseData) => {
		const NewexpenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		}
		console.log("NewExpenseData from app", NewexpenseData);
    setExpenseData([...expenseData, NewexpenseData])
	}
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <AddNewExpense onAddData={onAddData} />
        <Expense expenseData={expenseData} />
      </header>
    </div>
  );
}

export default App;

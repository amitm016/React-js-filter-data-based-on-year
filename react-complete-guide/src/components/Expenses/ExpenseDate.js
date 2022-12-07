import './ExpenseDate.scss'

function ExpenseData(props) {
	const month = props.expenseDate.toLocaleString("en-US", { month: "long" });
  const year = props.expenseDate.toLocaleString("en-US", { year: "numeric" });
  const day = props.expenseDate.toLocaleString("en-US", { day: "2-digit" });
  return (
		<div className="expense_date">
			<div>{month}</div>
			<div>{year}</div>
			<div>{day}</div>
    </div>
	)
}

export default ExpenseData
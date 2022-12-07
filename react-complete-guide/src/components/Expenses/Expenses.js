import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
// import { expenseData } from "./ExpenseData";

import "./Expenses.scss"

function Expense(props) {
	console.log("props",props);
	return(
		<Card className="expenses">
			{
				props.expenseData.length > 0 && props.expenseData.map((data, id) => {
					return (
						<ExpenseItem
							key={id}  
							expenseDate={data.expenseDate}
							expenseTitle={data.expenseTitle}
							expensePrice={data.expensePrice}
						/>
					)
				})
			}
		</Card>
	)
}

export default Expense
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import { expenseData } from "./ExpenseData";

import "./Expenses.scss"

function Expense() {
	return(
		<Card className="expenses">
			{
				expenseData.length > 0 && expenseData.map((data, id) => {
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
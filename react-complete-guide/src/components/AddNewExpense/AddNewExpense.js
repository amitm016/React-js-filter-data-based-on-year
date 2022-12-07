import ExpenseForm from './ExpenseForm'
import './AddNewExpense.css'

const AddNewExpense = (props) => {
	const onSaveExpenseData = (enteredExpenseData) => {
		console.log("expensedata from AddNewExpense", enteredExpenseData);
		if(props.onAddData) {
			props.onAddData(enteredExpenseData)
		}
	} 
	return(
		<div className='add-new-expense'>
			<ExpenseForm onSaveExpenseData={onSaveExpenseData} />
		</div>
	)
}

export default AddNewExpense


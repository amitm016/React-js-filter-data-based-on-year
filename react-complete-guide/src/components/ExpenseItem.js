import ExpenseData from "./ExpenseDate";
import Card from "./Card"

import "./ExpenseItem.scss";

function Expensive(props) {
  return (
    <Card className="expensive_item">
      <ExpenseData expenseDate={props.expenseDate} />
      <div className="expensive_item_desc">
        <h2>{props.expenseTitle}</h2>
        <div className="expensive_item_price">{props.expensePrice}</div>
      </div>
    </Card>
  );
}

export default Expensive;

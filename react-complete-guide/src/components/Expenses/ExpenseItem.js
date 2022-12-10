// import React, { useState } from "react";
import ExpenseData from "./ExpenseDate";
import Card from "../UI/Card"

import "./ExpenseItem.scss";

function Expensive(props) {
  // const [ title, setTilte ] = useState(props.expenseTitle)
  // const clicHandler = () => {
  //   setTilte("new title")
  //   console.log("title:===", title)
  // } 
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

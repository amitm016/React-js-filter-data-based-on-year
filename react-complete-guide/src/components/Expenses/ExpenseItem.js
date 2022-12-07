import React, { useState } from "react";
import ExpenseData from "./ExpenseDate";
import Card from "../UI/Card"

import "./ExpenseItem.scss";

function Expensive(props) {
  const [ title, setTilte ] = useState(props.expenseTitle)
  const clicHandler = () => {
    setTilte("new title")
    console.log("title:===", title)
  } 
  return (
    <Card className="expensive_item">
      <ExpenseData expenseDate={props.expenseDate} />
      <div className="expensive_item_desc">
        <h2>{title}</h2>
        <div className="expensive_item_price">{props.expensePrice}</div>
        <button onClick={clicHandler}>
          click
        </button>
      </div>
    </Card>
  );
}

export default Expensive;

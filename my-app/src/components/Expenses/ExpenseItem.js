import React, { useState } from "react";
//import a useState function from library react- Hooks begin with use, and have to be used inside componentfunctions (not in nestled functions)

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  //uses state so that the function runs again

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
        {/* <button onClick={() => { console.log('clicked') }}>Change Title</button> */}
      </div>
    </Card>
  );
};

export default ExpenseItem;

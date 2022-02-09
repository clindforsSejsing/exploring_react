import React, { useState } from 'react';
//import a useState function from library react- Hooks begin with use, and have to be used inside componentfunctions (not in nestled functions)

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
    //returns an array. array-decruction [], 2 elements, 1 crrent state value, 2 function to update that
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
        // console.log(title);
        // console.log('Click-edi-clicked');
    }; //when usig function it does leave out the brackets, otherwise it will execute at the same time as the jsx-code below
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
                {/* <button onClick={() => { console.log('clicked') }}>Change Title</button> */}
            </div>
        </Card>
    );
}

export default ExpenseItem;
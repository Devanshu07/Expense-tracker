import React from 'react';

import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';
import Card from '../UI/card.js'

const ExpenseItem = (props) => {
    // function clickHandler() {}

    // const [title, setTitle] = useState(props.title);


    // const clickHandler = () => {
    //     setTitle('Updated!');
    //     console.log(title);
    // }
    return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__descrption'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>₹{props.amount}</div>
        </div>
    </Card>
    );
}

export default ExpenseItem;
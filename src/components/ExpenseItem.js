import './ExpenseItem.css';

function ExpenseItem() {
    return (
    <div className='expense-item'>
        <div>April 8th 2023</div>
        <div className='expense-item__descrption'>
            <h2>Car Insurance</h2>
        <div className='expense-item__price'>₹1900.00</div>
        </div>
    </div>
    );
}

export default ExpenseItem;
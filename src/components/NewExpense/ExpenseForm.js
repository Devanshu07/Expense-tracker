import React from "react";

import './ExpenseForm.css';
const ExpenseForm = () => {
  return <form>
    <div className="new-expense__control">
        <div className="new-expense__control">
        <label>Title</label>
        <input type="text" />
        </div>
        <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.1" step="0.01" />
        </div>
        <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min= />
        </div>
    </div>
  </form>
};

export default ExpenseForm;
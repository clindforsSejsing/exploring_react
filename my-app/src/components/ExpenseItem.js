import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2022, 1, 8);
    const expenseTitle = 'Food-account';
    const expenseAmount = 3000 + 'kr';

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                {/* <h2>{Math.floor(Math.random() * 100)}</h2> */}
            </div>
            <div className="expense-item__price">{expenseAmount}</div>
        </div >
    )
}

export default ExpenseItem;
import './ExpenseItem.css';

//props uses keyvalues (can be namned anything but named props as a standard)
function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                {/* <h2>{Math.floor(Math.random() * 100)}</h2> */}
            </div>
            <div className="expense-item__price">{props.amount + 'kr'}</div>
        </div >
    )
}

export default ExpenseItem;
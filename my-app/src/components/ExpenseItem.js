import './ExpenseItem.css';

//props uses keyvalues (can be namned anything but named props as a standard)
function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                {/* <h2>{Math.floor(Math.random() * 100)}</h2> */}
            </div>
            <div className="expense-item__price">{props.amount + 'kr'}</div>
        </div >
    )
}

export default ExpenseItem;
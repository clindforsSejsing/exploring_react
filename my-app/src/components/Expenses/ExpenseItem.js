import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {

    const clickHandler = () => {
        console.log('Click-edi-clicked');
    }; //when usig function it does leave out the brackets, otherwise it will execute at the same time as the jsx-code below
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
                {/* <button onClick={() => { console.log('clicked') }}>Change Title</button> */}
            </div>
        </Card>
    );
}

export default ExpenseItem;
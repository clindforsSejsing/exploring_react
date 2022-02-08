import ExpenseItem from './components/ExpenseItem.js';

function App() {
  //adding props 
  const expenses = [
    {
      id: 'b5',
      title: 'Family Food-accounts',
      amount: 30000,
      date: new Date(2022, 1, 8)
    },
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 400,
      date: new Date(2021, 12, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 8000,
      date: new Date(2022, 0, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 2940,
      date: new Date(2022, 1, 1),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 4500,
      date: new Date(2022, 1, 24),
    },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem //keys names (have to match props on ExpenseItem.js) title, amount etc. can be namned anything
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      ></ExpenseItem>
      <p>This is also visible!</p>
    </div>
  );
}

export default App;
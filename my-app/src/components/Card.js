import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Card;


//makes a Wrapper- like a card styling for the components. Exchanged for outer div in files
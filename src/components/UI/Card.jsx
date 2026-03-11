import classes from './Card.module.css';

export default function Card(props) {
    return (
        <div className={classes.card}>
            <div>{props.icon}</div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
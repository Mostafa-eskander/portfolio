import { Link } from 'react-router-dom';
import classes from './Button.module.css';

export default function Button(props) {
    return(
        <Link to={props.link} className={`${classes.button} ${props.className}`}>
            {props.children}
        </Link>
    )
}
import { Link } from 'react-router-dom';
import classes from './ProjectsCard.module.css';

export default function ProjectsCard(props) {
    return(
        <div className={`${classes.card} ${props.className}`}>
            <div className={classes.image}>
                <img src={props.src} alt={props.title} />
            </div>
            <div className={classes.text}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className={classes.skills}>
                {props.skills.map((skill) => (
                    <button key={skill}>{skill}</button>
                ))}
            </div>
            <Link to={props.link} className={classes.btn}>View Project</Link>
        </div>
    )
}
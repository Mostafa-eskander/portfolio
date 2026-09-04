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
                <h3>Skills</h3>
                <div className={classes.skillsBtn}>
                    {props.skills.map((skill) => (
                        <button key={skill}>{skill}</button>
                    ))}
                </div>
            </div>
            <Link to={props.link} className={classes.btn}>Read Details</Link>
        </div>
    )
}
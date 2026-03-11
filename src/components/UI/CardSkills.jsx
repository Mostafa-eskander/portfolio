import classes from './CardSkills.module.css';

export default function CardSkills(props) {
    return(
        <div className={`${props.className} ${classes.cardSkills}`}>
            <h1>{props.title}</h1>
            <ul>
                {props.skills.map((skill) => (
                    <li key={skill.skillTitle}>
                        <div className={classes.text}>
                            <h4>{skill.skillTitle}</h4>
                            <span>{skill.skillWidth}</span>                            
                        </div>
                        <div className={classes.rate}>
                            <span style={{width: `${skill.skillWidth}`}}></span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
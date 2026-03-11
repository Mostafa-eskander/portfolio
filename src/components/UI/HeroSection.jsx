import classes from './HeroSection.module.css';

export default function HeroSection (props) {
    return(
        <div className={classes.heroSection}>
            <h2>{props.definition}</h2>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
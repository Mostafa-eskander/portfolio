import classes from './AboutMe.module.css';

export default function AboutMe() {
    return(
        <section className={classes.aboutMe}>
            <div className={`container ${classes.container}`}>
                <div className={classes.text}>
                    <h2>About Me</h2>
                    <h1>Mostafa Eskander</h1>
                    <p>Front-end Developer (React • Next.js)</p>
                </div>
                <div className={classes.image}>
                    <img src='/me.png'/>
                </div>
            </div>
        </section>
    )
}
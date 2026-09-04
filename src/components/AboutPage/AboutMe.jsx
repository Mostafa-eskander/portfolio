import classes from './AboutMe.module.css';

export default function AboutMe() {
    return(
        <section className={classes.aboutMe}>
            <div className={`container ${classes.container}`}>
                <div className={classes.text}>
                    <h1>About Me</h1>
                    <h4>I'm a Frontend Developer who enjoys turning ideas into functional and engaging web experiences.</h4>
                    <p>I specialize in building modern web applications using React and Next.js. I focus on creating responsive interfaces, smooth user experiences, and maintainable code that brings real-world ideas to life.</p>
                    <p>I’m constantly improving my skills by building real-world projects and exploring better ways to solve problems, optimize performance, and create better experiences for users.</p>
                </div>
                <div className={classes.image}>
                    <img src='/me.png'/>
                </div>
            </div>
        </section>
    )
}
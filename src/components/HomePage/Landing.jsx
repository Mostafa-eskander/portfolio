import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";

import classes from './Landing.module.css';
import Button from "../UI/Button";

export default function LandingPgae() {
    return(
        <main className={classes.landing}>
            <div className={`container ${classes.container}`}>
                <h4>Frontend Developer | React & Next.js Specialist</h4>
                <h3>Web Developer</h3>
                <h2>React . Next.js . SQL</h2>
                <h5>Real Production Systems • Clean Architecture • Scalable APIs</h5>
                <p>I'm a passionate Front-End Developer who loves building modern, responsive, and user-friendly web applications.</p>
                <div className={classes.button}>
                    <Link to="/projects" className={classes.projectBtn}>View Projects <FaCaretRight /></Link>
                    <Link to="./Frontend-Developer.docx" download target="_blank" className={classes.downlaodBtn}>Download CV <FaDownload /></Link>
                    <Button link="/contact" className={classes.contactBtn}>Contact Me</Button>
                </div>
            </div>
        </main>
    )
}
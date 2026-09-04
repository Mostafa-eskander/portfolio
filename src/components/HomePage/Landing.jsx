import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";

import classes from './Landing.module.css';
import Button from "../UI/Button";

export default function LandingPgae() {
    return(
        <main className={classes.landing}>
            <div className={`container ${classes.container}`}>
                <h4>Frontend Developer</h4>
                <h3>I Turn Ideas Into Modern Web Experiences</h3>
                <h2>React . Next.js . JavaScript</h2>
                <p>I build responsive and high-performance websites and web applications using React and Next.js, combining clean design, smooth user experience, and reliable functionality.</p>
                <div className={classes.button}>
                    <Link to="/projects" className={classes.projectBtn}>View My Work <FaCaretRight /></Link>
                    <Link to="./Mostafa_mahmoud_CV.pdf" download target="_blank" className={classes.downlaodBtn}>Download CV <FaDownload /></Link>
                    <Button link="/contact" className={classes.contactBtn}>Let's Work Together</Button>
                </div>
            </div>
        </main>
    )
}
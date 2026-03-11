import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import classes from './MainFooter.module.css';

export default function MainFooter() {
    const year = new Date().getFullYear();
    
    return(
        <footer className={classes.footer}>
            <div className={`container ${classes.container}`}>
                <div className={classes.text}>
                    <h3>Mostafa<span>.</span></h3>
                    <p>Front-end Developer</p>
                </div>
                <div className={classes.links}>
                    <a href="https://github.com/Mostafa-eskander/" target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/mostafa-mahmoud-78722b3a8/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="mailto:mostafaeskander723@gmail.com" target="_blank" rel="noopener noreferrer">
                        <SiGmail />
                    </a>
                </div>
            </div>
            <p className={classes.endText}>© {year} Mostafa Eskander. All rights reserved.</p>
        </footer>
    )
}
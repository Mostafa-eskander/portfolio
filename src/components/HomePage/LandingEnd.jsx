import { FaArrowRightLong } from "react-icons/fa6";

import Button from '../UI/Button';
import classes from './LandingEnd.module.css'

export default function LandingEnd() {
    return(
        <section className={classes.landingEnd}>
            <div>
                <h3>Let's Build Something Great</h3>
                <p>Have a project in mind? I'm always open to discussing new opportunities and interesting challenges.</p>
                <Button link="/contact" className={classes.link}>
                    Get In Touch <FaArrowRightLong />
                </Button>
            </div>
        </section>
    )
}
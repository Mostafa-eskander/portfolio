import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import HeroSection from "../UI/HeroSection";
import ContactForm from "./ContactForm";
import classes from './ContactLanding.module.css';

const CONTACTWAYS=[
    {
        icon: <MdOutlineEmail />,
        title: 'Email',
        link: 'mostafaeskander723@gmail.com'
    },
    {
        icon: <CiLocationOn />,
        title: 'Location',
        subject: 'Available for remote work worldwide'
    },
    {
        icon: <FiGithub />,
        title: 'GitHub',
        link: 'https://github.com/Mostafa-eskander'
    },
    {
        icon: <FaLinkedinIn />,
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/mostafa-mahmoud-78722b3a8/'
    }
]

export default function ContactLanding() {
    return(
        <div className={classes.contact}>
            <div className={classes.heroSection}>
                <HeroSection 
                    definition="Get In Touch"
                    title="Let's Work Together"
                    description="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
                />
            </div>
            <div className={`container ${classes.container}`}>
                <div className={classes.text}>
                    <h2>Contact Information</h2>
                    <p>Feel free to reach out through any of the following channels. I typically respond within 24-48 hours.</p>
                    <ul>
                        {CONTACTWAYS.map((way) => (
                            <li key={way.title}>
                                <div className={classes.ways}>
                                    <span className={classes.icon}>{way.icon}</span>
                                    <div className={classes.subject}>
                                        <h4>{way.title}</h4>
                                        <span>{way.subject}</span>
                                        <a href={way.link} target="_blank" rel="noopener noreferrer">{way.link}</a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}
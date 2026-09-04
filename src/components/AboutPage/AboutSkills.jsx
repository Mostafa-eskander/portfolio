import { SiLucide } from "react-icons/si";
import { FiZap } from "react-icons/fi";
import { MdLightbulb } from "react-icons/md";
import { IoCodeSlashOutline } from "react-icons/io5";

import classes from './AboutSkills.module.css';
import HeroSection from '../UI/HeroSection';
import Card from "../UI/Card";

const ABOUTSKILLS = [
    {
        icon: <SiLucide />,
        title: 'Clean & Maintainable Code',
        description: 'I write organized and reusable code that makes applications easier to maintain and evolve.'
    },
    {
        icon: <FiZap />,
        title: 'Performance',
        description: 'I care about fast loading times, efficient rendering, and smooth user interactions.'
    },
    {
        icon: <MdLightbulb />,
        title: 'User Experience',
        description: 'I build responsive interfaces that are intuitive and enjoyable to use across devices.'
    },
    {
        icon: <IoCodeSlashOutline />,
        title: 'Continuous Improvement',
        description: 'I continuously learn and improve my skills through real-world projects and modern web technologies.'
    },
]

export default function AboutSkills() {
    return(
        <section className={classes.aboutSkills}>
            <HeroSection 
                definition="My Approach"
                title="How I Build Better Web Experiencess"
                description="The mindset I follow when building real-world applications"
            />
            <div className={`container ${classes.container}`}>
                {ABOUTSKILLS.map((skills) => (
                    <Card key={skills.title} 
                        icon={skills.icon}
                        title={skills.title}
                        description={skills.description}
                    />
                ))}
            </div>
        </section>
    )
}
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
        title: 'Quality First',
        description: 'Every feature is built with scalability, maintainability, and real production usage in mind — not just demos.'
    },
    {
        icon: <FiZap />,
        title: 'Performance Driven',
        description: 'From database queries to frontend rendering, performance is always a priority in my applications.'
    },
    {
        icon: <MdLightbulb />,
        title: 'Continuous Learning',
        description: 'I constantly evolve with modern stacks like Next.js and prepare for mobile development with React Native.'
    },
    {
        icon: <IoCodeSlashOutline />,
        title: 'Clean Architecture',
        description: 'I follow clean architecture principles to build systems that are easy to scale, debug, and extend.'
    },
]

export default function AboutSkills() {
    return(
        <section className={classes.aboutSkills}>
            <HeroSection 
                definition="My Approach"
                title="Values & Principles"
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
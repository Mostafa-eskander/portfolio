import { LuPanelsTopLeft } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa6";
import { CgPerformance } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";

import HeroSection from "../UI/HeroSection";
import classes from './LandingSkills.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

const CONTENTCARD= [
    {
        icon: <LuPanelsTopLeft />,
        title: 'Frontend Development',
        description: 'Crafting high-performance interfaces with React, Next.js, and modern UI architecture'
    },
    {
        icon: <FaDatabase />,
        title: 'Database',
        description: 'I have a foundational understanding of databases and how they integrate with modern web applications.Currently learning how to design, structure, and manage databases efficiently.'
    },
    {
        icon: <CgPerformance />,
        title: 'Performance',
        description: 'Optimizing applications for speed, stability and production readiness'
    },
    
]

export default function LandingSkills() {
    return(
        <section className={classes.skills}>
            <HeroSection 
                definition="WHAT I ENGINEER"
                title="Expertise & Skills"
                description="Experienced in responsive & mobile-first design."
            />
            <div className={'container ' + classes.container}>
                {CONTENTCARD.map((content) => (
                    <Card 
                        key={content.title}
                        icon={content.icon}
                        title={content.title}
                        description={content.description}
                    />
                ))}
            </div>
            <Button link="/skills">View All Skills <FaArrowRightLong /></Button>
        </section>
    )
}
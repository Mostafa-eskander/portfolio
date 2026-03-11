import { SKILLS } from '../../../public/skills';
import HeroSection from '../UI/HeroSection';
import classes from './SkillsStack.module.css';

export default function SkillsStack() {
    return(
        <div className={classes.skillsStack}>
            <HeroSection
                definition="Tech Stack" 
                title="Technologies I Work With"
                description="Modern tools and frameworks for building exceptional digital products"
            />
            <div className="container">
                <ul className={classes.skills}>
                    {SKILLS.map((skill) => (
                        <li key={skill}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
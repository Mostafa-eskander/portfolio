import { SKILLS } from '../../../public/skills';
import HeroSection from '../UI/HeroSection';
import classes from './SkillsStack.module.css';

export default function SkillsStack() {
    return(
        <div className={classes.skillsStack}>
            <HeroSection
                definition="Tech Stack" 
                title="Technologies I Work With"
                description="My toolkit helps me build responsive interfaces, smooth user experiences, and modern web applications."
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
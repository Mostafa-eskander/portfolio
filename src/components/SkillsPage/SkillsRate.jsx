import { Database_Tools, FRONTEND, UIUX_Performance } from '../../../public/skills';
import CardSkills from '../UI/CardSkills';
import HeroSection from '../UI/HeroSection';
import classes from './SkillsRate.module.css';

export default function SkillsRate() {
    return(
        <div className={classes.skills}>
            <HeroSection
                definition='Technical Skills'
                title='Skills & Expertise'
                description='A comprehensive toolkit for building modern, production-ready web applications'
            />
            <div className={`container ${classes.container}`}>
                <CardSkills 
                    className={classes.rateSkills}
                    title={FRONTEND.title}
                    skills={FRONTEND.skills}
                />
                <CardSkills 
                    className={classes.rateSkills}
                    title={Database_Tools.title}
                    skills={Database_Tools.skills}
                />
                <CardSkills 
                    className={classes.rateSkills}
                    title={UIUX_Performance.title}
                    skills={UIUX_Performance.skills}
                />
            </div>
        </div>
    )
}
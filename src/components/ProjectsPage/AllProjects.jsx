import { useLoaderData } from 'react-router-dom';
import classes from './AllProjects.module.css';
import ProjectsCard from '../UI/ProjectsCard';
import HeroSection from '../UI/HeroSection';

export default function AllProjects() {
    const projects = useLoaderData();
    
    return(
        <div className={classes.allProjects}>
            <div className={classes.heroSection}>
                <HeroSection 
                    definition="Portfolio"
                    title="My Projects"
                    description="A collection of production-ready applications showcasing front-end development expertise"
                />
            </div>
            <div className="container">
                <ul className={classes.projects}>
                    {projects.map((project) => (
                        <ProjectsCard 
                            className={classes.project}
                            key={project.title}
                            title={project.title}
                            src={project.src}
                            description={project.shortDes}
                            skills={project.Skills}
                            link={project.link}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export async function loader() {
    const response = await fetch('./projects.json');
    if(!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const resdata = await response.json();

    return resdata;
}
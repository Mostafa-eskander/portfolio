import { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

import HeroSection from '../UI/HeroSection';
import classes from './LandingProjects.module.css';
import ProjectsCard from '../UI/ProjectsCard';
import Button from '../UI/Button';

export default function LandingProjects() {
    const [projects,setprojects] = useState([]);

    useEffect(() => {
        async function getProject() {
            try{
                const response = await fetch('./projects.json');
                if(!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const resdata = await response.json();
                const firstFour = resdata.slice(0, 4);
                setprojects(firstFour);
            }catch(error) {
                console.error(error)
            }
        }
        getProject();
    },[])

    return(
        <section className={classes.products}>
            <HeroSection 
                definition="REAL WORLD PROJECTS"
                title="Websites I've Built"
                description='Designed, engineered, and shipped to production.'
            />
            <div className={`container ${classes.container}`}>
                {projects.map((project) => (
                    <ProjectsCard 
                        key={project.title}
                        className={classes.card}
                        src={project.src}
                        title={project.title}
                        description={project.shortDes}
                        skills={project.Skills}
                        link={project.link}
                    />
                ))}
            </div>
            <Button link="/projects" className={classes.linkBtn}>View All Projects <FaArrowRightLong /></Button>
        </section>
    )
}

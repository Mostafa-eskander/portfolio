import { useLoaderData,Link } from 'react-router-dom';
import classes from './ProductDetails.module.css';

export default function ProductDetails() {
    const project = useLoaderData();

    return (
        <div className={classes.projectDetails}>

            <div className={classes.projectHeader}>
                <h2>{project?.title}</h2>
                <img src={`../${project.src}`} alt={project.title}/>
                <p>{project?.description}</p>
            </div>

            <div className={classes.projectKeyFeatures}>
                <h3>Key Features</h3>
                <div>
                    {project?.Key_Features.map((feature,index) => (
                        <span key={feature}>{index + 1} - {feature}</span>
                    ))}
                </div>
            </div>

            <div className={classes.projectTechStack}>
                <h3>Tech Stack</h3>
                <div>
                    {project?.Skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                    ))}
                </div>
            </div>

            <Link to={project.link} className={classes.btn}>Live Demo</Link>

        </div>
    )
}

export async function projectDetailsLoader({ params }) {
  const response = await fetch('/projects.json');
  if(!response.ok) {
    throw new Error('Failed to fetch data');
  } 
  
  const resData = await response.json();

  const project = resData.find(
    project => project.id === Number(params.id)
  );

  return project;
}
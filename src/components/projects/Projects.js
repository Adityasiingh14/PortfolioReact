import React from 'react';
import ProjectCard from './ProjectCard';
import './Project.css';
import portfolioImg from '../../assets/portfolio.png';

const projects = [
  {
    name: 'Portfolio',
    link: 'https://example.com/project1',
    image: portfolioImg,
    githubLink: 'https://github.com/Adityasiingh14/PortfolioReact'
  },
  {
    name: 'Project 2',
    link: 'https://example.com/project2',
    image: 'https://example.com/project2.jpg',
    githubLink: 'https://github.com/username/project2'
  }
];

function Projects() {
  return (
    <div className='project-page'>
      <h1 className="projects-text">Projects</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.name}
            projectLink={project.link}
            projectImage={project.image}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

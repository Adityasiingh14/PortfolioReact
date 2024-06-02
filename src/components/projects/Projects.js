import React from 'react';
import ProjectCard from './ProjectCard';
import './Project.css';
import portfolioImg from '../../assets/portfolio.png';
import quizApp from '../../assets/quizapp.png';
import calculator from '../../assets/calculator.png';
import tictactoe from '../../assets/tictactoe.png';
import portfoliovanilla from '../../assets/portfoliovanilla.png';

const projects = [
  {
    name: 'Portfolio',
    link: 'https://example.com/project1',
    image: portfolioImg,
    githubLink: 'https://github.com/Adityasiingh14/PortfolioReact'
  },
  {
    name: 'QuizApp',
    link: 'https://adityasiingh14.github.io/QuizApp/',
    image: quizApp,
    githubLink: ''
  },
  {
    name: 'calculator',
    link: 'https://adityasiingh14.github.io/Calculator/',
    image: calculator,
    githubLink: 'https://github.com/Adityasiingh14/Calculator'
  },
  {
    name: 'TicTacToe',
    link: 'https://adityasiingh14.github.io/Tic-Tac-Toe/',
    image: tictactoe,
    githubLink: 'https://github.com/Adityasiingh14/Tic-Tac-Toe'
  },
  {
    name: 'portfoliovanilla',
    link: 'https://adityasiingh14.github.io/Updated_Hackathon1/',
    image: portfoliovanilla,
    githubLink: 'https://github.com/Adityasiingh14/Updated_Hackathon1'
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

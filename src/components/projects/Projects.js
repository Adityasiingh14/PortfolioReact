import ProjectCard from "./ProjectCard"

const projects = [
    {
        name: 'Project 1',
        link: 'https://example.com/project1',
        image: 'https://example.com/project1.jpg'
    },
    // Add more projects as needed
];
function Projects(){
    return (
        <div>
            <h1>Projects</h1>
            {projects.map((project,index) => (
                <ProjectCard
                    key={index}
                    projectName={project.name}
                    projectLink={project.link}
                    projectImage={project.image}
                />
            ))}
        </div>
    )
}
export default Projects;
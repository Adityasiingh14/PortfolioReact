function ProjectCard({ projectName, projectLink, projectImage}) {
  return (
    <div>
        <h2>{projectName}</h2>
        <a href={projectLink}>
            <img src={projectImage} alt={projectLink}/>
        </a>
    </div>
  );
}
export default ProjectCard;
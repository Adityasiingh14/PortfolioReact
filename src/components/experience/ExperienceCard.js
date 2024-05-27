function ExperienceCard({ image , projectName, projectDuration, rank, points}) {
  return (
    <div>
        <img src={image} alt={projectName} />
        <h3>{projectName}</h3>
        <p>{projectDuration}</p>
        <p>{rank}</p>
        <ul>
            {points.map((description, index) => (
                <li key={index}>{description}</li>
            ))}
        </ul>
    </div>
  );
}
export default ExperienceCard;
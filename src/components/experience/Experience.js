import ExperienceCard from "./ExperienceCard";
const experiences = [
    {
        image: 'https://example.com/project1.jpg',
        projectName: 'Project 1',
        projectDuration: 'January 2020 - Present',
        rank: 'Senior Developer',
        points: [
            'Developed the front-end using React',
            'Implemented a RESTful API using Node.js',
            // Add more points as needed
        ],
    },
    {
        image: 'https://example.com/project2.jpg',
        projectName: 'Project 2',
        projectDuration: 'January 2020 - Present',
        rank: 'Senior Developer',
        points: [
            'Developed the front-end using React',
            'Implemented a RESTful API using Node.js',
            // Add more points as needed
        ],
    },
    {
        image: 'https://example.com/project3.jpg',
        projectName: 'Project 3',
        projectDuration: 'January 2020 - Present',
        rank: 'Senior Developer',
        points: [
            'Developed the front-end using React',
            'Implemented a RESTful API using Node.js',
            // Add more points as needed
        ],
    },
    // Add more experiences as needed
];
function Experience(){
    return (
        <div>
        <h1>Experience</h1>
        {experiences.map((experience, index) => (
            <ExperienceCard 
                key={index}
                image={experience.image}
                projectName={experience.projectName} 
                projectDuration={experience.projectDuration} 
                rank={experience.rank}
                points={experience.points}
            />
        ))}
    </div>
    );
}
export default Experience;
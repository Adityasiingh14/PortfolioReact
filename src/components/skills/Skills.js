import { faJava,faReact, faHtml5, faCss3, faNodeJs, faPython, faJs,faGit,faGithub } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const skills = [
    { icon: faJava, title: "Java" },
    { icon: faPython, title: "Python" },
    { icon: faJs, title: "JavaScript" },
    { icon: faReact, title: "React" },
    { icon: faHtml5, title: "HTML5" },
    { icon: faCss3, title: "CSS3" },
    { icon: faGithub, title: "GitHub" },
    { icon: faGit, title: "Git" },
    { icon: faNodeJs, title: "NodeJs"},

    
];

function Skills() {
  return (
    <div className="skills-container">
      {skills.map((skills, index) => (
        <div key={index} className="skill-box">
          <FontAwesomeIcon icon={skills.icon}/>
          <h4>{skills.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Skills;
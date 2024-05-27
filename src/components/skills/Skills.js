import { faReact, faHtml5, faCss3, faNodeJs, faPython, faJs,faGit,faGithub } from '@fortawesome/free-brands-svg-icons';

import CustomComponent from '../extras/CustomFontAwesomeInterestComp';
const skills = [
    { icon: faPython, title: "Python" },
    { icon: faJs, title: "JavaScript" },
    { icon: faReact, title: "React" },
    { icon: faHtml5, title: "HTML5" },
    { icon: faCss3, title: "CSS3" },
    { icon: faGithub, title: "GitHub" },
    { icon: faGit, title: "Git" },
    { icon: faNodeJs, title: "NodeJs"}
    
];

function Skills() {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-box">
          <CustomComponent icon={skill.icon} title={skill.title} />
        </div>
      ))}
      {/* made some changes here */}
    </div>
  );
}

export default Skills;
import { faReact, faHtml5, faCss3, faNodeJs, faPython, faJs,faGit,faGithub } from '@fortawesome/free-brands-svg-icons';

import CustomComponent from './CustomFontAwesomeInterestComp';
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
    <div>
      {skills.map((skill, index) => (
        <CustomComponent key={index} icon={skill.icon} title={skill.title} />
      ))}
    </div>
  );
}

export default Skills;
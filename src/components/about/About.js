import Interests from "./Interests";
import profile from "../../assets/profile.png";
import './About.css';
function About() {
  return (
    <div>
      <div className="about">
        <div className="about-title-img">
          <h2>ABOUT</h2>
          <img src={profile} alt={"MyImage"}/>
        </div>
        <div className="about-text">
          <h1>👋 Hey there</h1>
          <p>I'm Vaheed, a passionate software developer. I specialize in Web Development, crafting seamless user experiences and robust backend solutions. With a knack for problem-solving, I thrive on creating elegant code that makes an impact. I'm always exploring new tools and techniques to stay at the forefront of the ever-evolving tech landscape.
            <br />
            📫 Open to collaborations and exciting projects, I'm eager to connect with fellow developers and tech enthusiasts. Let's build something amazing together!
            <br />
            Happy coding! 🖥️ 
          </p>
          <h1>INTERESTS</h1>
        </div>  
      </div> 
      <Interests />
    </div>
  );
}
export default About;
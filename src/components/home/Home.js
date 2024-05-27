import SocialMedia from "../extras/Socialmedia";
import './Home.css';
import VaheedImg from '../../assets/vaheed.png';
function Home(){
    return (
        <div className="home">
            
            <div className="image-div"><img className="image" src={VaheedImg} alt={"Vaheem Shaik"}/></div>
            <h2 className="hi-text">Hi, my name is</h2>
            <h1 className="name-text">Vaheem Shaik</h1>
            <h2 className="developer-text">I'm a full stack developer.</h2>
            <SocialMedia />
            
        </div>
    )
}
export default Home;
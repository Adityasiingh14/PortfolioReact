import SocialMedia from "../extras/Socialmedia";
import './Home.css';
import Avatar from '../../assets/aditya.png';
import Typing from '../typing/Typing';
function Home(){
    const sentences = [
        'Developer',
        'Tech Enthusiast',
        'Learner',
        'Designer'
    ];
    return (
        <div className="home">
            <div className="image-div"><img className="image" src={Avatar} alt={"MyAvatar"}/></div>
            <h2 className="hi-text">Hi, my name is</h2>
            <h1 className="name-text">Aditya Kumar Singh</h1>
            <h2 className="typing">I'm <Typing sentences={sentences}/></h2>
            <SocialMedia />

        </div>
    )
}
export default Home;
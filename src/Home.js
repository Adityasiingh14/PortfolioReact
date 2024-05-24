import SocialMedia from "./Socialmedia";
import './css/Home.css';
import VaheedImg from './vaheed.png';
function Home(){
    return (
        <div className="home">
            <img src={VaheedImg} alt={"Vaheem Shaik"} style={{width: "200px", height: "200px",borderRadius: "50%" }}/>
            <h2>Hi, my name is</h2>
            <h1>Vaheem Shaik</h1>
            <h2>I'm a full stack developer.</h2>
            <SocialMedia />
            
        </div>
    )
}
export default Home;
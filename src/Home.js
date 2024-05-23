import SocialMedia from "./Socialmedia";
import './css/Home.css';
function Home(){
    return (
        <div className="home">
            <img src="vaheed.png" alt="Vaheem Shaik"/>
            <h2>Hi, my name is</h2>
            <h1>Vaheem Shaik</h1>
            <h2>I'm a full stack developer.</h2>
            <SocialMedia />
            
        </div>
    )
}
export default Home;
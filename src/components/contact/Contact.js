import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from '../extras/Socialmedia';
import ContactForm from './ContactForm';
function Contact(){
    return(
        <div>
            <h1>Let's discuss on something <span>cool</span> together</h1>
            <a href="mailto:vaheedsk36@gmail.com" > 
                <FontAwesomeIcon icon={faEnvelope} />vaheedsk36@gmail.com
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Hyderabad,India"> 
                <FontAwesomeIcon icon={faLocation} /> Hyderabad, India
            </a>
            <SocialMedia />
            <ContactForm />
        </div>
    )
}
export default Contact;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function ContactForm(){
    return (
        <form>
            <p>I'm interested in...</p>
            <div>
                <button type="button">Web Development</button>
                <button type="button">Hiring</button>
                <button type="button">Freelance</button>
                <button type="button">Other</button>
            </div>

            <h1>Enter Name *</h1>
            <input type="text" placeholder="Name" />
            <h1>Enter Email *</h1>
            <input type="email" placeholder="Email" />
            <h1>Enter Phone No.</h1>
            <input type="tel" placeholder="Phone" />
            <h1>Enter Message *</h1>
            <textarea placeholder="Message"></textarea>
            <button>
                <FontAwesomeIcon icon={faPaperPlane} />Send Message
            </button>   
        </form>
    );
}
export default ContactForm;
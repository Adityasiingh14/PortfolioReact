import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './ContactForm.css';
function ContactForm(){
    return (
        <form className='contact-form'>
            <h3>I'm interested in...</h3>
            <div className='interest-buttons'>
                <button type="button">Web Development</button>
                <button type="button">Hiring</button>
                <button type="button">Freelance</button>
                <button type="button">Other</button>
            </div>
            <div className='form-sections'>
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
            </div>  
        </form>
    );
}
export default ContactForm;
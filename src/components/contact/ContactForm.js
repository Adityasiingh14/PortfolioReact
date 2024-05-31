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
                <h4>Enter Name *</h4>
                <input type="text" placeholder="" className='form-sections-input'/>
                <h4>Enter Email *</h4>
                <input type="email" placeholder="" className='form-sections-input'/>
                <h4>Enter Phone No.</h4>
                <input type="tel" placeholder="" className='form-sections-input' />
                <h4>Enter Message *</h4>
                <textarea placeholder=""className='form-sections-textarea'></textarea>
                <button className='sendmessage-btn'>
                    <FontAwesomeIcon icon={faPaperPlane} />Send Message
                </button> 
            </div>  
        </form>
    );
}
export default ContactForm;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin , faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const socialMediaLinks = [
    { href: "https://github.com/vaheedsk36", icon: faGithub },
    { href: "https://www.instagram.com/", icon: faInstagram },
    { href: "https://www.linkedin.com/in/vaheemshaik/", icon: faLinkedin },
    { href: "https://x.com/codersk36", icon: faTwitter }
];
function SocialMedia(){
    return(
        <div>
            {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" className="icon-link" rel="noreferrer">
                <FontAwesomeIcon icon={link.icon} size="2x" color='white' />
                </a>
            ))}
        </div>
    )
}

export default SocialMedia;
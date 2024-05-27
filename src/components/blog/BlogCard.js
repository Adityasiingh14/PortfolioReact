import { faLink } from '@fortawesome/free-solid-svg-icons';
function BlogCard({ image,imageTitle,  title, description, link}) {
    return (
        <div >
            <img src={image} alt={imageTitle} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} FontAwesomeIcon icon={faLink} >Read here</a>
        </div>
    );
}
export default BlogCard;
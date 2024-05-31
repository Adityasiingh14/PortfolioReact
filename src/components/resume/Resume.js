import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Resume.css';

function Resume() {
  return (
    <div>
      {/* <iframe src= {resume} width="100%" height="500px"></iframe> */}
      {/* <a href={resume} download></a> */}
        <button>
            <FontAwesomeIcon icon={faDownload} /> Download Resume
        </button>
        
    </div>
  );
}

export default Resume;
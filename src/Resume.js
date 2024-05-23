import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Resume() {
  return (
    <div>
        <button>
            <FontAwesomeIcon icon={faDownload} /> Download Resume
        </button>
        
    </div>
  );
}

export default Resume;
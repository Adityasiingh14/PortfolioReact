import { faCode, faCoffee,faMicrochip,faChartBar,faTerminal,faRobot,faSpider, faSearch} from '@fortawesome/free-solid-svg-icons';
import CustomComponent from '../extras/CustomFontAwesomeInterestComp';
import './Interests.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const interests = [
  { icon: faCode, title: "Software Engineering" },
  { icon: faCoffee, title: "Tech Blog" },
  { icon: faMicrochip, title: "Internet of Things" },
  { icon: faSearch, title: "Market Research" },
  { icon: faChartBar, title: "Visualization" },
  { icon: faTerminal, title: "Software Development" },
  { icon: faRobot, title: "Robotics" },
  { icon: faSpider, title: "Web Scraping" },
  { hidden: true },
  { hidden: true },
  { hidden: true },
];

function Interests() {
  return (
    <div className='interests'>
      {interests.map((interest) => (
        <div className={
          `interest-components ${interest.hidden ? 'hidden' : ''}`
        }>
          <FontAwesomeIcon icon={interest.icon} className='icon' />
          <h4>{interest.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Interests;
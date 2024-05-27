import { faCode, faCoffee,faMicrochip,faChartBar,faTerminal,faRobot,faSpider, faSearch} from '@fortawesome/free-solid-svg-icons';
import CustomComponent from '../extras/CustomFontAwesomeInterestComp';
function Interests() {
  return (
    <div>
        <CustomComponent icon={faCode} title="Software Engineering" />
        <CustomComponent icon={faCoffee} title="Tech Blog" />
        <CustomComponent icon={faMicrochip} title="Internet of Things" />
        <CustomComponent icon={faSearch} title="Market Research" />
        <CustomComponent icon={faChartBar} title="Visualization" />
        <CustomComponent icon={faTerminal} title="Software Development" />
        <CustomComponent icon={faRobot} title="Robotics" />
        <CustomComponent icon={faSpider} title="Web Scraping" />
    </div>
  );
}
export default Interests;
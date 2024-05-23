import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CustomComponent({ icon, title }) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
      <h1>{title}</h1>
    </div>
  );
}
export default CustomComponent;
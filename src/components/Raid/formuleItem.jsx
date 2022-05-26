import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";

export default function FormuleItem(props) {
  return (
    <div className="formule">
      <div className="formule-item">
        <div className="formule-title">
          <h1>{props.title}</h1>
        </div>
        <div className="formule-content">
          <span>{props.content}</span>
        </div>
        <div className="formule-data">
          <div className="km">
            <FontAwesomeIcon icon={faMapLocationDot} className="formule-icon" />
            <span>{props.km} km</span>
          </div>
          <div className="d">
            <FontAwesomeIcon icon={faMountain} className="formule-icon" />
            <span>D+ : {props.dPlus} m</span>
            <span>D- : {props.dMinus} m</span>
          </div>
        </div>
      </div>
    </div>
  );
}

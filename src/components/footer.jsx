import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function CustomFooter(props) {
  const [cached, setCached] = useState(false);
  const [data, setData] = useState([]);
  if (!cached) {
    fetch("assets/footer/footer.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(function (err) {
        console.log(err, " error");
      })
      .then(() => setCached(data !== undefined))
      .then(() => console.log("data fetched footer"));
  }
  var c = props.fullpage && (props.fullpage && props.isSticked ) ? "footer2" : "footer1";
  console.log(c)
  return (
    <div className={c}>
      <div className="footer-container">
        <div className="footer-title">
          <h3>Suivez-nous</h3>
        </div>
        {/* https://codepen.io/dsyncerek/pen/zzqpEx */}
        <div className="links social-buttons">
          <a
            href={data.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="social-buttons__button social-button social-button--facebook"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href={data.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-buttons__button social-button social-button--instagram"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="footer-container2">
        <div className="footer-title">
          <h3>Contact</h3>
        </div>
        <div className="links">
          <a href={"mailto:" + data.mail}>{data.mail}</a>
        </div>
        <div className="links">
          &copy; Raid Centrale Lyon - Tous droits réservés
        </div>
      </div>
    </div>
  );
}

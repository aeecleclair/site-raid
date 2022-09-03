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
        <div id="button-container" className="alternative formule-data">
          <a className="learn-more" href={process.env.PUBLIC_URL + "assets/Raid/formule/pdf/" + props.pdf}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Plus d'information</span>
          </a>
        </div>
      </div>
    </div>
  );
}

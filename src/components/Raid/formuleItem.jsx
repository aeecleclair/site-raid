export default function FormuleItem(props) {
  return (
    <div className="formule" style={{ height: '100%' }}>
      <div 
        className="formule-item" 
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          position: 'relative', 
          boxSizing: 'border-box'
        }}
      >
        <div className="formule-title">
          <h1>{props.title}</h1>
        </div>
        
        <div 
          className="formule-content" 
          style={{ 
            flexGrow: 1, 
            overflow: 'hidden',
            marginBottom: '15px'
          }}
        >
          <span>{props.content}</span>
        </div>
        
        <div 
          id="button-container" 
          className="alternative formule-data"
          style={{
            marginTop: 'auto',
            paddingBottom: '20px',
            zIndex: 10 
          }}
        >
          <a className="learn-more" > {/*href={process.env.PUBLIC_URL + "assets/Raid/formule/pdf/" + props.pdf}*/}
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Plus d'information bientôt</span>
          </a>
        </div>
      </div>
    </div>
  );
}

{/* <div 
  id="button-container" 
  className="alternative formule-data"
  style={{
    marginTop: 'auto',
    paddingBottom: '20px',
    zIndex: 10 
  }}
>
  <a className="learn-more" href={process.env.PUBLIC_URL + "assets/Raid/formule/pdf/" + props.pdf}>
    <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
    </span>
    <span className="button-text">Plus d'information</span>
  </a>
</div> */}
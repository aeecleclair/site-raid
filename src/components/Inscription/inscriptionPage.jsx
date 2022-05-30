import CustomFooter from "../footer";
import CustomNavBar from "../navbar";
import { useState } from "react";
import { useWindowSize } from "../windowSize";

export default function InscriptionPage() {
  const [cached, setCached] = useState(false);
  const [data, setData] = useState([])
  if (!cached) {
    fetch("assets/inscription/inscription.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(function (err) {
        console.log(err, " error");
      })
      .then(() => setCached(data !== undefined))
      .then(() => console.log("data fetched inscription"));
  }
  var h3 = useWindowSize(".inscr-container");
  return (
    <div>
      <CustomNavBar />
      <div className="view under-navbar">
        <div className="inscr-back">
          <div className="inscr-container">
            <h1>INSCRIPTION</h1>
            <div className="inscr-content">
              <h5>{data.description}</h5>
            </div>
            {data.lienGGDoc !== "" ? (
              <div className="lien">
                <h5>
                  Lien du Google Form :{" "}
                  <a
                    href={data.lienGGDoc}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.lienGGDoc}
                  </a>
                </h5>
              </div>
            ) : (
              <></>
            )}
            {data.lienLydia !== "" ? (
              <div className="lien">
                <h5>
                  Lien du Lydia :{" "}
                  <a
                    href={data.lienLydia}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.lienLydia}
                  </a>
                </h5>
              </div>
            ) : (
              <></>
            )}
          </div>
          <CustomFooter fullpage={true} isSticked={h3 < 0} />
        </div>
      </div>
    </div>
  );
}

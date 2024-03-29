import CustomFooter from "../footer";
import CustomNavBar from "../navbar";
import { useState } from "react";
import { useWindowSize } from "../windowSize";

export default function PagePartenaires() {
  const [cached, setCached] = useState(false);
  const [data, setData] = useState([]);
  if (!cached) {
    fetch("assets/partenaires/partenaires.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(function (err) {
        console.log(err, " error");
      })
      .then(() => setCached(data !== undefined))
      .then(() => console.log("data fetched partenaires"));
  }
  var h3 = useWindowSize(".partenaire-container");
  console.log(h3)
  return (
    <div>
      <CustomNavBar />
      <div className="view under-navbar">
        <h1>NOS PARTENAIRES</h1>
        <div className="partenaire-container">
          {data
            ? data.map((part, index) => {
                return (
                  <div className="partenaire-image" id={index}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "assets/partenaires/images/" +
                        part.img
                      }
                      alt=""
                      height={100}
                      width={"auto"}
                    />
                    <div className="partenaire-descr">
                      <h3>{part.nom}</h3>
                      <h6>{part.description}</h6>
                      {part.url.length > 0 ? (
                        <div className="partenaire-url">
                          <h6>En savoir plus : </h6>
                          <a
                            href={part.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h6> {part.url}</h6>
                          </a>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        <CustomFooter fullpage={true} isSticked={h3 + 80 < 0} />
      </div>
    </div>
  );
}

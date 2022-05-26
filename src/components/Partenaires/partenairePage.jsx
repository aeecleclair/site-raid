import CustomFooter from "../footer";
import CustomNavBar from "../navbar";
import { useState } from "react";
import $ from "jquery";

export default function PagePartenaires() {
  const [cached, setCached] = useState(false);
  const [data, setData] = useState([]);
  const [h3, seth3] = useState(0);
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
  if (h3 === 0 && $(".partenaire-container") === undefined) {
    var h = $(window).height();
    var h2 = $(".partenaire-container").height();
    seth3(h2 - h + 196);
  }
  return (
    <div>
      <CustomNavBar />
      <div className="view under-navbar">
        <h1>NOS PARTENAIRES</h1>
        <div className="partenaire-container">
          {data
            ? data.map((part, index) => {
                return (
                  <div className="partenaire-image">
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
                      {part.edition.length > 0 ? (
                        <h6>Editions : {part.edition.join(", ")}</h6>
                      ) : (
                        <h6>Nouveau partenaire !</h6>
                      )}
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
        <CustomFooter fullpage={false} isSticked={h3 < 0} />
      </div>
    </div>
  );
}

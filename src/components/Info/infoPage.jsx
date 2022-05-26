import CustomFooter from "../footer";
import CustomNavBar from "../navbar";
import { useState } from "react";
import $ from "jquery";

export default function InfoPage() {
  const [cached, setCached] = useState(false);
  const [data, setData] = useState([]);
  const [h3, seth3] = useState(0);
  if (!cached) {
    fetch("assets/info/info.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(function (err) {
        console.log(err, " error");
      })
      .then(() => setCached(data !== undefined))
      .then(() => console.log("data fetched info"));
  }
  if (h3 === 0) {
    var h = $(window).height();
    var h2 = $(".info-container").height();
    seth3(h2 - h + 196);
  }
  return (
    <div>
      <CustomNavBar />
      <div className="view under-navbar">
        <div className="info-back">
          <div className="info-container">
            <h1>INFOS PRATIQUES</h1>
            <div className="info-content">
              <h2>Questions fréquentes</h2>
              <div className="info-content-item-content">
                {data.faq
                  ? data.faq.map((q, index) => {
                      return (
                        <div className="info-content-item-content-item">
                          <h3>{q.question}</h3>
                          {q.reponse.split("\n").map((r, index) => {
                            return <h5 className="info-content-item">{r}</h5>;
                          })}
                        </div>
                      );
                    })
                  : ""}
                <div className="info-content-item-content-item">
                  <h3>D'autres questions ?</h3>
                  <h5>
                    Vous pouvez nous contacter à l'adresse suivante :{" "}
                    <a href={"mailto:" + data.mail}>{data.mail}</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <CustomFooter fullpage={false} isSticked={h3 < 0} />
        </div>
      </div>
    </div>
  );
}

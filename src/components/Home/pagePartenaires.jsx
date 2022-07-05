import CustomFooter from "../footer";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { useWindowWidth } from "../windowSize";

export default function PageSponsor() {
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
  var h3 = useWindowWidth();
  console.log(h3, data.length);
  return (
    <div>
      <div className="view lastpage full-page">
        <h1>NOS PARTENAIRES</h1>
        {(data.length * 250 > h3 && h3 < 1024) || (data.length * 500 > h3 && h3 >= 1024) ? (
          <Marquee className="sponsors-container" speed={100}>
            {data.map((part, index) => {
              return (
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/partenaires/images/" +
                    part.img
                  }
                  key={index}
                  alt=""
                  className="sponsors-image"
                />
              );
            })}
          </Marquee>
        ) : (
          <div className="sponsors-container">
            {data.map((part, index) => {
              return (
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/partenaires/images/" +
                    part.img
                  }
                  key={index}
                  alt=""
                  className="sponsors-image static"
                />
              );
            })}
          </div>
        )}
      </div>
      <CustomFooter fullpage={false} isSticked={false} />
    </div>
  );
}

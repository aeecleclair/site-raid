import { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function AvantGout() {
  const [cached, setCached] = useState(false);
  const [data, setData] = useState([]);
  if (!cached) {
    fetch("assets/Raid/avantgout/avantgout.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(function (err) {
        console.log(err, " error");
      })
      .then(() => setCached(data !== undefined))
      .then(() => console.log("data fetched avantgout"));
  }
  return (
    <div className="view full-page">
      <h1>L'AVANT-GOUT</h1>
      {data.data !== undefined && data.data.length !== 0 && (
        <Carousel>
          {data.data.map((d, index) => {
            return (
              <Carousel.Item>
                <img
                  className="panorama"
                  src={process.env.PUBLIC_URL + "assets/Raid/avantgout/" + d}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
      <h4 className="panorama-descr">{data.description}</h4>
    </div>
  );
}

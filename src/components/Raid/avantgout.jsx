import { useState } from "react";

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
    <div className="view under-navbar">
      <h1>L'AVANT-GOUT</h1>
      <img
        src={process.env.PUBLIC_URL + "assets/Raid/avantgout/" + data.img}
        alt=""
        className="panorama"
      />
      <h4 className="panorama-descr">{data.description}</h4>
    </div>
  );
}

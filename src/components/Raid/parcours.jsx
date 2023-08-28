import { useState } from "react";

export default function Parcours() {
  const [cached, setCached] = useState(false);
  const [data, setData] = useState([]);
  if (!cached) {
    fetch("assets/Raid/parcours/parcours.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(function (err) {
        console.log(err, " error");
      })
      .then(() => setCached(data !== undefined))
      .then(() => console.log("data fetched parcours"));
  }
  return (
    <div className="view full-page">
      <h1>Le Parcours</h1>
      <div className="video-parcours">
        <iframe className="video" src={data.video} allowFullScreen></iframe>
      </div>
    </div>
  );
}

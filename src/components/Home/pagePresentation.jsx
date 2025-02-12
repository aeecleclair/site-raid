import { useState } from "react";

export default function PagePresentation() {
  const [cached, setCached] = useState(false);
  const [data, setData] = useState([]);
  if (!cached) {
    fetch("assets/home/presentation/presentation.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(function (err) {
        console.log(err, " error");
      })
      .then(() => setCached(data !== undefined))
      .then(() => console.log("data fetched presentation"));
  }
  return (
    <div className="view presentation full-page">
      <h1>RAID CENTRALE LYON</h1>
      <div className="pres">
        <div className="video">
          <div>
            <iframe
              src={data.url}
              title="Le Raid en vidéo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div />
        <div className="descr">
          <h2>Le Raid en quelques mots</h2>
          <h5>{data.description}</h5>
        </div>
      </div>
    </div>
  );
}

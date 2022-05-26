import Timeline from "@mui/lab/Timeline";
import EcheanceItem from "./echeanceItem";
import CustomFooter from "../footer";
import { useState } from "react";

export default function Echeance() {
  const [cached, setCached] = useState(false);
  const [data, setData] = useState([]);
  if (!cached) {
    fetch("assets/Raid/echeances/echeance.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(function (err) {
        console.log(err, " error");
      })
      .then(() => setCached(data !== undefined))
      .then(() => console.log("data fetched echeance"));
  }
  return (
    <div>
      <div className="view echeance lastpage full-page">
        <h1>LES ÉCHÉANCES</h1>
        <div className="blur" />
        <Timeline position="alternate" className="timeline">
          <div className="timeline-content">
            {data.map((echeance, index) => (
              <EcheanceItem
                key={index}
                title={echeance.nom}
                dateDebut={echeance.dateDebut}
                dateFin={echeance.dateFin}
                description={echeance.description}
                isInverted={index % 2 !== 0}
                isFinal={index === data.length - 1}
              />
            ))}
          </div>
        </Timeline>
      </div>
      <CustomFooter fullpage={true} />
    </div>
  );
}

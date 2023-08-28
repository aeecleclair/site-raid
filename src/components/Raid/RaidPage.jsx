import Formule from "./formule";
import Echeance from "./echeance";
import AvantGout from "./avantgout";
import RaidSection from "./raidSection";
import Parcours from "./parcours";
import CustomNavBar from "../navbar";
import ReactPageScroller from "react-page-scroller";
import { useState } from "react";

export default function RaidPage() {
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
      .then(() => console.log(data));
  }
  return (
    <ReactPageScroller>
      <div className="full-page">
        <CustomNavBar />
        <RaidSection />
      </div>
      <AvantGout />
      {(data.video !== undefined && data.video.length > 0 && <Parcours />)}
      <Formule />
      <Echeance />
    </ReactPageScroller>
  );
}

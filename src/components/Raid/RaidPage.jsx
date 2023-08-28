import Formule from "./formule";
import Echeance from "./echeance";
import AvantGout from "./avantgout";
import RaidSection from "./raidSection";
import Parcours from "./parcours";
import CustomNavBar from "../navbar";
import ReactPageScroller from "react-page-scroller";

export default function RaidPage() {
  return (
    <ReactPageScroller>
      <div className="full-page">
        <CustomNavBar />
        <RaidSection /> 
      </div>
      <AvantGout />
      <Parcours />
      <Formule />
      <Echeance />
    </ReactPageScroller>
  );
}

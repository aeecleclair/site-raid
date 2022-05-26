import Formule from "./formule";
import Echeance from "./echeance";
import AvantGout from "./avantgout";
import CustomNavBar from "../navbar";
import ReactPageScroller from "react-page-scroller";

export default function RaidPage() {
  return (
    <ReactPageScroller>
      <div className="full-page">
        <CustomNavBar />
        <AvantGout />
      </div>
      <Formule />
      <Echeance />
    </ReactPageScroller>
  );
}

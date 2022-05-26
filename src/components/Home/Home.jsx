import CustomCarousel from "./carousel";
import PagePresentation from "./pagePresentation";
import PageSponsor from "./pagePartenaires";
import CustomNavBar from "../navbar";
import ReactPageScroller from "react-page-scroller";

export default function Home() {
  return (
    <ReactPageScroller>
        <div className="full-page">
        <CustomNavBar />
        <CustomCarousel />
        </div>
        <PagePresentation />
        <PageSponsor />
    </ReactPageScroller>
  );
}

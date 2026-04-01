import React, { forwardRef } from "react";
import CustomCarousel from "./carousel";
import PagePresentation from "./pagePresentation";
import PageSponsor from "./pagePartenaires";
import CustomNavBar from "../navbar";
import CarteRA from "./CarteRA";
import ReactPageScroller from "react-page-scroller";

const SectionWrapper = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ height: "100vh", width: "100%" }}>
      {}
      {props.children}
    </div>
  );
});

export default function Home() {
  return (
    <ReactPageScroller>
        <div className="full-page">
          <CustomNavBar />
          <CustomCarousel />
        </div>
        
        <PagePresentation />
        

        <CarteRA /> 
        
        <PageSponsor />
    </ReactPageScroller>
  );
}
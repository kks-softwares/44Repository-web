import React from "react";
import ExpertsearchedCard from "./ExpertsearchedCard";

export default function Expertsercheddata() {
  return (
    <>
      <div className="totalresultsexpert">Results:85 courses</div>{" "}
      <div className="bocescardexpertsresultcontainer">
        <ExpertsearchedCard />
        <ExpertsearchedCard />
        <ExpertsearchedCard />
        <ExpertsearchedCard />
        <ExpertsearchedCard />
        <ExpertsearchedCard />
      </div>
      <div className="loadmorebutton">
          <button>Load More</button>
      </div>
    </>
  );
}

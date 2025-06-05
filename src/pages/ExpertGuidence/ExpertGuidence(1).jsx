import React from "react";
import ExpertFilter from "../../components/expert/ExpertFilter";
import ExpertGuidenceBanner from "../../components/expert/ExpertGuidenceBanner";
import Expertsercheddata from "../../components/expert/Expertsercheddata";

export default function ExpertGuidence() {
  return (
    <div>
      <ExpertGuidenceBanner />
      <div style={{ width: "100vw", padding: "4vw", display: "flex" }}>
        <div style={{ width: "25vw" }}>
          <ExpertFilter/>
        </div>
        <div style={{ width: "65vw" }}>
          <Expertsercheddata/>
        </div>
      </div>
    </div>
  );
}

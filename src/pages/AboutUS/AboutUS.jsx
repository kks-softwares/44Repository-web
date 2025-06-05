import React from "react";
import Aboutabout from "../../components/Aboutus/Aboutabout";
import AboutMission from "../../components/Aboutus/AboutMission";
import AboutNumber from "../../components/Aboutus/AboutNumber";
import AboutOpening from "../../components/Aboutus/AboutOpening";
import Aboutteam from "../../components/Aboutus/Aboutteam";
import AboutVision from "../../components/Aboutus/AboutVision";

export default function AboutUS({width}) {
  return <div>
      <Aboutabout width={width}/>
      <AboutMission width={width}/>
      <AboutNumber width={width}/>
      <AboutVision width={width}/>
      <Aboutteam width={width}/>
      <div style={{height:"3vw"}}></div>
      {/* <AboutOpening/> */}
  </div>;
}

import React from "react";
import "./Events.css";
import img from "../../assets/Success stories/zan-BKyvWG7D6QA-unsplash.png";
export default function EvnetsBanner() {
  return (
    <div className="eventbanercontainer">
      <div style={{ width: "50%" }}>
        <div className="eventBannerTitle">Explore Our Events</div>
        <div className="eventBannerTitle2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </div>

        <button style={{ marginLeft: "0vw" }} className="eventbbutton">
          Explore More
        </button>
      </div>
      <div style={{ width: "50%" }}>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

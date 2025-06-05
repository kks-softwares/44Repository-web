import React from "react";
import "./About.css";
import img1 from "../../assets/About/procreator-ux-design-studio-VzJjPuk53sk-unsplash.png";
export default function Aboutabout({ width }) {
  return (
    <div style={{ marginTop: "2vw" }} className="Aboutabout-container">
      <div className="abouttitileheading">About us</div>
      <div
        style={{
          display: "flex",
          alignItems: width > 700 ?  "center":"flex-start",
          flexDirection: width > 700 ? "" : "column",
        }}
      >
        <div style={{ width: width > 700 ? "55%":"100%" }}>
          <div className="bluetitilesubabout">Our Journey Starts From</div>
          <div className="blackaboutaboutdata">
            One-stop solution to sort all your requirement ranging
            frome-commerce setup , Software Development ,Career Guidance,
            Banking, Insurance, Business to Local Services, quickly,
            professionally and conveniently.
          </div>
          <div className="blackaboutaboutdata">
            One-stop solution to sort all your requirement ranging
            frome-commerce setup , Software Development ,Career Guidance,
            Banking, Insurance, Business to Local Services, quickly,
            professionally and conveniently. One-stop solution to sort all your
            requirement ranging frome-commerce setup , Software Development
            ,Career Guidance, Banking, Insurance, Business to Local Services,
            quickly, professionally and conveniently.
          </div>
          <div className="blackaboutaboutdata">
            One-stop solution to sort all your requirement ranging
            frome-commerce setup , Software Development ,Career Guidance,
            Banking, Insurance, Business to Local Services, quickly,
            professionally and conveniently.
          </div>
        </div>
        <div className="aboutaboutimg">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Homeabout.css";
import img2 from "../../../assets/Landing page/Group 7668.svg";

import Homecarouselwork from "./HomeCarouselWorkit";
export default function Homeaboutwork({ width }) {
    
  return (
    <>
      <div className="homeabout-container">
        <div className="home-catetitle">About us</div>
        <div className="homeaboutbox">
          <div className="logoparthomeabout">
            <img src={img2} alt="" />
          </div>
          <div className="textparthomeabout">
            <div className="textabputhome1">
            Our Vision is an Innovative Marketplace for Fulfilling Your Requirement Digitally
            </div>
            <div className="textabputhome2">
              One-stop solution to sort all your requirement ranging
              frome-commerce setup , Software Development ,Career Guidance,
              Banking, Insurance, Business to Local Services, quickly,
              professionally and conveniently. <br />
              <p style={{ marginTop: "2vw" }}>
                We help customers hire trusted professionals for all their
                service needs. We are full time freelancers, passionate people
                working tirelessly to make a difference in the lives of people
                by catering to their service needs at their single click .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="howitworkhome-container">
        <div className="home-catetitle">How it Works</div>
        <Homecarouselwork width={width} />
      </div>
    </>
  );
}

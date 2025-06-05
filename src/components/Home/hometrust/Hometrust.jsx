import React from "react";
import "./Hometrust.css";
import HomeTrustCarousel from "./HomeTrustCarousel";

export default function Hometrust({width}) {
  return (
    <div hidden className="hometrustcontainer">
      <div className="home-catetitle">Trusted by</div>
      <div className="homesubtryst">Thousands of Entrepreneurs trust us</div>

      <div className="hometrustbox">
             <HomeTrustCarousel width={width}/>
      </div>
    </div>
  );
}

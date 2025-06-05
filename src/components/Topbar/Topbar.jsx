import React from "react";
import "./topbar.css";
import img1 from "../../assets/Landing page/dollar.png";
import img2 from "../../assets/Landing page/Iconly-Light-Arrow - Down 2-1.svg";
import img3 from "../../assets/Landing page/india (1).png";
import img4 from "../../assets/Landing page/translate.png";

export default function Topbar({width}) {
  return (
    <div className="topbar-container">
      <div></div>
      <div className="topvar-countryies">
        <div className="topbar-c-icon">
          <img src={img1} alt="" />
          <span>INR</span>
          <img style={{width:width>700?"1.35vw":"3vw"}} src={img2} alt="" />
        </div>
        <div className="topbar-c-icon">
          <img src={img4} alt=""  style={{width:width>700?"1.35vw":"4.5vw"}}    />
          <span>ENG</span>
          <img style={{width:width>700?"1.35vw":"3vw"}} src={img2} alt="" />
        </div>
        <div className="topbar-c-icon">
          <img src={img3} alt="" />
          <span>IND</span>
          <img style={{width:width>700?"1.35vw":"3vw"}}src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}

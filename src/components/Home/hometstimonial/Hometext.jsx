import React from "react";
import "./hometext.css";
import Hometextcarousel from "./Hometextcaresel";
export default function Hometext({width}) {
  return (
    <div hidden className="hometexttimonial-container">
      <div className="home-catetitle">Client Testimonial</div>
      <Hometextcarousel width={width}/>
    </div>
  );
}

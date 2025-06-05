import React from "react";
import "./Career.css";
export default function CareerBanner() {
  return (
    <div className="CareerContainer">
      <div style={{ height: "35vw" }} className="blogBanner">
        <div
          style={{ background: "#00000080", height: "35vw" }}
          className="bluebackgroundblog"
        >
          <div className="homeblueboxtitle">Careers at 44 Resources</div>
          <div style={{ fontSize: "1.1vw" }} className="homeblueboxsubtitle">
            we're freezing companies from the bureaucracy of HR so they can
            focus on what really matters-growing their businesses and taking
            care of their people.
          </div>

          <button
            style={{ border: "none", width: "12vw" }}
            className="homeworktop-button"
          >
            View all Position
          </button>
        </div>
      </div>
    </div>
  );
}

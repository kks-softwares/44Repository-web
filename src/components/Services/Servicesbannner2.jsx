import React from "react";

export default function Servicesbannner2({ width }) {
  return (
    <div style={{width:"92vw"}} className="Joinwithusblogbox">
      <div
        style={{
          width: width > 700 ? "95%" : "95%",
          textAlign: "center",
        }}
      >
        <div className="Joinwithusblogboxtitle">
          Build Human-Centered Products that Deliver own Requirement
        </div>
        <div className="Joinwithusblogboxdetail">
          Join our community of 300+ Resources of all sizes who use 44 resources
          Latest Technology and Products make with our experts candidate and
          easy to delightful Customer and Employees
        </div>
      </div>
      <div
        style={{
          width: width > 700 ? "30%" : "fit-content",
          textAlign: "center",
        }}
      >
        <button>Schedule a Free Experts Meeting </button>
      </div>
    </div>
  );
}

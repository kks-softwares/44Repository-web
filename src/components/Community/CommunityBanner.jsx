import React, { useState } from "react";
import "./Community.css";
import img2 from "../../assets/Community/OBJECTS.svg";
import { width } from "dom-helpers";
export default function CommunityBanner() {
  const [buttoncommnuit, setButtoncommnuit] = useState(true);
  return (
    <div className="commmunityb-container">
      <div style={{ width: "35vw" }}>
        <div className="communitybannertitile">
          Join a community with us to help you grow as a Team
        </div>
        <div className="communitybannertitilesub">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.{" "}
        </div>
        <button
          onMouseEnter={() => setButtoncommnuit(false)}
          onMouseLeave={() => setButtoncommnuit(true)}
          className="Communitypagebutton"
          style={{
            color: buttoncommnuit ? "white" : "",
            background: buttoncommnuit ? "" : "white",
          }}
        >
          {buttoncommnuit ? "Join The Community" : "Post a Job"}
        </button>
      </div>
      <div style={{ width: "65vw" }}>
        <img style={{width:"50vw" ,objectFit:"contain",marginTop:"2vw"}} src={img2} alt="" />
      </div>
    </div>
  );
}

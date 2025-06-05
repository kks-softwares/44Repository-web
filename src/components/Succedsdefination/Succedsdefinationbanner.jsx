import React from "react";
import "./ssdefinationbanner.css";
export default function Succedsdefinationbanner() {
  return (
    <div className="ssbanner-container">
      <div className="imagebackground">
        <div className="bluebackground">
          <div
            style={{
              fontSize: "2.5vw",
              width: "50vw",
              textAlign: "center",
              margin: "auto",
            }}
          >
            Helping a growing company set up an effective user research process
          </div>
          <div
            style={{
              fontSize: "1.3vw",
              width: "50vw",
              textAlign: "center",
              margin: "auto",
              fontWeight: "400",
              position: "relative",
              bottom: "3vw",
            }}
          >
            Providing user research services to facilitate the discovery of the
            needs of Women Business Owners.
          </div>
        </div>
      </div>
      <div>
        <div className="container-ssd-type">
          <div className="ssdtypenames">
            <div className="ssdtypetitle">Country</div>
            <div className="ssdtypename">
              <div>India</div>
            </div>
          </div>
          <div className="ssdtypenames">
            <div className="ssdtypetitle">Services</div>
            <div className="ssdtypename">
              <div>UX, UI,</div>
              <div>Web Development</div>
            </div>
          </div>
          <div className="ssdtypenames">
            <div className="ssdtypetitle">Industry</div>
            <div className="ssdtypename">
              <div>E-Commerce</div>
            </div>
          </div>
          <div className="ssdtypenames">
            <div className="ssdtypetitle">Preferred for</div>
            <div className="ssdtypename">
              <div>Build a Application</div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

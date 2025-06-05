import React from "react";
import "./Expert.css";
import img3 from "../../assets/experts/Iconly-Light-outline-Location.svg";
import img from "../../assets/experts/Iconly-Light-Search.svg";
import img1 from "../../assets/experts/may-gauthier-TACdQo62To0-unsplash.png";
import img2 from "../../assets/experts/may-gauthier-TACdQo62To0-unsplash-removebg-preview.png";
export default function ExpertGuidenceBanner() {
  return (
    <div className="expertgbannercontainer">
      <div style={{ width: "45%" }}>
        <div className="exgbtitile">Experts guidance</div>
        <div className="exgbsubtitile">
          Discover a range of free learning content designed to help your
          business or in your career, you can learn by selecting individual
          modules, or dive right in and take an entire course end-to-end
        </div>
        <div className="exgbresources">Resources</div>
        <div className="searchbuttonexpert">
          <img src={img} alt="" />
          <input type="text" placeholder="digital marketing" />
          <button>Search</button>
        </div>
      </div>
      <div style={{ width: "33%" }}>
        <img className="expertwomenimage" src={img2} alt="" />
      </div>
      <div style={{ width: "22%" }}>
        <div className="expertdetailsbox">
          <div className="expertbannernamelogo">
            <div style={{ width: "4vw" }}>
              <img
                style={{
                  width: "3vw",
                  height: "3vw",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src={img1}
                alt=""
              />
            </div>
            <div>
              <div className="nameexpert">Gabriella</div>
              <div className="nameexpertsub">Video Editing</div>
            </div>
          </div>

          <div style={{ marginTop: "3vw" }}>
            <div className="serviceexpert">Services:</div>
          </div>

          <div className="servicesexperts">
            <div>UX/UI design</div>
            <div>Wireframing</div>
            <div>framing</div>
          </div>

          <hr style={{ color: "#00000090", height: "0.1vw" }} />
          <div className="flexoflocationservicesexpert">
            <div style={{ display: "flex" }}>
              <img style={{width:"1vw",objectFit:"contain" ,marginRight:"0.3vw"}} src={img3} alt="" /> India
            </div>
            <div style={{ display: "flex" }}>44 resources</div>
          </div>
        </div>
      </div>
    </div>
  );
}

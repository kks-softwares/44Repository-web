import React from "react";
import "./homeservice.css";
import img1 from "../../../assets/Landing page/Group 1498.svg";
import img2 from "../../../assets/Landing page/Group 1137.svg";
import img3 from "../../../assets/Landing page/Group 1179.svg";
export default function Homesevices({ width }) {
  return (
    <div className="homesevisescontainer">
      <div className="home-catetitle">Our Services</div>
      <div className="home-subtitile">
        We deliver robust and secure applications which are scalable and
        reliable.
      </div>
      <div className="homeservixbox">
        <div className="homeservice-textpart">
          <div className="h-s-title">Expert Response</div>
          <div className="hs-subtitle">
          We believe that you will receive a satisfactory answer to your queries at minimum time.
          </div>
        </div>
        <div className="homeservice-imgpart">
          <img src={img1} alt="" />
        </div>
      </div>

      {width > 700 ? (
        <div className="homeservixbox">
          <div className="homeservice-imgpart">
            <img src={img3} alt="" />
          </div>
          <div className="homeservice-textpart">
            <div className="h-s-title">Acquire fresh skill sets</div>
            <div className="hs-subtitle">
            Fresh skill sets required to be a professional in your field. We always provide in-depth consultation, assessment and career development  

            </div>
          </div>
        </div>
      ) : (
        <div className="homeservixbox">
          <div className="homeservice-textpart">
            <div className="h-s-title">Acquire fresh skill sets</div>
            <div className="hs-subtitle">
            Fresh skill sets required to be a professional in your field. We always provide in-depth consultation, assessment and career development  
            </div>
          </div>{" "}
          <div className="homeservice-imgpart">
            <img src={img3} alt="" />
          </div>
        </div>
      )}

      <div className="homeservixbox">
        <div className="homeservice-textpart">
          <div className="h-s-title">Entrepreneurship Solution</div>
          <div className="hs-subtitle">
          Our Team is a dedicated, experienced entrepreneurial team to help you with starting your own business and achieve success or to help you to grow your business effectively.
          </div>
        </div>
        <div className="homeservice-imgpart">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}

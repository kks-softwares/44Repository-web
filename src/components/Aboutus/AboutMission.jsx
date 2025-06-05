import React from "react";
import "./About.css";
import img from "../../assets/About/lycs-architecture-U2BI3GMnSSE-unsplash.png";
import img1 from "../../assets/About/jason-goodman-Oalh2MojUuk-unsplash.png";
import img2 from "../../assets/About/linkedin-sales-solutions-YDVdprpgHv4-unsplash.png";
import img3 from "../../assets/About/damir-kopezhanov-nC6CyrVBtkU-unsplash.png";
import img4 from "../../assets/About/campaign-creators-e6n7uoEnYbA-unsplash.png";
export default function AboutMission({width}) {
  return (
    <div className="Aboutabout-container">
      <div className="abouttitileheading"> Our Mission</div>
      <div className="ourmissionmaintitile">
        Our Mission is to make work Meaningfull
      </div>
      <div className="aboutmissionfleximages">
        <div className="img1aboutmision">
          <img src={img} alt="" />
        </div>
        <div className="img2aboutmision">
          <div className="img21aboutmision">
            <img src={img1} alt="" />
          </div>
          <div className="img21aboutmision">
            <img src={img2} alt="" />
          </div>
        </div>
        <div hidden={width > 700 ?false:true} className="img3aboutmision">
          <img src={img3} alt="" />
        </div>
        <div className="img1aboutmision">
          <img src={img4} alt="" />
        </div>
      </div>
      <div style={{ display:width > 700 ? "flex":"block" }}>
        <div style={{ width: width > 700 ? "55%":"100%" }}>
          <div className="blackaboutaboutdatax">
            One-stop solution to sort all your requirement ranging
            frome-commerce setup , Software Development ,Career Guidance,
            Banking, Insurance, Business to Local Services, quickly,
            professionally and conveniently.
          </div>
          <div className="blackaboutaboutdatax">
            One-stop solution to sort all your requirement ranging
          </div>
          <div className="blackaboutaboutdatax">
            One-stop solution to sort all your requirement ranging
            frome-commerce setup , Software Development ,Career Guidance,
            Banking, Insurance, Business to Local Services, quickly,
            professionally and conveniently.
          </div>
        </div>
        <div style={{ width: width > 700 ? "55%":"100%" }}>
          <div className="blackaboutaboutdatax">
            One-stop solution to sort all your requirement ranging
            frome-commerce setup , Software Development ,Career Guidance,
            Banking, Insurance, Business to Local Services, quickly,
            professionally and conveniently.
          </div>
          <div className="blackaboutaboutdatax">
            One-stop solution to sort all your requirement ranging
          </div>
        </div>
      </div>
    </div>
  );
}

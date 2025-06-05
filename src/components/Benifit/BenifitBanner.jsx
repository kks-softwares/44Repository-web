import React from "react";
import "./Benifit.css";
import img1 from "../../assets/benifits/Analytics-pana.svg";
import img2 from '../../assets/benifits/right.svg'
import img23 from '../../assets/benifits/right-1.svg'
import img24 from '../../assets/benifits/right-2.svg'
import img25 from '../../assets/benifits/right-3.svg'
export default function BenifitBanner() {
  return (
    <div style={{marginTop:"2vw"}} className="Aboutabout-container">
      <div className="abouttitileheading"> Benefits</div>
      <div style={{ margin: "1vw",marginTop:"6vw" ,display: "flex" }}>
        <div style={{ width: "55%" }}>
          <div
            style={{ color: "#565699", fontSize: "2vw", width: "60%" }}
            className="bluetitilesubabout"
          >
            A Look at Our Total Rewards
          </div>
          <div style={{ width: "70%" }} className="blackaboutaboutdata">
            A product or service's customer-oriented strengths; statements of a
            valuable product or service feature, with an emphasis on what the
            customer gets from the products.{" "}
          </div>

          <div style={{textAlign:"left",position:"relative",right:"2vw",top:"2vw"}} className="readyabout">
            <button style={{fontWeight:"400",padding:"0 2vw",fontSize:"1.1vw"}}>Join With Us</button>
          </div>
        </div>
        <div className="aboutaboutimg">
          <img style={{ objectFit: "contain" }} src={img1} alt="" />
        </div>
      </div>

      <div style={{margin:"4vw"}} className="abouttitileheading"> Accelerate your Career with our Benefits</div>
       <div className="beniofitsticks">
  <div className="benifitstickaname">
      <div className="imageoftickbenifut">
          <img src={img2} alt="" />
      </div>
      <div className="nameoftickbenifit">Benefits for all users</div>
  </div>
  <div className="benifitstickaname">
  <div className="imageoftickbenifut">
          <img src={img23} alt="" />
      </div>
      <div className="nameoftickbenifit">Benefits for Company</div>
  </div>
  <div className="benifitstickaname">
  <div className="imageoftickbenifut">
          <img src={img25} alt="" />
      </div>
      <div className="nameoftickbenifit">Benefits for Service Provider</div>
  </div>
  <div className="benifitstickaname">
  <div className="imageoftickbenifut">
          <img src={img24} alt="" />
      </div>
      <div className="nameoftickbenifit">Benefits for Freshers/Begineers</div>
  </div>
       </div>

    </div>
  );
}

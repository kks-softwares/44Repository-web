import React, { useEffect } from "react";
import "./SuccessStoriescompo.css";
import img1 from "../../assets/Success stories/collins-lesulie-0VEDrQXxrQo-unsplash.png";
import { useNavigate } from "react-router";

export default function Successtirycard() {
    const navigate=useNavigate()
   
  return (
    <div onClick={()=>navigate('/success_stories_defination')} className="sscardbox">
      <div className="sscardimg">
        <img src={img1} alt="" />
      </div>
      <div className="sscardtitle">
        Easy to Collaborate with other Web Designers
      </div>
      <div className="sscardtag">
        <div>
          <div style={{ color: "black", marginRight: "0.81vw" }}>By</div>
          <div>Eric Karkovack</div>
        </div>
        <div style={{paddingRight:"0.5vw"}}>Web Design</div>
      </div>
      <div className="sscardpara">
        Solo Freelancers are generally comfortable working alone. Still, there
        may be projects where you'll need to collaborate with other web
        Designers...
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Category.css";
import img from "../../assets/experts/Iconly-Light-Search.svg";

export default function CateGoryBanner({
  setCategoryid,
  setSubcategoryid,
  setSearchedData,
  width,
  setpage,
}) {
  const [text, setText] = useState("");
  return (
    <div className="baxkground1">
      <div className="expertgbannercontainer1">
        <div style={{ width: width > 700 ? "55%" : "85%", marginTop: "7vw" }}>
          <div style={{ color: "white" }} className="h-banner-accerlate">
            ACCELERATE YOUR CAREER
          </div>
          <div style={{ color: "white" }} className="h-banner-carrierland">
            Land Your Dream Tech Job
          </div>
          <div
            style={{
              color: "white",
              marginBottom: width > 700 ? "2vw" : "5vw",
            }}
            className="hbsmalltext"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </div>
          <div className="searchbuttonexpert">
            <img src={img} alt="" />
            <input
              style={{ width: "100%" }}
              type="text"
              input={text}
              placeholder="back end developer"
              onChange={(e) => setText(e.target.value)}
            />
            <button
              style={{ width: width > 700 ? "16vw" : "30vw" }}
              onClick={() => {
                setpage(1);
                setSearchedData(text);
                setCategoryid();
                setSubcategoryid();
              }}
            >
              Search
            </button>
          </div>
        </div>

        <div
          style={{
            width: "40%",
            position: "relative",
            bottom: width > 700 ? "5vw" : "1vw",
          }}
        >
          <div
            style={{ padding: "1vw", margin: "5vw", marginLeft: "25vw" }}
            className="expertdetailsbox"
          >
            <div className="hradingcategorybox1">Categories</div>
            <div className="hradingcategorybox">4000+</div>
          </div>
          <div
            style={{ padding: "1vw", margin: "5vw" }}
            className="expertdetailsbox"
          >
            <div className="hradingcategorybox1">Sub categories</div>
            <div className="hradingcategorybox">10000+</div>
          </div>
          <div
            style={{ padding: "1vw", margin: "5vw", marginLeft: "25vw" }}
            className="expertdetailsbox"
          >
            <div className="hradingcategorybox1">Skills</div>
            <div className="hradingcategorybox">20000+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

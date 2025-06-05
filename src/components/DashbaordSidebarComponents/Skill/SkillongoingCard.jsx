import React from "react";
import img from "../../../assets/experts/Group 9471.svg";
import img3 from "../../../assets/experts/Iconly-Light-Bookmark.svg";
import img5 from "../../../assets/experts/Arrow - Up.svg";
import img4 from "../../../assets/experts/Iconly-Light-Chart.svg";
import img2 from "../../../assets/experts/Iconly-Light-Time Circle.svg";
import img1 from "../../../assets/Dashboard/carlos-muza-hpjSkU2UYSU-unsplash (2).png";
import { useNavigate } from "react-router-dom";

import Progress from "react-progressbar";

export default function SkillongoingCard() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "17vw",
        height: "fit-content",
        margin: "1.7vw",
        padding: "0",
      }}
      className="expertcard-container"
    >
      <div style={{ height: "11vw" }} className="imageofcourseexpert">
        <img
          style={{
            width: "17vw",
            height: "12vw",

            objectFit: "cover",
          }}
          src={img1}
          alt=""
        />
      </div>

      <div style={{ padding: "1vw" }}>
        <div className="getexpertcoursetitle">Get a Business Online</div>
        <div
          style={{
            fontSize: "0.8vw",
            color: "gray",
            lineHeight: "1vw",
            fontWeight: "400",
          }}
          className="getexpertcoursetitle"
        >
          Find out how to build a digital presence, sell to customers online,
          and stay safe from hackers.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="timeaanftagexpertcourse"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              top: "0.2vw",
            }}
            className="specialtagexpertcouse"
          >
            <img
              style={{
                width: "1.1vw",
                objectFit: "contain",
                marginRight: "0.3vw",
              }}
              src={img4}
              alt=""
            />
            24 Modules
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "1vw", objectFit: "contain" }}
              src={img2}
              alt=""
            />
            30 hours
          </div>
        </div>
        <div
          style={{
            position: "relative",
            bottom: "0.61vw",
            border: "1px solid #064C87",
          }}
        >
          <Progress
            completed={20}
            color="#064C87"
            height="0.5vw"
            border="0.3vw"
          />
        </div>
        <div
          style={{
            fontSize: "0.8vw",
            color: "gray",
            lineHeight: "1vw",
            fontWeight: "400",
          }}
          className="getexpertcoursetitle"
        >
          20% Complete
        </div>
      </div>
    </div>
  );
}

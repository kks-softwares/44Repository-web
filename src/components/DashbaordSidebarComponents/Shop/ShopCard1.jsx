import React from "react";
import "./shop.css";
import StarRatings from "react-star-ratings";

import imgcard from "../../../assets/My profile – 28/austin-distel-tLZhFRLj6nY-unsplash.png";
export default function ShopCard1({ setSelectedShopreadeam }) {
  return (
    <div
      style={{
        width: "25vw",
        height: "10vw",
        margin: "1.1vw",
        display: "flex",
        padding: "1vw",
      }}
      className="expertcard-container"
    >
      <div className="shupcardcardimg">
        <img src={imgcard} alt="" />
      </div>
      <div className="shopcarddata">
        <div className="shopcardtitle">Ux wireframe Kit (no 2)</div>
        <div className="shopcardpara">
          Start out this free of charge course to discover what it takes to
          start and run a successful
        </div>
        <div style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}>
          <StarRatings
            rating={5}
            starRatedColor="#064C87"
            starDimension="1vw  "
            starSpacing="0.1vw"
            numberOfStars={5}
            name="rating"
          />
        </div>{" "}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="shopcardpara1">
            <del>$100 </del> $0
          </div>
          <div
            style={{ color: "#064C87", cursor: "pointer" }}
            className="shopcardpara1"
            onClick={() => {
              setSelectedShopreadeam({ data: "haha" });
            }}
          >
            Click here
          </div>
        </div>
      </div>
    </div>
  );
}

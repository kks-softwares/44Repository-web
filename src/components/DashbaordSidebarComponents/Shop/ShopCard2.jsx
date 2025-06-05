import React from "react";
import "./shop.css";
import StarRatings from "react-star-ratings";

import imgcard from "../../../assets/My profile – 28/austin-distel-tLZhFRLj6nY-unsplash.png";
export default function ShopCard2() {
  return (
    <div>
      <div
        style={{
          width: "25vw",
          height: "28.5vw",
          margin: "1.1vw",

          padding: "1vw",
        }}
        className="expertcard-container"
      >
        <div style={{ display: "flex" }}>
          <div className="shupcardcardimg">
            <img src={imgcard} alt="" />
          </div>
          <div className="shopcarddata">
            <div className="shopcardtitle">Ux wireframe Kit (no 2)</div>
            <div className="shopcardpara">
              Start out this free of charge course to discover what it takes to
              start and run a successful
            </div>
            <div
              style={{ width: "10vw", position: "relative", bottom: "0.2vw" }}
            >
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
              >
                Click here
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="shopcarddetails">
          <div style={{ margin: "1vw 0" }} className="shopcardtitle">
            Invoice
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin:"0.5vw 0"
            }}
          >
            <div className="shopcardpara1">50%offer</div>
            <div className="shopcardpara1">$280</div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin:"0.5vw 0"
            }}
          >
            <div className="shopcardpara1">Coupon code</div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin:"0.5vw 0"
            }}
          >
            <div className="shopcardpara1"><input style={{width:"10vw"}} type="text" /></div>
            <div className="shopcardpara1">$280</div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin:"0.5vw 0",
              color:"#064C87"

            }}
          >
            <div className="shopcardpara1">Applied</div>
          </div>


          <hr  style={{margin:"1vw 0vw"}}/>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin:"0.5vw 0"
            }}
          >
            <div className="shopcardpara1">Pay Remaining</div>
            <div className="shopcardpara1">$0</div>
          </div>

         <div style={{margin:"0vw auto"}}>
         <button className="shopcradbutton">
         Redeem Now
</button>
         </div>

        </div>
      </div>
    </div>
  );
}

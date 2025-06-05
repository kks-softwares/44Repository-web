import React from "react";
import "./homedownload.css";
import img1 from "../../../assets/Landing page/qr-code.png";
import img2 from "../../../assets/Landing page/apple (1).png";
import img3 from "../../../assets/Landing page/google-play.png";
import { userActions } from "../../../store/userSlice";
import {  useDispatch } from "react-redux";
export default function Homedownload({ width }) {
  const dispatch = useDispatch();
  const handleStart = () => {
    dispatch(userActions.opensignupForm());
  };

  return (
    <div style={{height:"fit-content"}} className="Homedownlaod-container">
      <div hidden
        style={{
          color: "#064C87",
          paddingTop: width > 700 ? "5vw" : "5vw",
          fontSize: width > 700 ? "2.5vw" : "7vw",
        }}
        className="home-catetitle"
      >
        Download our Application
      </div>
      <div hidden className="homedownload">
        <div className="Qr-downloaad">
          <div className="qrname">Scan Your Android Device here</div>
          <div className="qr-img">
            <img src={img1} alt="" />
          </div>
          <div className="qr-for">
            <div className="qrfor-img">
              <img src={img3} alt="" />
            </div>
            <div className="qr-fortype">
              <div className="qr-fort-name">Download for</div>
              <div className="qr-fort-subname">Android</div>
            </div>
          </div>
        </div>
        <div className="qr-middlwline"></div>
        <div className="Qr-downloaad">
          <div className="Qr-downloaad">
            <div className="qrname">Scan Your IOS Device here</div>
            <div className="qr-img">
              <img src={img1} alt="" />
            </div>
            <div className="qr-for">
              <div className="qrfor-img">
                <img src={img2} alt="" />
              </div>
              <div className="qr-fortype">
                <div className="qr-fort-name">Download for</div>
                <div className="qr-fort-subname">IOS</div>
              </div>
            </div>
          </div>
        </div>
      </div >

      <div className="homedownloadtalent">
        <div style={{textAlign:"center", fontSize: width>700?"2.8vw":"6vw"}} className="homedownloadtalenttext">
        Discover the talent your <br /> company requires
        </div>
        <button onClick={()=>handleStart()}>Get Started</button>
      </div>
    </div>
  );
}

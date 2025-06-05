import React, { useLayoutEffect } from "react";
import "./Notification.css";
import img4 from "../../assets/My profile – 28/pexels-stefan-stefancik-91227.png";
import Footer2 from "../../components/footer/Footer2";
export default function Notification() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0, { behavior: "smooth" });
      });
  return (
    <div>
      <div className="notificationpage">
        <div style={{ width: "60vw" }} className="notificationpopup">
          <div className="notificationpopuptitile">
            <div className="notification-title">Notifications</div>
            <div
              style={{ color: "#064C87" }}
              className="notificationmarkallread"
            >
              Clear All
            </div>
          </div>
          <div style={{ marginBottom: "0.2vw" }} className="jobpodtedfieldtitile">
          Today
        </div>
          <div style={{border:"none"}} className="notification-entriesbox">
            <div className="notificationentrieslogo">
              <img src={img4} alt="" />
            </div>
            <div style={{ width: "46vw" }}>
              <div className="notificationname">
                Your bid was created Succesfull
              </div>
              <div className="notificationnamevalue">
                Here is some tips to "Getting standard with substance"{" "}
              </div>
            </div>
            <div className="notificationtime" style={{ width: "10vw" }}>
              4:31 PM
            </div>
          </div>
          <div style={{border:"none"}} className="notification-entriesbox">
            <div className="notificationentrieslogo">
              <img src={img4} alt="" />
            </div>
            <div style={{ width: "46vw" }}>
              <div className="notificationname">You have 1 new message </div>
              <div className="notificationnamevalue">
                What is your basic budget ?{" "}
              </div>
            </div>
            <div className="notificationtime" style={{ width: "10vw" }}>
              4:31 PM
            </div>
          </div>
          <div style={{ marginBottom: "0.2vw" }} className="jobpodtedfieldtitile">
          Yesterday
        </div>
          <div style={{border:"none"}} className="notification-entriesbox">
            <div className="notificationentrieslogo">
              <img src={img4} alt="" />
            </div>
            <div style={{ width: "46vw" }}>
              <div className="notificationname">
                Your bid was created Succesfull
              </div>
              <div className="notificationnamevalue">
                Here is some tips to "Getting standard with substance"{" "}
              </div>
            </div>
            <div className="notificationtime" style={{ width: "10vw" }}>
              about 3 hours ago
            </div>
          </div>
          <div style={{border:"none"}} className="notification-entriesbox">
            <div className="notificationentrieslogo">
              <img src={img4} alt="" />
            </div>
            <div style={{ width: "46vw" }}>
              <div className="notificationname">You have 1 new message </div>
              <div className="notificationnamevalue">
                What is your basic budget ?{" "}
              </div>
            </div>
            <div className="notificationtime" style={{ width: "10vw" }}>
              about 6 hours ago
            </div>
          </div>
          <div style={{border:"none"}} className="notification-entriesbox">
            <div className="notificationentrieslogo">
              <img src={img4} alt="" />
            </div>
            <div style={{ width: "46vw" }}>
              <div className="notificationname">
                Your bid was created Succesfull
              </div>
              <div className="notificationnamevalue">
                Here is some tips to "Getting standard with substance"{" "}
              </div>
            </div>
            <div className="notificationtime" style={{ width: "10vw" }}>
              about 3 hours ago
            </div>
          </div>
          <div style={{ marginBottom: "0.2vw" }} className="jobpodtedfieldtitile">
          23/04/22
        </div>
          <div style={{border:"none"}} className="notification-entriesbox">
            <div className="notificationentrieslogo">
              <img src={img4} alt="" />
            </div>
            <div style={{ width: "46vw" }}>
              <div className="notificationname">You have 1 new message </div>
              <div className="notificationnamevalue">
                What is your basic budget ?{" "}
              </div>
            </div>
            <div className="notificationtime" style={{ width: "10vw" }}>
              about 6 hours ago
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

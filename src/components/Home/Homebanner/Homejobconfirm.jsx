import React from "react";
import "./Homebanner.css";
import img from "../../../assets/jobhome/Completed-pana (1).svg";
import img1 from "../../../assets/jobhome/checkmark (1) (1).svg";
export default function Homejobconfirm({
    width,
  handleClose,
  handleClosex,
  workTitle,
  trackingId,
  password,
  username,
  email,
}) {
  return (
    <div className="homejobpostcinfirm-container">
      <div className="homejobpostconfirmthankuhead">Thank you!!!!</div>
      <div className="homejobpostconfirmthankuheadrequire">
        Your Requirement has been placed Succesfull
      </div>
      <div className="homejobpostconfirmheadrequire" style={{color:'#064C87'}}>
        We sent an Confirmation mail to your given mail{" "}
      </div>

      <div className="homejobconfirmcontainer">
        <div className="homejobconfirmleft">
          <img src={img} style={{ width: width>700? "29vw":"80vw", marginLeft: "5vw" }} alt="" />
        </div>
        <div className="homejobconfirmright">
          <div className="jobconfirmdetails">
            <div className="homejobconfirmdata">
              <div className="imgofjobconfirmdetails">
                <img src={img1} alt="" />
              </div>
              <div className="homejocconfirmdattye">Title-</div>
              <div className="homejocconfirmdattye-value">{workTitle}</div>
            </div>
            <div className="homejobconfirmdata">
              <div className="imgofjobconfirmdetails">
                <img src={img1} alt="" />
              </div>
              <div className="homejocconfirmdattye">Tracking Id-</div>
              <div className="homejocconfirmdattye-value">{trackingId}</div>
            </div>
            <div className="homejobconfirmdata">
              <div className="imgofjobconfirmdetails">
                <img src={img1} alt="" />
              </div>
              <div className="homejocconfirmdattye">Username-</div>
              <div className="homejocconfirmdattye-value">{username}</div>
            </div>
            <div className="homejobconfirmdata">
              <div className="imgofjobconfirmdetails">
                <img src={img1} alt="" />
              </div>
              <div className="homejocconfirmdattye">Email-</div>
              <div className="homejocconfirmdattye-value">{email}</div>
            </div>
            <div className="homejobconfirmdata">
              <div className="imgofjobconfirmdetails">
                <img src={img1} alt="" />
              </div>
              <div className="homejocconfirmdattye">Password-</div>
              <div className="homejocconfirmdattye-value">{password}</div>
            </div>
          </div>

          <button
            onClick={() => {
              handleClose();
              handleClosex();
            }}
          >
            Back to main menu
          </button>
        </div>
      </div>
    </div>
  );
}

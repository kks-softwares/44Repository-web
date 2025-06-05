import React from "react";
import CallMissedOutgoingRoundedIcon from "@mui/icons-material/CallMissedOutgoingRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import img from "../../assets/Success stories/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.png";
export default function CommunityWuesriesBoxes() {
  return (
    <div style={{}}>
      <div
        style={{ height: "8vw", cursor: "pointer" }}
        className="BoxofactivityCommunity"
      >
        <div className="imgboxofActibicom">
          <img src={img} alt="" />
        </div>
        <div style={{ width: "65vw" }} className="titleofdataActivuyComnuty">
          <div className="titleofdataActivuyComnuty1">
            Due to technical difficulties we are unable to process your request.
            Please try again later.
          </div>

          <div className="commentofdataActivuyComnuty1">
            Done by <span style={{ color: "#064c87" }}>Mathews H</span>
            on <span style={{ color: "#064c87" }}>03-23-2021</span>
          </div>
        </div>

        <div
          style={{
            width: "8vw",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "1vw",
          }}
        >
          <div>1923</div>
          <div>
            <VisibilityIcon style={{ fontSize: "1.5vw" }} />
          </div>
        </div>
        <div
          style={{
            width: "8vw",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "1vw",
          }}
        >
          <div>123</div>
          <div>
            <CallMissedOutgoingRoundedIcon style={{ fontSize: "1.5vw" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

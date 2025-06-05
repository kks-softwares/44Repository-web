import React from "react";
import { useDispatch } from "react-redux";
import Aboutccaresel from "./Aboutcrausel";
import { userActions } from "../../store/userSlice";
export default function Aboutteam({ width }) {
  const dispatch = useDispatch();
  const handleStart = () => {
    dispatch(userActions.opensignupForm());
  };
  return (
    <div>
      <div className="abouttitileheading"> Meet our Team</div>
      <div style={{ marginBottom: "3vw" }} className="abouttitileheadingsub">
        our expert team is made up of creative with technical knowhow
        strongngists who think outside the box, who push innovations
      </div>

      <Aboutccaresel width={width} />

      <div className="readyabout">
        Ready to Get Started?
        <span>
          <button onClick={()=>handleStart()}>Join us</button>
        </span>
      </div>
    </div>
  );
}

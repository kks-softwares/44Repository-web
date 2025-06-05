import React, { useState } from "react";
import "./Eventd.css";
import imgc from '../../assets/Community/google-calendar.png'
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
export default function EventDetailData() {
  const [addCalander, setAddCalander] = useState(true);
  return (
    <div className="eventdetailcontinaer">
      <div className="breadcrumpDetailnav">
        <div>
          <HomeOutlinedIcon style={{ fontSize: "2vw" }} />
        </div>
        <div>
          <ChevronRightOutlinedIcon style={{ fontSize: "2vw" }} />
        </div>
        <div>Our Events</div>
        <div>
          <ChevronRightOutlinedIcon style={{ fontSize: "2vw" }} />
        </div>

        <div>Talent Webinar : Interact with Experts</div>
        <div>
          <ChevronRightOutlinedIcon style={{ fontSize: "2vw" }} />
        </div>

        <div>About</div>
      </div>
      <div className="intracteventDetials">
        Talent Webinar: Interact With Experts
      </div>
      <div className="abouteventDetials">About the Event</div>
      <div className="paraeventDetials">
        Getting started on Upwork can take a lot of work and focus. To help make
        this process a little easier, we’ve created this post where you can
        request feedback on your profile. The community is full of experienced
        Upwork freelancers who are passionate about helping others. These users
        will review your profile and provide feedback based on their experience.
      </div>
      <div className="paraeventDetials">
        Getting started on Upwork can take a lot of work and focus. To help make
        this process a little easier, we’ve created this post where you can
        request feedback on your profile. The community is full of experienced
        Upwork freelancers who are passionate about helping others. These users
        will review your profile and provide feedback based on their experience.
      </div>
      <div className="paraeventDetials">
        Getting started on Upwork can take a lot of work and focus. To help make
        this process a little easier, we’ve created this post where you can
        request feedback on your profile. The community is full of experienced
        Upwork freelancers who are passionate about helping others. These users
        will review your profile and provide feedback based on their experience.
      </div>
      <div className="paraeventDetials">
        Getting started on Upwork can take a lot of work and focus. To help make
        this process a little easier, we’ve created this post where you can
        request feedback on your profile. The community is full of experienced
        Upwork freelancers who are passionate about helping others. These users
        will review your profile and provide feedback based on their experience.
      </div>

      <div className="evntaboutflex">
        <div className="evntflexaboutboxes">
          <div className="abouteventDetials">Host & Speakers</div>
          <div className="paraeventDetials">Sunder Pitchai</div>
        </div>
        <div className="evntflexaboutboxes">
          <div className="abouteventDetials">Event Starts</div>
          <div className="paraeventDetials">
            May 12, 10:00 AM IST - May 12, 12:00 PM IST
          </div>
        </div>
        <div className="evntflexaboutboxes">
          <div className="abouteventDetials">Location</div>
          <div className="paraeventDetials">Online Event</div>
        </div>
        {addCalander ? (
          <div className="evntflexaboutboxes">
            <div className="abouteventDetials">Add to my calender</div>
            <div className="paraeventDetials">
              <span onClick={()=>{setAddCalander(false)}}>
                <img src={imgc} alt=""
                  style={{ width: "3vw", marginRight: "1vw",cursor:"pointer",objectFit:"contain" }}
                
                />
              </span>{" "}
              Add Calender
            </div>
          </div>
        ) : (
          <div className="evntflexaboutboxes">
            <div style={{fontSize:"2vw"}} className="abouteventDetials">View Recording</div>
          </div>
        )}
      </div>
    </div>
  );
}

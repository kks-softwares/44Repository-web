import React from "react";
import Hometextcarousel from "../Home/hometstimonial/Hometextcaresel";
import img from "../../assets/Success stories/zan-BKyvWG7D6QA-unsplash.png";
import {  useNavigate } from "react-router";

export default function EventCards() {
    const navigate =useNavigate()
  return (
    <div className="EventCardContainer">
      <div className="titleviewdivevent">
        <div className="titletagviewtitleevnt">Upcoming Events</div>
        <div className="viewallbutton">View All</div>
      </div>
      <div className="flecofcardsevents">
        <div onClick={()=>{navigate('/eventDetail')}} style={{cursor:"pointer"}} className="eventcardbox">
          <div className="blueevnetcardtitle">New Talent Webinar</div>
          <div className="blackevnetcardtitle">
            Talent Webinar: Interact With Experts
          </div>
          <div className="blackevnetcardpara">
            Getting started on Upwork can take a lot of work and focus. To help
            make this process a little easier, we’ve created this post where you
            can request feedback on your profile. The community is full of
            experienced Upwork freelancers who are passionate about helping
            others. These users will review your profile and provide feedback
            based on their experience.
          </div>
          <div className="blueevnetcardtitle1">Host & Speaker</div>
          <div className="blackevnetcardtitle1">Sunder Pitchai</div>
          <div className="blackevnetcardpara1">CEO of Google</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "black",
              margin: "1.2vw 0vw",
            }}
            className="blackevnetcardpara1"
          >
            <div>Dec 12, 2022(8:00 AM)</div>
            <div
            style={{cursor:"pointer"}}
             onClick={()=>{
                navigate('/eventDetail')
            }}>View event</div>
          </div>
        </div>
        <div className="eventcardbox">
          <div className="blueevnetcardtitle">New Talent Webinar</div>
          <div className="blackevnetcardtitle">
            Talent Webinar: Interact With Experts
          </div>
          <div className="blackevnetcardpara">
            Getting started on Upwork can take a lot of work and focus. To help
            make this process a little easier, we’ve created this post where you
            can request feedback on your profile. The community is full of
            experienced Upwork freelancers who are passionate about helping
            others. These users will review your profile and provide feedback
            based on their experience.
          </div>
          <div className="blueevnetcardtitle1">Host & Speaker</div>
          <div className="blackevnetcardtitle1">Sunder Pitchai</div>
          <div className="blackevnetcardpara1">CEO of Google</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "black",
              margin: "1.2vw 0vw",
            }}
            className="blackevnetcardpara1"
          >
            <div>Dec 12, 2022(8:00 AM)</div>
            <div>View event</div>
          </div>
        </div>
        <div className="eventcardbox">
          <div className="blueevnetcardtitle">New Talent Webinar</div>
          <div className="blackevnetcardtitle">
            Talent Webinar: Interact With Experts
          </div>
          <div className="blackevnetcardpara">
            Getting started on Upwork can take a lot of work and focus. To help
            make this process a little easier, we’ve created this post where you
            can request feedback on your profile. The community is full of
            experienced Upwork freelancers who are passionate about helping
            others. These users will review your profile and provide feedback
            based on their experience.
          </div>
          <div className="blueevnetcardtitle1">Host & Speaker</div>
          <div className="blackevnetcardtitle1">Sunder Pitchai</div>
          <div className="blackevnetcardpara1">CEO of Google</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "black",
              margin: "1.2vw 0vw",
            }}
            className="blackevnetcardpara1"
          >
            <div>Dec 12, 2022(8:00 AM)</div>
            <div>View event</div>
          </div>
        </div>
      </div>
      <div className="titleviewdivevent">
        <div className="titletagviewtitleevnt">Past Events</div>
        <div className="viewallbutton">View All</div>
      </div>
      <div className="flecofcardsevents">
        <div className="eventcardbox">
          <div className="blueevnetcardtitle">New Talent Webinar</div>
          <div className="blackevnetcardtitle">
            Talent Webinar: Interact With Experts
          </div>
          <div className="blackevnetcardpara">
            Getting started on Upwork can take a lot of work and focus. To help
            make this process a little easier, we’ve created this post where you
            can request feedback on your profile. The community is full of
            experienced Upwork freelancers who are passionate about helping
            others. These users will review your profile and provide feedback
            based on their experience.
          </div>
          <div className="blueevnetcardtitle1">Host & Speaker</div>
          <div className="blackevnetcardtitle1">Sunder Pitchai</div>
          <div className="blackevnetcardpara1">CEO of Google</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "black",
              margin: "1.2vw 0vw",
            }}
            className="blackevnetcardpara1"
          >
            <div>Dec 12, 2022(8:00 AM)</div>
            <div>View event</div>
          </div>
        </div>
        <div className="eventcardbox">
          <div className="blueevnetcardtitle">New Talent Webinar</div>
          <div className="blackevnetcardtitle">
            Talent Webinar: Interact With Experts
          </div>
          <div className="blackevnetcardpara">
            Getting started on Upwork can take a lot of work and focus. To help
            make this process a little easier, we’ve created this post where you
            can request feedback on your profile. The community is full of
            experienced Upwork freelancers who are passionate about helping
            others. These users will review your profile and provide feedback
            based on their experience.
          </div>
          <div className="blueevnetcardtitle1">Host & Speaker</div>
          <div className="blackevnetcardtitle1">Sunder Pitchai</div>
          <div className="blackevnetcardpara1">CEO of Google</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "black",
              margin: "1.2vw 0vw",
            }}
            className="blackevnetcardpara1"
          >
            <div>Dec 12, 2022(8:00 AM)</div>
            <div>View event</div>
          </div>
        </div>
        <div className="eventcardbox">
          <div className="blueevnetcardtitle">New Talent Webinar</div>
          <div className="blackevnetcardtitle">
            Talent Webinar: Interact With Experts
          </div>
          <div className="blackevnetcardpara">
            Getting started on Upwork can take a lot of work and focus. To help
            make this process a little easier, we’ve created this post where you
            can request feedback on your profile. The community is full of
            experienced Upwork freelancers who are passionate about helping
            others. These users will review your profile and provide feedback
            based on their experience.
          </div>
          <div className="blueevnetcardtitle1">Host & Speaker</div>
          <div className="blackevnetcardtitle1">Sunder Pitchai</div>
          <div className="blackevnetcardpara1">CEO of Google</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "black",
              margin: "1.2vw 0vw",
            }}
            className="blackevnetcardpara1"
          >
            <div>Dec 12, 2022(8:00 AM)</div>
            <div>View event</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "2vw" }} className="titleviewdivevent">
        <div className="titletagviewtitleevnt">
          Learn How Our Events to Help Users
        </div>
        <div hidden className="viewallbutton">
          View All
        </div>
      </div>

      <Hometextcarousel />
      <div
        style={{
          background: "white",
          padding: "0vw",
          width: "92vw",
          justifyContent: "space-between",
          marginTop: "2vw",
        }}
        className="eventbanercontainer"
      >
        <div style={{ width: "47%" }}>
          <div
            style={{ fontSize: "1.72vw", lineHeight: "2.2vw" }}
            className="eventBannerTitle"
          >
            Become a Speaker at our <br /> Upcoming Event
          </div>
          <div className="eventBannerTitle2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </div>

          <button style={{ marginLeft: "0vw" }} className="eventbbutton">
            Became a guest speaker
          </button>
        </div>
        <div style={{ width: "50%" }}>
          <img style={{ height: "22vw" }} src={img} alt="" />
        </div>
      </div>
      <div
        style={{
          background: "white",
          padding: "0vw",
          width: "92vw",
          justifyContent: "space-between",
          marginTop: "2vw",
        }}
        className="eventbanercontainer"
      >
        <div style={{ width: "52%" }}>
          <img style={{ height: "22vw" }} src={img} alt="" />
        </div>
        <div style={{ width: "47%" }}>
          <div
            style={{ fontSize: "1.72vw", lineHeight: "2.2vw" }}
            className="eventBannerTitle"
          >
            Became a host for your valuable Event{" "}
          </div>
          <div className="eventBannerTitle2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </div>

          <button style={{ marginLeft: "0vw" }} className="eventbbutton">
            Became a Host
          </button>
        </div>
      </div>
      <div
        style={{
          margin: "0vw 0vw",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "25vw",
          width: "92vw",
        }}
        className="homebluebox"
      >
        <div className="homeblueboxtitle">
          Became a Speaker or Became a Host
        </div>
        <div style={{ fontSize: "1.2vw" }} className="homeblueboxsubtitle">
          Join our community of 300+ Resources of all sizes who use 44 resources
          Latest Technology and Products make with our experts candidate and
          easy to delightful Customer and Employees
        </div>

        <button style={{ border: "none" }} className="homeworktop-button">
          Join us
        </button>
      </div>
    </div>
  );
}

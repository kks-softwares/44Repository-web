import React from "react";
import "./Course.css";
import img from "../../assets/course/Group 9486.svg";
import img2 from "../../assets/course/Group 9487.svg";
import img3 from "../../assets/course/Group 9488.svg";
import img4 from "../../assets/course/Group 9492.svg";
import img5 from "../../assets/course/tick.svg";
import img7 from "../../assets/course/signal_cellular_alt_black_24dp.svg";
import img17 from "../../assets/experts/Iconly-Light-Chart.svg";
import img27 from "../../assets/experts/Iconly-Light-Bookmark.svg";
import img37 from "../../assets/experts/Iconly-Light-Time Circle.svg";
import img6 from "../../assets/experts/Mobile Marketing-pana.svg";
import CourseModuleCarousel from "./CourseModuleCarousel";
export default function CourseDetailsBanner() {
  return (
    <>
      <div className="courseDeatilsbannerContainer">
        <div className="coursebannerdata">
          <div className="cbtitile">Get a Business Online</div>
          <div className="subcbtitile">
            Find out how to build a digital presence, sell to customers online,
            and stay safe from hackers.
          </div>
          <button style={{ width: "12vw" }} className="hb-button">
            Start Free Cource
          </button>
        </div>
        <div className="CourseBannerImages">
          <img src={img6} alt="" />
        </div>
      </div>

      <div className="secondcourseabouttitle">About this course</div>
      <div className="courseDeatilsbannerContainer">
        <div
          style={{ width: "43vw", marginTop: "0vw" }}
          className="subcbtitile"
        >
          Start out this free of charge course to discover what it takes to
          start and run a successful business online. You'll also learn how to
          build a digital presence, use e-commerce, keep a business safe from
          hackers, and get noticed locally.
        </div>
        <div style={{ width: "20vw", position: "relative", bottom: "3vw" }}>
          <div className="courseaboutdetailtitile">Course Detail</div>
          <div className="courseaboutdetailtitilevalue">
            <img src={img37} alt="" /> 30 hours
          </div>
          <div className="courseaboutdetailtitilevalue">
            <img src={img27} alt="" /> 3 Badges
          </div>
          <div className="courseaboutdetailtitilevalue">
            <img src={img17} alt="" /> 24 Modules
          </div>
          <div className="courseaboutdetailtitilevalue">
            <img src={img7} alt="" /> 30 hours
          </div>
        </div>
        <div style={{ width: "20vw", position: "relative", bottom: "3vw" }}>
          <div className="courseaboutdetailtitile">Course Features</div>
          <div className="courseaboutdetailtitilevalue">
            <img src={img5} alt="" /> Video tutorials
          </div>
          <div className="courseaboutdetailtitilevalue">
            <img src={img5} alt="" /> End-of-topic assesments
          </div>
          <div className="courseaboutdetailtitilevalue">
            <img src={img5} alt="" /> Easy-to-implement tips
          </div>
          <div className="courseaboutdetailtitilevalue">
            <img src={img5} alt="" /> Unlimited access
          </div>
        </div>
      </div>

      <div className="coursehowitworktitle">How it works</div>
      <div className="coursehoeworkcontainer">
        <div className="courseworksinglwmain">
          <div className="courseworkimg">
            <img src={img} alt="" />
          </div>
          <div className="textofcoursework">
            Choose the course that's right for you and take the next step to
            achieving your learning goals.
          </div>
        </div>
        <div className="courseworksinglwmain">
          <div className="courseworkimg">
            <img src={img2} alt="" />
          </div>
          <div className="textofcoursework">
            Keep track of your progress via the "My Learning Plan" page.{" "}
          </div>
        </div>
        <div className="courseworksinglwmain">
          <div className="courseworkimg">
            <img src={img3} alt="" />
          </div>
          <div className="textofcoursework">
            Learn new skills with bit-sized video tutorials then test your
            knowledge with a quick quiz{" "}
          </div>
        </div>
      </div>
      <div className="coursemoduilebox">
        <div
          style={{ textAlign: "center", marginLeft: "0vw" }}
          className="secondcourseabouttitle"
        >
          Modules included
        </div>
        <CourseModuleCarousel />
      </div>
    </>
  );
}

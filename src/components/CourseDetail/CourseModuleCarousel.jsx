import React, { Component } from "react";
import Slider from "react-slick";

import img2 from "../../assets/course/Group 9492.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      //   className={className}
      style={{
        // ...style,
        display: "block",
        background: "#064C87",
        width: "3vw",
        position: "relative",
        zIndex: "50",
        cursor: "pointer",
        bottom: "18vw",
        left: "90.5vw",

        height: "3vw",
        boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.1)",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <div
        style={{
          color: "white",
          display: "flex",
          margin: "auto",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          height: "1vw",
        }}
      >
        <ArrowForwardIcon
          style={{
            fontSize: "2vw",
            marginTop: "1.9vw",
          }}
        />
      </div>
    </div>
  );
}
export default class CourseModuleCarousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
    };
    return (
      <div style={{ width: "100vw", overflow: "hidden" }}>
        <div style={{ width: "100vw ", margin: "auto", marginBottom: "2vw",marginTop:"2.5vw" }}>
          <Slider {...settings}>
            <div>
              <div className="boxofcoursemodel">
                <div className="boxofcourseimage">
                  <img src={img2} alt="" />
                </div>
                <div className="coursemodulegetstartetitle">
                  Get Started with search
                </div>
                <div className="coursemodulegetstartetitle2">
                  6 Lessons/45 min
                </div>

                <hr
                  style={{
                    height: "0.15vw",
                    color: "gray",
                    marginBlock: "1vw",
                  }}
                />

                <div className="searchedelementcoursebox">
                  search engine basics
                </div>
                <div className="searchedelementcoursebox">
                  How search engines work
                </div>
                <div className="searchedelementcoursebox">
                  Organic search explained
                </div>
                <div className="searchedelementcoursebox">
                  Paid search explained
                </div>
                <div className="searchedelementcoursebox">
                  Google search explained
                </div>
                <div className="searchedelementcoursebox">
                  Paid search explained
                </div>
              </div>
            </div>
            <div>
              <div className="boxofcoursemodel">
                <div className="boxofcourseimage">
                  <img src={img2} alt="" />
                </div>
                <div className="coursemodulegetstartetitle">
                  Get Started with search
                </div>
                <div className="coursemodulegetstartetitle2">
                  6 Lessons/45 min
                </div>

                <hr
                  style={{
                    height: "0.15vw",
                    color: "gray",
                    marginBlock: "1vw",
                  }}
                />

                <div className="searchedelementcoursebox">
                  search engine basics
                </div>
                <div className="searchedelementcoursebox">
                  How search engines work
                </div>
                <div className="searchedelementcoursebox">
                  Organic search explained
                </div>
                <div className="searchedelementcoursebox">
                  Paid search explained
                </div>
                <div className="searchedelementcoursebox">
                  Google search explained
                </div>
                <div className="searchedelementcoursebox">
                  Paid search explained
                </div>
              </div>
            </div>
            <div>
              <div className="boxofcoursemodel">
                <div className="boxofcourseimage">
                  <img src={img2} alt="" />
                </div>
                <div className="coursemodulegetstartetitle">
                  Get Started with search
                </div>
                <div className="coursemodulegetstartetitle2">
                  6 Lessons/45 min
                </div>

                <hr
                  style={{
                    height: "0.15vw",
                    color: "gray",
                    marginBlock: "1vw",
                  }}
                />

                <div className="searchedelementcoursebox">
                  search engine basics
                </div>
                <div className="searchedelementcoursebox">
                  How search engines work
                </div>
                <div className="searchedelementcoursebox">
                  Organic search explained
                </div>
                <div className="searchedelementcoursebox">
                  Paid search explained
                </div>
                <div className="searchedelementcoursebox">
                  Google search explained
                </div>
                <div className="searchedelementcoursebox">
                  Paid search explained
                </div>
              </div>
            </div>
            <div>
              <div className="boxofcoursemodel">
                <div className="boxofcourseimage">
                  <img src={img2} alt="" />
                </div>
                <div className="coursemodulegetstartetitle">
                  Get Started with search
                </div>
                <div className="coursemodulegetstartetitle2">
                  6 Lessons/45 min
                </div>

                <hr
                  style={{
                    height: "0.15vw",
                    color: "gray",
                    marginBlock: "1vw",
                  }}
                />

                <div className="searchedelementcoursebox">
                  search engine basics
                </div>
                <div className="searchedelementcoursebox">
                  How search engines work
                </div>
                <div className="searchedelementcoursebox">
                  Organic search explained
                </div>
                <div className="searchedelementcoursebox">
                  Paid search explained
                </div>
                <div className="searchedelementcoursebox">
                  Google search explained
                </div>
                <div className="searchedelementcoursebox">
                  Paid search explained
                </div>
              </div>
            </div>
            <div>
              <div className="boxofcoursemodel">
                <div className="boxofcourseimage">
                  <img src={img2} alt="" />
                </div>
                <div className="coursemodulegetstartetitle">
                  Get Started with search
                </div>
                <div className="coursemodulegetstartetitle2">
                  6 Lessons/45 min
                </div>

                <hr
                  style={{
                    height: "0.15vw",
                    color: "gray",
                    marginBlock: "1vw",
                  }}
                />

                <div className="searchedelementcoursebox">
                  search engine basics
                </div>
                <div className="searchedelementcoursebox">
                  How search engines work
                </div>
                <div className="searchedelementcoursebox">
                  Organic search explained
                </div>
                <div className="searchedelementcoursebox">
                  Paid search explained
                </div>
                <div className="searchedelementcoursebox">
                  Google search explained
                </div>
                <div className="searchedelementcoursebox">
                  Paid search explained
                </div>
              </div>
            </div>
            <div>
              <div className="boxofcoursemodel">
                <div className="boxofcourseimage">
                  <img src={img2} alt="" />
                </div>
                <div className="coursemodulegetstartetitle">
                  Get Started with search
                </div>
                <div className="coursemodulegetstartetitle2">
                  6 Lessons/45 min
                </div>

                <hr
                  style={{
                    height: "0.15vw",
                    color: "gray",
                    marginBlock: "1vw",
                  }}
                />

                <div className="searchedelementcoursebox">
                  search engine basics
                </div>
                <div className="searchedelementcoursebox">
                  How search engines work
                </div>
                <div className="searchedelementcoursebox">
                  Organic search explained
                </div>
                <div className="searchedelementcoursebox">
                  Paid search explained
                </div>
                <div className="searchedelementcoursebox">
                  Google search explained
                </div>
                <div className="searchedelementcoursebox">
                  Paid search explained
                </div>
              </div>
            </div>
            <div>
              <div className="boxofcoursemodel">
                <div className="boxofcourseimage">
                  <img src={img2} alt="" />
                </div>
                <div className="coursemodulegetstartetitle">
                  Get Started with search
                </div>
                <div className="coursemodulegetstartetitle2">
                  6 Lessons/45 min
                </div>

                <hr
                  style={{
                    height: "0.15vw",
                    color: "gray",
                    marginBlock: "1vw",
                  }}
                />

                <div className="searchedelementcoursebox">
                  search engine basics
                </div>
                <div className="searchedelementcoursebox">
                  How search engines work
                </div>
                <div className="searchedelementcoursebox">
                  Organic search explained
                </div>
                <div className="searchedelementcoursebox">
                  Paid search explained
                </div>
                <div className="searchedelementcoursebox">
                  Google search explained
                </div>
                <div className="searchedelementcoursebox">
                  Paid search explained
                </div>
              </div>
            </div>
          </Slider>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

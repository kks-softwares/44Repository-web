import React, { Component } from "react";
import Slider from "react-slick";
import img3 from "../../../assets/Landing page/Group 7881.svg";
import img4 from "../../../assets/Landing page/Group 7905.svg";
import img6 from "../../../assets/Landing page itworl/Group 7912.svg";
import img7 from "../../../assets/Landing page itworl/Group 7942.svg";
import img8 from "../../../assets/Landing page itworl/Group 8012.svg";
import "./Homeabout.css";
import img from "../../../assets/Landing page/tick.svg";
export default class Homecarouselwork extends Component {
  constructor(state) {
    super(state);
    this.state = { button: true };
  }
  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: false,
    };
    return (
      <div style={{ width: "100vw", overflow: "hidden" }}>
        {/* <div className="home-catecarousel"> */}
        <div
          style={{
            width: "100vw ",
            margin: "auto",
            // marginBottom: "2vw"
          }}
        >
          {this?.props?.width >= 700 && (
            <>
              <Slider {...settings}>
                <div className="homebluebox">
                  <div
                    style={{ paddingTop: "2vw" }}
                    className="homebluebox-div1"
                  >
                    <div
                      className={
                        this?.state?.button
                          ? "homeworktop-button"
                          : "homeworktop-button2"
                      }
                      onClick={() => {
                        this.setState();
                        this.setState({ button: true });
                      }}
                    >
                      Work Finder
                    </div>
                    <div
                      className={
                        this?.state?.button
                          ? "homeworktop-button2"
                          : "homeworktop-button"
                      }
                      onClick={() => {
                        this.setState({ button: false });
                      }}
                    >
                      Work Posted
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className="homeworkimg1">
                      <img src={img3} alt="" />
                    </div>
                    <div className="homeworkimg2">
                      <div className="homeworkimgdiv1">01</div>
                      <div className="homeworkimgdiv2">Search Your Query </div>
                      <div className="homeworkimgdiv3">
                        <span style={{ marginRight: "0.5vw" }}>
                          <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                        </span>{" "}
                        choosing a work or fulfilling your need
                      </div>
                      <div className="homeworkimgdiv4">
                        <span style={{ marginRight: "0.5vw" }}>
                          <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                        </span>
                        <div>
                          Fill out the form to post or bid on your requirements.
                        </div>
                      </div>
                    </div>
                    <div className="homeworkimg3">
                      <img src={img4} alt="" />
                    </div>
                  </div>
                </div>
                <div className="homebluebox">
                  <div
                    style={{ paddingTop: "2vw" }}
                    className="homebluebox-div1"
                  >
                    <div
                      className={
                        this?.state?.button
                          ? "homeworktop-button"
                          : "homeworktop-button2"
                      }
                      onClick={() => {
                  
                        this.setState({ button: true });
                      }}
                    >
                      Work Finder
                    </div>
                    <div
                      className={
                        this?.state?.button
                          ? "homeworktop-button2"
                          : "homeworktop-button"
                      }
                      onClick={() => {
                        this.setState({ button: false });
                      }}
                    >
                      Work Posted
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className="homeworkimg1">
                      <img
                        style={{
                          width: "23vw",
                          objectFit: "contain",
                          marginTop: "7vw",
                        }}
                        src={img4}
                        alt=""
                      />
                    </div>
                    <div className="homeworkimg2">
                      <div className="homeworkimgdiv1">02</div>
                      <div className="homeworkimgdiv2">Review Proposals</div>
                      <div className="homeworkimgdiv3">
                        <span style={{ marginRight: "0.5vw" }}>
                          <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                        </span>
                        Consider proposals carefully and analyse them.
                      </div>
                      <div className="homeworkimgdiv4">
                        <span style={{ marginRight: "0.5vw" }}>
                          <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                        </span>
                        <div>Choose or submit a bid for the job.</div>
                      </div>
                    </div>
                    <div className="homeworkimg3">
                      <img
                        style={{ position: "relative", bottom: "8vw" }}
                        src={img6}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="homebluebox">
                  <div
                    style={{ paddingTop: "2vw" }}
                    className="homebluebox-div1"
                  >
                    <div
                      className={
                        this?.state?.button
                          ? "homeworktop-button"
                          : "homeworktop-button2"
                      }
                      onClick={() => {
                     
                        this.setState({ button: true });
                      }}
                    >
                      Work Finder
                    </div>
                    <div
                      className={
                        this?.state?.button
                          ? "homeworktop-button2"
                          : "homeworktop-button"
                      }
                      onClick={() => {
                        this.setState({ button: false });
                      }}
                    >
                      Work Posted
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className="homeworkimg1">
                      <img
                        style={{
                          width: "22vw",
                          objectFit: "contain",
                          marginTop: "1vw",
                        }}
                        src={img6}
                        alt=""
                      />
                    </div>
                    <div className="homeworkimg2">
                      <div className="homeworkimgdiv1">03</div>
                      <div className="homeworkimgdiv2">Work agreement </div>
                      <div className="homeworkimgdiv3">
                        <span style={{ marginRight: "0.5vw" }}>
                          <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                        </span>
                        Before beginning work, thoroughly review all of the
                        terms and conditions.
                      </div>
                      <div className="homeworkimgdiv4">
                        <span style={{ marginRight: "0.5vw" }}>
                          <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                        </span>
                        <div>Do everything completely transparently.</div>
                      </div>
                    </div>
                    <div className="homeworkimg3">
                      <img
                        style={{ position: "relative", bottom: "8vw" }}
                        src={img7}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="homebluebox">
                  <div
                    style={{ paddingTop: "2vw" }}
                    className="homebluebox-div1"
                  >
                    <div
                      className={
                        this?.state?.button
                          ? "homeworktop-button"
                          : "homeworktop-button2"
                      }
                      onClick={() => {
           
                        this.setState({ button: true });
                      }}
                    >
                      Work Finder
                    </div>
                    <div
                      className={
                        this?.state?.button
                          ? "homeworktop-button2"
                          : "homeworktop-button"
                      }
                      onClick={() => {
                        this.setState({ button: false });
                      }}
                    >
                      Work Posted
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className="homeworkimg1">
                      <img
                        style={{
                          width: "22vw",
                          objectFit: "contain",
                          marginTop: "1vw",
                        }}
                        src={img7}
                        alt=""
                      />
                    </div>
                    <div className="homeworkimg2">
                      <div className="homeworkimgdiv1">04</div>
                      <div className="homeworkimgdiv2">Review</div>
                      <div className="homeworkimgdiv3">
                        <span style={{ marginRight: "0.5vw" }}>
                          <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                        </span>
                        Request feedback or share your experiences
                      </div>
                      <div className="homeworkimgdiv4">
                        <span style={{ marginRight: "0.5vw" }}>
                          <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                        </span>
                        <div>
                          By offering quality services, try to earn a rating of
                          5 out of 5.
                        </div>
                      </div>
                    </div>
                    <div className="homeworkimg3">
                      <img
                        style={{ position: "relative", bottom: "5vw" }}
                        src={img8}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="homebluebox">
                  <div
                    style={{ paddingTop: "2vw" }}
                    className="homebluebox-div1"
                  >
                    <div
                      className={
                        this?.state?.button
                          ? "homeworktop-button"
                          : "homeworktop-button2"
                      }
                      onClick={() => {
                        
                        this.setState({ button: true });
                      }}
                    >
                      Work Finder
                    </div>
                    <div
                      className={
                        this?.state?.button
                          ? "homeworktop-button2"
                          : "homeworktop-button"
                      }
                      onClick={() => {
                        this.setState({ button: false });
                      }}
                    >
                      Work Posted
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className="homeworkimg1">
                      <img
                        style={{
                          width: "22vw",
                          objectFit: "contain",
                          marginTop: "3vw",
                        }}
                        src={img8}
                        alt=""
                      />
                    </div>
                    <div className="homeworkimg2">
                      <div className="homeworkimgdiv1">05</div>
                      <div className="homeworkimgdiv2">Fresh Work </div>
                      <div className="homeworkimgdiv3">
                        <span style={{ marginRight: "0.5vw" }}>
                          <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                        </span>
                        Obtain New Work based on Your Rating and Reviews
                      </div>
                      <div className="homeworkimgdiv4">
                        <span style={{ marginRight: "0.5vw" }}>
                          <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                        </span>
                        <div>
                          Having a high rating and review count can help you
                          attract more customers.
                        </div>
                      </div>
                    </div>
                    <div className="homeworkimg3"></div>
                  </div>
                </div>
              </Slider>
            </>
          )}{" "}
          {this?.props?.width < 700 && (
            <Slider {...settings}>
              <div className="homebluebox">
                <div style={{ paddingTop: "2vw" }} className="homebluebox-div1">
                  <div
                    className={
                      this?.state?.button
                        ? "homeworktop-button"
                        : "homeworktop-button2"
                    }
                    onClick={() => {
                  
                      this.setState();
                      this.setState({ button: true });
                    }}
                  >
                    Work Finder
                  </div>
                  <div
                    className={
                      this?.state?.button
                        ? "homeworktop-button2"
                        : "homeworktop-button"
                    }
                    onClick={() => {
                      this.setState({ button: false });
                    }}
                  >
                    Work Posted
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div className="homeworkimg2">
                    <div className="homeworkimgdiv1">01</div>
                    <div className="homeworkimgdiv2">Search Your Query</div>
                    <div className="homeworkimgdiv3">
                      <span style={{ marginRight: "0.5vw" }}>
                        <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                      </span>
                      choosing a work or fulfilling your need
                    </div>
                    <div className="homeworkimgdiv4">
                      <span style={{ marginRight: "0.5vw" }}>
                        <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                      </span>
                      <div>
                        Fill out the form to post or bid on your requirements.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="homebluebox">
                <div style={{ paddingTop: "2vw" }} className="homebluebox-div1">
                  <div
                    className={
                      this?.state?.button
                        ? "homeworktop-button"
                        : "homeworktop-button2"
                    }
                    onClick={() => {
                      
                      this.setState();
                      this.setState({ button: true });
                    }}
                  >
                    Work Finder
                  </div>
                  <div
                    className={
                      this?.state?.button
                        ? "homeworktop-button2"
                        : "homeworktop-button"
                    }
                    onClick={() => {
                      this.setState({ button: false });
                    }}
                  >
                    Work Posted
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div className="homeworkimg2">
                    <div className="homeworkimgdiv1">02</div>
                    <div className="homeworkimgdiv2">Review Proposals</div>
                    <div className="homeworkimgdiv3">
                      <span style={{ marginRight: "0.5vw" }}>
                        <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                      </span>
                      Consider proposals carefully and analyse them.
                    </div>
                    <div className="homeworkimgdiv4">
                      <span style={{ marginRight: "0.5vw" }}>
                        <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                      </span>
                      <div>Choose or submit a bid for the job.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="homebluebox">
                <div style={{ paddingTop: "2vw" }} className="homebluebox-div1">
                  <div
                    className={
                      this?.state?.button
                        ? "homeworktop-button"
                        : "homeworktop-button2"
                    }
                    onClick={() => {
                     
                      this.setState();
                      this.setState({ button: true });
                    }}
                  >
                    Work Finder
                  </div>
                  <div
                    className={
                      this?.state?.button
                        ? "homeworktop-button2"
                        : "homeworktop-button"
                    }
                    onClick={() => {
                      this.setState({ button: false });
                    }}
                  >
                    Work Posted
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div className="homeworkimg2">
                    <div className="homeworkimgdiv1">03</div>
                    <div className="homeworkimgdiv2">Work agreement </div>
                    <div className="homeworkimgdiv3">
                      <span style={{ marginRight: "0.5vw" }}>
                        <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                      </span>
                      Before beginning work, thoroughly review all of the terms
                      and conditions.
                    </div>
                    <div className="homeworkimgdiv4">
                      <span style={{ marginRight: "0.5vw" }}>
                        <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                      </span>
                      <div>Do everything completely transparently.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="homebluebox">
                <div style={{ paddingTop: "2vw" }} className="homebluebox-div1">
                  <div
                    className={
                      this?.state?.button
                        ? "homeworktop-button"
                        : "homeworktop-button2"
                    }
                    onClick={() => {
                 
                      this.setState();
                      this.setState({ button: true });
                    }}
                  >
                    Work Finder
                  </div>
                  <div
                    className={
                      this?.state?.button
                        ? "homeworktop-button2"
                        : "homeworktop-button"
                    }
                    onClick={() => {
                      this.setState({ button: false });
                    }}
                  >
                    Work Posted
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div className="homeworkimg2">
                    <div className="homeworkimgdiv1">04</div>
                    <div className="homeworkimgdiv2">Review</div>
                    <div className="homeworkimgdiv3">
                      <span style={{ marginRight: "0.5vw" }}>
                        <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                      </span>
                      Request feedback or share your experiences
                    </div>
                    <div className="homeworkimgdiv4">
                      <span style={{ marginRight: "0.5vw" }}>
                        <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                      </span>
                      <div>
                        By offering quality services, try to earn a rating of 5
                        out of 5.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="homebluebox">
                <div style={{ paddingTop: "2vw" }} className="homebluebox-div1">
                  <div
                    className={
                      this?.state?.button
                        ? "homeworktop-button"
                        : "homeworktop-button2"
                    }
                    onClick={() => {
                   
                      this.setState();
                      this.setState({ button: true });
                    }}
                  >
                    Work Finder
                  </div>
                  <div
                    className={
                      this?.state?.button
                        ? "homeworktop-button2"
                        : "homeworktop-button"
                    }
                    onClick={() => {
                      this.setState({ button: false });
                    }}
                  >
                    Work Posted
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div className="homeworkimg2">
                    <div className="homeworkimgdiv1">05</div>
                    <div className="homeworkimgdiv2">Fresh Work</div>
                    <div className="homeworkimgdiv3">
                      <span style={{ marginRight: "0.5vw" }}>
                        <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                      </span>
                      <div>
                        Obtain New Work based on Your Rating and Reviews
                      </div>
                    </div>
                    <div className="homeworkimgdiv4">
                      <span style={{ marginRight: "0.5vw" }}>
                        <img src={img} alt="" style={{ fontSize: "1.3vw" }} />
                      </span>
                      <div>
                        Having a high rating and review count can help you
                        attract more customers.
                      </div>
                    </div>
                  </div>
                  <div className="homeworkimg3"></div>
                </div>
              </div>
            </Slider>
          )}
        </div>
      </div>
    );
  }
}

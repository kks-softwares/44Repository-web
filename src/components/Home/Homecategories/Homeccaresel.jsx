import React, { Component } from "react";
import Slider from "react-slick";

import { Link } from "react-router-dom";
import "./Homecategories.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//=======================
import { LockClockOutlined } from "@mui/icons-material";
import StarRatings from "react-star-ratings";
import img2 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";

import img46 from "../../../assets/My profile – 28/Landing page – 19.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";


function SampleNextArrow1(props) {
  const { onClick } = props;
  return (
    <div
      //   className={className}
      style={{
        // ...style,
        display: "block",
        background: "#064C87",
        width: "7vw",
        position: "relative",
        zIndex: "50",
        cursor: "pointer",
        bottom: "35vw",
        left: "90.5vw",

        height: "7vw",
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
          height: "5vw",
        }}
      >
        <ArrowForwardIcon
          style={{
            fontSize: "5vw",
            marginTop: "1.9vw",
          }}
        />
      </div>
    </div>
  );
}

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
        bottom: "15vw",
        left: "86.5vw",

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
export default class Homeccaresel extends Component {
  render() {
    // const navigate = useNavigate();

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: this.props?.width < 700 ? 1 : 4,
      slidesToScroll: 1,
      nextArrow:
        this.props?.width < 700 ? <SampleNextArrow1 /> : <SampleNextArrow />,
    };

    return (
      <div>
        <div style={{ width: "100vw", overflow: "hidden" }}>
          {/* <div className="home-catecarousel"> */}
          <div
            style={{
              width: this.props?.width < 700 ? "96vw" : "88vw ",
              margin: "auto",
              marginBottom: "2vw",
            }}
          >
            <Slider {...settings}>
              {this?.props?.poplularCatelogue?.map((item, index) => {
                return (
                  <div>
                    <div
                      style={{ marginRight: "3vw" }}
                      className="carouselboxTwo"
                    >
                      <Link to={`/catalogue/${item?.catalogueId}`}>
                        <div
                          style={{
                            background: `url('${
                              item?.files[0].file
                                ?  item?.files[0].file
                                : img46 
                            }') center center / cover no-repeat`,
                          }}
                          className="pcatelogimg"
                        >
                          <div className="pcatelogimg2">
                            <div className="porfolioprofilemenu">
                              <RemoveRedEyeIcon
                                // onClick={() => navigate(`/catalogue/${item?.catalogueId}`)}
                                style={{
                                  margin: "0 0.5vw",
                                  width: this.props?.width>700 ?"2.6vw ":"8vw",
                                  height: this.props?.width>700 ?"2.6vw ":"8vw",
                                  borderRadius: "50%",
                                  cursor: "pointer",
                                  objectFit: "cover",
                                  backgroundColor: "white",
                                  padding: "3px",
                                }}
                              />
                            </div>
                            <div hidden className="porfolioprofilemenu">
                              <Link hidden to={`/updatecatalogue/`}>
                                <img src={item?.u_id?.media} alt="" />
                              </Link>
                            </div>
                            <div hidden className="porfolioprofilemenu">
                              <img src={img2} alt="" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div
                        style={{ marginTop: "1vw" }}
                        className="pcatelogperson"
                      >
                        <div className="pcatelogpersonimg">
                          <img src={item?.u_id?.media} alt="" />
                        </div>
                        <div className="pcatelogpersonname">
                          <div className="pcatelogpersonname1">
                            {item?.u_id?.fullName}
                          </div>
                          {/* <div className="pcatelogpersonname2">
                              Top Rated
                            </div> */}
                        </div>
                      </div>
                      <div className="pcatelog-title">
                        {item?.catalougeTitle.slice(0, 35)}
                      </div>
                      <hr style={{ padding: "0vw", margin: "0.3vw" }} />
                      <div className="pcatelogdate">
                        <div>
                          <span>
                            <LockClockOutlined style={{ fontSize: "1vw" }} />
                          </span>
                          {item?.deliveryDate} Days Delivery
                        </div>
                        <div>
                          Starting At <span> $ {item?.serviceDays1} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                
                );
              })}
              {this?.props?.poplularCatelogue?.map((item, index) => {
                return (
                  <div>
                    <div
                      style={{ marginRight: "3vw" }}
                      className="carouselboxTwo"
                    >
                      <Link to={`/catalogue/${item?.catalogueId}`}>
                        <div
                          style={{
                            background: `url('${
                              item?.files[0].file
                                ?  item?.files[0].file
                                : img46
                            }') center center / cover no-repeat`,
                          }}
                          className="pcatelogimg"
                        >
                          <div className="pcatelogimg2">
                            <div className="porfolioprofilemenu">
                              <RemoveRedEyeIcon
                                // onClick={() => navigate(`/catalogue/${item?.catalogueId}`)}
                                style={{
                                  margin: "0 0.5vw",
                                  width: "2.6vw ",
                                  height: "2.8vw",
                                  borderRadius: "50%",
                                  cursor: "pointer",
                                  objectFit: "cover",
                                  backgroundColor: "white",
                                  padding: "3px",
                                }}
                              />
                            </div>
                            <div hidden className="porfolioprofilemenu">
                              <Link hidden to={`/updatecatalogue/`}>
                                <img src={item?.u_id?.media} alt="" />
                              </Link>
                            </div>
                            <div hidden className="porfolioprofilemenu">
                              <img src={img2} alt="" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div
                        style={{ marginTop: "1vw" }}
                        className="pcatelogperson"
                      >
                        <div className="pcatelogpersonimg">
                          <img src={item?.u_id?.media} alt="" />
                        </div>
                        <div className="pcatelogpersonname">
                          <div className="pcatelogpersonname1">
                            {item?.u_id?.fullName}
                          </div>
                          {/* <div className="pcatelogpersonname2">
                              Top Rated
                            </div> */}
                        </div>
                      </div>
                      <div className="pcatelog-title">
                        {item?.catalougeTitle.slice(0, 35)}
                      </div>
                      <hr style={{ padding: "0vw", margin: "0.3vw" }} />
                      <div className="pcatelogdate">
                        <div>
                          <span>
                            <LockClockOutlined style={{ fontSize: "1vw" }} />
                          </span>
                          {item?.deliveryDate} Days Delivery
                        </div>
                        <div>
                          Starting At <span> $ {item?.serviceDays1} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                
                );
              })}
              {this?.props?.poplularCatelogue?.map((item, index) => {
                return (
                  <div>
                    <div
                      style={{ marginRight: "3vw" }}
                      className="carouselboxTwo"
                    >
                      <Link to={`/catalogue/${item?.catalogueId}`}>
                        <div
                          style={{
                            background: `url('${
                              item?.files[0].file
                                ?  item?.files[0].file
                                : img46
                            }') center center / cover no-repeat`,
                          }}
                          className="pcatelogimg"
                        >
                          <div className="pcatelogimg2">
                            <div className="porfolioprofilemenu">
                              <RemoveRedEyeIcon
                                // onClick={() => navigate(`/catalogue/${item?.catalogueId}`)}
                                style={{
                                  margin: "0 0.5vw",
                                  width: "2.6vw ",
                                  height: "2.8vw",
                                  borderRadius: "50%",
                                  cursor: "pointer",
                                  objectFit: "cover",
                                  backgroundColor: "white",
                                  padding: "3px",
                                }}
                              />
                            </div>
                            <div hidden className="porfolioprofilemenu">
                              <Link hidden to={`/updatecatalogue/`}>
                                <img src={item?.u_id?.media} alt="" />
                              </Link>
                            </div>
                            <div hidden className="porfolioprofilemenu">
                              <img src={img2} alt="" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div
                        style={{ marginTop: "1vw" }}
                        className="pcatelogperson"
                      >
                        <div className="pcatelogpersonimg">
                          <img src={item?.u_id?.media} alt="" />
                        </div>
                        <div className="pcatelogpersonname">
                          <div className="pcatelogpersonname1">
                            {item?.u_id?.fullName}
                          </div>
                          {/* <div className="pcatelogpersonname2">
                              Top Rated
                            </div> */}
                        </div>
                      </div>
                      <div className="pcatelog-title">
                        {item?.catalougeTitle.slice(0, 35)}
                      </div>
                      <hr style={{ padding: "0vw", margin: "0.3vw" }} />
                      <div className="pcatelogdate">
                        <div>
                          <span>
                            <LockClockOutlined style={{ fontSize: "1vw" }} />
                          </span>
                          {item?.deliveryDate} Days Delivery
                        </div>
                        <div>
                          Starting At <span> $ {item?.serviceDays1} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                
                );
              })}
              {this?.props?.poplularCatelogue?.map((item, index) => {
                return (
                  <div>
                    <div
                      style={{ marginRight: "3vw" }}
                      className="carouselboxTwo"
                    >
                      <Link to={`/catalogue/${item?.catalogueId}`}>
                        <div
                          style={{
                            background: `url('${
                              item?.files[0].file
                                ?  item?.files[0].file
                                : img46
                            }') center center / cover no-repeat`,
                          }}
                          className="pcatelogimg"
                        >
                          <div className="pcatelogimg2">
                            <div className="porfolioprofilemenu">
                              <RemoveRedEyeIcon
                                // onClick={() => navigate(`/catalogue/${item?.catalogueId}`)}
                                style={{
                                  margin: "0 0.5vw",
                                  width: "2.6vw ",
                                  height: "2.8vw",
                                  borderRadius: "50%",
                                  cursor: "pointer",
                                  objectFit: "cover",
                                  backgroundColor: "white",
                                  padding: "3px",
                                }}
                              />
                            </div>
                            <div hidden className="porfolioprofilemenu">
                              <Link hidden to={`/updatecatalogue/`}>
                                <img src={item?.u_id?.media} alt="" />
                              </Link>
                            </div>
                            <div hidden className="porfolioprofilemenu">
                              <img src={img2} alt="" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div
                        style={{ marginTop: "1vw" }}
                        className="pcatelogperson"
                      >
                        <div className="pcatelogpersonimg">
                          <img src={item?.u_id?.media} alt="" />
                        </div>
                        <div className="pcatelogpersonname">
                          <div className="pcatelogpersonname1">
                            {item?.u_id?.fullName}
                          </div>
                          {/* <div className="pcatelogpersonname2">
                              Top Rated
                            </div> */}
                        </div>
                      </div>
                      <div className="pcatelog-title">
                        {item?.catalougeTitle.slice(0, 35)}
                      </div>
                      <hr style={{ padding: "0vw", margin: "0.3vw" }} />
                      <div className="pcatelogdate">
                        <div>
                          <span>
                            <LockClockOutlined style={{ fontSize: "1vw" }} />
                          </span>
                          {item?.deliveryDate} Days Delivery
                        </div>
                        <div>
                          Starting At <span> $ {item?.serviceDays1} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                
                );
              })}
           
             
            </Slider>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

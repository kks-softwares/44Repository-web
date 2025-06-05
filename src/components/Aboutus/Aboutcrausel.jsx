import React, { Component } from "react";
import Slider from "react-slick";
import img from "../../assets/About/pexels-pixabay-220453.png";

import img1 from "../../assets/About/pexels-italo-melo-2379004.png";
import img2 from "../../assets/About/pexels-vinicius-wiesehofer-1130626.png";

import { ArrowRightAlt } from "@mui/icons-material";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      //   className={className}
      style={{
        // ...style,
        display: "block",
        background: "#064C87",
        width: props?.width > 700 ? "3vw":"9vw",
        position: "relative",
        zIndex: "50",
        cursor: "pointer",
        bottom: props?.width > 700 ?"15vw":"30vw",
        left:props?.width > 700 ? "86.5vw":"82vw",

        height: props?.width > 700 ? "3vw":"9vw",
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
        <ArrowRightAlt
          style={{
            fontSize: props?.width > 700 ? "2.5vw":"6.5vw",
            marginTop: props?.width > 700 ? "1.9vw":"8vw",
          }}
        />
      </div>
    </div>
  );
}
export default class Aboutccaresel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: this.props?.width > 700 ? 4 : 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow  width={this.props?.width}/>,
    };
    return (
      <div style={{ width: "100vw", overflow: "hidden" }}>
        {/* <div className="home-catecarousel"> */}
        <div style={{ width: "88vw ", margin: "auto", marginBottom: "2vw" }}>
          <Slider {...settings}>
            <div>
              <div
                style={{
                  height: this.props?.width > 700 ? "22vw" : "50vw",
                  width: this.props?.width > 700 ? "17vw" : "40vw",
                }}
                className="carouselbox"
              >
                <div style={{ height:this.props?.width > 700 ? "15vw":"35vw"  }} className="hc-cboximg">
                  <img
                    style={{ objectFit: "cover", height:this.props?.width > 700 ? "15vw":"35vw"  }}
                    src={img}
                    alt=""
                  />
                </div>
                <div
                  style={{ fontSize: this.props?.width > 700 ?"1.4vw":"4vw", width: "100%" }}
                  className="hc-cboxname"
                >
                  Rutherford
                </div>
                <div
                  style={{ fontSize: this.props?.width > 700 ?"1.2vw":"3.5vw", width: "100%" }}
                  className="hc-cboxdesc"
                >
                  Senior Developer
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  height: this.props?.width > 700 ? "22vw" : "50vw",
                  width: this.props?.width > 700 ? "17vw" : "40vw",
                }}
                className="carouselbox"
              >
                <div style={{ height:this.props?.width > 700 ? "15vw":"35vw" }} className="hc-cboximg">
                  <img
                    style={{ objectFit: "cover", height:this.props?.width > 700 ? "15vw":"35vw"  }}
                    src={img1}
                    alt=""
                  />
                </div>
                <div
                  style={{ fontSize: this.props?.width > 700 ?"1.4vw":"4vw", width: "100%" }}
                  className="hc-cboxname"
                >
                  Rutherford
                </div>
                <div
                  style={{ fontSize: this.props?.width > 700 ?"1.2vw":"3.5vw", width: "100%" }}
                  className="hc-cboxdesc"
                >
                  Senior Developer
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  height: this.props?.width > 700 ? "22vw" : "50vw",
                  width: this.props?.width > 700 ? "17vw" : "40vw",
                }}
                className="carouselbox"
              >
                <div style={{ height:this.props?.width > 700 ? "15vw":"35vw"  }} className="hc-cboximg">
                  <img
                    style={{ objectFit: "cover", height:this.props?.width > 700 ? "15vw":"35vw"  }}
                    src={img2}
                    alt=""
                  />
                </div>
                <div
                  style={{ fontSize: this.props?.width > 700 ?"1.4vw":"4vw", width: "100%" }}
                  className="hc-cboxname"
                >
                  Rutherford
                </div>
                <div
                  style={{ fontSize: this.props?.width > 700 ?"1.2vw":"3.5vw", width: "100%" }}
                  className="hc-cboxdesc"
                >
                  Senior Developer
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  height: this.props?.width > 700 ? "22vw" : "50vw",
                  width: this.props?.width > 700 ? "17vw" : "40vw",
                }}
                className="carouselbox"
              >
                <div style={{ height:this.props?.width > 700 ? "15vw":"35vw"  }} className="hc-cboximg">
                  <img
                    style={{ objectFit: "cover", height:this.props?.width > 700 ? "15vw":"35vw"  }}
                    src={img}
                    alt=""
                  />
                </div>
                <div
                  style={{ fontSize: this.props?.width > 700 ?"1.4vw":"4vw", width: "100%" }}
                  className="hc-cboxname"
                >
                  Rutherford
                </div>
                <div
                  style={{ fontSize: this.props?.width > 700 ?"1.2vw":"3.5vw", width: "100%" }}
                  className="hc-cboxdesc"
                >
                  Senior Developer
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  height: this.props?.width > 700 ? "22vw" : "50vw",
                  width: this.props?.width > 700 ? "17vw" : "40vw",
                }}
                className="carouselbox"
              >
                <div style={{ height:this.props?.width > 700 ? "15vw":"35vw"  }} className="hc-cboximg">
                  <img
                    style={{ objectFit: "cover", height:this.props?.width > 700 ? "15vw":"35vw"  }}
                    src={img1}
                    alt=""
                  />
                </div>
                <div
                  style={{ fontSize: this.props?.width > 700 ?"1.4vw":"4vw", width: "100%" }}
                  className="hc-cboxname"
                >
                  Rutherford
                </div>
                <div
                  style={{ fontSize: this.props?.width > 700 ?"1.2vw":"3.5vw", width: "100%" }}
                  className="hc-cboxdesc"
                >
                  Senior Developer
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  height: this.props?.width > 700 ? "22vw" : "50vw",
                  width: this.props?.width > 700 ? "17vw" : "40vw",
                }}
                className="carouselbox"
              >
                <div style={{ height:this.props?.width > 700 ? "15vw":"35vw"  }} className="hc-cboximg">
                  <img
                    style={{ objectFit: "cover", height:this.props?.width > 700 ? "15vw":"35vw"  }}
                    src={img2}
                    alt=""
                  />
                </div>
                <div
                  style={{ fontSize: this.props?.width > 700 ?"1.4vw":"4vw", width: "100%" }}
                  className="hc-cboxname"
                >
                  Rutherford
                </div>
                <div
                  style={{ fontSize: this.props?.width > 700 ?"1.2vw":"3.5vw", width: "100%" }}
                  className="hc-cboxdesc"
                >
                  Senior Developer
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  height: this.props?.width > 700 ? "22vw" : "50vw",
                  width: this.props?.width > 700 ? "17vw" : "40vw",
                }}
                className="carouselbox"
              >
                <div style={{ height:this.props?.width > 700 ? "15vw":"35vw"  }} className="hc-cboximg">
                  <img
                    style={{ objectFit: "cover", height:this.props?.width > 700 ? "15vw":"35vw"  }}
                    src={img2}
                    alt=""
                  />
                </div>
                <div
                  style={{ fontSize: this.props?.width > 700 ?"1.4vw":"4vw", width: "100%" }}
                  className="hc-cboxname"
                >
                  Rutherford
                </div>
                <div
                  style={{ fontSize: this.props?.width > 700 ?"1.2vw":"3.5vw", width: "100%" }}
                  className="hc-cboxdesc"
                >
                  Senior Developer
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

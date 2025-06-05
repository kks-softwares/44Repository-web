import React, { Component } from "react";
import Slider from "react-slick";

import img3 from "../../assets/benifits/tick.svg";
import img from "../../assets/services/kaleidico-3V8xo5Gbusk-unsplash.png";

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
        width: props?.width > 700 ? "3vw" : "9vw",
        position: "relative",
        zIndex: "50",
        cursor: "pointer",
        bottom: props?.width > 700 ? "20vw" : "65vw",
        left: props?.width > 700 ? "93.5vw" : "90vw",

        height: props?.width > 700 ? "3vw" : "9vw",
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
            fontSize: props?.width > 700 ? "2.5vw" : "6.5vw",
            marginTop: props?.width > 700 ? "1.9vw" : "8vw",
          }}
        />
      </div>
    </div>
  );
}
export default class Servicecrausel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow width={this.props?.width} />,
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="servicesboxservice">
            <div className="serviceservicedatabox">
              <div className="serviceserviceboxtititle">
                Upgrade your Skill Set
              </div>
              <div className="servicesdatatextboxservice">
                A solute is a substance that is dissolved in a solvent to form a
                solution. In an unsaturated solution, the concentration of
                solute is much lower than that of the concentration of solvent.
                Let’s take an example of a solution from day-to-day life—a
                solution of salt and water.
              </div>
              <div className="servicesdatatextboxservice">
                A solute is a substance that is dissolved in a solvent to form a
                solution. In an unsaturated solution, the concentration of
                solute is much lower than that of the concentration of solvent.
                Let’s take an example of a solution from day-to-day life—a
                solution of salt and water. much lower than that of the
                concentration of solvent. Let’s take an example of a solution
                from day-to-day life—a solution of salt and water.
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginTop: "3vw",
                }}
              >
                <div
                  style={{ width: this?.props?.width>700? "26vw":"40vw" }}
                  className="tickmarkworkdoservicebox"
                >
                  <img src={img3} alt="" />
                  <div>Enterprise Technology</div>
                </div>
                <div
                  style={{ width: this?.props?.width>700? "26vw":"40vw" }}
                  className="tickmarkworkdoservicebox"
                >
                  <img src={img3} alt="" />
                  <div>Enterprise Technology</div>
                </div>
                <div
                  style={{ width: this?.props?.width>700? "26vw":"40vw" }}
                  className="tickmarkworkdoservicebox"
                >
                  <img src={img3} alt="" />
                  <div>Enterprise Technology</div>
                </div>
                <div
                  style={{ width: this?.props?.width>700? "26vw":"40vw" }}
                  className="tickmarkworkdoservicebox"
                >
                  <img src={img3} alt="" />
                  <div>Enterprise Technology</div>
                </div>
              </div>
            </div>
            <div className="serviceserviceimgbox">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="servicesboxservice">
            
            <div className="serviceservicedatabox">
              <div className="serviceserviceboxtititle">
                Business Expanision
              </div>
              <div className="servicesdatatextboxservice">
                A solute is a substance that is dissolved in a solvent to form a
                solution. In an unsaturated solution, the concentration of
                solute is much lower than that of the concentration of solvent.
                Let’s take an example of a solution from day-to-day life—a
                solution of salt and water.
              </div>
              <div className="servicesdatatextboxservice">
                A solute is a substance that is dissolved in a solvent to form a
                solution. In an unsaturated solution, the concentration of
                solute is much lower than that of the concentration of solvent.
                Let’s take an example of a solution from day-to-day life—a
                solution of salt and water. much lower than that of the
                concentration of solvent. Let’s take an example of a solution
                from day-to-day life—a solution of salt and water.
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginTop: "3vw",
                }}
              >
                <div
                  style={{ width: this?.props?.width>700? "26vw":"40vw" }}
                  className="tickmarkworkdoservicebox"
                >
                  <img src={img3} alt="" />
                  <div>Enterprise Technology</div>
                </div>
                <div
                  style={{ width: this?.props?.width>700? "26vw":"40vw" }}
                  className="tickmarkworkdoservicebox"
                >
                  <img src={img3} alt="" />
                  <div>Learning & Development</div>
                </div>
                <div
                  style={{ width: this?.props?.width>700? "26vw":"40vw" }}
                  className="tickmarkworkdoservicebox"
                >
                  <img src={img3} alt="" />
                  <div>Private Equity</div>
                </div>
                <div
                  style={{ width: this?.props?.width>700? "26vw":"40vw" }}
                  className="tickmarkworkdoservicebox"
                >
                  <img src={img3} alt="" />
                  <div>Sustainability</div>
                </div>
              </div>
            </div>
            <div className="serviceserviceimgbox">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="servicesboxservice">
            <div className="serviceservicedatabox">
              <div className="serviceserviceboxtititle">
                Transpierces Between Contracts
              </div>
              <div className="servicesdatatextboxservice">
                A solute is a substance that is dissolved in a solvent to form a
                solution. In an unsaturated solution, the concentration of
                solute is much lower than that of the concentration of solvent.
                Let’s take an example of a solution from day-to-day life—a
                solution of salt and water.
              </div>
              <div className="servicesdatatextboxservice">
                A solute is a substance that is dissolved in a solvent to form a
                solution. In an unsaturated solution, the concentration of
                solute is much lower than that of the concentration of solvent.
                Let’s take an example of a solution from day-to-day life—a
                solution of salt and water. much lower than that of the
                concentration of solvent. Let’s take an example of a solution
                from day-to-day life—a solution of salt and water.
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginTop: "3vw",
                }}
              >
                <div
                  style={{ width: this?.props?.width>700? "26vw":"40vw" }}
                  className="tickmarkworkdoservicebox"
                >
                  <img src={img3} alt="" />
                  <div>Enterprise Technology</div>
                </div>
                <div
                  style={{ width: this?.props?.width>700? "26vw":"40vw" }}
                  className="tickmarkworkdoservicebox"
                >
                  <img src={img3} alt="" />
                  <div>Enterprise Technology</div>
                </div>
                <div
                  style={{ width: this?.props?.width>700? "26vw":"40vw" }}
                  className="tickmarkworkdoservicebox"
                >
                  <img src={img3} alt="" />
                  <div>Enterprise Technology</div>
                </div>
                <div
                  style={{ width: this?.props?.width>700? "26vw":"40vw" }}
                  className="tickmarkworkdoservicebox"
                >
                  <img src={img3} alt="" />
                  <div>Enterprise Technology</div>
                </div>
              </div>
            </div>
            <div className="serviceserviceimgbox">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

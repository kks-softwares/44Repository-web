import React, { Component } from "react";
import Slider from "react-slick";
import img from "../../../assets/png/Landing/pexels-tomaz-barcellos-1987301.png";
import "./hometext.css";
import { ArrowBack, ArrowForward, ArrowRightAlt } from "@mui/icons-material";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      //   className={className}
      style={{
        // ...style,
        display: "block",
        background: "#064C87",
        width: "5vw",
        position: "relative",
        zIndex: "50",
        cursor: "pointer",
        bottom: "16.5vw",
        left: "85.5vw",

        height: "5vw",
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
          height: "3vw",
        }}
      >
        <ArrowForward
          style={{
            fontSize: "3vw",
            marginTop: "1.9vw",
          }}
        />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        background: "#064C87",
        width: "5vw",
        position: "relative",
        zIndex: "50",
        cursor: "pointer",
        top: "18vw",
        right:"1vw",
        height: "5vw",
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
          height: "3vw",
        }}
      >
        <ArrowBack
          style={{
            fontSize: "3vw",
            marginTop: "1.9vw",
          }}
        />
      </div>
    </div>
  );
}

export default class Hometextcarousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow:this.props?.width > 700? <SampleNextArrow />:"",
      prevArrow:this.props?.width > 700? <SamplePrevArrow />:"",
    };
    return (
      <div style={{ width: "95vw", overflow: "hidden" }}>
        {/* <div className="home-catecarousel"> */}
        <div
          style={{
            width:this.props?.width > 700 ?"90vw": "95vw ",
            margin: "auto",
            marginBottom: this.props?.width > 700 ? "3vw" : "6vw",
          }}
        >
          <Slider {...settings}>
            <div>
              <div className="hometextcarousel">
                <div className="home-textbox-first">
                  <div className="home-textbox-firstimg">
                    <img src={img} alt="" />
                  </div>
                  <div className="home-textbox-firsttext">
                    <div
                      style={{
                        fontSize: this.props?.width > 700 ? "3vw" : "8vw",
                        lineHeight: this.props?.width > 700 ? "0vw" : "1.5vw",
                      }}
                    >
                      "
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis lobortis nisl ac nulla pulvinar dapibus. Vestibulum nec
                    arcu non mi pulvinar commodo. Curabitur et dui placerat,
                    scelerisque nulla dictum, aliquet dolor. Suspendisse in
                    auctor dolor. Integer eget est rhoncus nunc condimentum
                    vestibulum. Nunc id mauris consectetur, auctor metus
                    bibendum, mollis purus. Nam vehicula leo ut efficitur a
                    libero. Fusce euismod a augue at eleifend.
                    <div
                      style={{
                        display: "inline",
                        fontSize: this.props?.width > 700 ? "3vw" : "8vw",
                        lineHeight: this.props?.width > 700 ? "0vw" : "0vw",
                        position: "relative",
                        top: this.props?.width > 700 ? "1.2vw" : "4vw",
                        left: "1vw",
                      }}
                    >
                      "
                    </div>
                  </div>
                </div>
                <div className="texthomename">Gayle Christy</div>
              </div>
            </div>
            <div>
              <div className="hometextcarousel">
                <div className="home-textbox-first">
                  <div className="home-textbox-firstimg">
                    <img src={img} alt="" />
                  </div>
                  <div className="home-textbox-firsttext">
                    <div
                      style={{
                        fontSize: this.props?.width > 700 ? "3vw" : "8vw",
                        lineHeight: this.props?.width > 700 ? "0vw" : "1.5vw",
                      }}
                    >
                      "
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis lobortis nisl ac nulla pulvinar dapibus. Vestibulum nec
                    arcu non mi pulvinar commodo. Curabitur et dui placerat,
                    scelerisque nulla dictum, aliquet dolor. Suspendisse in
                    auctor dolor. Integer eget est rhoncus nunc condimentum
                    vestibulum. Nunc id mauris consectetur, auctor metus
                    bibendum, mollis purus. Nam vehicula leo ut efficitur a
                    libero. Fusce euismod a augue at eleifend.
                    <div
                      style={{
                        display: "inline",
                        fontSize: this.props?.width > 700 ? "3vw" : "8vw",
                        lineHeight: this.props?.width > 700 ? "0vw" : "0vw",
                        position: "relative",
                        top: this.props?.width > 700 ? "1.2vw" : "4vw",
                        left: "1vw",
                      }}
                    >
                      "
                    </div>
                  </div>
                </div>
                <div className="texthomename">Gayle Christy</div>
              </div>
            </div>
            <div>
              <div className="hometextcarousel">
                <div className="home-textbox-first">
                  <div className="home-textbox-firstimg">
                    <img src={img} alt="" />
                  </div>
                  <div className="home-textbox-firsttext">
                    <div
                      style={{
                        fontSize: this.props?.width > 700 ? "3vw" : "8vw",
                        lineHeight: this.props?.width > 700 ? "0vw" : "1.5vw",
                      }}
                    >
                      "
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis lobortis nisl ac nulla pulvinar dapibus. Vestibulum nec
                    arcu non mi pulvinar commodo. Curabitur et dui placerat,
                    scelerisque nulla dictum, aliquet dolor. Suspendisse in
                    auctor dolor. Integer eget est rhoncus nunc condimentum
                    vestibulum. Nunc id mauris consectetur, auctor metus
                    bibendum, mollis purus. Nam vehicula leo ut efficitur a
                    libero. Fusce euismod a augue at eleifend.
                    <div
                      style={{
                        display: "inline",
                        fontSize: this.props?.width > 700 ? "3vw" : "8vw",
                        lineHeight: this.props?.width > 700 ? "0vw" : "0vw",
                        position: "relative",
                        top: this.props?.width > 700 ? "1.2vw" : "4vw",
                        left: "1vw",
                      }}
                    >
                      "
                    </div>
                  </div>
                </div>
                <div className="texthomename">Gayle Christy</div>
              </div>
            </div>
            <div>
              <div className="hometextcarousel">
                <div className="home-textbox-first">
                  <div className="home-textbox-firstimg">
                    <img src={img} alt="" />
                  </div>
                  <div className="home-textbox-firsttext">
                    <div
                      style={{
                        fontSize: this.props?.width > 700 ? "3vw" : "8vw",
                        lineHeight: this.props?.width > 700 ? "0vw" : "1.5vw",
                      }}
                    >
                      "
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis lobortis nisl ac nulla pulvinar dapibus. Vestibulum nec
                    arcu non mi pulvinar commodo. Curabitur et dui placerat,
                    scelerisque nulla dictum, aliquet dolor. Suspendisse in
                    auctor dolor. Integer eget est rhoncus nunc condimentum
                    vestibulum. Nunc id mauris consectetur, auctor metus
                    bibendum, mollis purus. Nam vehicula leo ut efficitur a
                    libero. Fusce euismod a augue at eleifend.
                    <div
                      style={{
                        display: "inline",
                        fontSize: this.props?.width > 700 ? "3vw" : "8vw",
                        lineHeight: this.props?.width > 700 ? "0vw" : "0vw",
                        position: "relative",
                        top: this.props?.width > 700 ? "1.2vw" : "4vw",
                        left: "1vw",
                      }}
                    >
                      "
                    </div>
                  </div>
                </div>
                <div className="texthomename">Gayle Christy</div>
              </div>
            </div>
          
          </Slider>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

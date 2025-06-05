import React, { Component } from "react";
import Slider from "react-slick";
import img from '../../assets/png/Landing/pexels-tomaz-barcellos-1987301.png'

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
        width: "3vw",
        position: "relative",
        zIndex: "50",
        cursor: "pointer",
        bottom: "15vw",
        left: "85.5vw",

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
        <ArrowForward
          style={{
            fontSize: "2.5vw",
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
        width: "3vw",
        position: "relative",
        zIndex: "50",
        cursor: "pointer",
        top:"17vw",
        left: "0.5vw",
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
        <ArrowBack
          style={{
            fontSize: "2.5vw",
            marginTop: "1.9vw",
          }}
        />
      </div>
    </div>
  );
}

export default class Servicetextcarousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
     
     
    };
    return (
      <div style={{ width: "90vw", overflow: "hidden" }}>
        {/* <div className="home-catecarousel"> */}
        <div style={{ width: "90vw ", margin: "auto", marginBottom: "2vw" }}>
          <Slider {...settings}>
            <div>
              <div className="hometextcarousel">
                <div className="home-textbox-first">
                  <div className="home-textbox-firstimg">
                    <img src={img} alt="" />
                  </div>
                  <div className="home-textbox-firsttext">
                    <div style={{ fontSize: "3vw", lineHeight: "0vw" }}>"</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis lobortis nisl ac nulla pulvinar dapibus. Vestibulum nec
                    arcu non mi pulvinar commodo. Curabitur et dui placerat,
                    scelerisque nulla dictum, aliquet dolor. Suspendisse in
                    auctor dolor. Integer eget est rhoncus nunc condimentum
                    vestibulum. Nunc id mauris consectetur, auctor metus
                    bibendum, mollis purus. Nam vehicula leo ut efficitur a
                    libero. Fusce euismod a augue at eleifend. Proin elementum
                    ante orci, nec vestibulum dolor pellentesque ut. Nunc
                    dapibus facilisis arcu vitae lacinia.
                    <div
                      style={{
                        display: "inline",
                        fontSize: "3vw",
                        lineHeight: "0vw",
                        position: "relative",
                        top: "1.2vw",
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
                    <div style={{ fontSize: "3vw", lineHeight: "0vw" }}>"</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis lobortis nisl ac nulla pulvinar dapibus. Vestibulum nec
                    arcu non mi pulvinar commodo. Curabitur et dui placerat,
                    scelerisque nulla dictum, aliquet dolor. Suspendisse in
                    auctor dolor. Integer eget est rhoncus nunc condimentum
                    vestibulum. Nunc id mauris consectetur, auctor metus
                    bibendum, mollis purus. Nam vehicula leo ut efficitur a
                    libero. Fusce euismod a augue at eleifend. Proin elementum
                    ante orci, nec vestibulum dolor pellentesque ut. Nunc
                    dapibus facilisis arcu vitae lacinia.
                    <div
                      style={{
                        display: "inline",
                        fontSize: "3vw",
                        lineHeight: "0vw",
                        position: "relative",
                        top: "1.2vw",
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
                    <div style={{ fontSize: "3vw", lineHeight: "0vw" }}>"</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis lobortis nisl ac nulla pulvinar dapibus. Vestibulum nec
                    arcu non mi pulvinar commodo. Curabitur et dui placerat,
                    scelerisque nulla dictum, aliquet dolor. Suspendisse in
                    auctor dolor. Integer eget est rhoncus nunc condimentum
                    vestibulum. Nunc id mauris consectetur, auctor metus
                    bibendum, mollis purus. Nam vehicula leo ut efficitur a
                    libero. Fusce euismod a augue at eleifend. Proin elementum
                    ante orci, nec vestibulum dolor pellentesque ut. Nunc
                    dapibus facilisis arcu vitae lacinia.
                    <div
                      style={{
                        display: "inline",
                        fontSize: "3vw",
                        lineHeight: "0vw",
                        position: "relative",
                        top: "1.2vw",
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
                    <div style={{ fontSize: "3vw", lineHeight: "0vw" }}>"</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis lobortis nisl ac nulla pulvinar dapibus. Vestibulum nec
                    arcu non mi pulvinar commodo. Curabitur et dui placerat,
                    scelerisque nulla dictum, aliquet dolor. Suspendisse in
                    auctor dolor. Integer eget est rhoncus nunc condimentum
                    vestibulum. Nunc id mauris consectetur, auctor metus
                    bibendum, mollis purus. Nam vehicula leo ut efficitur a
                    libero. Fusce euismod a augue at eleifend. Proin elementum
                    ante orci, nec vestibulum dolor pellentesque ut. Nunc
                    dapibus facilisis arcu vitae lacinia.
                    <div
                      style={{
                        display: "inline",
                        fontSize: "3vw",
                        lineHeight: "0vw",
                        position: "relative",
                        top: "1.2vw",
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

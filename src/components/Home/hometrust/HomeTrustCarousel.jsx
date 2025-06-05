import React, { Component } from "react";
import Slider from "react-slick";

import img1 from "../../../assets/Landing page/layar-white.svg";
import img2 from "../../../assets/Landing page/Group 7681.svg";
import img3 from "../../../assets/Landing page/Page-1.svg";
import img5 from "../../../assets/Landing page/1024px-Microsoft_Skype_for_Business_logo.svg.png";
import img6 from "../../../assets/Landing page/small_1200px_Coursera_Logo_600x600_svg_dcd1d69bb6_99e3b821ff.png";
import img7 from "../../../assets/Landing page/Page-1-1.svg";
export default class HomeTrustCarousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 3000,
      slidesToShow: this?.props?.width>700? 6:2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      pauseOnHover: false,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="hometrusticon">
            <img src={img1} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img2} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img3} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img5} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img7} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img1} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img2} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img3} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img5} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img7} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img1} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img2} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img3} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img5} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img7} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img1} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img2} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img3} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img5} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img7} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img1} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img2} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img3} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img5} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img7} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img1} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img2} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img3} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img5} alt="" />
          </div>
          <div className="hometrusticon">
            <img src={img7} alt="" />
          </div>
         
        </Slider>
      </div>
    );
  }
}

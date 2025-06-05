import React from "react";
import "./homeBenifit.css";
import img1 from "../../../assets/png/Landing/pexels-christina-morillo-1181467.png";
import img2 from "../../../assets/png/Landing/pexels-canva-studio-3194519@2x.png";
import img3 from "../../../assets/Landing page/checkmark (1).svg";
export default function HomeBenifit({ width }) {
  return (
    <div className="homebenifit-container">
      <div className="home-catetitle" style={{ marginBottom: "2vw" }}>
        Benefits
      </div>
      <div className="home-benifit-shadow">
        <div className="home-benifit-shadow2">
          <div className="homebenifittag">For Work Poster</div>
          <div className="homebenifittype">
            <div className="homebenifittype1">Receive Rewards </div>
            <div className="homebenifittype12">
              <div style={{ marginTop: "11vw" }}>for Each </div>
              <div style={{ marginTop: "1vw" }}>Work Post</div>
            </div>
          </div>
          <div className="homebenifitdesc">
            In the event that you need expert help in your home or business,
            simply post your request and receive rewards for each completed
            Task.
          </div>
          <div className="homebenifitbuttonstag">
            <div className="homebenigfittagboxbelow">Expert Solutions</div>
            <div className="homebenigfittagboxbelow">Affordable Price</div>
            <div className="homebenigfittagboxbelow">
              Spend Less Time and Money
            </div>
          </div>
        </div>
      </div>
      <div className="home-benifit-noshadow">
        <div hidden={width>700?false:true} className="homenoshadawb-imgpart">
          <img src={img1} alt="" />
        </div>
        <div className="homenoshadawb-textpart">
          <div className="taghomebenofit-noshadow">
            <span>For Company </span>
          </div>
          <div
            style={{ marginLeft: "0", color: "#064C87" }}
            className={width > 700 ? "homebenifittype" : "homebenifittypex"}
          >
            <div
              style={{ color: "#064C87", marginTop: "7vw" }}
              className="homebenifittype1"
            >
              Reduce <br />
            </div>
            <div className="homebenifittype12">
              <div style={{ marginTop: "8.5vw", color: "black" }}> Your</div>
              <div style={{ marginTop: "1vw", color: "black" }}>
                Operational Cost
              </div>
            </div>
          </div>
          <div className="homebenefit-typedesc">
            We help firms deal with the challenges they face by providing them
            experienced professionals.
          </div>

          <div className="checkamarkbenofirhome">
            <div className="chenkhomeine">
              <span>
                <img src={img3} alt="" />
              </span>
              Helps you in Reduce Work Cost.
            </div>
            <div className="chenkhomeine">
              <span>
                <img src={img3} alt="" />
              </span>
              Expertise Work Provider
            </div>
            <div className="chenkhomeine">
              <span>
                <img src={img3} alt="" />
              </span>
              Contributes to Productivity Growth
            </div>
          </div>
        </div>
      </div>
      <div style={{ height:width>700?"":"fit-content"}} className="home-benifit-shadow">
        <div style={{ height:width>700?"":"fit-content"}} className="home-benifit-shadow2">
          <div className="homebenifittag">For Service Provider</div>
          <div className="homebenifittype">
            <div className="homebenifittype1"> Get Business </div>
            <div className="homebenifittype12">
              <div style={{ marginTop: "11vw" }}>with </div>
              <div style={{ marginTop: "1vw" }}> Less Efforts</div>
            </div>
          </div>

          <div className="homebenifitdesc">
            Get genuine clients and start your business without worrying about
            expenses and efforts. Let us assist you with our experience and
            expertise to establish your brand, which would be taken care of by
            the experts of ours. We would provide all the resources that are
            essential for you.
          </div>
          <div className="homebenifitbuttonstag">
            <div className="homebenigfittagboxbelow">
              Reduce Your Marketing Expenses.
            </div>
            <div className="homebenigfittagboxbelow">
              Helps in Build Work Portfolio
            </div>
            <div className="homebenigfittagboxbelow">
              Helps You Grow Your Business
            </div>
          </div>
        </div>
      </div>
      <div  className="home-benifit-noshadow">
        <div hidden={width>700?false:true} className="homenoshadawb-imgpart">
          <img src={img2} alt="" />
        </div>
        <div className="homenoshadawb-textpart">
          <div className="taghomebenofit-noshadow">
            <span>For Fresher </span>
          </div>
          <div
            style={{ marginLeft: "0", color: "#064C87", marginTop: "6vw" }}
            className={width > 700 ? "homebenifittype" : "homebenifittypex"}
          >
            <div
              style={{ color: "#064C87", marginTop: "5vw" }}
              className="homebenifittype1"
            >
              Start Your
            </div>
            <div className="homebenifittype12">
              <div style={{ marginTop: "6.5vw", color: "black" }}>Career </div>
              <div style={{ marginTop: "1vw", color: "black" }}>With Us</div>
            </div>
          </div>
          <div className="homebenefit-typedesc">
            We help you in deciding and upgrading your skills with our well-
            planned training modules. We help you to start your career with us ,
            we provide an expert response to your query
          </div>

          <div className="checkamarkbenofirhome">
            <div className="chenkhomeine">
              <span>
                <img src={img3} alt="" />
              </span>
              Helps in Starting Your Career
            </div>
            <div className="chenkhomeine">
              <span>
                <img src={img3} alt="" />
              </span>
              Support From Experts
            </div>
            <div className="chenkhomeine">
              <span>
                <img src={img3} alt="" />
              </span>
              Upgrading your skill set
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

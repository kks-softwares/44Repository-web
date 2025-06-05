import { Done } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";
import "./Pricing.css";

export default function PricingBanner() {
  const [bluebackgroundbox, setBluebackgroundbox] = useState(3);
  return (
    <div style={{ marginTop: "2vw" }}>
      <div className="abouttitileheading">
        Best <span style={{ color: "#064982" }}>Plans</span> For Business
      </div>
      <div style={{ marginBottom: "3vw" }}  className="abouttitileheadingsub">
        cost -Effective, Full service High Security{" "}
      </div>
      <div className="pricingboxescontainer">
        <div
          style={{ background: bluebackgroundbox === 1 ? "#064C87" : "" }}
          className="pricingbox"    onMouseEnter={() => setBluebackgroundbox(1)}
          onMouseLeave={() => setBluebackgroundbox(0)}
        >
          <div
            style={{ color: bluebackgroundbox === 1 ? "yellow" : "" }}
            className="pricingboxtitile"
          >
            Trail
          </div>
          <div
            style={{ color: bluebackgroundbox === 1 ? "white" : "" }}
            className="pricingboxtiprice"
          >
            0
          </div>
          <div
            style={{ color: bluebackgroundbox === 1 ? "white" : "" }}
            className="pricingticks"
          >
            <Done style={{ fontSize: "1.6vw", marginRight: "0.7vw" }} />
            Trail pack
          </div>
          <div
            style={{ color: bluebackgroundbox === 1 ? "white" : "" }}
            className="pricingticks"
          >
            <Done style={{ fontSize: "1.6vw", marginRight: "0.7vw" }} />1 bid
          </div>
          <div
            style={{ color: bluebackgroundbox === 1 ? "white" : "" }}
            className="pricingticks"
          >
            <Done style={{ fontSize: "1.6vw", marginRight: "0.7vw" }} />
            Sign up for free
          </div>

          <button className="pricingButton">Get Started</button>
        </div>
        <div
          style={{ background: bluebackgroundbox === 2 ? "#064C87" : "" }}
          onMouseEnter={() => setBluebackgroundbox(2)}
          onMouseLeave={() => setBluebackgroundbox(0)}
          className="pricingbox"
        >
          <div
            style={{ color: bluebackgroundbox === 2 ? "yellow" : "" }}
            className="pricingboxtitile"
          >
            Basic
          </div>
          <div
            style={{ color: bluebackgroundbox === 2 ? "white" : "" }}
            className="pricingboxtiprice"
          >
            $ 999
          </div>
          <div
            style={{ color: bluebackgroundbox === 2 ? "white" : "" }}
            className="pricingticks"
          >
            <Done style={{ fontSize: "1.6vw", marginRight: "0.7vw" }} />
            Monthly pack
          </div>
          <div
            style={{ color: bluebackgroundbox === 2 ? "white" : "" }}
            className="pricingticks"
          >
            <Done style={{ fontSize: "1.6vw", marginRight: "0.7vw" }} />5 bid
          </div>
          <div
            style={{ color: bluebackgroundbox === 2 ? "white" : "" }}
            className="pricingticks"
          >
            <Done style={{ fontSize: "1.6vw", marginRight: "0.7vw" }} />
            Sign up for free
          </div>

          <button className="pricingButton">Get Started</button>
        </div>
        <div
          style={{ background: bluebackgroundbox === 3 ? "#064C87" : "" }}
          className="pricingbox"
          onMouseEnter={() => setBluebackgroundbox(3)}
          onMouseLeave={() => setBluebackgroundbox(0)}
        >
          <div
            style={{ color: bluebackgroundbox === 3 ? "yellow" : "" }}
            className="pricingboxtitile"
          >
            Popular
          </div>
          <div
            style={{ color: bluebackgroundbox === 3 ? "white" : "" }}
            className="pricingboxtiprice"
          >
            $ 2500
          </div>
          <div
            style={{ color: bluebackgroundbox === 3 ? "white" : "" }}
            className="pricingticks"
          >
            <Done style={{ fontSize: "1.6vw", marginRight: "0.7vw" }} />3
            Monthly pack
          </div>
          <div
            style={{ color: bluebackgroundbox === 3 ? "white" : "" }}
            className="pricingticks"
          >
            <Done style={{ fontSize: "1.6vw", marginRight: "0.7vw" }} />
            10 bid
          </div>
          <div
            style={{ color: bluebackgroundbox === 3 ? "white" : "" }}
            className="pricingticks"
          >
            <Done style={{ fontSize: "1.6vw", marginRight: "0.7vw" }} />
            Sign up for free
          </div>

          <button className="pricingButton">Get Started</button>
        </div>
        <div
          style={{ background: bluebackgroundbox === 4 ? "#064C87" : "" }}
          className="pricingbox"
          onMouseEnter={() => setBluebackgroundbox(4)}
          onMouseLeave={() => setBluebackgroundbox(0)}
        >
          <div
            style={{ color: bluebackgroundbox === 4 ? "yellow" : "" }}
            className="pricingboxtitile"
          >
            Enterprise
          </div>
          <div
            style={{ color: bluebackgroundbox === 4 ? "white" : "" }}
            className="pricingboxtiprice"
          >
            $ 19999
          </div>
          <div
            style={{ color: bluebackgroundbox === 4 ? "white" : "" }}
            className="pricingticks"
          >
            <Done style={{ fontSize: "1.6vw", marginRight: "0.7vw" }} />1 Year
            pack
          </div>
          <div
            style={{ color: bluebackgroundbox === 4 ? "white" : "" }}
            className="pricingticks"
          >
            <Done style={{ fontSize: "1.6vw", marginRight: "0.7vw" }} />
            Unlimited
          </div>
          <div
            style={{ color: bluebackgroundbox === 4 ? "white" : "" }}
            className="pricingticks"
          >
            <Done style={{ fontSize: "1.6vw", marginRight: "0.7vw" }} />
            Sign up for free
          </div>

          <button className="pricingButton">Get Started</button>
        </div>
      </div>
    </div>
  );
}

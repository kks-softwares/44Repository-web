import React from "react";
import img3 from "../../assets/benifits/tick.svg";

export default function Serviceswhatdo({ width }) {
  return (
    <div className="whatdoservicescontainer">
      <div className="abouttitileheading"> What We do?</div>
      <div style={{ marginBottom: "3vw" }} className="abouttitileheadingsub">
        We provide services that will boost your customer management.
      </div>

      <div className="whatdoboxescontainer">
        <div className="whatdoservcesbox">
          <div className="whatboxstitle">Provide Professional Services</div>
          <div className="whtadosubboxtitile">
            Business expansion is a stage where the business reaches the point
            for growth and seeks out additional options to generate more profit.
          </div>
          <div className="tickmarkworkdoservicebox">
            <img src={img3} alt="" />
            <div>Learn How to Measure Your Growth Rate Accurately.</div>
          </div>
          <div className="tickmarkworkdoservicebox">
            <img src={img3} alt="" />
            <div>Reduce or Avoid Long-Term Debt.</div>
          </div>
        </div>
        <div className="whatdoservcesbox">
          <div className="whatboxstitle">Minimum Your Cost</div>
          <div className="whtadosubboxtitile">
         Business expansion is a stage where the business reaches the point for growth and seeks out additional options to generate more profit.
          </div>
          <div className="tickmarkworkdoservicebox">
            <img src={img3} alt="" />
            <div>Learn How to Measure Your Growth Rate Accurately.</div>
          </div>
          <div className="tickmarkworkdoservicebox">
            <img src={img3} alt="" />
            <div>Reduce or Avoid Long-Term Debt.</div>
          </div>
        </div>
        <div className="whatdoservcesbox">
          <div className="whatboxstitle">Save your Valuable Time</div>
          <div className="whtadosubboxtitile">
          Business expansion is a stage where the business reaches the point for growth and seeks out additional options to generate more profit.

          </div>
          <div className="tickmarkworkdoservicebox">
            <img src={img3} alt="" />
            <div>Learn How to Measure Your Growth Rate Accurately.</div>
          </div>
          <div className="tickmarkworkdoservicebox">
            <img src={img3} alt="" />
            <div>Reduce or Avoid Long-Term Debt.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

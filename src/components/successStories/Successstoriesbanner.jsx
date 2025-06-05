import React from "react";
import "./SuccessStoriescompo.css";
import Successtirycard from "./Successtirycard";
export default function Successstoriesbanner() {
  return (
    <div className="ssbanner-container">
      <div className="imagebackground">
        <div className="bluebackground">Success Stories</div>
      </div>
      <div className="ssbannertitleansdarta">
        <div className="ssbannerrtitle">Success Stories</div>
        <div className="ssbannerrdata">
          A Success story shows how you made a difference to your customer's
          business. More than a list of events or activities, it describe a
          positive change and shows how that change benefited the customer, not
          you, through improved financial results or widely understood key
          business metrices.
        </div>
      </div>
      <div className="cards-successstores">
          <Successtirycard/>
          <Successtirycard/>
          <Successtirycard/>
          <Successtirycard/>
          <Successtirycard/>
          <Successtirycard/>
          <Successtirycard/>
          <Successtirycard/>
          <Successtirycard/>
          <Successtirycard/>
          <Successtirycard/>
          <Successtirycard/>
      </div>
    </div>
  );
}

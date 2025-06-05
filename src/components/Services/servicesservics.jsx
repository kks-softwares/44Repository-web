import React from "react";
import "./Service.css";

import Servicecrausel from "./Servicecrausel";

export default function Servicesservics({ width }) {
  return (
    <div>
      <div className="abouttitileheading"> Our Services</div>
      <div style={{ marginBottom: "3vw" }} className="abouttitileheadingsub">
        We deliver robust and secure applications which are scalable and
        reliable.{" "}
      </div>

      <Servicecrausel width={width} />
    </div>
  );
}

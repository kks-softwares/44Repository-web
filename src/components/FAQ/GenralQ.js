import React from "react";
import "./Askboxes.css";

import GenrakIqestions from "./GenrakIqestions";
export default function GenralQ({ data }) {
  return (
    <div>
      <div className="genral-Question-container">
        <div className="gqheading">{data?.title}</div>
        <div className="gqsubHeading">{data?.description}</div>

        {data?.questions?.map((qnas) => {
          return (
            <>
              {" "}
              <GenrakIqestions qnas={qnas} />
            </>
          );
        })}
      </div>
    </div>
  );
}

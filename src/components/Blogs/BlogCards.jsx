import React, { useEffect } from "react";

import { useNavigate } from "react-router";

export default function BlogCards({ data, width }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blogs/${data?.contentName}`)}
      style={{
        margin: "1.3vw",
        cursor: "pointer",
        height: "fit-content",
        marginTop: "2.5vw",
        boxShadow: width<=700&& "1px 5px 15px 5px #00000020",
      }}
      className="sscardbox"
    >
      <div className="sscardimg">
        <img src={data?.icon[0]} alt="" />
      </div>
      <div className="sscardtitle">{data?.contentName?.slice(0, 30)}</div>
      <div className="sscardtag">
        <div>
          <div style={{ color: "black", marginRight: "0.81vw" }}>By</div>
          <div>{data?.author}</div>
        </div>
        <div style={{ paddingRight: "0.5vw" }}>{data?.category}</div>
      </div>
      <div
        style={{ display: "block", fontSize: width > 700 ? "1vw" : "3vw" }}
        className="sscardpara"
      >
        {data?.toC[0]?.desc?.slice(0, 150)}... <span>More</span>
      </div>
    </div>
  );
}

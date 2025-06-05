import React, { useState } from "react";
import "./sidebar.css";
import img1 from "../../assets/Web 1280 – 8/create_black_24dp.svg";
import img from "../../assets/Web 1280 – 8/create_black.svg";
import img2 from "../../assets/Web 1280 – 8/check_black_24dp (1) copy.svg";
import img3 from "../../assets/Web 1280 – 8/check_black_24dp (1).svg";
import img4 from "../../assets/Web 1280 – 8/post_add_black_24dp.svg";
import img5 from "../../assets/Web 1280 – 8/post_add_black_24dp copy.svg";
import img7 from "../../assets/Web 1280 – 8/check_circle_black_24dp.svg";
import img8 from "../../assets/Web 1280 – 8/blackcircle.svg";
import { useNavigate } from "react-router";
export const Sidebar = ({ links,id }) => {
  const [blue, setblue] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="Sidebarmain-div ">
      <div className="sidenavbox">
        <div
          onClick={() => {
            setblue(1);
            navigate(
              links === "add"
                ? "/addportfolio/project"
                : `/updateportfolio/${id}/project`
            );
          }}
          className="named-sidebar-icon"
        >
          <div
            style={{ top: `${(blue - 1) * 3.5 - 0.01}vw` }}
            className="bluesidebar"
          ></div>

          {blue === 1 ? (
            <img
              src={img1}
              style={{ position: "relative", right: "0.4vw" }}
              alt=""
            />
          ) : (
            <img
              src={img}
              style={{ position: "relative", right: "0.4vw", opacity: "0.8" }}
              alt=""
            />
          )}
          <div
            className="sidebarmenuname"
            style={{ color: blue === 1 ? "#064C89" : "" }}
          >
         { links === "add"
                ? "Add Project"
                : "Update Project"}
          </div>
          {blue === 1 ? (
            <img
              src={img7}
              style={{ position: "relative", right: "0.25vw" }}
              alt=""
            />
          ) : (
            <img
              style={{ position: "relative", right: "0.25vw" }}
              src={img8}
              alt=""
            />
          )}
        </div>

        <div
          onClick={() => {
            setblue(2);
            navigate(
              links === "add"
                ? "/addportfolio/details"
                : `/updateportfolio/${id}/details`
            );
          }}
          className="named-sidebar-icon"
        >
          {blue === 2 ? <img src={img5} alt="" /> : <img src={img4} alt="" />}
          <div
            className="sidebarmenuname"
            style={{ color: blue === 2 ? "#064C89" : "" }}
          >
           { links === "add"
                ? "Add Details"
                : "Update Details"}
          </div>
          {blue === 2 ? <img src={img7} alt="" /> : <img src={img8} alt="" />}
        </div>

        <div
          onClick={() => {
            setblue(3);
            navigate(
              links === "add"
                ? "/addportfolio/preview"
                : `/updateportfolio/${id}/preview`
            );
          }}
          className="named-sidebar-icon"
        >
          {blue === 3 ? <img src={img2} alt="" /> : <img src={img3} alt="" />}
          <div
            className="sidebarmenuname"
            style={{ color: blue === 3 ? "#064C89" : "" }}
          >
            Preview
          </div>
          {blue === 3 ? <img src={img7} alt="" /> : <img src={img8} alt="" />}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./Blogs.css";

export default function BlogBanner(    {width}) {
  return (
    <div className="blogbannercontainer">
      <div className="blogBanner">
        <div className="bluebackgroundblog">
          <div className="homeblueboxtitle">Our Blogs</div>
          <div style={{ fontSize:  width>700?"1vw":"2.7vw" }} className="homeblueboxsubtitle">
            Getting started on Upwork can take a lot of work and focus. To help
            make this process a little easier, we’ve created this post where you
            can request feedback on your profile. The community is full of
            experienced Upwork freelancers who are passionate about helping
            others.
          </div>

          <button style={{ border: "none" }} className="homeworktop-button">
            Join with us
          </button>
        </div>
      </div>
    </div>
  );
}

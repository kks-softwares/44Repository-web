import React from "react";
import { useSelector } from "react-redux";
import BlogBannercarosel from "./BlogBannerCaousel";
import "./BlogDetail.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function BlogDetailBanner({ data, width }) {
  const navigate = useNavigate();
  // const { user, loggedInStatus } = useSelector((state) => state.user);
  // console.log("user",user);
  return (
    <div className="Blogdbannercontainer">
      <Helmet>
        <title>Blog - {`${data?.contentName}`}</title>
        <meta
          name="description"
          // image title will be below in content
          content={data?.iconTitle}
        />
        <meta property="og:url" content={`https://www.44resources.com/blogs/${data?.contentName}`}></meta>
        <meta property="og:image" content={data[0]?.icon[0]} />
        <meta property="og:description" content={data?.iconTitle} />
        <meta property="og:title" content={data?.contentName} />
      </Helmet>
      <button
        style={{
          marginTop: '1vw',
          cursor: "pointer",
          zIndex: "100",
          padding: "0.5vw 0.7vw",
          backgroundColor: "white",
          color: "#000",
          borderRadius: width > 700 ? "0.3vw" : "1vw",
          border: "1px solid #d7d7d7",
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIosNewIcon />
      </button>
      <div className="blogdbtitile">{data?.contentName}</div>{" "}
      <div className="blogdbtitiledate">{data?.timeStamp?.slice(0, 15)}</div>{" "}
      <div style={{display:'flex'}}>
          <button
            style={{
              marginLeft: "2vw",
              cursor: "auto",
              position: "relative",
              top: "0.6vw",
              zIndex: "100",
            }}
            className="hb-button"
          >
            {data?.category}
          </button>
          <div style={{ lineHeight: '4vw', paddingLeft: '2vw',fontSize: '1.5vw', fontWeight: '400'}}>
            Author Name
          </div>
          <div style={{ lineHeight: '4vw', paddingLeft: '2.5vw',fontSize: '1.5vw', fontWeight: '400'}}>
            {data?.updated_at?.slice(0,10)}
          </div>
      </div>
      <div style={{ position: "relative", top: "1vw" }}>
        <div style={{ position: "relative", top: width<=700&& "3vw" }} className="ctatlogcarouseltitle">
          <button
            style={{
              marginLeft: "2vw",
              width: width > 700 ? "10vw" : "34vw",
              cursor: "auto",
              position: "relative",
              top: "4vw",
              zIndex: "100",
              display: "none"
            }}
            className="hb-button"
          >
            {data?.category}
          </button>
          <div className="textofcontainercatalgue" style={{display:'none'}}>{data?.iconTitle}</div>
        </div>
        <div
          style={{ bottom: "2vw", position: "relative" }}
          className="bannerblogimagescaurpsel"
        >
          {data && (
            <BlogBannercarosel
              width={width}
              img1={data?.icon[0]}
              img2={data?.icon[1] ? data?.icon[1] : data?.icon[0]}
              img3={
                data?.icon[2]
                  ? data?.icon[2]
                  : data?.icon[0]
                  ? data?.icon[0]
                  : data?.icon[1]
              }
              img4={
                data?.icon[3]
                  ? data?.icon[3]
                  : data?.icon[1]
                  ? data?.icon[1]
                  : data?.icon[0]
                  ? data?.icon[0]
                  : data?.icon[2]
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

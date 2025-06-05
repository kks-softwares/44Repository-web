import React, { useEffect, useState } from "react";
import Cataloguecarosel from "./CatalogCarosel";
import "./BlogDetail.css";
import { useNavigate, useParams } from "react-router";
import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import axios from "axios";
import API_HOST from "../../../env";
export default function BlogDetail1({ width }) {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const { Id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      ?.get(`${API_HOST}/contentManagement/viewcontent?contentId=${Id}`)
      .then((res) => {
        setData(res?.data?.success?.data[0]);
      });
  }, [Id]);

  return (
    <div>
      <div
        onClick={() => navigate(-1)}
        style={{
          cursor: "pointer",
          marginBottom: "0vw",
          position: "relative",
          left: "1vw",
          top: "1vw",
        }}
        className="filtericonboxname"
      >
        <ArrowBackIosNewOutlined
          style={{ width: width > 700 ? "2vw" : "5vw" }}
        />
      </div>
      <div style={{ margin: "2vw" }}>
        {data?.icon && (
          <div style={{ padding: "0vw" }} className="Blogdbannercontainer">
            <div className="ctatlogcarouseltitle">
              <button
                style={{
                  marginLeft: "1vw",
                  width: width > 700 ? "10vw" : "30vw",
                  cursor: "auto",
                  position: "relative",
                  top:width > 700 ? "4vw":"7vw",
                  zIndex: "100",
                }}
                className="hb-button"
              >
                {data?.category}
              </button>
              <div   style={{
                    fontSize: width > 700 ? "1.5vw" : "2.8vw",
                    width: width <= 700 && "88vw",
                    marginTop:width > 700 ?"0":"2vw"
                  }} className="textofcontainercatalgue" dangerouslySetInnerHTML={{ __html: data?.iconTitle }}></div>
            </div>
            <div style={{ position: "relative", bottom: "2.2vw" }}>
              <Cataloguecarosel
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
                  data?.icon[3]?.file
                    ? data?.icon[3]
                    : data?.icon[1]
                    ? data?.icon[1]
                    : data?.icon[0]
                    ? data?.icon[0]
                    : data?.icon[2]
                }
              />
            </div>
          </div>
        )}
        <div
          style={{ position: "relative", bottom: data?.icon ? "3vw" : "0vw" }}
        >
          <div className="jobpodtedfieldtitile"> Title</div>
          <div className="jobpostfieldinputbox">
            <input type="text" value={data?.contentName} disabled />
          </div>
          <div className="jobpodtedfieldtitile"> Category</div>
          <div className="jobpostfieldinputbox">
            <input type="text" value={data?.category} disabled />
          </div>
          <div className="jobpodtedfieldtitile"> Table of Content</div>
          <div className="widthfullblofpreview">
            {data?.toC?.length > 0 &&
              data?.toC?.map((data, index) => {
                return (
                  <div>
                    <div
                      className=""
                      style={{ color: "black", fontWeight: "500" }}
                      dangerouslySetInnerHTML={{ __html: data?.heading }}
                    >
                    </div>
                    <div
                      className="dataeofblogcontnet1"
                      style={{ color: "black", fontSize: "0.9vw" }}
                      dangerouslySetInnerHTML={{ __html: data?.toc }}
                    ></div>

                    {data?.file && (
                      <div  style={{
                        width: width > 700 ? "" : "85vw",
                        height: width > 700 ? "" : "42vw",
                      }} className="blogcontentimagebanner">
                         <img
                            style={{
                              width: width > 700 ? "63vw" : "85vw",
                              height: width > 700 ? "" : "40vw",
                              objectFit: "contain",
                            }}
                            src={data?.file}
                            alt=""
                          />
                      </div>
                    )}
                    <div
                      style={{ width:width > 700 ? "63vw":"90vw" }}
                      className="Joinwithusblogbox"
                    >
                      <div style={{ width:width > 700 ? "60%":"100%", textAlign: "center" }}>
                        <div className="Joinwithusblogboxtitle">
                          {data?.title}
                        </div>
                        <div style={{ color:'white' }}>
                          <div className="Joinwithusblogboxdetail" dangerouslySetInnerHTML={{ __html: data?.desc?.slice(0, 150) }}>
                        </div>
                          {/* {data?.desc?.slice(0, 150)} */}
                        </div>
                      </div>
                      <div style={{ width: width > 700 ? "40%":"100%", textAlign: "center" }}>
                        <button> {data?.button}</button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {data?.status === "unpublish" ? (
            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            >
              <div
                onClick={() => navigate(`/dashbaord/editBlog/${Id}`)}
                style={{
                  background: "white",
                  color: "black",
                  cursor: "pointer",
                  border: "1px solid #064C87",
                  marginRight: "1vw",
                }}
                className="handlecirclieaboutsave"
              >
                Edit
              </div>
            </div>
          ) : (
            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            ></div>
          )}
        </div>
      </div>
    </div>
  );
}

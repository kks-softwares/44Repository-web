import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SearchOffOutlined } from "@mui/icons-material";

import API_HOST from "../../env";
import Blogdashfaqquestion from "./Blogdashfaqquestion";

export default function Blogdetailpart({ data, width }) {
  const [similarData, setsimilarData] = useState();
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/contentManagement/viewcontent?category=${data?.category}&pageSize=6&pageNumber=1`
      )
      .then((res) => {
        setsimilarData(res?.data?.success?.data);
        window.scrollTo(0, 0, { behavior: "smooth" });
      });
  }, [data]);

  const navigate = useNavigate();
  return (
    <>
      <div style={{ paddingTop: "0vw", display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
        className="Blogdbannercontainer">
        <div style={{ width: width > 700 ? "20vw" : "96vw", position: 'sticky', top: width > 700 ? "5vw" : "20vw" }}>
          <div style={{ position: "relative", top: width > 700 ? "1vw" : "-3vw" }}>
            <div className="FirstBlogcontnetbox">
              <div className="titileofblogcontnet">Table of Content</div>
              {data &&
                data?.toC?.map((data, index) => {
                  return (
                    <a
                      style={{ height: width > 700 ? "2vw" : "4vw" }}
                      href={`#titileofblogcontnet${index + 1}`}
                    >
                      <div className="dataeofblogcontnet">
                        {index + 1}. {data?.heading?.slice(0, 100)}
                      </div>
                    </a>
                  );
                })}
            </div>

            {similarData && width > 700 && (
              <div style={{ marginTop: "2vw" }}>
                <div className="titileofblogcontnet">Similar Blogs</div>
                {similarData?.map((datax) => {
                  return (
                    <div>
                      {data?.contentId !== datax?.contentId && (
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            navigate(`/blogdetail/${datax?.contentId}`)
                          }
                          className="dataeofblogcontnet"
                        >
                          {datax?.contentName}{" "}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="blogdetaildata">
          {/* <div style={{ width: width > 700 ? "20vw" : "96vw", position: "relative", top: width > 700 ? "1vw" : "-3vw" }}>
          <div className="FirstBlogcontnetbox">
            <div className="titileofblogcontnet">Table of Content</div>
            {data &&
              data?.toC?.map((data, index) => {
                return (
                  <a
                    style={{ height: width > 700 ? "2vw" : "4vw" }}
                    href={`#titileofblogcontnet${index + 1}`}
                  >
                    <div className="dataeofblogcontnet">
                      {index + 1}. {data?.heading?.slice(0, 100)}
                    </div>
                  </a>
                );
              })}
          </div>

          {similarData && width > 700 && (
            <div style={{ marginTop: "2vw" }}>
              <div className="titileofblogcontnet">Similar Blogs</div>
              {similarData?.map((datax) => {
                return (
                  <div>
                    {data?.contentId !== datax?.contentId && (
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          navigate(`/blogdetail/${datax?.contentId}`)
                        }
                        className="dataeofblogcontnet"
                      >
                        {datax?.contentName}{" "}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div> */}
          <div style={{ width: width > 700 ? "70vw" : "96vw" }}>
            {data &&
              data?.toC?.map((data, index) => {
                return (
                  <div
                    style={{
                      position: "relative",
                      bottom: width > 700 ? "5vw" : "8vw",
                    }}
                    id={`titileofblogcontnet${index + 1}`}
                  >
                    <div
                      style={{
                        position: "relative",
                        top: width > 700 ? "6vw" : "15vw",
                      }}
                    >
                      <div className="titileofblogcontnet1">
                        {index + 1}. {data?.heading}
                      </div>
                      <div
                        className="dataeofblogcontnet1"
                        style={{
                          color: "black",
                          fontSize: width > 700 ? "0.9vw" : "2vw",
                        }}
                        dangerouslySetInnerHTML={{ __html: data?.toc }}
                      ></div>
                      {data?.file && (
                        <div
                          style={{
                            width: width > 700 ? "" : "90vw",
                            objectFit: "contain",
                            height: width > 700 ? "" : "40vw",
                          }}
                          className="blogcontentimagebanner"
                        >
                          <img
                            style={{
                              width: width > 700 ? "" : "90vw",
                              objectFit: "contain",
                              height: width > 700 ? "" : "40vw",
                            }}
                            src={data?.file}
                            alt=""
                          />
                        </div>
                      )}
                      <div className="Joinwithusblogbox">
                        <div
                          style={{
                            width: width > 700 ? "70%" : "95%",
                            textAlign: "center",
                          }}
                        >
                          <div className="Joinwithusblogboxtitle">
                            {data?.title}
                          </div>
                          <div className="Joinwithusblogboxdetail">
                            {data?.desc?.slice(0, 200)}
                          </div>
                        </div>
                        <div
                          style={{
                            width: width > 700 ? "30%" : "fit-content",
                            textAlign: "center",
                          }}
                        >
                          <button>{data?.button} </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {data?.Q1 ? (
        <div style={{ margin: "auto" }} className="cafaqcontainer mt-4">
          <div className="catefaqhead">FAQS</div>
          <div className="catefaqheadname">Frequently asked questions</div>
          <div className="catefaqheadhaveq">
            Have questioners? we're here to help
          </div>
          <div hidden className="catesearchboxfaq">
            <span>
              <SearchOffOutlined
                style={{ margin: "0vw 0.81vw", fontSize: "1.7vw" }}
              />
            </span>
            <input type="text" />
          </div>
          <Blogdashfaqquestion data={data} width={width} />
        </div>
      ) : ("")}
    </>
  );
}

import React, { useEffect, useState } from "react";
import img from "../../assets/Success stories/zan-BKyvWG7D6QA-unsplash.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router";
import axios from "axios";
import API_HOST from "../../env";
import img1 from "../../assets/Blog/business (1).svg";
import img2 from "../../assets/Blog/idea (3).svg";
import img3 from "../../assets/Blog/research.svg";
import img4 from "../../assets/Blog/workflow.svg";

export default function FiterdBlog({width}) {
  const navigate = useNavigate();
  const [allcategory, setAllcategory] = useState([]);
  const [setSelectedCategory, setSetSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [SearchBlogchat, setSearchBlogchat] = useState("");
  const [totalcount, setTotalcount] = useState();
  useEffect(() => {
    setPage(1);
    if (setSelectedCategory !== "Blog Posted by") {
      if (setSelectedCategory === "All") {
        axios
          .get(
            `${API_HOST}/contentManagement/allcontent?pageSize=9&pageNumber=${page}`
          )
          .then((res) => {
            setAllcategory(res?.data?.success?.data);
            setTotalcount(res?.data?.success?.data?.length);
          });
      } else {
        axios
          .get(
            `${API_HOST}/contentManagement/viewcontent?category=${setSelectedCategory}&pageSize=9&pageNumber=${page}`
          )
          .then((res) => {
            setAllcategory(res?.data?.success?.data);
            setTotalcount(res?.data?.success?.data?.length);
          })
         
      }
    } else {
      axios
        .get(
          `${API_HOST}/contentManagement/viewcontent?pageSize=9&pageNumber=${page}&author=${SearchBlogchat}`
        )
        .then((res) => {
          setAllcategory(res?.data?.success?.data);
          setTotalcount(res?.data?.success?.data?.length);
        });
    }
  }, [setSelectedCategory, SearchBlogchat]);

  useEffect(() => {
    if (setSelectedCategory !== "Blog Posted by") {
      if (setSelectedCategory === "All") {
        axios
          .get(
            `${API_HOST}/contentManagement/allcontent?pageSize=9&pageNumber=${page}`
          )
          .then((res) => {
            setAllcategory([...allcategory, ...res?.data?.success?.data]);
            setTotalcount(res?.data?.success?.data?.length);
          });
      } else {
        axios
          .get(
            `${API_HOST}/contentManagement/viewcontent?category=${setSelectedCategory}&pageSize=9&pageNumber=${page}`
          )
          .then((res) => {
            setAllcategory([...allcategory, ...res?.data?.success?.data]);
            setTotalcount(res?.data?.success?.data?.length);
          })
         
      }
    } else {
        axios
          .get(
            `${API_HOST}/contentManagement/viewcontent?pageSize=9&pageNumber=${page}&author=${SearchBlogchat}`
          )
          .then((res) => {
            setAllcategory([...allcategory, ...res?.data?.success?.data]);
            setTotalcount(res?.data?.success?.data?.length);
          });
      }
  }, [page]);

  // ALL CONTENT API CALL

  return (
    <div className="blogbannercontainer">
      <div className="flexofblobluecred">
        <div
          className="bludeblogtag"
          onClick={() => {
            setSetSelectedCategory("Business ideas");
            setSearchBlogchat("")
          }}
        >
          <div className="blueblogcardimg">
            <img
              src={img2}
              alt=""
              style={{
                width: width>700? "6vw":"18vw",
                height:width>700? "5vw":"15vw" ,
                objectFit: "contain",
                marginTop: "1vw",
              }}
            />
          </div>
          <div className="datatagnameblog">Business Ideas</div>
        </div>
        <div
          className="bludeblogtag"
          onClick={() => {
              setSearchBlogchat("")
            setSetSelectedCategory("Business Plans");
          }}
        >
          <div className="blueblogcardimg">
            <img
              src={img4}
              alt=""
              style={{
                width: width>700? "6vw":"18vw",
                height:width>700? "5vw":"15vw" ,
                objectFit: "contain",
                marginTop: "1vw",
              }}
            />
          </div>
          <div className="datatagnameblog">Business Plans</div>
        </div>
        <div
          className="bludeblogtag"
          onClick={() => {
              setSearchBlogchat("")
            setSetSelectedCategory("Business Problems");
          }}
        >
          <div className="blueblogcardimg">
            <img
              src={img3}
              alt=""
              style={{
                width: width>700? "6vw":"18vw",
                height:width>700? "5vw":"15vw" ,
                objectFit: "contain",
                marginTop: "1vw",
              }}
            />
          </div>
          <div className="datatagnameblog">Business Problems</div>
        </div>
        <div
          className="bludeblogtag"
          onClick={() => {
              setSearchBlogchat("")
            setSetSelectedCategory("Others");
          }}
        >
          <div className="blueblogcardimg">
            <img
              src={img1}
              alt=""
              style={{
                width: width>700? "6vw":"18vw",
                height:width>700? "5vw":"15vw" ,
                objectFit: "contain",
                marginTop: "1vw",
              }}
            />
          </div>
          <div className="datatagnameblog">Others</div>
        </div>
      </div>
      <div className="searchblog">
        <div>
          <SearchOutlinedIcon style={{ fontSize:width>700? "2vw":"5vw", margin: "0vw 1vw" }} />
        </div>
        <div style={{ width: "100%" }}>
          <input
            type="text"
            value={SearchBlogchat}
            onChange={(e) => {
              setSearchBlogchat(e.target.value);
              if (e.target.value !== "") {
                setSetSelectedCategory("Blog Posted by");
              } else {
                setSetSelectedCategory("All");
              }
            }}
          />
        </div>
      </div>
      <div className="filterlineblog">
        <div className="tagfiltertitile">Filter by :</div>
        <div
          style={{
            background: setSelectedCategory === "All" ? "#064C87" : "",
            color: setSelectedCategory === "All" ? "white" : "",
          }}
          className="tagblogfilter"
          onClick={() => {
            setSetSelectedCategory("All");
            setSearchBlogchat("")
          }}
        >
          All
        </div>
        <div
          className="tagblogfilter"
          style={{
            background:
              setSelectedCategory === "Business ideas" ? "#064C87" : "",
            color: setSelectedCategory === "Business ideas" ? "white" : "",
          }}
          onClick={() => {
              setSetSelectedCategory("Business ideas");
              setSearchBlogchat("")
          }}
        >
          Business ideas
        </div>
        <div
          className="tagblogfilter"
          style={{
            background:
              setSelectedCategory === "Business Plans" ? "#064C87" : "",
            color: setSelectedCategory === "Business Plans" ? "white" : "",
          }}
          onClick={() => {
              setSearchBlogchat("")
            setSetSelectedCategory("Business Plans");
          }}
        >
          Business Plans
        </div>
        <div
          className="tagblogfilter"
          style={{
            background:
              setSelectedCategory === "Business Problems" ? "#064C87" : "",
            color: setSelectedCategory === "Business Problems" ? "white" : "",
          }}
          onClick={() => {
              setSearchBlogchat("")
            setSetSelectedCategory("Business Problems");
          }}
        >
          Business Problems
        </div>

        <div
          className="tagblogfilter"
          style={{
            background:
              setSelectedCategory === "Blog Posted by" ? "#064C87" : "",
            color: setSelectedCategory === "Blog Posted by" ? "white" : "",
          }}
        >
          Blog Posted by
        </div>
        <div
          className="tagblogfilter"
          style={{
            background: setSelectedCategory === "Others" ? "#064C87" : "",
            color: setSelectedCategory === "Others" ? "white" : "",
          }}
          onClick={() => {
              setSearchBlogchat("")
            setSetSelectedCategory("Others");
          }}
        >
          Others
        </div>
      </div>

      <div className="flexoffilterboxes">
        {allcategory.map((item) => {
          const myStr = item?.contentName
          const contentNameRoute = myStr.replace(" ", " ");
          return (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/blogs/${contentNameRoute}`)}
              className="boxoffilterbox"
            >
              <div className="imgboxfilteredblog">
                <img src={item?.icon[0]} alt="" />
              </div>
              <div
                style={{
                  width: width>700? "15vw":"50vw",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginLeft:width>700?"":"1vw"
                }}
              >
                <div
                  style={{
                    width: width>700? "15vw":"50vw",
                    height:width>700? "4.5vw":"15vw",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="tagblogblue">
                    {" "}
                    {item?.category}
                    <br />
                    <span className="tagblogblack">
                      {item?.contentName?.slice(0, 60)}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    width: width>700? "15vw":"49vw",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="tagblogblack">{item?.author}</div>
                  <div className="tagblogblue">
                    {item?.timeStamp?.slice(0, 15)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {totalcount > 8 && (
        <div className="ViewMorebutton" onClick={() => setPage(page + 1)}>
          View More
        </div>
      )}
    </div>
  );
}

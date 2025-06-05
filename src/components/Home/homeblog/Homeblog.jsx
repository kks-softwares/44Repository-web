import React, { useEffect, useState } from "react";
import "./Homeblog.css";

import API_HOST from "../../../env";
import axios from "axios";
import { useNavigate } from "react-router";
export default function Homeblog({ width }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/contentManagement/recentContent?pageNumber=1&pageSize=3`
      )
      .then((res) => {
        setBlogs(res?.data?.success?.data);
      });
  }, []);

  const navigate=useNavigate()

  return (
    <div className="homeblogcontainer">
      <div className="home-catetitle">
        Blogs <span>(Learn)</span>
      </div>
      <div className="homesubtryst">Our Popular Blogs</div>
      <div className="hometriustbox">
        {blogs?.length > 0 &&
          blogs?.map((data) => {
            return (
              <div className="hometrustsamllboxes">
                <div className="hometrustimg">
                  <img src={data?.icon[0]} alt="" />
                </div>
                <div className="hometrusttitle">
                  {width > 700
                    ? data?.contentName?.slice(0, 70)
                    : data?.contentName?.slice(0, 55)}
                </div>
                <div className="hometrustdesc">
                  {data?.toC[0]?.desc?.slice(0, 180)}...
                </div>
                <div onClick={()=>navigate(`/blogdetail/${data?.contentId}`)} className="hometrustreadmore">Read More</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import API_HOST from "../../env";
import BlogCards from "./BlogCards";

export default function RecentBlog({width}) {
  const [allcategory, setAllcategory] = useState([]);

  const [page, setPage] = useState(1);

  const [totalcount, setTotalcount] = useState(false);

  const [allcategory1, setAllcategory1] = useState([]);

  const [page1, setPage1] = useState(1);

  const [totalcount1, setTotalcount1] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/contentManagement/recentContent?pageNumber=${page}&pageSize=6`
      )
      .then((res) => {
        setAllcategory([...allcategory, ...res?.data?.success?.data]);
        setTotalcount(res?.data?.success?.data?.length > 5 ? true : false);
      });
  }, [page]);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/contentManagement/trendingContent?pageNumber=${page1}&pageSize=6`
      )
      .then((res) => {
        setAllcategory1([...allcategory1, ...res?.data?.success?.data]);
        setTotalcount1(res?.data?.success?.data?.length > 5 ? true : false);
      });
  }, [page1]);

  return (
    <div className="blogbannercontainer">
     {allcategory?.length > 0 &&  <div className="headinglogrecent">Recent Blogs</div>}
      <div className="flexwrapofcardblog">
        {allcategory?.length > 0 &&
          allcategory?.map((data) => {
            return <BlogCards  data={data} width={width}/>;
          })}
      </div>
      {totalcount && <div onClick={()=>setPage(page+1)} className="ViewMorebutton">View More</div>}
      {allcategory1?.length > 0 &&   <div className="headinglogrecent">Trending Blogs</div>}
      <div className="flexwrapofcardblog">
       {allcategory1?.length > 0 &&
          allcategory1?.map((data) => {
            return <BlogCards  data={data} width={width}/>;
          })}
     
      </div>
      {totalcount1 && <div onClick={()=>setPage1(page1+1)} className="ViewMorebutton">View More</div>}
    </div>
  );
}

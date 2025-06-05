import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogDetailBanner from "../../components/BlogDetails/BlogDetailBanner";
import Blogdetailpart from "../../components/BlogDetails/Blogdetailpart";
import { useParams } from "react-router-dom";
import API_HOST from "../../env";

export default function BlogDetail({ width }) {
  const { postid } = useParams();

  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(`${API_HOST}/contentManagement/viewcontent?contentName=${postid}&pageSize=8&pageNumber=1`)
      .then((res) => {
        setData(res.data?.success?.data[0]);
      
      });
  }, [postid]);
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);

  return (
    <div>
      <BlogDetailBanner data={data} width={width} />
      <Blogdetailpart data={data} width={width} />
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
export default function Homeexplorelist({ viewAllCategories,setCategoryid,categoryid }) {
  const navigate = useNavigate();
  return (
    <div className="homecate-menu">
      <button className={!categoryid?"allcatebox":"allcatemenuname"} onClick={() => setCategoryid()}>
        All Categories
      </button>
      {viewAllCategories?.map((data, index) => {
        return (
          <div onClick={() => setCategoryid(data?._id)}>
            <button style={{width:"fit-content"}}  className={categoryid===data?._id?"allcatebox":"allcatemenuname"}  >{data?.category}</button>
          </div>
        );
      })}
      <div
        onClick={() => navigate("/popularCategories")}
        className="allcatemenuname"
      >
        More
      </div>
    </div>
  );
}

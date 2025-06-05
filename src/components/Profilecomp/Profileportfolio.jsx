import React, { useEffect, useState } from "react";
import "./profile.css";
import img1 from "../../assets/My profile – 28/Component 70 – 6.svg";

import { makeStyles } from "@material-ui/core";
import ProfilePortfoliodetails from "./Profilepopup/ProfilePortfoliodetails";
import { Link } from "react-router-dom";
import axios from "axios";
import API_HOST from "../../env";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.91vw",
    color: "#263238",
    border: "yellow !important",
  },
}));
export default function Profileportfolio({width}) {
  const classes = useStyles();
  const [allprotfolio, setAllprotfoilio] = useState([]);
  const { user, loggedInStatus } = useSelector((state) => state.user);
  const [totalcount, setTotalcount] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (user?.userId) {
      axios
        .get(
          `${API_HOST}/portfolio/viewProjectPortfolio?pageSize=2&pageNumber=${page}&userId=${user?.userId}`
        )
        .then((res) => {
          setAllprotfoilio([ ...res?.data?.success?.data]);
          setTotalcount(res?.data?.success?.data?.length > 1 ? true : false);
        });
    }
  }, [user]);
  useEffect(() => {
    if (user?.userId) {
      axios
        .get(
          `${API_HOST}/portfolio/viewProjectPortfolio?pageSize=2&pageNumber=${page}&userId=${user?.userId}`
        )
        .then((res) => {
          setAllprotfoilio([...allprotfolio, ...res?.data?.success?.data]);
          setTotalcount(res?.data?.success?.data?.length > 1 ? true : false);
        });
    }
  }, [ page]);

  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Portfolio</div>
        <div className="profiledetailnavmanu">
          <div>
            <Link to="/addportfolio">
              <img src={img1} style={{width:width>700?"":"6vw"}} alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="pcatalofboxes">
        {allprotfolio.length > 0 &&
          allprotfolio?.map((portfolio, index) => {
            return (
              <ProfilePortfoliodetails
                portfolio={portfolio}
                width={width}
                key={index}
                setAllprotfoilio={setAllprotfoilio}
              />
            );
          })}
      </div>
      {totalcount && <div onClick={()=>setPage(page+1)} className="ViewMorebutton">View More</div>}
    </div>
  );
}

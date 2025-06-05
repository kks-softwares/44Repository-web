import React, { useEffect, useState } from "react";
import "./blog.css";
import { useNavigate } from "react-router";
import { SearchSharp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Skillpopup1 from "./Skillpopup";

export default function Blogs({ width }) {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const handleSearchCategory = (e) => {
    axios
      .get(
        `${API_HOST}/contentManagement/viewcontent?userName=${user?.userName}&pageNumber=${page}&pageSize=10`
      )
      .then((res) => {
        setAllusers(res?.data?.success?.data);
        window.scrollTo(0, 0, { behavior: "smooth" });
      });
    axios
      .get(
        `${API_HOST}/contentManagement/viewcontent?userName=${
          user?.userName
        }&pageNumber=${page + 1}&pageSize=10`
      )
      .then((res) => {
        if (res?.data?.success?.data?.length > 0) {
          settotalpages(page + 1);
        } else {
          settotalpages(page);
        }
      });
  };

  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  const { user } = useSelector((state) => state.user);
  const [allusers, setAllusers] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `${API_HOST}/contentManagement/viewcontent?userName=${user?.userName}&pageNumber=${page}&pageSize=10`
        )
        .then((res) => {
          setAllusers(res?.data?.success?.data);
          window.scrollTo(0, 0, { behavior: "smooth" });
        });
      axios
        .get(
          `${API_HOST}/contentManagement/viewcontent?userName=${
            user?.userName
          }&pageNumber=${page + 1}&pageSize=10`
        )
        .then((res) => {
          if (res?.data?.success?.data?.length > 0) {
            settotalpages(page + 1);
          } else {
            settotalpages(page);
          }
        });
    }
  }, [page, user]);

  const [totalpages, settotalpages] = useState(1);

  return (
    <div className="BrowseWorkMain-cntainer">
      <div className="searchboxcontainer">
        <div className="serachjobbox">
          <span>
            <SearchSharp
              style={{ fontSize: width > 700 ? "1.7vw" : "4.5vw" }}
            />
          </span>
          <input
            type="text"
            onChange={(e) => {
              handleSearchCategory(e);
            }}
          />

          {width > 700 && (
            <button
              style={{ width: "11vw", height: "2.6vw" }}
              className="hb-button"
            >
              Search
            </button>
          )}
        </div>
      </div>

      <div>
        <div
          style={{
            margin: width > 700 ? "1vw 1vw" : "3vw 1vw",
            padding: "0vw 1vw",
            marginTop: width > 700 ? "2vw" : "11vw",
          }}
          className="navoftableblogs"
        >
          {width > 700 && <div style={{ width: "5vw" }}>Id</div>}
          <div style={{ width: width > 700 ? "15vw":"22vw" }}>Title</div>
          <div style={{ width: width > 700 ? "12vw":"30vw" }}>Category</div>
          {width > 700 && <div style={{ width: "27vw" }}>Description</div>}
          <div style={{ width: width > 700 ? "10vw":"17vw" }}>Status</div>
          <div style={{ width:  width > 700 ?"10vw" :"17vw"}}>Visiblity</div>
          {width > 700 && <div style={{ width: "5vw" }}></div>}
          <div style={{ width:  width > 700 ?"5vw":"7vw" }}></div>
        </div>
        {allusers?.length > 0 &&
          allusers?.map((data, index) => {
            return (
              <Skillpopup1
                data={data}
                width={width}
                index={index}
                page={page}
                setAllusers={setAllusers}
                settotalpages={settotalpages}
                setSelectedCategory={setSelectedCategory}
              />
            );
          })}

        {totalpages !== 1 ? (
          <div style={{ width: "25vw" }} className="paginationbox">
            <div>
              <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
            </div>

            <div
              hidden={page - 4 > 0 ? false : true}
              onClick={() => setPage(page - 4)}
            >
              {page - 4}
            </div>
            <div
              hidden={page - 3 > 0 ? false : true}
              onClick={() => setPage(page - 3)}
            >
              {page - 3}
            </div>
            <div
              hidden={page - 2 > 0 ? false : true}
              onClick={() => setPage(page - 2)}
            >
              {page - 2}
            </div>
            <div
              hidden={page - 1 > 0 ? false : true}
              onClick={() => setPage(page - 1)}
            >
              {page - 1}
            </div>
            <div style={{ color: "#2A6599" }}>{page}</div>
            <div
              hidden={page + 1 > totalpages ? true : false}
              onClick={() => setPage(page + 1)}
            >
              {page + 1}
            </div>

            <div>
              <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

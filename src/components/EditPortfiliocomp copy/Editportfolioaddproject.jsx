import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import { TextField } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.91vw",
    color: "#263238",
    border: "yellow !important",
    // padding: "1vw",
  },
}));
export default function Editportfolioaddproject({ width }) {
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);
  const navigate = useNavigate();
  const classes = useStyles();
  const { title, setTitle, date, setdate, id, datex, setdatex } =
    useOutletContext();
  return (
    <div className="addpfcontaineradd">
        <button
        style={{
          cursor: "pointer",
          zIndex: "100",
          padding: width > 700 ? "0.5vw 0.7vw" : "1vw",
          backgroundColor: "white",
          color: "#000",
          borderRadius: "0.3vw",
          border: "1px solid #d7d7d7",
          marginLeft: width > 700 ? "0vw" : "1vw",
          marginTop: width <= 700 && "1vw",
          marginBottom:"1vw"
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIosNewIcon />
      </button>
      <div className="profiletitleandmenunav">
        <div
          style={{ fontSize: width > 700 ? "1.7vw" : "4vw", fontWeight: "400" }}
          className="profiledetailstitle"
        >
          Edit Portfolio Project
        </div>
        <div className="profiledetailnavmanu">
          <div></div>
        </div>
      </div>
      <hr style={{ color: "#00000070" }} />
      <div
        style={{ left: "0vw", width: "99%", margin: "2.5vw 0.5vw 2vw 0vw" }}
        className="loginfield"
      >
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={title}
          style={{ width: "100%" }}
          InputLabelProps={{
            style: {
              fontSize: width > 700 ? "1vw" : "3vw",
              fontFamily: "Poppins",
              fontStyle: "500",
              fontWeight: "500",
              color: "black",
            },
          }}
          inputProps={{ className: classes.input }}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
     

      
      <div
        style={{ marginBottom: "0.5vw", marginTop: "1.3vw" }}
        className="jobpodtedfieldtitile"
      >
        Starting Date (optional)
      </div>
      <div
        style={{
          left: "0vw",
          width: width > 700 ? "39%" : "100%",
          margin: width > 700 ? "0.5vw 0.5vw 2vw 0vw" : "1vw 0",
        }}
        className="loginfield"
      >
        <input
          type="date"
          className="pfadddate"
          value={datex}
          onChange={(e) => {
            setdatex(e.target.value);
          }}
        />
      </div>

      <div
        style={{ marginBottom: "0.5vw", marginTop: "1.3vw" }}
        className="jobpodtedfieldtitile"
      >
        Completion Date (optional)
      </div>
      <div
        style={{
          left: "0vw",
          width: width > 700 ? "39%" : "100%",
          margin: width > 700 ? "0.5vw 0.5vw 2vw 0vw" : "1vw 0",
        }}
        className="loginfield"
      >
        <input
          type="date"
          className="pfadddate"
          value={date}
          onChange={(e) => {
            setdate(e.target.value);
          }}
        />
      </div>

      <div style={{ height: "5vw" }}></div>
      <hr style={{ color: "#00000090" }} />
      <div style={{ marginTop: "0.31vw" ,marginBottom: width<700 &&"5vw" }} className="handlemoreaboutskill">
        <Link to="/profile">
          <div
            style={{
              background: "white",
              color: "black",
              cursor: "pointer",
            }}
            className="handlecirclieaboutsave"
          >
            Cancel
          </div>
        </Link>
        <Link to={`/updateportfolio/${id}/details`}>
          <div
            style={{
              cursor: "pointer",
              width: width > 700 ? "10vw" : "30vw",
              borderRadius: width > 700 ? "0.5vw" : "1vw",
            }}
            className="handlecirclieaboutsave"
          >
            Go to Add Details
          </div>
        </Link>
      </div>
    </div>
  );
}

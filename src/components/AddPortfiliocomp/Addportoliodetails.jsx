import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import API_HOST from "../../env";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import img1 from "../../assets/Web 1280 – 14/Group 9831.svg";
import img from "../../assets/Web 1280 – 14/Icon.svg";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "@mui/material/Fade";
import axios from "axios";

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

export default function Addportoliodetails({ width }) {
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);
  const classes = useStyles();

  const {
    caption,
    setCaption,
    iamge,
    setIamge,
    skillset,
    setskillset,
    projecturl,
    setProjecturl,
    projectdescription,
    setProjectdescription,
  } = useOutletContext();
  const navigate = useNavigate();
  const [openx, setOpenx] = useState(false);
  const [istdropdown, setIstdropdown] = useState(false);
  const [allcategory, setAllcategory] = useState([0]);
  const [setSelectedCategory, setSetSelectedCategory] = useState("");

  const handleSearchCategory = (e) => {
    // if (id && subcateid) {
    axios
      .get(
        `${API_HOST}/theSkill/viewSkill?pageSize=8&pageNumber=1&skill=${e.target.value}`
      )
      .then((res) => {
        setAllcategory(res?.data?.success?.data);
        setOpenx(true);
        if (res?.data?.success?.data?.length > 0) {
          setIstdropdown(true);
        }
      });
    // }
  };

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
          marginBottom: "1vw",
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
          Add details
        </div>
        <div className="profiledetailnavmanu">
          <div></div>
        </div>
      </div>
      <hr style={{ color: "#00000070" }} />

      <div
        style={{ width: width > 700 ? "35vw" : "99%" }}
        className="inputfilebox"
      >
        <div>
          <label htmlFor="inputctaelogfile">
            <div className="inputicon">
              <img src={img} alt="" />
            </div>
            <div className="inputcateaddformfile">
              Drag and Drop ,Browse to upload
            </div>
            <input
              type="file"
              id="inputctaelogfile"
              onChange={(e) => {
                setIamge(e.target.files[0]);
              }}
              hidden
            />
          </label>
        </div>
      </div>
      {iamge ? (
        <div className="inputfilesshowncatboxsingle">
          <div className="inputfilesshowncatboxsingleimg">
            <img
              style={{ width: width > 700 ? "" : "5vw" }}
              src={img1}
              alt=""
            />
          </div>
          <div className="fileselctednamecate">{iamge?.name.slice(0, 50)}</div>
        </div>
      ) : (
        ""
      )}

      <div
        style={{ left: "0vw", width: "99%", margin: "2vw 0.5vw 2vw 0vw" }}
        className="loginfield"
      >
        <TextField
          id="outlined-basic"
          label="Caption"
          value={caption}
          variant="outlined"
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
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>

      <div
        style={{
          marginBottom: "0.4vw",
          fontWeight: "400",
          color: "#00000090",
          fontSize: width > 700 ? "0.9vw" : "2.7vw",
          width: width > 700 ? "40vw" : "100%",
          lineHeight: width > 700 ? "1.3vw" : "4vw",
        }}
        className="jobpodtedfieldtitile"
      >
        Images (.jpg, .gif, .png, up to 10 MB)
      </div>
      <div
        style={{
          marginBottom: "0.3vw",
          fontWeight: "400",
          color: "#00000090",
          fontSize: width > 700 ? "0.9vw" : "2.7vw",
          width: width > 700 ? "40vw" : "100%",
          lineHeight: width > 700 ? "1.3vw" : "4vw",
        }}
        className="jobpodtedfieldtitile"
      >
        Videos (.mp4, .mov, .webm, .ogm, ogv, up to 100 MB, 2 maximum, less than
        60 seconds)
      </div>
      <div
        style={{
          marginBottom: "0.5vw",
          marginTop: "1.3vw",
          fontSize: width > 700 ? "1.2vw" : "3.5vw",
        }}
        className="jobpodtedfieldtitile"
      >
        Skills
      </div>
      <div
        style={{ marginRight: "4vw", height: "fit-content" }}
        className="boxofskillsp"
        onClick={() => {
          setIstdropdown(false);
        }}
      >
        <div className="savedskillpopupcardp">
          {skillset?.slice(0, 10)?.map((skill, index) => {
            return (
              <div
                style={{
                  borderRadius: "2vw",
                  padding: width > 700 ? " 0.5vw 1vw" : "1vw 2vw",
                  margin: width > 700 ? "0.51vw 0.5vw" : "1vw",
                }}
                className="savedskillwrapsinglep"
              >
                {skill?.skills}
                <div
                  onClick={() => {
                    setskillset([
                      ...skillset.slice(0, index),
                      ...skillset.slice(index + 1, skillset.length),
                    ]);
                  }}
                >
                  <div
                    
                  >
                    <CloseIcon
                      style={{
                        fontSize: width > 700 ? "1.4vw" : "4vw",
                        marginLeft: "0.61vw",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>{" "}
              </div>
            );
          })}
          <div style={{ height: width > 700 ? "3vw" : "8vw" }}>
            {skillset?.length < 10 ? (
              <input
                style={{
                  border: "none",
                  outline: "none",
                  background: "white",
                  height: width > 700 ? "3vw" : "8vw",
                  padding: "0.5vw",
                  width: "fit-content",
                  minWidth: "5vw",
                  fontSize: width > 700 ? "1.1vw" : "3.3vw",
                }}
                type="text"
                placeholder="type here...."
                value={setSelectedCategory}
                onChange={(e) => {
                  handleSearchCategory(e);
                  setSetSelectedCategory(e.target.value);
                }}
              />
            ) : (
              ""
            )}
            {istdropdown ? (
              <Fade timeout={100}>
                <div
                  onMouseLeave={() => setIstdropdown(false)}
                  className="dropdownboxhoverdefault"
                  style={{
                    left: "1vw",
                    width: "fit-content",
                    opacity: "1",
                    visibility: "visible",
                    zIndex: "300",
                  }}
                >
                  {allcategory?.length > 0 &&
                    allcategory?.slice(0, 8)?.map((data) => {
                      return (
                        <Typography
                          sx={{
                            p: 2,
                            pb: 0.5,
                            pt: 1,
                            fontSize: "1vw",
                            fontWeight: "500",
                            fontFamily: "poppins",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            if (skillset.indexOf(data?.skill) < 0) {
                              setskillset(
                                [...skillset, { skills: data?.skill }].slice(
                                  0,
                                  10
                                )
                              );
                              // handlePostJOb(data?.skill);
                            }
                            setIstdropdown(false);
                            setSetSelectedCategory("");
                          }}
                        >
                          {data?.skill}
                        </Typography>
                      );
                    })}
                </div>
              </Fade>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* ==============OLD SKill Add Portflio on Set ENTER key================= */}
      {/* <div className="boxofskillsp">
        <div className="savedskillpopupcardp">
          {skillset?.map((skill, index) => {
            return (
              <div
                style={{ borderRadius: "2vw" }}
                className="savedskillwrapsinglep"
              >
                {skill}
                <div
                  onClick={() => {
                    setskillset([
                      ...skillset.slice(0, index),
                      ...skillset.slice(index + 1, skillset.length),
                    ]);
                  }}
                >
                  <CloseIcon
                    style={{
                      fontSize: width > 700 ? "1.4vw" : "4vw",
                      marginLeft: "0.61vw",
                      cursor: "pointer",
                    }}
                  />
                </div>{" "}
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex" }}>
          <input
            className="inputforskillp"
            onChange={(e) => {
              setskilltext(e.target.value);
            }}
            value={skilltext}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setskillset([...skillset, skilltext]);
                setskilltext("");
              }
            }}
          />
        </div>
      </div> */}
      <div className="editsillpopupskilltext">Maximum 15 skills </div>

      <div
        style={{ left: "0vw", width: "99%", margin: "2vw 0.5vw 2vw 0vw" }}
        className="loginfield"
      >
        <TextField
          id="outlined-basic"
          label="Project URL (optional)"
          variant="outlined"
          value={projecturl}
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
          onChange={(e) => {
            setProjecturl(e.target.value);
          }}
        />
      </div>

      <div
        style={{
          left: "0vw",
          width: "99%",
          margin: width > 700 ? "3vw 0.5vw 2vw 0vw" : "5vw 0",
        }}
        className="loginfield"
      >
        <TextField
          id="outlined-basic"
          label="Project Description"
          variant="outlined"
          value={projectdescription}
          multiline
          rows="8"
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
          onChange={(e) => {
            setProjectdescription(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          marginBottom: "0.3vw",
          fontWeight: "400",
          color: "#00000090",
          fontSize: width > 700 ? "0.91vw" : "2.7vw",
          width: "100%",
          lineHeight: width > 700 ? "1.3vw" : "4vw",
        }}
        className="jobpodtedfieldtitile"
      >
        Make sure you have approval from your clients to display the work you've
        done for them publicly.
      </div>

      <hr style={{ color: "#00000090", margin: "1vw" }} />
      <div
        style={{ marginTop: "0.31vw", marginBottom: width < 700 && "5vw" }}
        className="handlemoreaboutskill"
      >
        <Link to="/addportfolio">
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
        <Link to="/addportfolio/preview">
          <div
            style={{
              cursor: "pointer",
              width: width > 700 ? "10vw" : "30vw",
              borderRadius: width > 700 ? "0.5vw" : "1vw",
            }}
            className="handlecirclieaboutsave"
          >
            Go to Preview
          </div>
        </Link>
      </div>
    </div>
  );
}

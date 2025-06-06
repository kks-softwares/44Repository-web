import React, { useEffect, useState } from "react";
import "./jobdetail.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Listofproposals from "./Listofproposals";
import StarRatings from "react-star-ratings";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import API_HOST from "../../../env";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate, useParams } from "react-router";
import img21 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Popover from "@mui/material/Popover";
import { makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  select: {
    height: "2.5vw",
    width: "100%",
    marginTop: "0.2vw",
    padding: "1vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1vw",
    lineHeight: "120%",
    color: "#FFFFFF",
  },
  select2: {
    height: "1vw",
    width: "100%",
    marginTop: "0.1vw",
    padding: "0.9vw 0.5vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
    color: "#FFFFFF",
  },
  select3: {
    height: "1vw",
    width: "100%",
    marginTop: "0.1vw",
    padding: "0vw 0vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
    color: "#FFFFFF",
    position: "relative",
    top: "0.81vw",
    left: "0.2vw",
  },
  icon: {
    fill: "white",
  },
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};
const styl3 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "91vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "scroll",
  padding: "1vw",
};
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "hidden",
  padding: 1,
};
export default function Jobdetail({ jobdetail, width }) {
  const classes = useStyles();
  const [arrayoffiles, setArrayoffiles] = useState([]);
  const [down1, setDown1] = useState(false);
  const [down2, setDown2] = useState(false);
  const [down3, setDown3] = useState(false);
  const [down4, setDown4] = useState(false);
  const [longofproposallist, setLongofproposallist] = useState(["1", "2"]);
  const [data1, setdata1] = useState();
  const { id } = useParams();
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_HOST}/jobPost/viewJobPost?jobPostId=${id}`).then((res) => {
    
      setdata1(res?.data?.success?.data[0]);
      setLongofproposallist(res?.data?.success?.data[0]?.listOfBider);
    });
  }, [jobdetail]);

  const [imagesave, setImagesave] = useState();
  const { user } = useSelector((state) => state.user);
  const [desc, setDesc] = useState("");
  const [descerr, setDescerr] = useState("");
  const [title, settitle] = useState("");
  const [titleerr, settitleerr] = useState("");

  const [starclient, setStarclient] = useState(0);
  const [review, setReview] = useState("");

  const [setratingerror, setSetratingerror] = useState("");

  const handleendContarct = () => {
    if (starclient === 0) {
      setSetratingerror("Rating is required");
      handleClose3();
      return false;
    }

    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    const formdata = new FormData();
    arrayoffiles?.map((data) => {
      formdata.append("fileName", data);
    });
    formdata.append("assignWorkComplitionDate", date);
    formdata.append("review", review);
    formdata.append("rating", starclient);
    formdata.append("assignWorkComplition", true);
    formdata.append("workStatus", "Completed");
    formdata.append("closeBy44", false);
    formdata.append("jobPostId", data1?.jobPostId);

    axios.post(`${API_HOST}/jobPost/submitReview`, formdata, {}).then((res) => {
      axios
        .get(`${API_HOST}/jobPost/viewJobPost?jobPostId=${id}`)
        .then((res) => {
        
          setdata1(res?.data?.success?.data[0]);
          setLongofproposallist(res?.data?.success?.data[0]?.listOfBider);
          handleClose3();
        });
    });
  };
  const [anchorElx2, setAnchorElx2] = React.useState(null);
  const handleClickx2 = (event) => {
    setAnchorElx2(event.currentTarget);
  };

  const handleClosex2 = () => {
    setAnchorElx2(null);
  };

  const openx2 = Boolean(anchorElx2);
  const idx2 = openx2 ? "simple-popover" : undefined;

  const handleAddIssue = () => {
    if (!title || !desc) {
      if (!title) {
        settitleerr("Select Issue Type !");
      }
      if (!desc) {
        setDescerr("Description Required !");
      }
      return;
    }
    axios
      .post(`${API_HOST}/jobPost/addIssue`, {
        jobPostId: id,
        issueType: title,
        issueDescription: desc,
        user_id: user?._id,
      })
      .then((res) => {
        settitle("");
        handleClose();
        setDesc("");
      });
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          background: "white",
          padding: width > 700 ? "1vw 1vw" : "2vw",
          margin: "1vw 0vw",
        }}
      >
        <button
          style={{
            cursor: "pointer",
            zIndex: "100",
            padding: "0.5vw 0.7vw",
            backgroundColor: "white",
            color: "#000",
            fontSize: "1.2vw",
            borderRadius: "0.3vw",
            border: "1px solid #d7d7d7",
            marginBottom: width > 700 ? "1vw" : "3vw",
            marginTop: "0vw",
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIosNewIcon />
        </button>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="tagblue">{data1?.category?.category}</div>
            <div
              style={{
                marginLeft: "1vw",
                fontSize: width > 700 ? "0.9vw" : "2.7vw",
              }}
            >
              {data1?.subCategory?.subCategory}
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                margin: "0",
                height: width > 700 ? "2.4vw" : "8vw",
                background: "#E4E4E4",
                fontSize: "400",
                marginRight: width > 700 ? "1vw" : "3vw",
              }}
              className="digitalwallate"
              onClick={handleOpen}
            >
              <span
                style={{
                  padding: "0.6vw 0.5vw",
                  fontSize: "400",
                  background: "none",
                }}
              >
                Raise issue
              </span>
            </div>
            <div
              style={{
                margin: "0",
                height: width > 700 ? "2.4vw" : "8vw",
                background: "#E4E4E4",
                fontSize: "400",
              }}
              className="digitalwallate"
            >
              <span
                style={{
                  padding: "0.6vw 0.5vw",
                  fontSize: "400",
                  background: "none",
                }}
              >
                Chat to Client
              </span>
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            fontWeight: "600",
            fontSize: width > 700 ? "1.3vw" : "3.5vw",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "1vw",
            marginLeft: "1vw",
            color: "#064C87",
            justifyContent: "space-between",
          }}
        >
          <div>{data1?.workTitle} ({data1?.trackingId})</div>
          {data1?.closeBy44 ? (
            <div>
              Status :{" "}
              <span style={{ color: "green", marginRight: "1vw" }}>
                Completed
              </span>
            </div>
          ) : (
            <div>
              {" "}
              {data1?.workAssignedTo?.assignedJobComplition &&
                !data1?.assignWorkComplition && (
                  <div>
                    Status :{" "}
                    <span style={{ color: "green", marginRight: "1vw" }}>
                      Contract Ended by service Provider
                    </span>
                  </div>
                )}
              {data1?.workAssignedTo?.assignedJobComplition &&
                data1?.assignWorkComplition && (
                  <div>
                    Status :{" "}
                    <span style={{ color: "green", marginRight: "1vw" }}>
                      Contract Ended by You and service Provider
                    </span>
                  </div>
                )}
              {!data1?.workAssignedTo?.assignedJobComplition &&
                data1?.assignWorkComplition && (
                  <div>
                    Status :
                    <span style={{ color: "green", marginRight: "1vw" }}>
                      Waiting for service Provider to End Contarct
                    </span>
                  </div>
                )}
            </div>
          )}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={width > 700 ? style1 : style2}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Raise Issue</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose}
                    style={{
                      fontSize: width > 700 ? "1.5vw" : "4vw",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000090" }} />

            <div
              style={{
                left: "0vw",
                width: width > 700 ? "92%" : "100%",
                marginLeft: width > 700 ? "2%" : "0vw",
              }}
              className="loginfield"
              onClick={handleClickx2}
            >
              <TextField
                id="outlined-basic"
                label="Issue Type *"
                variant="outlined"
                disabled
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
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <span style={{ width: "0.001vw" }}>
                <KeyboardArrowDownOutlined
                  style={{
                    fontSize: width > 700 ? "1.5vw" : "4vw",
                    position: "relative",
                    right: width > 700 ? "2vw" : "6vw",
                    top: width > 700 ? "1vw" : "3vw",
                  }}
                />
              </span>
            </div>
            <Popover
              id={idx2}
              open={openx2}
              anchorEl={anchorElx2}
              onClose={handleClosex2}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div
                style={{
                  maxHeight: width > 700 ? "18vw" : "40vw",
                  overflow: "scroll",
                  width: width > 700 ? "44vw" : "85vw",
                }}
              >
                <Typography
                  sx={{
                    p: 0.51,
                    pl: 1,
                    ml: 1,
                    width: "96%",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    settitle("Bidder Was not doing Work Properly");
                    handleClosex2();
                  }}
                >
                  Bidder Was not doing Work Properly
                </Typography>
                <Typography
                  sx={{
                    p: 0.51,
                    pl: 1,
                    ml: 1,
                    width: "96%",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    settitle("Bidder Was not doing Work Properly");
                    handleClosex2();
                  }}
                >
                  Bidder Was not doing Work Properly
                </Typography>
                <Typography
                  sx={{
                    p: 0.51,
                    pl: 1,
                    ml: 1,
                    width: "96%",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    settitle("Bidder Was not doing Work Properly");
                    handleClosex2();
                  }}
                >
                  Bidder Was not doing Work Properly
                </Typography>
              </div>
            </Popover>
            <p
              style={{
                color: "red",
                fontSize: width > 700 ? "0.9vw" : "2.5vw",
                marginLeft: "1vw",
              }}
            >
              {titleerr}
            </p>
            <div style={{ marginLeft: "1vw" }} className="jobpodtedfieldtitile">
              Issue Description
            </div>
            <div style={{ marginLeft: "1vw" }} className="jobpostfieldinputbox">
              <textarea
                type="text"
                name="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <p
              style={{
                color: "red",
                fontSize: width > 700 ? "0.9vw" : "2.7vw",
                marginLeft: "1vw",
              }}
            >
              {descerr}
            </p>

            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            >
              <div
                style={{
                  background: "white",
                  color: "black",
                  cursor: "pointer",
                }}
                className="handlecirclieaboutsave"
                onClick={handleClose}
              >
                Cancel
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
                onClick={handleAddIssue}
              >
                SAVE
              </div>
            </div>
          </Box>
        </Modal>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>
            <LocationOnOutlinedIcon
              style={{
                fontSize: width > 700 ? "1.5vw" : "4.5vw",
                fontWeight: "400",
                margin: "0.5vw 1vw",
              }}
            />
          </span>
          <span
            style={{
              fontSize: width > 700 ? "1.1vw" : "3vw",
              fontWeight: "500",
            }}
          >
            {data1?.remote ? "Remote" : data1?.onSite}
          </span>
        </div>
        <div
          style={{
            width: "100%",
            margin: "0.8vw 1vw",
            fontSize: width > 700 ? "0.85vw" : "2.5vw",
            marginBottom: "0.0vw",
            marginRight: "2vw",
          }}
          className="dashboardtitilemainparabid"
        >
          {data1?.shortDescription}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: width > 700 ? "1.1vw" : "3.2vw",
              fontWeight: "500",
              margin: "1vw",
            }}
          >
            {"Skills"}
          </span>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          {data1?.skill1 && <div className="skillmap">{data1?.skill1}</div>}
          {data1?.skill2 && <div className="skillmap">{data1?.skill2}</div>}
          {data1?.skill3 && <div className="skillmap">{data1?.skill3}</div>}
          {data1?.skill4 && <div className="skillmap">{data1?.skill4}</div>}
          {data1?.skill5 && <div className="skillmap">{data1?.skill5}</div>}
          {data1?.skill6 && <div className="skillmap">{data1?.skill6}</div>}
          {data1?.skill7 && <div className="skillmap">{data1?.skill7}</div>}
          {data1?.skill8 && <div className="skillmap">{data1?.skill8}</div>}
          {data1?.skill9 && <div className="skillmap">{data1?.skill9}</div>}
          {data1?.skill10 && <div className="skillmap">{data1?.skill10}</div>}
        </div>
        <div
          style={{
            height: down2
              ? `${
                  parseInt(
                    (data1?.icons?.length + (width > 700 ? 2 : 1)) /
                      (width > 700 ? 3 : 2)
                  ) *
                    (width > 700 ? 13.5 : 35) +
                  (width > 700 ? 5 : 8)
                }vw`
              : "",
          }}
          className="boxofextension"
        >
          <div className="flexofboxextentionnav">
            <div style={{ color: down2 ? "#064C87" : "", marginLeft: "0.5vw" }}>
            { data1?.icons?.length>0 ? "view Documents":"This job Does not have  any Documents  !" } 

            </div>
            <div
              onClick={() => {
                setDown2(!down2);
              }}
            >
              {!down2 ? (
                <KeyboardArrowDownIcon
                  style={{
                    fontSize: width > 700 ? "2vw" : "5vw",
                    margin: "1vw",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{
                    fontSize: width > 700 ? "2vw" : "5vw",
                    margin: "1vw",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </div>
          <div hidden={!down2}>
            <div
              style={{
                margin: "1vw",
                flexWrap: "wrap",
                marginTop: "0vw",
                justifyContent: "flex-start",
              }}
              className="activejobpistbudgetbox"
            >
              {data1?.icons?.map((data) => {
                return (
                  <div className="boxofimageorpdf">
                    <div
                      onClick={() => {
                        handleOpenx();
                        setImagesave(data?.icon);
                      }}
                      style={{ cursor: "pointer" }}
                      className="imageshowboxofpdf"
                    >
                      <img
                        style={{ cursor: "pointer" }}
                        src={data?.icon}
                        alt=""
                      />
                    </div>
                    <div className="imageshowboxofpdfname">
                      <div>
                        <PictureAsPdfIcon
                          style={{
                            color: "red",
                            fontSize: width > 700 ? "1.7vw" : "4vw",
                          }}
                        />
                      </div>
                      <div className="nameifimagedocuments">
                        {data?.icon?.split("%24")[1]?.slice(0, 17)}
                      </div>
                      <div className="inputfilesshowncatboxsingleimg">
                        <a href={`${data?.icon}`} download>
                          {" "}
                          <CloudDownloadOutlinedIcon
                            style={{
                              fontSize: width > 700 ? "1.5vw" : "4vw",
                              margin: "0 1vw",
                            }}
                          />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Modal
            open={openx}
            onClose={handleClosex}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width > 700 ? style : styl3}>
              {imagesave && (
                <div className="imgbocofcerti">
                  <img src={imagesave} alt="" />
                </div>
              )}
            </Box>
          </Modal>
        </div>
        <div
          style={{
            height: down1
              ? `${
                  longofproposallist?.length * (width > 700 ? 4 : 12) +
                  (width > 700 ? 7 : 12)
                }vw`
              : "",
          }}
          className="boxofextension"
        >
          <div className="flexofboxextentionnav">
            <div style={{ color: down1 ? "#064C87" : "", marginLeft: "0.5vw" }}>
              List of Proposal
            </div>
            <div
              onClick={() => {
                setDown1(!down1);
              }}
            >
              {!down1 ? (
                <KeyboardArrowDownIcon
                  style={{
                    fontSize: width > 700 ? "2vw" : "5vw",
                    margin: "1vw",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{
                    fontSize: width > 700 ? "2vw" : "5vw ",
                    margin: "1vw",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </div>
          <div hidden={!down1}>
            <div>
              <div
                style={{
                  padding: "0vw 0.51vw",
                  marginBottom: "1vw",
                  marginTop: "0vw",
                }}
                className="navoftableblogs"
              >
                <div style={{ width: width > 700 ? "18vw" : "20vw" }}>Name</div>
                {width > 700 && (
                  <div style={{ width: width > 700 ? "13vw" : "26vw" }}>
                    Completion Date
                  </div>
                )}
                <div style={{ width: width > 700 ? "12vw" : "22vw" }}>
                  Bidding date
                </div>
                <div style={{ width: width > 700 ? "12vw" : "20vw" }}>
                  Bid Value
                </div>
                <div style={{ width: width > 700 ? "12vw" : "25vw" }}>
                  Status
                </div>
                <div style={{ width: width > 700 ? "7vw" : "10vw" }}></div>
              </div>
            </div>
            {longofproposallist?.map((data) => {
              return (
                <Listofproposals
                  width={width}
                  data={data}
                  jobdetail={jobdetail}
                  setdata1={setdata1}
                  data1={data1}
                  setLongofproposallist={setLongofproposallist}
                />
              );
            })}
          </div>
        </div>
        <div
          style={{
            height: down3
              ? `${
                  parseInt(
                    (data1?.workAssignedTo?.files
                      ? data1?.workAssignedTo?.files?.length +
                        (width > 700 ? 2 : 1)
                      : 1) / (width > 700 ? 3 : 2)
                  ) *
                    (width > 700 ? 14 : 35) +
                  (width > 700 ? 35 : 150)
                }vw`
              : "",
          }}
          className="boxofextension"
        >
          <div className="flexofboxextentionnav">
            <div style={{ color: down3 ? "#064C87" : "", marginLeft: "0.5vw" }}>
              Contract
            </div>
            <div
              onClick={() => {
                setDown3(!down3);
              }}
            >
              {!down3 ? (
                <KeyboardArrowDownIcon
                  style={{
                    fontSize: width > 700 ? "2vw" : "5vw",
                    margin: "1vw",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{
                    fontSize: width > 700 ? "2vw" : "5vw",
                    margin: "1vw",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </div>
          <div hidden={!down3}>
            <div
              style={{ margin: "1vw", flexWrap: "wrap", marginTop: "0vw" }}
              className="activejobpistbudgetbox"
            >
              <div className="boxblackbackg">
                Client ID <br />
                <div>
                  <span>
                    {data1?.user_id?.userId ? data1?.user_id?.userId : "-"}
                  </span>
                </div>
              </div>
              <div className="boxblackbackg">
                Client Name <br />
                <div>
                  <span>
                    {data1?.user_id?.fullName ? data1?.user_id?.fullName : "-"}
                  </span>
                </div>
              </div>
              <div className="boxblackbackg">
                Job Starting Date <br />
                <div>
                  <span>
                    {data1?.jobPostingDate ? data1?.jobPostingDate : "-"}
                  </span>
                </div>
              </div>

              <div className="boxblackbackg">
                Service Provider Id <br />
                <div>
                  <span>
                    {data1?.jobDoerId?.userId ? data1?.jobDoerId?.userId : "-"}
                  </span>
                </div>
              </div>
              <div className="boxblackbackg">
                Service Provider Name <br />
                <div>
                  <span>
                    {data1?.jobDoerId?.fullName
                      ? data1?.jobDoerId?.fullName
                      : "-"}
                  </span>
                </div>
              </div>

              <div className="boxblackbackg">
                Contract Amount <br />
                <div>
                  <span>
                    {data1?.workAssigned
                      ? data1?.workAssignedTo?.totalProjectPrice
                      : "-"}{" "}
                  </span>
                </div>
              </div>
              <div className="boxblackbackg">
                duration <br />
                <div>
                  <span>
                    {data1?.deliveryDate ? data1?.deliveryDate + " days" : "-"}
                  </span>
                </div>
              </div>

              <div className="boxblackbackg">
                Contract Starting Date <br />
                <div>
                  <span>
                    {data1?.workAssigned ? data1?.workAssignDate : "-"}
                  </span>
                </div>
              </div>

              <div className="boxblackbackg">
                Contract Ending Date <br />
                <div>
                  <span>
                    {data1?.workAssigned
                      ? data1?.workAssignedTo?.milestoneDueDate5
                        ? data1?.workAssignedTo?.milestoneDueDate5
                        : data1?.workAssignedTo?.milestoneDueDate4
                        ? data1?.workAssignedTo?.milestoneDueDate4
                        : data1?.workAssignedTo?.milestoneDueDate3
                        ? data1?.workAssignedTo?.milestoneDueDate3
                        : data1?.workAssignedTo?.milestoneDueDate2
                        ? data1?.workAssignedTo?.milestoneDueDate2
                        : data1?.workAssignedTo?.milestoneDueDate1
                      : "-"}
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{ marginLeft: "1vw", marginTop: "0vw" }}
              className="flexofdtaes"
            >
              <div className="datesofcontact">Documents</div>
            </div>
            <div
              style={{
                margin: "1vw",
                flexWrap: "wrap",
                marginTop: "0vw",
                justifyContent: "flex-start",
              }}
              className="activejobpistbudgetbox"
            >
              {data1?.workAssignedTo?.files?.map((data) => {
                return (
                  <div className="boxofimageorpdf">
                    <div
                      onClick={() => {
                        handleOpenx();
                        setImagesave(data?.file);
                      }}
                      style={{ cursor: "pointer" }}
                      className="imageshowboxofpdf"
                    >
                      <img src={data?.file} alt="" />
                    </div>
                    <div className="imageshowboxofpdfname">
                      <div>
                        <PictureAsPdfIcon
                          style={{
                            color: "red",
                            fontSize: width > 700 ? "1.7vw" : "4vw",
                          }}
                        />
                      </div>
                      <div className="nameifimagedocuments">
                        {data?.file?.split("%24")[1]?.slice(0, 16)}
                      </div>
                      <div className="inputfilesshowncatboxsingleimg">
                        <a href={`${data?.file}`} download>
                          {" "}
                          <CloudDownloadOutlinedIcon
                            style={{
                              fontSize: width > 700 ? "1.5vw" : "4.5vw",
                              margin: "0 1vw",
                            }}
                          />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}{" "}
            </div>
          </div>
        </div>
        <div
          style={{
            height: down4
              ? data1?.assignWorkComplitionDate
                ? width > 700
                  ? "47vw"
                  : "145vw"
                : `${
                    arrayoffiles?.length * (width > 700 ? 3 : 8) +
                    (width > 700 ? 80 : 180)
                  }vw`
              : "",
          }}
          className="boxofextension"
        >
          <div className="flexofboxextentionnav">
            <div>Contract Completion</div>
            <div
              onClick={() => {
                setDown4(!down4);
              }}
            >
              {!down4 ? (
                <KeyboardArrowDownIcon
                  style={{
                    fontSize: width > 700 ? "2vw" : "5vw",
                    margin: "1vw",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{
                    fontSize: width > 700 ? "2vw" : "5vw",
                    margin: "1vw",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </div>

          <div hidden={!down4}>
            <div
              style={{ margin: "1vw", flexWrap: "wrap", marginTop: "0vw" }}
              className="activejobpistbudgetbox"
            >
              <div className="boxblackbackg">
                Contract Actual End Date <br />
                <div>
                  <span>
                    {data1?.assignWorkComplitionDate
                      ? data1?.assignWorkComplitionDate
                      : "-"}
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                marginLeft: "1vw",
                marginTop: "0vw",
                marginBottom: "1.5vw",
              }}
              className="flexofdtaes"
            >
              <div className="datesofcontact">Review And Rating by Client</div>
            </div>
            <div className="chatcontaract">
              <div
                style={{
                  width: width > 700 ? "80vw" : "100%",
                  padding: "0vw",
                  height: "fit-content",
                }}
                className="chatboxescontact"
              >
                <div
                  style={{ marginLeft: "1vw", marginTop: "0vw" }}
                  className="flexofdtaes"
                >
                  <div className="datesofcontact">Ratings</div>
                </div>

                <div className="workhistryboxdate">
                  <span
                    style={{
                      width: "10vw",
                      position: "relative",
                      bottom: "0.5vw",
                      left: "1vw",
                    }}
                  >
                    <StarRatings
                      rating={data1?.rating ? data1?.rating : starclient}
                      starRatedColor="#064C87"
                      starDimension={width > 700 ? "1.6vw" : "4vw"}
                      starSpacing={width > 700 ? "0.3vw" : "1vw"}
                      numberOfStars={5}
                      name="rating"
                      changeRating={(e) => {
                        if (!data1?.rating) {
                          setStarclient(e);
                          setSetratingerror("");
                        }
                      }}
                    />
                  </span>
                </div>
                {setratingerror && (
                  <div
                    style={{
                      color: "red",
                      fontSize: width > 700 ? "1vw" : "3vw",
                      margin: "1vw",
                    }}
                  >
                    {setratingerror}
                  </div>
                )}
                <hr style={{ width: "90%", marginLeft: "2vw" }} />
                <div
                  style={{
                    left: "0vw",
                    width: "96%",
                    margin: "2vw 1vw 2vw 1vw",
                    display: "block",
                  }}
                  className="loginfield"
                >
                  <div
                    style={{ marginBottom: "0.0vw", marginBottom: "1vw" }}
                    className="jobpodtedfieldtitile"
                  >
                    Review
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="reviewbox"
                      rows="10"
                      value={data1?.review ? data1?.review : review}
                      onChange={(e) => {
                        if (!data1?.review) {
                          setReview(e.target.value);
                        }
                      }}
                    ></textarea>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginLeft: "2vw",
                  }}
                >
                  {data1?.docs?.length > 0 &&
                    data1?.docs?.map((dataqq) => {
                      return (
                        <div
                          style={{
                            width: "fit-content",
                            marginTop: "0vw",
                            marginBottom: "1vw",
                          }}
                          className="inputfilesshowncatboxsingle"
                        >
                          <div className="inputfilesshowncatboxsingleimg">
                            <img src={img1} alt="" />
                          </div>
                          <div className="fileselctednamecate">
                            {dataqq?.docx?.split("%24")[1]?.slice(0, 22)}
                          </div>
                          <div className="inputfilesshowncatboxsingleimg">
                            <a href={`${dataqq?.docx}`} download>
                              {" "}
                              <CloudDownloadOutlinedIcon
                                style={{
                                  fontSize: width > 700 ? "1.5vw" : "4vw",
                                  margin: "0 1vw",
                                }}
                              />{" "}
                            </a>
                          </div>
                        </div>
                      );
                    })}{" "}
                </div>

                {!data1?.assignWorkComplitionDate && (
                  <div>
                    <div
                      style={{ marginLeft: "1.5vw", marginTop: "1vw" }}
                      className="jobpodtedfieldtitile"
                    >
                      Image/Documents{" "}
                    </div>
                    <div
                      style={{
                        background: "white",
                        padding: "0.51vw",
                        marginTop: "0vw",
                        paddingRight: "3vw",
                        marginLeft: "1.52vw",
                      }}
                    >
                      <div className="inputfilebox">
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
                                setArrayoffiles([
                                  ...arrayoffiles,
                                  e.target.files[0],
                                ]);
                              }}
                              hidden
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        fontSize: width > 700 ? "0.8vw" : "2.5vw",
                        paddingRight: "4.5vw",
                        textAlign: "right",
                      }}
                    >
                      Please upload file having extensions .jpeg/ .jpg/ .png
                      only.
                      <br />
                      Image should be less then 512 kb.
                    </div>
                    <div
                      className={
                        arrayoffiles?.length > 0 ? "inputfilesshowncatebox" : ""
                      }
                    >
                      {arrayoffiles?.length > 0 &&
                        arrayoffiles?.map((file, index) => {
                          return (
                            <div className="inputfilesshowncatboxsingle">
                              <div className="inputfilesshowncatboxsingleimg">
                                <img src={img1} alt="" />
                              </div>
                              <div className="fileselctednamecate">
                                {file?.name}
                              </div>
                              <div className="inputfilesshowncatboxsingleimg">
                                <img
                                  style={{
                                    width: width > 700 ? "1.5vw" : "4vw",
                                    marginLeft: "1vw",
                                    cursor: "pointer",
                                  }}
                                  src={img21}
                                  alt=""
                                  onClick={() => {
                                    setArrayoffiles([
                                      ...arrayoffiles.slice(0, index),
                                      ...arrayoffiles.slice(
                                        index + 1,
                                        arrayoffiles.length
                                      ),
                                    ]);
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {!data1?.assignWorkComplitionDate && data1?.workAssigned && (
              <div>
                <div className="confirmationtext">
                  Are you Sure What to Close Contract From ?
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: "2vw",
                  }}
                >
                  <button onClick={handleOpen3} className="endbuttoncontract">
                    End Contract
                  </button>
                </div>
              </div>
            )}
          </div>
          <Modal
            open={open3}
            onClose={handleClose3}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width > 700 ? style1 : style2}>
              <div className="profiletitleandmenunav">
                <div className="profiledetailstitle">End Contract </div>
                <div className="profiledetailnavmanu">
                  <div>
                    <CloseIcon
                      onClick={handleClose3}
                      style={{
                        fontSize: width > 700 ? "1.5vw" : "4vw",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              </div>
              <hr style={{ color: "#00000090" }} />

              <div
                style={{ left: "0vw", width: "100%" }}
                className="loginfield"
              >
                The Action Will End Contract " {data1?.workTitle}" . Are You
                Sure Want to End Contact With the Service Provider "
                {data1?.jobDoerId?.fullName}" ?
              </div>

              <hr style={{ color: "#00000090" }} />
              <div
                style={{ marginTop: "0.31vw" }}
                className="handlemoreaboutskill"
              >
                <div
                  style={{
                    background: "white",
                    color: "black",
                    cursor: "pointer",
                  }}
                  className="handlecirclieaboutsave"
                  onClick={handleClose3}
                >
                  Cancel
                </div>
                <div
                  onClick={() => {
                    handleendContarct();
                  }}
                  style={{
                    cursor: "pointer",
                    background: "#FF0000",
                    padding: width > 700 ? "0.71vw" : "1.5vw",
                    width: "fit-content",
                  }}
                  className="handlecirclieaboutsave"
                >
                  End Contract
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

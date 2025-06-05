import React, { useEffect, useState } from "react";
import "./profile.css";
import img2 from "../../assets/My profile – 28/Component 71 – 6.svg";
import img1 from "../../assets/My profile – 28/Component 70 – 6.svg";
import Box from "@mui/material/Box";
import imgxx from "../../assets/Success stories Definition/checkmark (1).svg";
import Modal from "@mui/material/Modal";
import { Popover, TextField, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import Profileuserdetaillanguage from "./Profilepopup/Profileuserdetaillanguage";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import API_HOST from "../../env";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: "95vh",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxHeight: "95vh",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};

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
export default function Profileuserdetails({ width }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [month1x1, setMonth1x1] = useState("");
  const [year1x1, setyear1x1] = useState("");
  const classes = useStyles();

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const [anchorElxp, setAnchorElxp] = React.useState(null);
  const handleClickxp = (event) => {
    setAnchorElxp(event.currentTarget);
  };

  const handleClosexp = () => {
    setAnchorElxp(null);
  };

  const openxp = Boolean(anchorElxp);
  const idxp = openxp ? "simple-popover" : undefined;
  const [anchorElx1p1, setAnchorElx1p1] = React.useState(null);
  const handleClickx1p1 = (event) => {
    setAnchorElx1p1(event.currentTarget);
  };

  const handleClosex1p1 = () => {
    setAnchorElx1p1(null);
  };

  const openx1p1 = Boolean(anchorElx1p1);
  const idx1p1 = openx1p1 ? "simple-popover" : undefined;

  const [studyset, setstudyset] = useState("");
  const [desc, setDesc] = useState("");
  const [desclength, setDesclength] = useState(desc);

  const handleupdatelang = () => {
    if (month1x1 !== "" && year1x1 !== "") {
      const formdata = {
        userId: user?.userId,
        language: month1x1,
        proficiencyLevel: year1x1,
      };
      axios
        .post(`${API_HOST}/users/updateUserLanguage`, formdata)
        .then((res) => {
          window.localStorage.setItem(
            "user",
            JSON.stringify({ ...res.data.success.data })
          );

          dispatch(
            userActions.setUser({
              user: { ...res.data.success.data },
            })
          );
          handleClose1();
        });
    } else {
      if (month1x1 === "" && year1x1 === "") {
        setLangugaeaddwrong(true);
        setLangugaeaddwrong1(true);
      }
      if (month1x1 === "" && year1x1 !== "") {
        setLangugaeaddwrong(true);
        setLangugaeaddwrong1(false);
      }
      if (month1x1 !== "" && year1x1 === "") {
        setLangugaeaddwrong(false);
        setLangugaeaddwrong1(true);
      }
    }
  };

  const [langugaeaddwrong, setLangugaeaddwrong] = useState(false);
  const [langugaeaddwrong1, setLangugaeaddwrong1] = useState(false);

  const handledescriptionupdate = () => {
    axios
      .post(
        `${API_HOST}/users/editUser`,
        {
          fullDescription: desc,
          userId: user?.userId,
        },
        {
          headers: {
            // "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        window.localStorage.setItem(
          "user",
          JSON.stringify({ ...res.data.success.data })
        );

        dispatch(
          userActions.setUser({
            user: { ...res.data.success.data },
          })
        );
      });
    handleClose3();
  };
  const handletitleupdate = () => {
    axios
      .post(
        `${API_HOST}/users/editUser`,
        {
          title: titleuser,
          userId: user?.userId,
        },
        {
          headers: {
            // "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        window.localStorage.setItem(
          "user",
          JSON.stringify({ ...res.data.success.data })
        );

        dispatch(
          userActions.setUser({
            user: { ...res.data.success.data },
          })
        );
      });
    handleClose2();
  };
  const [titleuser, setTitleuser] = useState("");
  const [verifyTitle, setverifyTitle] = useState(false);
  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  const [UserCompletedJobs, setUserCompletedJobs] = useState([]);
  const [page1, setPage1] = useState(1);
  const [totalSum, setTotalSum] = useState(0);

  // Total Earnings dashboard
  useEffect(() => {
    let sum = 0;

    // UserCompletedJobs?.length > 0 ? (
    UserCompletedJobs?.map((data, index) => {
      sum = sum + parseInt(data?.totalProjectPrice);

      if (index + 1 === UserCompletedJobs?.length) {
        setTotalSum(sum);
      }
    });
    // ) : ""
  }, [UserCompletedJobs]);

  useEffect(() => {
    if (user?.verifiedByAdmin === true) {
      setverifyTitle("Profile is Verified");
    } else {
      setverifyTitle("Profile is Un-Verified");
    }
    setTitleuser(user?.title);
    setDesc(user?.fullDescription);

    if (user?.userName) {
      axios
        .get(
          `${API_HOST}/biding/viewBiding?pageSize=10000&pageNumber=${page1}&userName=${user?.userName}`
          // &assignedJobComplition=true
        )
        .then((res) => {
          setUserCompletedJobs(res?.data?.success?.data);
        });
    }
  }, [user, page1]);

  const [allusers, setAllusers] = useState([]);
  const [subcategogryid, setsubCategogryid] = useState();
  const [recall, setRecall] = useState(false);
  const [Cateid, setCateid] = useState("");
  const [selectedbiddingvalue, setSelectedbiddingvalue] = useState("");
  const [datestart1, setDatestart1] = useState();
  const [datestart1x, setDatestart1x] = useState();
  const [totalpages, settotalpages] = useState(1);

  useEffect(() => {
    if (user?.userName) {
      axios
        .get(
          `${API_HOST}/biding/bidsByUser?userName=${
            user?.userName
          }&pageSize=9&pageNumber=${page1}&search=${setSelectedCategory}&${
            subcategogryid ? "subCategory=" : ""
          }${subcategogryid}&${
            selectedbiddingvalue ? "bidingValue=" : ""
          }${selectedbiddingvalue}&${studyset ? "location=" : ""}${studyset}&${
            Cateid ? "category=" : ""
          }${Cateid}&${datestart1 ? "from=" : ""}${datestart1}&${
            datestart1x ? "to=" : ""
          }${datestart1x}
        `
        )
        .then((res) => {
          setAllusers(res.data?.success?.data);
          if (res.data?.success?.data?.length === 9) {
            settotalpages(page1 + 1);
          } else {
            settotalpages(page1);
          }
        });
    }
  }, [page1, setSelectedCategory, recall, user]);

  return (
    <div className="Profileuserdetails-container">
      <div style={{ marginTop: "1vw" }} className="profileuserdetailsone">
        <div className="profiletitleandmenunav">
          <div className="profiledetailstitle">User profile</div>
          <div className="profiledetailnavmanu"></div>
        </div>
        <div className="profileuserdfirst">
          <div className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Earnings</div>
            <div className="profileuserfirstonedata">
              {totalSum ? totalSum : "0"}
            </div>
          </div>
          <div className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Completed</div>
            <div className="profileuserfirstonedata">
              {UserCompletedJobs ? UserCompletedJobs.length : "No Work"}
            </div>
          </div>
          <div className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Success</div>
            <div className="profileuserfirstonedata">
              {(UserCompletedJobs.length / allusers.length) * 100
                ? ((UserCompletedJobs.length / allusers.length) * 100).toFixed(
                    2
                  )
                : "0"}{" "}
              %
            </div>
          </div>
        </div>
        <div className="profileuserdfirst">
          <div className="profileuserfirstone">
            <div
              style={{
                display: "flex",

                alignItems: "center",
              }}
              className="profileuserfirstonetitle"
            >
              <div>Language</div>

              <div onClick={handleOpen1}>
                <img
                  style={{
                    width: width > 700 ? "2.4vw" : "6.5vw",
                    cursor: "pointer",
                  }}
                  src={img1}
                  alt=""
                />
              </div>
              <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={width > 700 ? style : style1}>
                  <div className="profiletitleandmenunav">
                    <div
                      style={{ width: "200%" }}
                      className="profiledetailstitle"
                    >
                      Add Language
                    </div>
                    <div className="profiledetailnavmanu">
                      <div>
                        <CloseIcon
                          onClick={handleClose1}
                          style={{ fontSize: "1.5vw", cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  </div>

                  <hr style={{ color: "#00000090" }} />

                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      flexDirection: width > 700 ? "row" : "column",
                    }}
                  >
                    <div
                      style={{
                        left: width > 700 ? "0vw" : "",
                        width: width > 700 ? "49%" : "98%",
                        margin: width > 700 ? "0.3vw 0" : "2vw 0vw",
                      }}
                      className="loginfield"
                      onClick={handleClickxp}
                    >
                      <TextField
                        error={!langugaeaddwrong ? false : true}
                        id="outlined-basic"
                        label="Language"
                        variant="outlined"
                        placeholder="English"
                        value={month1x1}
                        style={{ width: width > 700 ? "95%" : "100%" }}
                        InputLabelProps={{
                          style: {
                            fontSize: width > 700 ? "1vw" : "3vw",
                            fontFamily: "Poppins",
                            fontStyle: "500",
                            fontWeight: "500",
                            color: !langugaeaddwrong ? "black" : "#dc3545",
                          },
                        }}
                        onChange={handleClickxp}
                        inputProps={{ className: classes.input }}
                      />
                      {width > 700 && (
                        <span>
                          <KeyboardArrowDownOutlined
                            style={{
                              fontSize: "1.5vw",
                              position: "relative",
                              right: "2vw",
                              top: "1vw",
                            }}
                          />
                        </span>
                      )}
                    </div>
                    <Popover
                      id={idxp}
                      open={openxp}
                      anchorEl={anchorElxp}
                      onClose={handleClosexp}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      style={{}}
                    >
                      <div
                        style={{
                          maxHeight: width > 700 ? "20vw" : "50vw",
                          overflow: "scroll",
                        }}
                      >
                        <Typography
                          sx={{
                            p: 1,
                            pl: 1,
                            ml: 1,
                            width: width > 700 ? "20vw" : "80vw",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setMonth1x1("English");
                            handleClosexp();
                            setLangugaeaddwrong(false);
                          }}
                        >
                          English
                        </Typography>
                        <Typography
                          sx={{
                            p: 1,
                            pl: 1,
                            ml: 1,
                            width: width > 700 ? "20vw" : "80vw",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setMonth1x1("Hindi");
                            handleClosexp();
                            setLangugaeaddwrong(false);
                          }}
                        >
                          Hindi
                        </Typography>
                        <Typography
                          sx={{
                            p: 1,
                            pl: 1,
                            ml: 1,
                            width: width > 700 ? "20vw" : "80vw",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setMonth1x1("French");
                            handleClosexp();
                            setLangugaeaddwrong(false);
                          }}
                        >
                          French
                        </Typography>
                      </div>
                    </Popover>

                    <div
                      style={{
                        width: width > 700 ? "49%" : "98%",
                        margin: width > 700 ? "0.3vw 0" : "2vw 0vw",
                      }}
                      className="loginfield"
                      onClick={handleClickx1p1}
                    >
                      <TextField
                        error={!langugaeaddwrong1 ? false : true}
                        id="outlined-basic"
                        label="Proficiency Level"
                        variant="outlined"
                        placeholder="Intermediate"
                        value={year1x1}
                        style={{ width: width > 700 ? "95%" : "100%" }}
                        InputLabelProps={{
                          style: {
                            fontSize: width > 700 ? "1vw" : "3vw",
                            fontFamily: "Poppins",
                            fontStyle: "500",
                            fontWeight: "500",
                            color: !langugaeaddwrong1 ? "black" : "#dc3545",
                          },
                        }}
                        onChange={handleClickx1p1}
                        inputProps={{ className: classes.input }}
                      />
                      {width > 700 && (
                        <span>
                          <KeyboardArrowDownOutlined
                            style={{
                              fontSize: "1.5vw",
                              position: "relative",
                              right: "2vw",
                              top: "1vw",
                            }}
                          />
                        </span>
                      )}
                    </div>
                    <Popover
                      id={idx1p1}
                      open={openx1p1}
                      anchorEl={anchorElx1p1}
                      onClose={handleClosex1p1}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      style={{}}
                    >
                      <div
                        style={{
                          maxHeight: width > 700 ? "20vw" : "50vw",
                          overflow: "scroll",
                        }}
                      >
                        <Typography
                          sx={{
                            p: 1,
                            pl: 1,
                            ml: 1,
                            width: width > 700 ? "20vw" : "80vw",
                          }}
                          onClick={() => {
                            setyear1x1("Learning");
                            handleClosex1p1();
                            setLangugaeaddwrong1(false);
                          }}
                        >
                          Learning
                        </Typography>
                        <Typography
                          sx={{
                            p: 1,
                            pl: 1,
                            ml: 1,
                            width: width > 700 ? "20vw" : "80vw",
                          }}
                          onClick={() => {
                            setyear1x1("Intermediate");
                            handleClosex1p1();
                            setLangugaeaddwrong1(false);
                          }}
                        >
                          Intermediate
                        </Typography>
                        <Typography
                          sx={{
                            p: 1,
                            ml: 1,
                            width: width > 700 ? "20vw" : "80vw",
                          }}
                          onClick={() => {
                            setyear1x1("Highly");
                            handleClosex1p1();
                            setLangugaeaddwrong1(false);
                          }}
                        >
                          Highly
                        </Typography>
                      </div>
                    </Popover>
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
                      onClick={handleClose1}
                    >
                      Cancel
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={handleupdatelang}
                      className="handlecirclieaboutsave"
                    >
                      SAVE
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>

            {user?.languages?.map((language) => {
              return (
                <Profileuserdetaillanguage language={language} width={width} />
              );
            })}
          </div>
        </div>
        <div className="profileuserdfirst">
          <div className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Verification</div>
            <div className="profileuserfirstonedata">
              {verifyTitle}{" "}
              {user?.verifiedByAdmin === true ? (
                <span>
                  <img
                    style={{
                      width: width > 700 ? "1.1vw" : "3.1vw",
                      margin: "0.3vw",
                    }}
                    src={imgxx}
                    alt=""
                  />
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="profileuserfirstonetitle">Email - {user?.emailId}</div>
        <div style={{lineHeight: width>700? "4vw":"8vw"}} className="profileuserfirstonetitle">Mobile - +{user?.contactNo}</div>
        <div className="profileuserfirstonetitle">Address - {user?.address}</div>
      </div>
      <div className="profileuserdetailstwo"></div>
      <div
        style={{ marginTop: "1vw", marginBottom: "3vw" }}
        className="profileuserdetailsthree"
      >
        <div style={{}} className="profiletitleandmenunav">
          <div className="profiledetailstitle">About Me</div>
          <div className="profiledetailnavmanu"></div>
          <Modal
            open={open2}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width > 700 ? style : style1}>
              <div className="profiletitleandmenunav">
                <div className="profiledetailstitle">Edit your title</div>
                <div className="profiledetailnavmanu">
                  <div>
                    <CloseIcon
                      onClick={handleClose2}
                      style={{
                        fontSize: width > 700 ? "1.5vw" : "4vw",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              </div>
              <hr style={{ color: "#00000090" }} />
              <div className="jobpodtedfieldtitile">Your Title</div>

              <div
                style={{
                  fontWeight: "400",
                  fontSize: width > 700 ? "1vw" : "2.5vw",
                  lineHeight: width > 700 ? "1.3vw" : "3.8vw",
                }}
                className="jobpodtedfieldtitile"
              >
                Enter a Description for your title in a single sentence (e.g.,
                Expert Web Designer with Back End Development)
              </div>

              <div
                style={{ left: "0vw", width: "100%" }}
                className="loginfield"
              >
                <TextField
                  id="outlined-basic"
                  label="Title"
                  value={titleuser}
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
                  onChange={(e) => {
                    setTitleuser(e.target.value);
                  }}
                />
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
                  onClick={handleClose2}
                >
                  Cancel
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={handletitleupdate}
                  className="handlecirclieaboutsave"
                >
                  SAVE
                </div>
              </div>
            </Box>
          </Modal>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginTop: "1vw",
          }}
        >
          <div
            style={{
              fontSize: width > 700 ? "1.1vw" : "3.1vw",
              margin: "0.91vw 1vw",
            }}
            className="profiledetailstitle"
          >
            {user?.title ? user?.title : "Update Your Title"}
          </div>
          <div style={{ width: width > 700 ? "3vw" : "8vw" }}>
            <img
              style={{ width: width > 700 ? "3vw" : "8vw" }}
              onClick={handleOpen2}
              src={img2}
              alt=""
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              fontSize: width > 700 ? "1.1vw" : "3.1vw",
              margin: "0.91vw 1vw",
            }}
            className="profiledetailstitle"
          >
            <div className="aboutprofileuser">
              {user?.fullDescription
                ? user?.fullDescription
                : "Enter Your description"}
            </div>
          </div>
          <div style={{ width: width > 700 ? "3vw" : "8vw" }}>
            <img
              style={{ width: width > 700 ? "3vw" : "8vw" }}
              onClick={handleOpen3}
              src={img2}
              alt=""
            />
          </div>
        </div>
        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={width > 700 ? style : style1}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Overview</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose3}
                    style={{ fontSize: "1.5vw", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000090" }} />
            <div
              style={{
                color: "#000000g6",
                fontSize: width > 700 ? "1vw" : "2.5vw",
              }}
              className="profiledetailstitle"
            >
              Use this space to show clients you have the skills and experience
              they're looking for .
            </div>
            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                placeholder={user?.fullDescription}
                multiline
                value={desc}
                rows="7"
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
                  setDesc(e.target.value);
                  setDesclength(e.target.value.length);
                }}
              />
            </div>
            <div
              style={{
                textAlign: "right",
                fontSize: "0.81vw",
                color: "#00000099",
                marginTop: "0vw",
                position: "relative",
                bottom: "1vw",
              }}
            >
              {5000 - desclength} Character Left{" "}
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
                style={{ cursor: "pointer" }}
                onClick={handledescriptionupdate}
                className="handlecirclieaboutsave"
              >
                SAVE
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

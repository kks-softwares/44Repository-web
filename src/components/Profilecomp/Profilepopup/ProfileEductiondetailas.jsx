import React, { useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import img2222 from "../../../assets/My profile – 28/images.png";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import {
  DeleteOutlineOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import API_HOST from "../../../env";
import { userActions } from "../../../store/userSlice";

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
export default function Profileeducationdetails({ education, width }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [month1, setMonth1] = useState(education?.startYear);
  const [year1, setyear1] = useState(education?.endYear);
  const [anchorElx, setAnchorElx] = React.useState(null);
  const handleClickx = (event) => {
    setAnchorElx(event.currentTarget);
  };
  const handleClosex = () => {
    setAnchorElx(null);
  };
  const openx = Boolean(anchorElx);
  const idx = openx ? "simple-popover" : undefined;
  const [arrayof100, setArrayof100] = useState([
    "2022",
    "1900",
    "2000",
    "2021",
    "2020",
    "2019",
    "1999",
    "1998",
    "2012",
    "1995",
    "1997",
  ]);
  const [arrayoflong, setArrayoflong] = useState(arrayof100);
  const [arrayoflongto, setArrayoflongto] = useState(arrayof100);

  const [arrayofdegree, setArrayofdegree] = useState([
    "Master of Computer Application (MCA)",
    "Bachler of Computer Application (MCA)",
  ]);
  const [arrayoflongdegree, setArrayoflongdegree] = useState(arrayofdegree);

  const [arrayofstudy, setArrayofstydy] = useState([
    "Computer Science",
    "Computer Science2",
    "Computer Science3",
  ]);
  const [arrayoflongstudy, setArrayoflongstudy] = useState(arrayofstudy);

  const [anchorElx1, setAnchorElx1] = React.useState(null);
  const handleClickx1 = (event) => {
    setAnchorElx1(event.currentTarget);
  };
  const handleClosex1 = () => {
    setAnchorElx1(null);
  };
  const { user, loggedInStatus } = useSelector((state) => state.user);

  const openx1 = Boolean(anchorElx1);
  const idx1 = openx1 ? "simple-popover" : undefined;

  const [anchorElx2, setAnchorElx2] = React.useState(null);
  const handleClickx2 = (event) => {
    setAnchorElx2(event.currentTarget);
  };

  const handleClosex2 = () => {
    setAnchorElx2(null);
  };

  const openx2 = Boolean(anchorElx2);
  const idx2 = openx2 ? "simple-popover" : undefined;
  const [anchorElx3, setAnchorElx3] = React.useState(null);
  const handleClickx3 = (event) => {
    setAnchorElx3(event.currentTarget);
  };

  const handleClosex3 = () => {
    setAnchorElx3(null);
  };
  const openx3 = Boolean(anchorElx3);
  const idx3 = openx3 ? "simple-popover" : undefined;
  const [anchorElx3c, setAnchorElx3c] = React.useState(null);
  const handleClickx3c = (event) => {
    setAnchorElx3c(event.currentTarget);
  };
  const handleClosex3c = () => {
    setAnchorElx3c(null);
  };

  const openx3c = Boolean(anchorElx3c);
  const idx3c = openx3c ? "simple-popover" : undefined;
  const [callagename, setCallagename] = useState(education?.college);
  const [degreeset, setDegreeset] = useState(education?.degree);
  const [studyset, setstudyset] = useState(education?.feildOfStudy);
  const [descriptioncallageadd, setdescriptioncallageadd] = useState(
    education?.description
  );
  const handleeducationdelete = () => {
    const data = {
      userId: user?.userId,
      _id: education?._id,
    };
    axios.post(`${API_HOST}/users/removeEducation`, data).then((res) => {
      axios
        .get(`${API_HOST}/users/viewUser?userName=${user?.userName}`)
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
    });
  };

  const handleeducationedit = () => {
    const data = {
      userId: user?.userId,
      _id: education?._id,
      description: descriptioncallageadd,
      college: callagename,
      degree: degreeset,
      feildOfStudy: studyset,
      startYear: parseInt(month1),
      endYear: parseInt(year1),
    };
    axios.post(`${API_HOST}/users/editEducationDetails`, data).then((res) => {
      window.localStorage.setItem(
        "user",
        JSON.stringify({ ...res.data.success.data })
      );
      dispatch(
        userActions.setUser({
          user: { ...res.data.success.data },
        })
      );
      handleClose();
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "95%",
        }}
      >
        <div className="pworkexperinxecontainer">
          <div className="pworkexperincebox">
            {/* <div className="pworkexperinceboximg">
              <img src={img2222} alt="" />
            </div> */}
            <div className="pworkexperinceboxtext">
              <div className="pworkexperincebox-name">
                {education?.college}{" "}
              </div>
              <div
                style={{ margin: width > 700 ? "0.1vw" : "0.5vw" }}
                className="pworkexperincebox-name1"
              >
                {education?.startYear}-{education?.endYear}
              </div>
              <div
                style={{
                  fontSize: width > 700 ? "0.851vw" : "2vw",
                  color: "black",
                  opacity: "0.7",
                }}
                className="profileuserfirstonedata"
              >
                {education?.description}
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <EditIcon
            onClick={handleOpen}
            style={{
              fontSize: width > 700 ? "1.6vw" : "4vw",
              color: "gray",
              margin: "0 0.61vw",
              cursor: "pointer",
            }}
          />{" "}
          <DeleteOutlineOutlined
            onClick={handleOpen1}
            style={{
              fontSize: width > 700 ? "1.6vw" : "4vw",
              color: "gray",
              margin: "0 0.61vw",
              cursor: "pointer",
            }}
          />
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={width > 700 ? style : style1}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Edit Education</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose}
                    style={{ fontSize: width > 700 ? "1.5vw" : "4vw" }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000090" }} />
            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              <TextField
                id="outlined-basic"
                label="College"
                variant="outlined"
                multiline
                value={callagename}
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
                  setCallagename(e.target.value);
                }}
              />
            </div>
            {/* <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              <TextField
                id="outlined-basic"
                label="College"
                variant="outlined"
                value={callagename}
                style={{ width: "100%" }}
                InputLabelProps={{
                  style: {
                    fontSize: "1vw",
                    fontFamily: "Poppins",
                    fontStyle: "500",
                    fontWeight: "500",
                    color: "black",
                  },
                }}
                inputProps={{ className: classes.input }}
                onChange={(e) => {
                  if (e.target.value === "") {
                    setCallagename(e.target.value);
                  } else {
                    setCallagename(e.target.value);
                    setAnchorElx3c(e.currentTarget);
                  }
                }}
              />
            </div>
            <Popover
              id={idx3c}
              open={openx3c}
              anchorEl={anchorElx3c}
              onClose={handleClosex3c}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              onKeyDown={handleClosex3c}
            >
              <div style={{ maxHeight: "20vw", overflow: "scroll" }}>
                <Typography
                  sx={{ p: 0.51, pl: 1, ml: 1, width: "43vw" }}
                  onClick={() => {
                    handleClosex3c();
                  }}
                >
                  K.L.N College of engineering
                </Typography>
                <Typography
                  sx={{ p: 0.51, pl: 1, ml: 1, width: "43vw" }}
                  onClick={() => {
                    handleClosex3c();
                  }}
                >
                  K.L.N College of engineering
                </Typography>
              </div>
            </Popover> */}

            <div className="jobpodtedfieldtitile">
              Dates Attended (Optional)
            </div>
            <div
              className={width > 700 ? "row" : ""}
              style={{
                fontWeight: "500",
                fontSize: width > 700 ? "1vw" : "2.5vw",
                display: "flex",
              }}
            >
              <div
                className="col-sm-6"
                style={{ width: width > 700 ? "" : "50%" }}
              >
                From
              </div>
              <div
                className="col-sm-6"
                style={{ width: width > 700 ? "" : "50%" }}
              >
                To (expected graduation year)
              </div>
            </div>
            <div style={{ display: "flex", width: "100%" }}>
              <div
                style={{
                  left: "0vw",
                  width: "50%",
                  margin: "0.3vw 0",
                }}
                className="loginfield"
                // onClick={handleClickx}
              >
                <div className="" style={{ width: "100%" }}>
                  <div style={{ width: "100%" }}>
                    <div className="jobpostfieldinputbox">
                      <input
                        style={{ width: "100%" }}
                        type="date"
                        className="input-homejobformdate"
                        name=""
                        id=""
                        value={month1}
                        // min={disablePastDate()}
                        max={"2025-12-31"}
                        maxlength="4"
                        onChange={(e) => {
                          setMonth1(e.target.value);
                        }}
                        // onChange={(e) => {
                        //   setDatestart(e.target.value);
                        // }}
                      />
                    </div>
                  </div>
                </div>
                {/* <TextField
                  id="outlined-basic"
                  label="From"
                  disabled
                  variant="outlined"
                  value={month1}
                  style={{ width: "95%" }}
                  InputLabelProps={{
                    style: {
                      fontSize: "1vw",
                      fontFamily: "Poppins",
                      fontStyle: "500",
                      fontWeight: "500",
                      color: "black",
                    },
                  }}
                  onChange={handleClickx}
                  inputProps={{ className: classes.input }}
                />
                <span style={{ width: "0.1vw" }}>
                  <KeyboardArrowDownOutlined
                    style={{
                      fontSize: "1.5vw",
                      position: "relative",
                      right: "2vw",
                      top: "1vw",
                    }}
                  />
                </span> */}
              </div>
              {/* <Popover
                id={idx}
                open={openx}
                anchorEl={anchorElx}
                onClose={handleClosex}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div style={{ maxHeight: "20vw", overflow: "scroll" }}>
                  <Typography
                    sx={{
                      p: 1,
                      pl: 1,
                      ml: 1,
                      width: "20vw",
                      position: "fixed",
                      background: "white",
                      zIndex: "10",
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setArrayoflong(
                          arrayof100.filter((x) => x.includes(e.target.value))
                        );
                        console.log(
                          arrayof100.filter((x) => x.includes(e.target.value))
                        );
                      }}
                      type="number"
                      style={{
                        width: "95%",
                        border: "1.5px solid #00000050",
                        outline: "none",
                        height: "2.5",
                        borderRadius: "0.21vw",
                      }}
                    />
                  </Typography>
                  <Typography
                    sx={{
                      p: 2.5,
                      pl: 1,
                      ml: 1,
                      width: "20vw",
                      cursor: "pointer",
                    }}
                  ></Typography>

                  {arrayoflong.map((data, index) => {
                    return (
                      <Typography
                        sx={{
                          p: 0.51,
                          pl: 1,
                          ml: 1,
                          width: "20vw",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setMonth1(data);
                          handleClosex();
                        }}
                      >
                        {data}
                      </Typography>
                    );
                  })}
                </div>
              </Popover> */}
              {/* </div> */}
              <div
                style={{
                  left: "0vw",
                  width: "50%",
                  margin: "0.3vw 0",
                }}
                className="loginfield"
                // onClick={handleClickx1}
              >
                <div className="" style={{ width: "100%" }}>
                  <div style={{ width: "100%" }}>
                    <div className="jobpostfieldinputbox">
                      <input
                        style={{ width: "100%" }}
                        type="date"
                        className="input-homejobformdate"
                        name=""
                        id=""
                        value={year1}
                        // min={disablePastDate()}
                        max={"2025-12-31"}
                        maxlength="4"
                        onChange={(e) => {
                          setyear1(e.target.value);
                        }}
                        // onChange={(e) => {
                        //   setDatestart(e.target.value);
                        // }}
                      />
                    </div>
                  </div>
                </div>
                {/* <TextField
                  id="outlined-basic"
                  label="To (expected graduation year)"
                  variant="outlined"
                  disabled
                  value={year1}
                  style={{
                    width: "95%",
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "1vw",
                      fontFamily: "Poppins",
                      fontStyle: "500",
                      fontWeight: "500",
                      color: "black",
                    },
                  }}
                  onChange={handleClickx1}
                  inputProps={{ className: classes.input }}
                />
                <span style={{ width: "0.1vw" }}>
                  <KeyboardArrowDownOutlined
                    style={{
                      fontSize: "1.5vw",
                      position: "relative",
                      right: "2vw",
                      top: "1vw",
                    }}
                  />
                </span> */}
              </div>
              {/* <Popover
                id={idx1}
                open={openx1}
                anchorEl={anchorElx1}
                onClose={handleClosex1}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                style={{}}
              >
                <div style={{ maxHeight: "20vw", overflow: "scroll" }}>
                  <Typography
                    sx={{
                      p: 1,
                      pl: 1,
                      ml: 1,
                      width: "20vw",
                      position: "fixed",
                      background: "white",
                      zIndex: "10",
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setArrayoflongto(
                          arrayof100.filter((x) => x.includes(e.target.value))
                        );
                        console.log(
                          arrayof100.filter((x) => x.includes(e.target.value))
                        );
                      }}
                      type="number"
                      style={{
                        width: "95%",
                        border: "1.5px solid #00000050",
                        outline: "none",
                        height: "2.5",
                        borderRadius: "0.21vw",
                      }}
                    />
                  </Typography>
                  <Typography
                    sx={{
                      p: 2.5,
                      pl: 1,
                      ml: 1,
                      width: "20vw",
                      cursor: "pointer",
                    }}
                  ></Typography>

                  {arrayoflongto.map((data, index) => {
                    return (
                      <Typography
                        sx={{
                          p: 0.51,
                          pl: 1,
                          ml: 1,
                          width: "20vw",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setyear1(data);
                          handleClosex1();
                        }}
                      >
                        {data}
                      </Typography>
                    );
                  })}
                </div>
              </Popover> */}
            </div>

            <div
              style={{ left: "0vw", width: "100%" }}
              className="loginfield"
              // onClick={handleClickx2}
            >
              <div
                style={{ left: "0vw", width: "100%" }}
                className="loginfield"
              >
                <TextField
                  id="outlined-basic"
                  label="College"
                  variant="outlined"
                  multiline
                  value={degreeset}
                  style={{ width: "100%" }}
                  InputLabelProps={{
                    style: {
                      fontSize: width>700?"1vw":"3vw",
                      fontFamily: "Poppins",
                      fontStyle: "500",
                      fontWeight: "500",
                      color: "black",
                    },
                  }}
                  inputProps={{ className: classes.input }}
                  onChange={(e) => {
                    
                    setDegreeset(e.target.value);
                  }}
                />
              </div>
              {/* <TextField
                id="outlined-basic"
                label="Degree (Optional)"
                variant="outlined"
                disabled
                value={degreeset}
                style={{ width: "100%" }}
                InputLabelProps={{
                  style: {
                    fontSize: "1vw",
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
              <span style={{ width: "0.1vw" }}>
                <KeyboardArrowDownOutlined
                  style={{
                    fontSize: "1.5vw",
                    position: "relative",
                    right: "2vw",
                    top: "1vw",
                  }}
                />
              </span> */}
            </div>
            {/* <Popover
              id={idx2}
              open={openx2}
              anchorEl={anchorElx2}
              onClose={handleClosex2}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div style={{ maxHeight: "18vw", overflow: "scroll" }}>
                <Typography
                  sx={{
                    p: 1,
                    pl: 1,
                    ml: 1,
                    width: "43vw",
                    position: "fixed",
                    background: "white",
                    zIndex: "10",
                  }}
                >
                  <input
                    onChange={(e) => {
                      setArrayoflongdegree(
                        arrayofdegree.filter((x) => x.includes(e.target.value))
                      );
                      console.log(
                        arrayofdegree.filter((x) => x.includes(e.target.value))
                      );
                    }}
                    style={{
                      width: "95%",
                      border: "1.5px solid #00000050",
                      outline: "none",
                      height: "2.5",
                      borderRadius: "0.21vw",
                    }}
                  />
                </Typography>
                <Typography
                  sx={{
                    p: 2.5,
                    pl: 1,
                    ml: 1,
                    width: "43vw",
                    cursor: "pointer",
                  }}
                ></Typography>

                {arrayoflongdegree.map((data, index) => {
                  return (
                    <Typography
                      sx={{
                        p: 0.51,
                        pl: 1,
                        ml: 1,
                        width: "43vw",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setDegreeset(data);
                        handleClosex2();
                      }}
                    >
                      {data}
                    </Typography>
                  );
                })}
              </div>
            </Popover> */}
            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              <TextField
                id="outlined-basic"
                label="Area of study (Optional)"
                variant="outlined"
                multiline
                value={studyset}
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
                  setstudyset(e.target.value);
                }}
              />
            </div>
            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              <TextField
                id="outlined-basic"
                label="Description (Optional)"
                variant="outlined"
                multiline
                value={descriptioncallageadd}
                rows="5"
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
                  setdescriptioncallageadd(e.target.value);
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
                onClick={handleClose}
              >
                Cancel
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
                onClick={handleeducationedit}
              >
                SAVE
              </div>
            </div>
          </Box>
        </Modal>
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={width > 700 ? style : style1}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Delete education</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose1}
                    style={{ fontSize: width > 700 ? "1.5vw" : "4vw" }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000090" }} />
            <div
              style={{
                color: "gray",
                fontSize: width > 700 ? "1vw" : "2.2vw",
                fontWeight: "300",
              }}
              className="profiledetailstitle"
            >
              The action will delete " {education?.college}" From all of your
              profiles.
            </div>
            <div
              style={{
                color: "gray",
                fontSize: width > 700 ? "1vw" : "2.5vw",
                fontWeight: "400",
                marginBottom: "5vw",
              }}
              className="profiledetailstitle"
            >
              Are you sure you want to delete this education?
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
                onClick={handleeducationdelete}
                className="handlecirclieaboutsave"
              >
                Delete
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <hr
        style={{
          width: "82vw",
          margin: "0 4vw",
          marginBottom: "1vw",
          color: "#00000090",
        }}
      />
    </>
  );
}

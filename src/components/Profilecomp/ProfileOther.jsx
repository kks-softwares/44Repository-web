import React, { useState } from "react";
import img1 from "../../assets/My profile – 28/Component 70 – 6.svg";
import "./profile.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import ProfileotherDetails from "./Profilepopup/ProfileOtherdetails";
import API_HOST from "../../env";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 3,
};

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
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
export default function ProfileWorkexperince({ user, width }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [month1, setMonth1] = useState("");
  const [year1, setyear1] = useState("");
  const [month2, setMonth2] = useState("");
  const [year2, setyear2] = useState("");

  const [anchorElx, setAnchorElx] = React.useState(null);
  const handleClickx = (event) => {
    setAnchorElx(event.currentTarget);
  };

  const handleClosex = () => {
    setAnchorElx(null);
  };

  const openx = Boolean(anchorElx);
  const idx = openx ? "simple-popover" : undefined;

  const [anchorElx1, setAnchorElx1] = React.useState(null);
  const handleClickx1 = (event) => {
    setAnchorElx1(event.currentTarget);
  };

  const handleClosex1 = () => {
    setAnchorElx1(null);
  };

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
  const [arrayofmonth, setArrayofmonth] = useState([
    "january",
    "febuary",
    "March",
    "April",
    "May",
  ]);

  const [arrayoflong, setArrayoflong] = useState(arrayofmonth);
  const [arrayoflongto, setArrayoflongto] = useState(arrayof100);

  const [arrayoflong1, setArrayoflong1] = useState(arrayofmonth);
  const [arrayoflongto1, setArrayoflongto1] = useState(arrayof100);
  const [descriptioncallageadd, setdescriptioncallageadd] = useState("");
  const [callagename, setCallagename] = useState("");

  const handleaddcallage = () => {
    if (callagename !== "") {
      const formdata = {
        userId: user?.userId,
        description: descriptioncallageadd,
        title: callagename,
        fromMonth: month1,
        fromYear: year1,
        toYear: year2,
        toMonth: month2,
      };
      axios.post(`${API_HOST}/users/updateOthers`, formdata).then((res) => {
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
    } else {
      setWrongcallageaddname(true);
    }
  };

  const [wrongcallageaddname, setWrongcallageaddname] = useState(false);

  return (
    <div>
      <div style={{ height: "fit-content" }} className="profilebadgecontainer">
        <div
          style={{ padding: "2vw", margin: "0 0vw" }}
          className="profiletitleandmenunav"
        >
          <div className="profiledetailstitle">Others</div>
          <div className="profiledetailnavmanu">
            <img
              onClick={handleOpen}
              style={{ width: width > 700 ? "2.5vw" : "6vw" }}
              src={img1}
              alt=""
            />
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width > 700 ?style:style1}>
              <div className="profiletitleandmenunav">
                <div className="profiledetailstitle">Add others</div>
                <div className="profiledetailnavmanu">
                  <div>
                    <CloseIcon
                      onClick={handleClose}
                      style={{ fontSize:width > 700 ? "1.5vw":"4vw" }}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{ left: "0vw", width: "100%" }}
                className="loginfield"
              >
                <TextField
                  error={!wrongcallageaddname ? false : true}
                  value={callagename}
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  style={{ width: "100%" }}
                  InputLabelProps={{
                    style: {
                      fontSize: width > 700 ?"1vw":"3vw",
                      fontFamily: "Poppins",
                      fontStyle: "500",
                      fontWeight: "500",
                      color: !wrongcallageaddname ? "black" : "#dc3545",
                    },
                  }}
                  onChange={(e) => {
                    setWrongcallageaddname(false);
                    setCallagename(e.target.value);
                  }}
                  inputProps={{ className: classes.input }}
                />
              </div>
              <div className="jobpodtedfieldtitile">From</div>
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
                    label="Month"
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
                        width: "21.5vw",
                        position: "fixed",
                        background: "white",
                        zIndex: "10",
                      }}
                    >
                      <input
                        onChange={(e) => {
                          setArrayoflong(
                            arrayofmonth.filter((x) =>
                              x.includes(e.target.value)
                            )
                          );
                          console.log(
                            arrayofmonth.filter((x) =>
                              x.includes(e.target.value)
                            )
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
                            width: "21.5vw",
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
                {/* <div
                  style={{
                    left: "0vw",
                    width: "50%",
                    margin: "0.3vw 0",
                  }}
                  className="loginfield"
                  onClick={handleClickx1}
                >
                  <TextField
                    id="outlined-basic"
                    label="Year"
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
                    onChange={handleClickx3}
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
                  </span>
                </div>
                <Popover
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
              <div className="jobpodtedfieldtitile">To</div>
              <div style={{ display: "flex", width: "100%" }}>
                <div
                  style={{
                    left: "0vw",
                    width: "50%",
                    margin: "0.3vw 0",
                  }}
                  className="loginfield"
                  // onClick={handleClickx2}
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
                          // min={disablePastDate()}
                          max={"2025-12-31"}
                          maxlength="4"
                          onChange={(e) => {
                            setyear2(e.target.value);
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
                    label="Month"
                    disabled
                    variant="outlined"
                    value={month2}
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
                    onChange={handleClickx2}
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
                  id={idx2}
                  open={openx2}
                  anchorEl={anchorElx2}
                  onClose={handleClosex2}
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
                          setArrayoflong1(
                            arrayofmonth.filter((x) =>
                              x.includes(e.target.value)
                            )
                          );
                          console.log(
                            arrayofmonth.filter((x) =>
                              x.includes(e.target.value)
                            )
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
                        width: "20vw",
                        cursor: "pointer",
                      }}
                    ></Typography>

                    {arrayoflong1.map((data, index) => {
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
                            setMonth2(data);
                            handleClosex2();
                          }}
                        >
                          {data}
                        </Typography>
                      );
                    })}
                  </div>
                </Popover> */}
                {/* </div> */}
                {/* <div
                  style={{
                    left: "0vw",
                    width: "50%",
                    margin: "0.3vw 0",
                  }}
                  className="loginfield"
                  onClick={handleClickx3}
                >
                  <TextField
                    id="outlined-basic"
                    label="Year"
                    variant="outlined"
                    disabled
                    value={year2}
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
                    onChange={handleClickx3}
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
                  </span>
                </div>
                <Popover
                  id={idx3}
                  open={openx3}
                  anchorEl={anchorElx3}
                  onClose={handleClosex3}
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
                          setArrayoflongto1(
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

                    {arrayoflongto1.map((data, index) => {
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
                            setyear2(data);
                            handleClosex3();
                          }}
                        >
                          {data}
                        </Typography>
                      );
                    })}
                  </div>
                </Popover> */}
              </div>{" "}
              <div
                style={{ left: "0vw", width: "100%" }}
                className="loginfield"
              >
                <TextField
                  id="outlined-basic"
                  label="Description (Optional)"
                  variant="outlined"
                  value={descriptioncallageadd}
                  multiline
                  rows="6"
                  style={{ width: "100%" }}
                  InputLabelProps={{
                    style: {
                        fontSize: width > 700 ?"1vw":"3vw",
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
              {/* <hr style={{ color: "#00000090" }} /> */}
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
                  onClick={handleaddcallage}
                >
                  SAVE
                </div>
              </div>
            </Box>
          </Modal>
        </div>
        {user?.otherExperience?.map((other) => {
          return <ProfileotherDetails other={other}  width={width}/>;
        })}
      </div>
    </div>
  );
}

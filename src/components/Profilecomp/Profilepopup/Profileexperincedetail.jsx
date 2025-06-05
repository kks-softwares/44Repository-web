import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import img22 from "../../../assets/My profile – 28/NoPath - Copy.png";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import {
  DeleteOutlineOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import { userActions } from "../../../store/userSlice";

import { useSelector } from "react-redux";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import API_HOST from "../../../env";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: "40rem",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflowY: "scroll",
  overflowX: "hidden",
  pl: 4,
  pt: 2,
  pr: 4,
  pb: 2,
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxHeight: "40rem",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflowY: "scroll",
  overflowX: "hidden",
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
export default function Profileexperincedetail({ company ,width}) {
  const [month1, setMonth1] = useState(company?.fromMonth);
  const [year1, setyear1] = useState(company?.fromYear);
  const classes = useStyles();
  const { user, loggedInStatus } = useSelector((state) => state.user);

  const [city, setcity] = useState(company?.companyCity);
  const [country, setcountry] = useState(company?.companyCountry);
  const dispatch = useDispatch();
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorElx, setAnchorElx] = React.useState(null);
  const handleClickx = (event) => {
    setAnchorElx(event.currentTarget);
  };

  const [month2, setMonth2] = useState(company?.toMonth);
  const [year2, setyear2] = useState(company?.toYear);

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
  const [anchorElx3deg, setAnchorElx3deg] = React.useState(null);
  const handleClickx3deg = (event) => {
    setAnchorElx3deg(event.currentTarget);
  };

  const handleClosex3deg = () => {
    setAnchorElx3deg(null);
  };

  const openx3deg = Boolean(anchorElx3deg);
  const idx3deg = openx3deg ? "simple-popover" : undefined;

  const [anchorElx3city, setAnchorElx3city] = React.useState(null);
  const handleClickx3city = (event) => {
    setAnchorElx3city(event.currentTarget);
  };
  const handleClosex3city = () => {
    setAnchorElx3city(null);
  };
  const openx3city = Boolean(anchorElx3city);
  const idx3city = openx3city ? "simple-popover" : undefined;

  const [anchorElx3cun, setAnchorElx3cun] = React.useState(null);
  const handleClickx3cun = (event) => {
    setAnchorElx3cun(event.currentTarget);
  };
  const handleClosex3cun = () => {
    setAnchorElx3cun(null);
  };
  const openx3cun = Boolean(anchorElx3cun);
  const idx3cun = openx3cun ? "simple-popover" : undefined;

  const [arrayofdegree, setArrayofdegree] = useState([
    "UX/UI Designer",
    "UX/UI Designer2",
  ]);
  const [arrayoflongdegree, setArrayoflongdegree] = useState(arrayofdegree);
  const [degreeset, setDegreeset] = useState(company?.jobTitle);

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
  const [arrayofcity, setArrayofcity] = useState(["Kanpur", "Delhi"]);
  const [arrayofCountry, setArrayofCountry] = useState([
    "India",
    "China",
    "Pakistan",
  ]);

  const [arrayoflong, setArrayoflong] = useState(arrayofmonth);
  const [arrayoflongto, setArrayoflongto] = useState(arrayof100);

  const [arrayoflong1, setArrayoflong1] = useState(arrayofmonth);
  const [arrayoflongto1, setArrayoflongto1] = useState(arrayof100);

  const [arrayoflongcity, setArrayoflongcity] = useState(arrayofcity);
  const [arrayoflongcountyr, setArrayoflongciuntyr] = useState(arrayofCountry);
  const [companyName, setCompanyName] = useState(company?.companyName);

  const [descriptioncallageadd, setdescriptioncallageadd] = useState(
    company?.description
  );

  const [checkedtocompany, setCheckedtocompany] = useState(
    company?.workingCurrently
  );

  const handleeducationdelete = () => {
    const data = {
      userId: user?.userId,
      _id: company?._id,
    };
    axios.post(`${API_HOST}/users/removeCompanyDetails`, data).then((res) => {
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
          handleClose();
        });
    });
  };

  const handleeditcallage = () => {
    if (checkedtocompany) {
      const formdata = {
        userId: user?.userId,
        companyName: companyName,
        companyCity: city,
        companyCountry: country,
        jobTitle: degreeset,
        fromMonth: month1,
        fromYear: year1,
        workingCurrently: checkedtocompany,
        description: descriptioncallageadd,
        _id: company?._id,
      };
      axios
        .post(`${API_HOST}/users/editCompanyDetails`, formdata)
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
      const formdata = {
        userId: user?.userId,
        companyName: companyName,
        companyCity: city,
        companyCountry: country,
        jobTitle: degreeset,
        fromMonth: month1,
        fromYear: year1,
        workingCurrently: checkedtocompany,
        description: descriptioncallageadd,
        toMonth: month2,
        toYear: year2,
        _id: company?._id,
      };
      axios
        .post(`${API_HOST}/users/editCompanyDetails`, formdata)
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
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "1vw 5vw",
        }}
      >
        <div>
          <div className="pworkexperincebox">
            {/* <div className="pworkexperinceboximg">
              <img src={img22} alt="" />
            </div> */}
            <div className="pworkexperinceboxtext">
              <div className="pworkexperincebox-name">
                {company?.jobTitle} | {company?.companyName}
              </div>
              <div
                style={{
                  color: "black",
                  opacity: "0.7",
                  margin: "0",
                  padding: "0",
                }}
                className="pworkexperincebox-name1"
              >
                {company?.fromMonth} {company?.fromYear} -{" "}
                {company?.workingCurrently
                  ? "present"
                  : company?.toMonth + " " + company?.toYear}
              </div>
              <div
                style={{
                  fontSize: width > 700 ? "0.851vw":"2.2vw",
                  color: "black",
                  opacity: "0.7",
                  margin: "0",
                  padding: "0",
                }}
                className="profileuserfirstonedata"
              >
                {company?.description}
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", width:width > 700 ? "5vw" :"10vw"}}>
          <EditIcon
            onClick={handleOpen1}
            style={{
              fontSize:width > 700 ? "1.5vw":"4vw",
              color: "gray",
              margin: "0 0.61vw",
              cursor: "pointer",
            }}
          />
          <DeleteOutlineOutlined
            onClick={handleOpen}
            style={{
              cursor: "pointer",
              fontSize: width > 700 ?"1.5vw":"4vw",
              color: "gray",
              margin: "0 0.61vw",
            }}
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
              <div className="profiledetailstitle">Edit Employment</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose}
                    style={{ fontSize: width > 700 ? "1.5vw" :"4vw" }}
                  />
                </div>
              </div>
            </div>
            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              <TextField
                id="outlined-basic"
                label="Company"
                variant="outlined"
                value={companyName}
                style={{ width: "100%" }}
                InputLabelProps={{
                  style: {
                    fontSize:width > 700 ? "1vw" :"3vw" ,
                    fontFamily: "Poppins",
                    fontStyle: "500",
                    fontWeight: "500",
                    color: "black",
                  },
                }}
                inputProps={{ className: classes.input }}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              />
            </div>
            <div className="jobpodtedfieldtitile">Location</div>
            <div style={{ display: "flex", width: "100%" }}>
              <div
                style={{
                  left: "0vw",
                  width: "50%",
                  margin: "0.3vw 0",
                }}
                className="loginfield"
                onClick={handleClickx3city}
              >
                <TextField
                  id="outlined-basic"
                  label="City"
                  disabled
                  variant="outlined"
                  value={city}
                  style={{ width: "95%" }}
                  InputLabelProps={{
                    style: {
                      fontSize: width > 700 ? "1vw" :"3vw" ,
                      fontFamily: "Poppins",
                      fontStyle: "500",
                      fontWeight: "500",
                      color: "black",
                    },
                  }}
                  onChange={handleClickx3city}
                  inputProps={{ className: classes.input }}
                />
                {width > 700 && <span style={{ width: "0.1vw" }}>
                  <KeyboardArrowDownOutlined
                    style={{
                      fontSize: "1.5vw",
                      position: "relative",
                      right: "2vw",
                      top: "1vw",
                    }}
                  />
                </span>}
              </div>
              <Popover
                id={idx3city}
                open={openx3city}
                anchorEl={anchorElx3city}
                onClose={handleClosex3city}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div style={{ maxHeight: width > 700 ? "20vw":"39vw", overflow: "scroll" }}>
                  <Typography
                    sx={{
                      p: 1,
                      pl: 1,
                      ml: 1,
                      width:width > 700 ? "20vw":"39vw",
                      position: "fixed",
                      background: "white",
                      zIndex: "10",
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setArrayoflongcity(
                          arrayofcity.filter((x) => x.includes(e.target.value))
                        );
                        console.log(
                          arrayofcity.filter((x) => x.includes(e.target.value))
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
                      width:width > 700 ? "20vw":"39vw",
                      cursor: "pointer",
                    }}
                  ></Typography>

                  {arrayoflongcity.map((data, index) => {
                    return (
                      <Typography
                        sx={{
                          p: 0.51,
                          pl: 1,
                          ml: 1,
                          width:width > 700 ? "20vw":"39vw",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setcity(data);
                          handleClosex3city();
                        }}
                      >
                        {data}
                      </Typography>
                    );
                  })}
                </div>
              </Popover>
              {/* </div> */}
              <div
                style={{
                  left: "1vw",
                  width: "50%",
                  margin: "0.3vw 0",
                  position: "relative",
                }}
                className="loginfield"
                onClick={handleClickx3cun}
              >
                <TextField
                  id="outlined-basic"
                  label="Country"
                  variant="outlined"
                  disabled
                  value={country}
                  style={{
                    width: "95%",
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: width > 700 ? "1vw" :"3vw" ,
                      fontFamily: "Poppins",
                      fontStyle: "500",
                      fontWeight: "500",
                      color: "black",
                    },
                  }}
                  onChange={handleClickx3cun}
                  inputProps={{ className: classes.input }}
                />
               {width > 700 &&  <span style={{ width: "0.1vw" }}>
                  <KeyboardArrowDownOutlined
                    style={{
                      fontSize: "1.5vw",
                      position: "relative",
                      right: "2vw",
                      top: "1vw",
                    }}
                  />
                </span>}
              </div>
              <Popover
                id={idx3cun}
                open={openx3cun}
                anchorEl={anchorElx3cun}
                onClose={handleClosex3cun}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                style={{}}
              >
                <div style={{ maxHeight: width > 700 ? "20vw":"39vw", overflow: "scroll" }}>
                  <Typography
                    sx={{
                      p: 1,
                      pl: 1,
                      ml: 1,
                      width: width > 700 ? "20vw":"39vw",
                      position: "fixed",
                      background: "white",
                      zIndex: "10",
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setArrayoflongciuntyr(
                          arrayofCountry.filter((x) =>
                            x.includes(e.target.value)
                          )
                        );
                        console.log(
                          arrayofCountry.filter((x) =>
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
                      width: width > 700 ? "20vw":"39vw",
                      cursor: "pointer",
                    }}
                  ></Typography>

                  {arrayoflongcountyr.map((data, index) => {
                    return (
                      <Typography
                        sx={{
                          p: 0.51,
                          pl: 1,
                          ml: 1,
                          width: width > 700 ? "20vw":"39vw",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setcountry(data);
                          handleClosex3cun();
                        }}
                      >
                        {data}
                      </Typography>
                    );
                  })}
                </div>
              </Popover>
            </div>
            <div
              style={{ left: "0vw", width: "100%" }}
              className="loginfield"
              onClick={handleClickx3deg}
            >
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                disabled
                value={degreeset}
                style={{ width: "100%" }}
                InputLabelProps={{
                  style: {
                    fontSize: width > 700 ? "1vw" :"3vw" ,
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
            {width > 700 && <span style={{ width: "0.1vw" }}>
                <KeyboardArrowDownOutlined
                  style={{
                    fontSize: "1.5vw",
                    position: "relative",
                    right: "2vw",
                    top: "1vw",
                  }}
                />
              </span>}
            </div>
            <Popover
              id={idx3deg}
              open={openx3deg}
              anchorEl={anchorElx3deg}
              onClose={handleClosex3deg}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div style={{ maxHeight: width > 700 ? "18vw" : "40vw", overflow: "scroll" }}>
                <Typography
                  sx={{
                    p: 1,
                    pl: 1,
                    ml: 1,
                    width: width > 700 ? "43vw" : "80vw",
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
                    width: width > 700 ? "43vw" : "80vw",
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
                        width: width > 700 ? "43vw" : "80vw",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setDegreeset(data);
                        handleClosex3deg();
                      }}
                    >
                      {data}
                    </Typography>
                  );
                })}
              </div>
            </Popover>
            <label htmlFor="checkbox">
              <input
                type="checkbox"
                onChange={() => {
                  setCheckedtocompany(!checkedtocompany);
                }}
                name=""
                id="checkbox"
                checked={checkedtocompany ? true : false}
              />

              <div
                className=""
                style={{
                  fontSize: width > 700 ? "1vw" :"3vw" ,
                  fontFamily: "Poppins",
                  fontStyle: "500",
                  fontWeight: "500",
                  color: "#00000080",
                  display: "inline",
                  margin: "0 1vw",
                }}
              >
                Currently working here
              </div>
            </label>
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
                          arrayofmonth.filter((x) => x.includes(e.target.value))
                        );
                        console.log(
                          arrayofmonth.filter((x) => x.includes(e.target.value))
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
                          setyear1(data);
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
                          setMonth1(data);
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
            {!checkedtocompany ? (
              <>
                {" "}
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
                            value={year2}
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
                    <div style={{ maxHeight: "17vw", overflow: "scroll" }}>
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
                              setyear2(data);
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
                    <div style={{ maxHeight: "17vw", overflow: "scroll" }}>
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
                              arrayof100.filter((x) =>
                                x.includes(e.target.value)
                              )
                            );
                            console.log(
                              arrayof100.filter((x) =>
                                x.includes(e.target.value)
                              )
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
                              setMonth2(data);
                              handleClosex3();
                            }}
                          >
                            {data}
                          </Typography>
                        );
                      })}
                    </div>
                  </Popover> */}
                </div>
              </>
            ) : (
              ""
            )}
            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              <TextField
                id="outlined-basic"
                label="Description (Optional)"
                variant="outlined"
                value={descriptioncallageadd}
                multiline
                rows="4"
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
                  console.log(e.target.value);
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
                onClick={handleClose1}
              >
                Cancel
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
                onClick={handleeditcallage}
              >
                SAVE
              </div>
            </div>
          </Box>
        </Modal>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={width > 700 ? style:style1}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle"> Delete employment</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose}
                    style={{ fontSize: width > 700 ? "1.5vw" :"4vw" }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000090" }} />
            <div
              style={{ color: "gray", fontSize:width > 700 ? "1vw" :"2.7vw", fontWeight: "300" }}
              className="profiledetailstitle"
            >
              The action will delete " {company?.companyName}" From all of your
              profiles.{" "}
            </div>
            <div
              style={{
                color: "gray",
                fontSize: width > 700 ? "0.91vw" :"2.7vw",
                fontWeight: "400",
                marginBottom: "5vw",
              }}
              className="profiledetailstitle"
            >
              Are you sure you want to delete this employment?
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
                onClick={handleeducationdelete}
                style={{ cursor: "pointer" }}
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
          width: "80vw",
          margin: "0 4vw",
          marginBottom: "1vw",
          color: "#00000090",
        }}
      />
    </>
  );
}

import React, { useEffect, useState } from "react";
import cuntrycide from "../../../helper/c";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router";
import axios from "axios";
import API_HOST from "../../../env";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  select: {
    height: "2vw",
    width: "100%",
    marginTop: "0.2vw",
    padding: "1vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1vw",
    lineHeight: "120%",
    color: "black",
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

    position: "relative",
    top: "0.81vw",
    left: "0.2vw",
  },
  icon: {
    fill: "white",
  },
}));

export default function Addrefrences({ handleClose }) {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => state.user);
  const [countrycode, setCountrycode] = useState();
  const [countryside, setCountryside] = useState(cuntrycide);

  const classes = useStyles();

  const [age3, setAge3] = React.useState(0);
  const [age2, setAge2] = React.useState(1);
  const [age4, setAge4] = React.useState(0);
  const [age5, setAge5] = React.useState(0);

  const [category, setcategory] = useState("");

  const handleChange4x = (event) => {
    setAge4(event.target.value);
  };
  const handleChange2x = (event) => {
    setAge2(event.target.value);
  };
  const handleChange5x = (event) => {
    setAge5(event.target.value);
  };
  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };

  const [checkone, setCheckone] = useState(false);
  const [checkone1, setCheckone1] = useState(false);

  const [scate, setsCate] = useState("");

  const [erroeshow, setErroeshow] = useState(false);
  const [setsubSelectedCategory, setsetsubcategory] = useState([]);
  const [setallSelectedCategory, setallsetsubcategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_HOST}/category/viewCategory?categories=${category}`)
      .then((res) => {
        setsetsubcategory(res.data.success.data?.docs[0]?.subCategories);
      });
  }, [category]);

  useEffect(() => {
    axios.get(`${API_HOST}/category/viewCategory`).then((res) => {
      setallsetsubcategory(res.data.success.data?.docs);
    });
  }, []);

  const [name, setName] = useState("");

  const [openx1, setOpenx1] = React.useState(false);
  const handleOpenx = () => setOpenx1(true);
  const handleClosex = () => setOpenx1(false);
  const [mobilecuntry, setMobilecuntry] = useState(1);
  
  return (
    <div
      style={{
        width: "70vw",
        margin: "auto",
        height: "fit-content",
        marginTop: "2vw",
      }}
      className="home-postjob-container"
    >
      <div
        style={{
          overflowX: "hidden",
          paddingLeft: "4vw",
          width: "70vw",
          paddingTop: "2vw",
        }}
        className="homepostjob-right"
      >
        <div className="jobpostedformheading">JAdd Reference</div>

        <div>
          <div className="jobpodtedfieldtitile"> Full Name</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <CloseIcon
              style={{
                position: "relative",
                right: "2vw",
                top: "1.1vw",
                fontSize: "1.5vw",
                cursor: "pointer",
              }}
              onClick={() => {
                setName("");
              }}
            />
          </div>
          <div className="jobpodtedfieldtitile"> Category</div>
          <div className="">
            <Box
              sx={{
                background: "white",
                border: "1px solid #7070705b",
                height: "3.0vw",
                width: "29vw",
                borderRadius: "5px",
                margin: "0.5vw 0vw",
              }}
              className="setting-toggler"
            >
              <FormControl variant="standard" fullWidth>
                <Select
                  className={classes.select}
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age4}
                  disableUnderline
                  inputProps={{
                    classes: {
                      // root: classes.border,
                      icon: classes.icon,
                    },
                  }}
                  onChange={handleChange4x}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: "white",

                        "& .MuiMenuItem-root": {
                          padding: "0.1vw 2vw",
                          width: "29vw",
                          height: "3vw",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "1vw",
                          lineHeight: "24px",
                          color: "#6b6b6b",
                        },
                      },
                    },
                  }}
                >
                  <MenuItem onClick={() => {}} value={0} hidden>
                    Select
                  </MenuItem>

                  {setallSelectedCategory?.length > 0 &&
                    setallSelectedCategory?.map((res, index) => {
                      return (
                        <MenuItem
                          onClick={() => {
                            setcategory(res?.categories);
                          }}
                          value={index + 1}
                        >
                          {res?.categories}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="jobpodtedfieldtitile">Sub Category</div>
          <div className="">
            <Box
              sx={{
                background: "white",
                border: "1px solid #7070705b",
                height: "3.0vw",
                width: "29vw",
                borderRadius: "5px",
                margin: "0.5vw 0vw",
              }}
              className="setting-toggler"
            >
              <FormControl variant="standard" fullWidth>
                <Select
                  className={classes.select}
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age3}
                  disableUnderline
                  inputProps={{
                    classes: {
                      // root: classes.border,
                      icon: classes.icon,
                    },
                  }}
                  onChange={handleChange3}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: "white",

                        "& .MuiMenuItem-root": {
                          padding: "0.1vw 2vw",
                          width: "29vw",
                          height: "3vw",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "1vw",
                          lineHeight: "24px",
                          color: "#6b6b6b",
                        },
                      },
                    },
                  }}
                >
                  <MenuItem onClick={() => {}} value={0} hidden>
                    Select
                  </MenuItem>

                  {setsubSelectedCategory?.length > 0 &&
                    setsubSelectedCategory?.map((res, index) => {
                      return (
                        <MenuItem
                          onClick={() => {
                            setsCate(res);
                          }}
                          value={index + 1}
                        >
                          {res}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="jobpodtedfieldtitile">Skill Set</div>{" "}
          <div className="">
            <Box
              sx={{
                background: "white",
                border: "1px solid #7070705b",
                height: "3.0vw",
                width: "29vw",
                borderRadius: "5px",
                margin: "0.5vw 0vw",
              }}
              className="setting-toggler"
            >
              <FormControl variant="standard" fullWidth>
                <Select
                  className={classes.select}
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age5}
                  disableUnderline
                  inputProps={{
                    classes: {
                      // root: classes.border,
                      icon: classes.icon,
                    },
                  }}
                  onChange={handleChange5x}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: "white",

                        "& .MuiMenuItem-root": {
                          padding: "0.1vw 2vw",
                          width: "29vw",
                          height: "3vw",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "1vw",
                          lineHeight: "24px",
                          color: "#6b6b6b",
                        },
                      },
                    },
                  }}
                >
                  <MenuItem onClick={() => {}} value={0} hidden>
                    Select
                  </MenuItem>

                  {setsubSelectedCategory?.length > 0 &&
                    setsubSelectedCategory?.map((res, index) => {
                      return (
                        <MenuItem
                          onClick={() => {
                            setsCate(res);
                          }}
                          value={index + 1}
                        >
                          {res}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="jobpodtedfieldtitile">Mobile</div>
          <div className="jobpostfieldinputbox">
            <div style={{ width: "0.1vw", zIndex: "3" }}>
              <div className="okmobilejobform" onClick={handleOpenx}>
                {mobilecuntry}
              </div>
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: "3.0vw",
                  width: "10vw",
                  borderRadius: "5px",
                  margin: "0vw 0vw",
                  position: "relative",
                  bottom: "0.71vw",
                }}
                className="setting-toggler"
              >
                <FormControl variant="standard" fullWidth>
                  <Select
                    className={classes.select3}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age2}
                    disableUnderline
                    inputProps={{
                      classes: {
                        icon: classes.icon,
                      },
                    }}
                    onChange={handleChange2x}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          bgcolor: "white",
                          width: "3vw",
                          maxHeight: "18vw",
                          "& .MuiMenuItem-root": {
                            padding: "0.1vw 0.1vw",
                            width: "11vw",
                            height: "2vw",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "0.81vw",
                            lineHeight: "24px",
                            color: "#6b6b6b",
                          },
                        },
                      },
                    }}
                  >
                    <div style={{ width: "9vw" }}>
                      <input
                        type="number"
                        style={{ width: "9vw" }}
                        onChange={(e) => {
                          setCountryside(
                            cuntrycide.filter((x) =>
                              x?.dial_code.includes(e.target.value)
                            )
                          );
                         
                        }}
                      />
                    </div>
             

                    {countryside &&
                      countryside?.map((code, index) => {
                        return (
                          <MenuItem
                            onClick={() => {
                              setCountrycode(code?.dial_code);
                            }}
                            value={index + 1}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                marginTop: "0.5vw",
                              }}
                            >
                              {code?.dial_code} {code?.code}
                            </div>
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <input
              type="number"
              style={{ paddingLeft: "11vw" }}
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <CloseIcon
              style={{
                position: "relative",
                right: "2vw",
                top: "1.3vw",
                fontSize: "1.3vw",
              }}
            />
          </div>
          <div className="jobpodtedfieldtitile">Email</div>
          <div className="jobpostfieldinputbox">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{ width: "29.2vw" }}
            />
          </div>
          <div className="checktemandc">
            <div className="checkbox" onClick={() => setCheckone(!checkone)}>
              {checkone ? (
                <DoneIcon
                  style={{
                    fontSize: "0.81vw",
                    color: "blueviolet",
                    fontWeight: "600",
                  }}
                />
              ) : (
                ""
              )}{" "}
            </div>
            <div className="checktermandconditiontext">
              I agree the <span>Terms and Condition</span>
            </div>
          </div>
          <div className="checktemandc">
            <div className="checkbox" onClick={() => setCheckone1(!checkone1)}>
              {checkone1 ? (
                <DoneIcon
                  style={{
                    fontSize: "0.81vw",
                    color: "blueviolet",
                    fontWeight: "600",
                  }}
                />
              ) : (
                ""
              )}{" "}
            </div>
            <div className="checktermandconditiontext">
              I agree the <span>Privacy Policy</span>
            </div>
          </div>
          {erroeshow ? (
            <div style={{ color: "red" }} className="jobpodtedfieldtitile">
              {" "}
              * Fill All the Fields
            </div>
          ) : (
            ""
          )}{" "}
          <div style={{ marginBottom: "4vw" }} className="homejobbuttons">
            <button
              style={{ background: "white" }}
              onClick={() => {
                navigate("/dashbaord/refrences");
              }}
            >
              Cancel
            </button>

            <button
              style={{ color: "white" }}
              disabled={checkone && checkone1 ? false : true}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import img51 from "../../assets/Web 1280 – 14/Group 10219.svg";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Backdrop, TextField } from "@mui/material";
import Popover from "@mui/material/Popover";
import img4 from "../../assets/Web 1280 – 14/Ellipse 1375.svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import imgxxx from "../../assets/jobhome/Group 8797.svg";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import img2 from "../../assets/file.svg";
import img3 from "../../assets/close.svg";
import Modal from "@mui/material/Modal";
import Homejobconfirm from "./Homejobconfirm";
import cuntrycide from "../../helper/c";
import axios from "axios";
import API_HOST from "../../env";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "@mui/material/Fade";

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
    width: "11vw",
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
    width: "9vw",
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
  select4: {
    height: "8.1vw",
    width: "100%",
    marginTop: "0.3vw",
    padding: "1vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1vw",
    lineHeight: "120%",

    color: "#FFFFFF",
  },
  select5: {
    height: "8vw",
    width: "30vw",
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
  select6: {
    height: "7vw",
    width: "25vw",
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
  width: "75vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "50vw",
};

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1.5,
  pr: 1,
};

export default function HomePostjob({
  width,
  handleClose,
  SelectedCategory,
  SelectedCategoryId,
  showBudget,
  showDuration,
  SubSelectedCategory,
  SubSelectedCategoryId,
  catalogueID,
  catalogue,
}) {
  const classes = useStyles();

  const [age, setAge] = React.useState(10);

  const [age2, setAge2] = React.useState(98);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange2x = (event) => {
    setAge2(event.target.value);
  };
  const [arrayoffiles, setArrayoffiles] = useState([]);
  const [countryside, setCountryside] = useState(cuntrycide);
  const [mobilecuntry, setMobilecuntry] = useState(1);

  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);

  const [cateaddcheckbox1, setCateaddcheckbox1] = useState(true);
  /* VALIDATION FUNCTIONALITY */
  const initialValues = {
    name: "",
    title: "",
    // desc: "",
    mobile: "",
    email: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChangeFormVal = (e) => {
    setFormErrors("");
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const phoneno = /^[0-9]{10}$/;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.title) {
      errors.title = "Title is required!";
    }
    // if (!values.desc) {
    //   errors.desc = "Description is required!";
    // }
    if (!phoneno.test(values.mobile)) {
      errors.mobile =
        "Required 10 digits mobile number, match requested format!!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    setLoading(false);
    return errors;
  };

  const [name, setName] = useState("");
  const [open121, setOpen121] = React.useState(false);
  const handleClose121 = () => {
    setOpen121(false);
  };
  const handleToggle121 = () => {
    setOpen121(!open121);
  };
  const [title, settitle] = useState("");
  const [desc, setDesc] = useState("");

  const [datestart, setDatestart] = useState();
  const [dateend, setDateend] = useState();

  const [countrycode, setCountrycode] = useState("+91");
  const [mobile, setMobile] = useState();

  const [validateMobile, setValidateMobile] = useState("");
  const [validateEmail, setValidateEmail] = useState("");
  const [checkedtocompany, setCheckedtocompany] = useState(false);
  const [checkedtocompany_2, setCheckedtocompany_2] = useState(false);
  const [checkboxValidaData, setcheckboxValidaData] = useState("");
  const [checkboxValidaData_2, setcheckboxValidaData_2] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePostJOb = () => {
    if (checkedtocompany === false) {
      setcheckboxValidaData("Please Select the Terms & Condition");
      return false;
    }
    if (checkedtocompany_2 === false) {
      setcheckboxValidaData_2("Please Select the Privacy Policy");
      return false;
    }

    setValidateMobile("");
    setValidateEmail("");
    if (Object.getOwnPropertyNames(validate(formValues)).length !== 0) {
      setFormErrors(validate(formValues));
      return false;
    }
    if (Object.getOwnPropertyNames(validate(formValues)).length === 0) {
      setFormErrors(validate(formValues));
    }

    const formdata = new FormData();
    formdata.append("name", formValues.name);
    formdata.append("jobTitle", formValues.title);
    formdata.append("budget", showBudget);
    formdata.append("duration", showDuration);
    formdata.append("startDate", datestart);
    formdata.append("endDate", dateend);
    formdata.append("description", catalogue?.description);
    formdata.append("mobile", countrycode + formValues.mobile);
    formdata.append("emailId", formValues.email);
    formdata.append("catalogueId", catalogueID);
    formdata.append("remote", !cateaddcheckbox1);
    formdata.append("location", studyset);
    arrayoffiles?.map((data) => {
      formdata.append("fileName", data);
    });
    formdata.append("skills", JSON.stringify(skillset));
    handleToggle121();
    axios
      .post(`${API_HOST}/bookings/addBookings`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setWorktitile(res?.data?.success?.data?.workTitle);
        setUsername(res?.data?.success?.data?.userName);
        setPassword(res?.data?.success?.data?.hasedPW);
        handleClose121();
        handleOpenx();
      })
      .catch((err) => {
        setLoading(false);
        handleClose121();
        if (
          err.response.data.fails.data.code ===
          "auth/phone-number-already-exists"
        ) {
          setValidateMobile(err.response.data.fails.data.message);
        }
        // if(err.response.data.fails.data.code === "auth/invalid-phone-number"){
        //   setValidateMobile(err.response.data.fails.data.message)
        // }
        if (err.response.data.fails.data.code === "auth/email-already-exists") {
          setValidateEmail(err.response.data.fails.data.message);
        }
        setErroeshow(true);
      });
  };
  const [erroeshow, setErroeshow] = useState(false);

  const [worktitile, setWorktitile] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [trackingid, setTrackingid] = useState("");

  const [studyset, setstudyset] = useState("");

  const [arrayoflongstudy, setArrayoflongstudy] = useState([]);

  const [skillset, setskillset] = useState([]);

  const [setSelectedCategory, setSetSelectedCategory] = useState("");

  const [locationname, setLocationname] = useState("");

  const [anchorElx4, setAnchorElx4] = useState(null);

  const openx4 = Boolean(anchorElx4);
  const idx4 = openx4 ? "simple-popover" : undefined;

  const handleClickx4 = (event) => {
    setAnchorElx4(event.currentTarget);
  };

  const handleClosex4 = () => {
    setAnchorElx4(null);
  };

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/location/viewLocation?pageSize=100&pageNumber=1&search=${locationname}`
      )
      .then((res) => {
        setArrayoflongstudy(res?.data?.success?.data);
      });
  }, [locationname]);

  const handleSearchCategory = (e) => {
    if (SelectedCategoryId && SubSelectedCategoryId) {
      axios
        .get(
          `${API_HOST}/theSkill/viewSkill?pageSize=8&pageNumber=1&skill=${e.target.value}&categoryId=${SelectedCategoryId}&subCategoryId=${SubSelectedCategoryId}`
        )
        .then((res) => {
          setAllcategory(res?.data?.success?.data);
          if (res?.data?.success?.data?.length > 0) {
            setIstdropdown(true);
          }
        });
    }
  };

  const [istdropdown, setIstdropdown] = useState(false);
  const [allcategory, setAllcategory] = useState([0]);

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <div style={{ height: "none" }} className="home-postjob-container">
      {width > 700 && (
        <div className="homepostjob-left">
          <div className="homejobpostimgsec">
            <img
              src={imgxxx}
              style={{ marginBottom: "2vw", marginTop: "2vw" }}
              alt=""
            />
          </div>
          <div className="homepastjobtrustbox">
            <div className="homepostjobtrust">Trusted by 44 Resources</div>
          </div>
          <div
            className="loader_circular"
            style={{ display: "flex", justifyContent: "flex-end" }}
          ></div>
        </div>
      )}
      <div
        style={{ overflowX: "hidden", padding: "1vw", paddingLeft: "3vw" }}
        className="homepostjob-right"
      >
        <div className="jobpostedformheading">Booking Details</div>

        <div>
          <div className="jobpodtedfieldtitile">Job Category</div>
          <div className="jobpostfieldinputbox">
            <input type="text" value={SelectedCategory} disabled />
          </div>
          <div className="jobpodtedfieldtitile">Sub Category</div>
          <div className="jobpostfieldinputbox">
            <input type="text" value={SubSelectedCategory} disabled />
          </div>
          <div className="jobpodtedfieldtitile">Name *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="name"
              // value={name}
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
              value={formValues.name}
              onChange={handleChangeFormVal}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.name}</p>
          <div className="jobpodtedfieldtitile">Job Title *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="title"
              // value={title}
              // onChange={(e) => {
              //   settitle(e.target.value);
              // }}
              value={formValues.title}
              onChange={handleChangeFormVal}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.title}</p>

          <div className="jobpodtedfieldtitile"></div>
          <div className="row">
            <div
              style={{ width: width <= 700 && "50%" }}
              className="col-sm-6 jobpodtedfieldtitile"
            >
              Budget
            </div>
            <div
              style={{ width: width <= 700 && "50%" }}
              className="col-sm-6 jobpodtedfieldtitile"
            >
              Duration
            </div>
          </div>
          <div
            style={{ left: "0vw", width: "99%", margin: "0vw 0.5vw 2vw 0vw" }}
            className="loginfield"
          >
            <div className="jobpostfieldinputbox">
              <input type="text" value={showBudget} disabled />
            </div>
            <div className="jobpostfieldinputbox ms-3">
              <input type="text" value={showDuration} disabled />
            </div>
          </div>

          <div className="jobpodtedfieldtitile">Date *</div>
          <div className="homjobpost-popbudegt">
            <div className="min-maxhomejob">Start</div>
            <div className="">
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: width > 700 ? "2.5vw" : "8vw",
                  width: width > 700 ? "11vw" : "30vw",
                  borderRadius: "5px",
                  margin: "0.5vw 1.5vw",
                  padding: "0 0.2vw",
                }}
                className="setting-toggler"
              >
                <input
                  style={{
                    lineHeight: width > 700 ? "2vw" : "5vw",
                    width: "100%",
                  }}
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="input-homejobformdate"
                  name=""
                  id=""
                  min={disablePastDate()}
                  max={"2025-12-31"}
                  maxlength="4"
                  onChange={(e) => {
                    setDatestart(e.target.value);
                  }}
                />
              </Box>
            </div>
            <div style={{ marginLeft: "1vw" }} className="min-maxhomejob">
              End
            </div>
            <div className="">
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: width > 700 ? "2.5vw" : "8vw",
                  width: width > 700 ? "11vw" : "30vw",
                  borderRadius: "5px",
                  margin: "0.5vw 1.5vw",
                  padding: " 0 0.2vw",
                }}
                className="setting-toggler"
              >
                <input
                  style={{
                    lineHeight: width > 700 ? "2vw" : "5vw",
                    width: "100%",
                  }}
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="input-homejobformdate"
                  name=""
                  id=""
                  min={disablePastDate()}
                  max={"2025-12-31"}
                  maxlength="4"
                  onChange={(e) => {
                    setDateend(e.target.value);
                  }}
                />
              </Box>
            </div>
          </div>
          <div className="jobpodtedfieldtitile">Image/Documents </div>
          <div className="fileinputbox1">
            <label htmlFor="fileupload">
              <div>
                <FileUploadIcon
                  style={{
                    fontSize: width > 700 ? "3vw" : "9vw",
                    color: "#8f92a173",
                    cursor: "pointer",
                  }}
                />
              </div>
              <input
                type="file"
                name="fileupload"
                id="fileupload"
                hidden
                onChange={(e) => {
                  setArrayoffiles([...arrayoffiles, e.target.files[0]]);
                }}
              />
              <div
                className="min-maxhomejob"
                style={{ textAlign: "center", width: "100%" }}
              >
                Drag and Drop or Browse to upload
              </div>
            </label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: width > 700 ? "0.8vw" : "2.8vw",
              paddingRight: "2vw",
              textAlign: "right",
            }}
          >
            Please upload file having extensions .jpeg/ .jpg/ .png only.
            <br />
            Image should be less then 512 kb.
          </div>
          <div
            className={arrayoffiles?.length > 0 ? "inputfilesshowncatebox" : ""}
          >
            {arrayoffiles?.length > 0 &&
              arrayoffiles?.map((file, index) => {
                return (
                  <div className="inputfilesshowncatboxsingle">
                    <div className="inputfilesshowncatboxsingleimg">
                      <img src={img2} alt="" />
                    </div>
                    <div className="fileselctednamecate">{file?.name}</div>
                    <div className="inputfilesshowncatboxsingleimg">
                      <img
                        style={{
                          width: width > 700 ? "1.5vw" : "4vw",
                          marginLeft: "1vw",
                          cursor: "pointer",
                        }}
                        src={img3}
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

          <div
            style={{
              marginBottom: "0.5vw",
              marginTop: "1.3vw",
              fontSize: width > 700 ? "1.2vw" : "3.3vw",
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
                      padding: " 0.5vw 1vw",
                      margin: "0.51vw 0.5vw",
                    }}
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
              <div style={{ height: width > 700 ? "3vw" : "9vw" }}>
                {skillset?.length < 10 ? (
                  <input
                    style={{
                      border: "none",
                      outline: "none",
                      background: "white",
                      height: "3vw",
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
                    // onKeyPress={(e) => {
                    //   if (e.key === "Enter") {
                    //     e.preventDefault();
                    //     if (skillset.indexOf(setSelectedCategory) < 0) {
                    //       setskillset(
                    //         [...skillset, setSelectedCategory].slice(0, 10)
                    //       );
                    //     }
                    //   }
                    //  setSetSelectedCategory("")
                    // }}
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
                                    [...skillset, data?.skill].slice(0, 10)
                                  );
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
          <div className="jobpodtedfieldtitile mt-2">Mobile *</div>
          <div className="jobpostfieldinputbox">
            <div style={{ width: "0.1vw", zIndex: "3" }}>
              <div className="okmobilejobform" onClick={handleOpenx}>
                {mobilecuntry}
              </div>
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: width > 700 ? "3vw" : "9vw",
                  width: width > 700 ? "10vw" : "26vw",
                  borderRadius: "5px",
                  margin: "0vw 0vw",
                  position: "relative",
                  bottom: width > 700 ? "0.71vw" : "0.2vw",
                }}
                className="setting-toggler"
              >
                <FormControl variant="standard" fullWidth>
                  <Select
                    className={width > 700 ? classes.select3 : classes.select6}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age2}
                    defaultValue={age2}
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
                          width: "9vw",
                          maxHeight: width > 700 ? "18vw" : "50vw",
                          "& .MuiMenuItem-root": {
                            padding: "0.1vw 0.1vw",
                            width: "100%",
                            height: "2vw",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: width > 700 ? "0.85vw" : "2.8vw",
                            lineHeight: width > 700 ? "1.2vw" : "3.5vw",
                            minHeight: width > 700 ? "1.5vw" : "5vw",
                            color: "#6b6b6b",
                          },
                        },
                      },
                    }}
                  >
                    <div style={{ width: width > 700 ? "9vw" : "25vw" }}>
                      <input
                        type="number"
                        style={{ width: width > 700 ? "9vw" : "25vw" }}
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
              style={{ paddingLeft: width > 700 ? "11vw" : "27vw" }}
              name="mobile"
              // value={mobile}
              // onChange={(e) => {
              //   setMobile(e.target.value);
              // }}
              value={formValues.mobile}
              onChange={handleChangeFormVal}
            />
          </div>
          <p style={{ color: "red", fontSize: "1vw" }}>
            {validateMobile ? validateMobile : ""}
          </p>
          <p style={{ color: "red", fontSize: "1vw" }}>{formErrors.mobile}</p>
          <div className="jobpodtedfieldtitile">Email *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              style={{ width: "29.2vw" }}
              name="email"
              value={formValues.email}
              onChange={handleChangeFormVal}
            />
          </div>
          <p style={{ color: "red", fontSize: "1vw" }}>
            {validateEmail ? validateEmail : ""}
          </p>
          <p style={{ color: "red" }}>{formErrors.email}</p>
          <div className="jobpodtedfieldtitile">Location *</div>
          <div
            style={{ display: "flex", alignItems: "center", fontWeight: "500" }}
          >
            <div
              onClick={() => setCateaddcheckbox1(true)}
              className="checkboxfromcate"
              style={{ marginRight: "2vw" }}
            >
              <div>
                {cateaddcheckbox1 ? <img src={img51} /> : <img src={img4} />}{" "}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "500",
                }}
              >
                On Site
              </div>
            </div>
            <div
              onClick={() => {
                setCateaddcheckbox1(false);
              }}
              className="checkboxfromcate"
            >
              <div>
                {cateaddcheckbox1 ? <img src={img4} /> : <img src={img51} />}{" "}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "500",
                }}
              >
                Remote
              </div>
            </div>
          </div>
          {/*------------- Location Code Starts ---------------- */}
          {cateaddcheckbox1 ? (
            <div>
              <div
                style={{
                  left: "0vw",
                  width: width > 700 ? "31vw" : "84vw",
                  marginLeft: "0",
                }}
                className="loginfield"
                onClick={handleClickx4}
              >
                <TextField
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
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
                    console.log(e.target.value);
                  }}
                />
                <span style={{ width: "0.1vw" }}>
                  <KeyboardArrowDownOutlined
                    style={{
                      fontSize: width > 700 ? "1.5vw" : "4vw",
                      position: "relative",
                      right: width > 700 ? "2vw" : "5vw",
                      top: width > 700 ? "1vw" : "3vw",
                    }}
                  />
                </span>
              </div>
              <Popover
                id={idx4}
                open={openx4}
                anchorEl={anchorElx4}
                onClose={handleClosex4}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div
                  style={{
                    maxHeight: width > 700 ? "18vw" : "40vw",
                    overflow: "scroll",
                  }}
                >
                  <Typography
                    sx={{
                      p: 1,
                      pl: 1,
                      ml: 1,
                      width: width > 700 ? "40vw" : "80vw",
                      position: "fixed",
                      background: "white",
                      zIndex: "10",
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setLocationname(e.target.value);
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
                      width: width > 700 ? "40vw" : "80vw",
                      cursor: "pointer",
                    }}
                  ></Typography>

                  {arrayoflongstudy.map((data, index) => {
                    return (
                      <Typography
                        sx={{
                          p: 0.51,
                          pl: 1,
                          ml: 1,
                          width: width > 700 ? "32.5vw" : "80vw",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setstudyset(
                            data?.area + ", " + data?.city + ", " + data?.state
                          );
                          handleClosex4();
                        }}
                      >
                        {data?.area + ", " + data?.city + ", " + data?.state}
                      </Typography>
                    );
                  })}
                </div>
              </Popover>
            </div>
          ) : (
            ""
          )}

          <div className="checktemandc">
            <input
              type="checkbox"
              onChange={() => {
                setCheckedtocompany(!checkedtocompany);
                setcheckboxValidaData("");
              }}
              name=""
              id="checkbox"
            />
            <div className="checktermandconditiontext">
              I agree the{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => window.open("/termsandconditions", "_blank")}
              >
                Terms and Condition *
              </span>
            </div>
          </div>
          <span style={{ color: "red", fontSize: "10px" }}>
            {checkboxValidaData}
          </span>
          <div className="checktemandc">
            <input
              type="checkbox"
              onChange={() => {
                setCheckedtocompany_2(!checkedtocompany_2);
                setcheckboxValidaData_2("");
              }}
              name=""
              id="checkbox"
            />
            <div className="checktermandconditiontext">
              I agree the{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => window.open("/privacypolicy", "_blank")}
              >
                Privacy Policy *
              </span>
            </div>
          </div>
          <span style={{ color: "red", fontSize: "10px" }}>
            {checkboxValidaData_2}
          </span>
          <div className="homejobbuttons">
            <button
              style={{ background: "white" }}
              onClick={handleClose}
              //  onClick={handleOpenx}
            >
              Cancel
            </button>
            <button
              style={{ background: "white" }}
              onClick={() => {
                // setEmail("");
                setMobile();
                setName("");
                setDesc("");
                // setFile();
                settitle("");
              }}
            >
              Reset
            </button>
            <button
              // disabled={checkone && checkone1 ? false : true}
              style={{ color: "white" }}
              onClick={handlePostJOb}
            >
              Submit
            </button>
          </div>
        </div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open121}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
      <Modal
        //   hideBackdrop
        open={openx}
        onClose={handleClosex}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style : style2}>
          <Homejobconfirm
            width={width}
            handleClose={handleClose}
            handleClosex={handleClosex}
            workTitle={formValues.title}
            trackingId={trackingid}
            password={password}
            username={username}
            email={formValues.email}
          />
        </Box>
      </Modal>
    </div>
  );
}

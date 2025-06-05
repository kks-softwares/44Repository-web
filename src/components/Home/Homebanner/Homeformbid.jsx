import React, { useEffect, useState } from "react";
import "./Homebanner.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import img from "../../../assets/jobhome/Completed-pana (1).svg";
import img1 from "../../../assets/jobhome/checkmark (1) (1).svg";
import img2 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import cuntrycide from "../../../helper/c";
import axios from "axios";
import API_HOST from "../../../env";
import img44 from "../../../assets/Web 1280 – 14/Icon.svg";
import img111 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img51 from "../../../assets/Web 1280 – 14/Group 10219.svg";
import img47 from "../../../assets/Web 1280 – 14/Ellipse 1375.svg";
import img13 from "../../../assets/Web 1280 – 14/close_black_24dp.svg";
import AddIcon from "@mui/icons-material/Add";
import imgxxx1 from "../../../assets/jobhome/Group 8868.svg";
import { TextField } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import Listofjobbox from "./Listofjobbox";
import StarIcon from "@mui/icons-material/Star";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import img10 from "../../../assets/User Dashboard After Login - Apply work Description/Iconly-Light-Calendar.svg";
import img11 from "../../../assets/User Dashboard After Login - Apply work Description/Iconly-Light-Chart.svg";
import img21 from "../../../assets/User Dashboard After Login - Apply work Description/Iconly-Light-Profile.svg";
import img3 from "../../../assets/User Dashboard After Login - Apply work Description/verified_black_24dp.svg";
import img41 from "../../../assets/User Dashboard After Login - Apply work Description/Wallet.svg";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";


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
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "91vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};

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

export default function Homeformbid({
  width,
  handleClose,
  setSelectedCategory,
  setSelectedCategoryid,
}) {
  const [open121, setOpen121] = React.useState(false);
  const handleClose121 = () => {
    setOpen121(false);
  };
  const handleToggle121 = () => {
    setOpen121(!open121);
  };

  const classes = useStyles();
  const [age3, setAge3] = React.useState(0);
  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };

  const [cateaddcheckbox1, setCateaddcheckbox1] = useState(true);
  const [arrayoffiles, setArrayoffiles] = useState([]);
  const [service1name, setService1name] = useState("");
  const [service2name, setService2name] = useState("");
  const [service3name, setService3name] = useState("");
  const [service4name, setService4name] = useState("");
  const [service5name, setService5name] = useState("");

  const [service1namep, setService1namep] = useState(0);
  const [service2namep, setService2namep] = useState(0);
  const [service3namep, setService3namep] = useState(0);
  const [service4namep, setService4namep] = useState(0);
  const [service5namep, setService5namep] = useState(0);

  const [service1named, setService1named] = useState("");
  const [service2named, setService2named] = useState("");
  const [service3named, setService3named] = useState("");
  const [service4named, setService4named] = useState("");
  const [service5named, setService5named] = useState("");

  const [arrayofservices, setArrayofservices] = useState([
    { name: "Starter", price: "10", days: "3", id: 1 },
  ]);

  const initialValues = {
    name: "",
    mobile: "",
    email: "",
    mile_description: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChangeHomeFormVal = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneno = /^[0-9]{10}$/;
    if (!values.name) {
      errors.name = "Full name is required!";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile number is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!phoneno.test(values.mobile)) {
      errors.mobile =
        "Required 10 digits mobile number, match requested format!!";
    }

    return errors;
  };

  const [validateMobile, setValidateMobile] = useState("");
  const [validateEmail, setValidateEmail] = useState("");

  const [checkedtocompany, setCheckedtocompany] = useState(false);
  const [checkedtocompany_2, setCheckedtocompany_2] = useState(false);
  const [checkboxValidaData, setcheckboxValidaData] = useState("");
  const [checkboxValidaData_2, setcheckboxValidaData_2] = useState("");

  const handlesavedaddcatalogue = () => {
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
    if(Object.getOwnPropertyNames(validate(formValues)).length !== 0){
        setFormErrors(validate(formValues));
        return false;
      }
      if(Object.getOwnPropertyNames(validate(formValues)).length === 0){
        setFormErrors(validate(formValues));
      }
    if (cateaddcheckbox1) {
      const formdata = new FormData();
      handleToggle121();
      arrayoffiles?.length > 0 &&
        arrayoffiles?.map((data, index) => {
          formdata.append("fileName", data);
        });

      if (arrayofservices.length === 0) {
        setErroeshow(true);
        return;
      }
      if (arrayofservices.length === 1) {
        formdata.append("milestoneDescription1", service1name);
        formdata.append("milestonePrice1", service1namep);
        formdata.append("milestoneDueDate1", service1named);
      }
      if (arrayofservices.length === 2) {
        formdata.append("milestoneDescription1", service1name);
        formdata.append("milestonePrice1", service1namep);
        formdata.append("milestoneDueDate1", service1named);
        formdata.append("milestoneDescription2", service2name);
        formdata.append("milestonePrice2", service2namep);
        formdata.append("milestoneDueDate2", service2named);
      }
      if (arrayofservices.length === 3) {
        formdata.append("milestoneDescription1", service1name);
        formdata.append("milestonePrice1", service1namep);
        formdata.append("milestoneDueDate1", service1named);
        formdata.append("milestoneDescription2", service2name);
        formdata.append("milestonePrice2", service2namep);
        formdata.append("milestoneDueDate2", service2named);
        formdata.append("milestoneDescription3", service3name);
        formdata.append("milestonePrice3", service3namep);
        formdata.append("milestoneDueDate3", service3named);
      }
      if (arrayofservices.length === 4) {
        formdata.append("milestoneDescription1", service1name);
        formdata.append("milestonePrice1", service1namep);
        formdata.append("milestoneDueDate1", service1named);
        formdata.append("milestoneDescription2", service2name);
        formdata.append("milestonePrice2", service2namep);
        formdata.append("milestoneDueDate2", service2named);
        formdata.append("milestoneDescription3", service3name);
        formdata.append("milestonePrice3", service3namep);
        formdata.append("milestoneDueDate3", service3named);
        formdata.append("milestoneDescription4", service4name);
        formdata.append("milestonePrice4", service4namep);
        formdata.append("milestoneDueDate4", service4named);
      }
      if (arrayofservices.length === 5) {
        formdata.append("milestoneDescription1", service1name);
        formdata.append("milestonePrice1", service1namep);
        formdata.append("milestoneDueDate1", service1named);
        formdata.append("milestoneDescription2", service2name);
        formdata.append("milestonePrice2", service2namep);
        formdata.append("milestoneDueDate2", service2named);
        formdata.append("milestoneDescription3", service3name);
        formdata.append("milestonePrice3", service3namep);
        formdata.append("milestoneDueDate3", service3named);
        formdata.append("milestoneDescription4", service4name);
        formdata.append("milestonePrice4", service4namep);
        formdata.append("milestoneDueDate4", service4named);
        formdata.append("milestoneDescription5", service5name);
        formdata.append("milestonePrice5", service5namep);
        formdata.append("milestoneDueDate5", service5named);
      }
      formdata.append("jobPostId", data1?._id);
      formdata.append("category", data1?.category?._id);
      formdata.append("subCategory", data1?.subCategory?._id);
      formdata.append("shortDescription", desc);
      formdata.append("totalProjectPrice", totalPrice);
      formdata.append("byMiletone", true);
      formdata.append("byProject", false);
      formdata.append("contactNo", countrycode + formValues.mobile);
      formdata.append("emailId", formValues.email);
      formdata.append("bidderName", formValues.name);
      formdata.append("jobposter_id", data1?.user_id?._id);

      axios
        .post(`${API_HOST}/biding/non_userBiding`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setTrackingid(res.data.success?.data?.trackingId);
          setPassword(res.data.success?.userDetails?.password);
          setUsername(res.data.success?.userDetails?.userName);
          const formdata = new FormData();

          formdata.append("jobPostId", data1?.jobPostId);
          formdata.append("userName", res.data.success?.userDetails?.userName);
          formdata.append("user_id", res.data.success?.data?.user_id);
          formdata.append("bidingId", res?.data?.success?.data?._id);
          axios
            .post(`${API_HOST}/jobPost/updateListOfBider`, formdata, {
              headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
              },
            })
            .then((res) => {
              handleClose121();
              setListshow(3);
            });
        })
        .catch((err) => {
        
          if (
            err.response.data.fails.data.code ===
            "auth/phone-number-already-exists"
          ) {
            setValidateMobile(err.response.data.fails.data.message);
          }
          if (
            err.response.data.fails.data.code === "auth/email-already-exists"
          ) {
            setValidateEmail(err.response.data.fails.data.message);
          }
          setErroeshow(true);
        });
    } else {
      const formdata = new FormData();
      handleToggle121();
      arrayoffiles?.length > 0 &&
        arrayoffiles?.map((data, index) => {
          formdata.append("fileName", data);
        });

      if (arrayofservices.length === 0) {
        setErroeshow(true);
        return;
      }
      if (arrayofservices.length === 1) {
        formdata.append("milestoneDescription1", service1name);
        formdata.append("milestonePrice1", service1namep);
        formdata.append("milestoneDueDate1", service1named);
      }

      formdata.append("jobPostId", data1?._id);
      formdata.append("category", data1?.category?._id);
      formdata.append("subCategory", data1?.subCategory?._id);
      formdata.append("shortDescription", desc);
      formdata.append("totalProjectPrice", totalPrice);
      formdata.append("byMiletone", false);
      formdata.append("byProject", true);
      formdata.append("contactNo", countrycode + formValues.mobile);
      formdata.append("emailId", formValues.email);
      formdata.append("bidderName", formValues.name);
      formdata.append("jobposter_id", data1?.user_id?._id);
      axios
        .post(`${API_HOST}/biding/non_userBiding`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          
          setTrackingid(res.data.success?.data?.trackingId);
          setPassword(res.data.success?.userDetails?.password);
          setUsername(res.data.success?.userDetails?.userName);

          const formdata = new FormData();

          formdata.append("jobPostId", data1?.jobPostId);
          formdata.append("userName", res.data.success?.userDetails?.userName);
          formdata.append("user_id", res.data.success?.data?.user_id);
          formdata.append("bidingId", res?.data?.success?.data?._id);
          axios
            .post(`${API_HOST}/jobPost/updateListOfBider`, formdata, {
              headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
              },
            })
            .then((res) => {
              handleClose121();
              setListshow(3);
            });
        })
        .catch((err) => {
          setErroeshow(true);
        });
    }
  };

  const [erroeshow, setErroeshow] = useState(false);

  const [totalPrice, settotalPrice] = useState(0);
  const [age2, setAge2] = React.useState(98);
  const [mobilecuntry, setMobilecuntry] = useState(1);
  const handleChange2x = (event) => {
    setAge2(event.target.value);
  };

  const [openx1, setOpenx1] = React.useState(false);
  const handleOpenx = () => setOpenx1(true);
  const handleClosex = () => setOpenx1(false);

  const [listshow, setListshow] = useState(0);
  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);

  const [allbiddingList, setAllbiddingList] = useState([]);

  const [countryside, setCountryside] = useState(cuntrycide);

  const [imagesave, setImagesave] = useState();
  const [countrycode, setCountrycode] = useState("+91");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [trackingid, setTrackingid] = useState("");

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const [percentToGet, setPercentToGet] = useState(30);
  const [allsubcategory, setAllsubcategory] = useState([]);
  const [subcate, setsubcate] = useState("");
  const [subcateid, setsubcateid] = useState("");

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/subCategory/viewSubCategory?pageSize=6&pageNumber=1&categoryId=${setSelectedCategoryid}`
      )
      .then((res) => {
        setAllsubcategory(res?.data?.success?.data);
      });
  }, [setSelectedCategoryid]);

  const [anchorElx4, setAnchorElx4] = React.useState(null);
  const handleClickx4 = (event) => {
    setAnchorElx4(event.currentTarget);
  };
  const handleClosex4 = () => {
    setAnchorElx4(null);
  };
  const openx4 = Boolean(anchorElx4);
  const idx4 = openx4 ? "simple-popover" : undefined;

  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  const open4 = Boolean(anchorEl4);
  const id4 = open4 ? "simple-popover" : undefined;

  const [prevselectedbiddingvalue, setprevSelectedbiddingvalue] = useState("");
  const [locationname, setLocationname] = useState([]);
  const [arrayoflongstudy1, setArrayoflongstudy1] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/location/viewLocation?pageSize=100&pageNumber=1&search=${locationname}`
      )
      .then((res) => {
        setArrayoflongstudy1(res?.data?.success?.data);
      });
  }, [locationname]);

  const [studyset1, setstudyset1] = useState("");

  const [arrayofminbudget, setArrayofminbudget] = useState([]);

  useEffect(() => {
    axios.get(`${API_HOST}/budget/viewBudget`).then((res) => {
      setArrayofminbudget(res?.data?.success?.data);
    });
  }, []);

  const [prevdatestart1, setprevDatestart1] = useState();
  const [prevdatestart1x, setprevDatestart1x] = useState();

  const [desc, setDesc] = useState();

  const [data1, setdata1] = useState([]);

  const [open11, setOpen11] = useState(false);

  const handleOpen11 = () => {
    setOpen11(true);
  };
  const handleClose11 = () => {
    setOpen11(false);
  };

  const handlesearchJobs = () => {
    axios
      .get(
        `${API_HOST}/biding/browseWork?pageSize=9&pageNumber=${page}&search=${setSelectedCategory}&${
          subcateid ? "subCategory=" : ""
        }${subcateid}&${
          prevselectedbiddingvalue ? "bidingValue=" : ""
        }${prevselectedbiddingvalue}&${
          studyset1 ? "location=" : ""
        }${studyset1}&${
          setSelectedCategoryid ? "category=" : ""
        }${setSelectedCategoryid}&${
          prevdatestart1 ? "from=" : ""
        }${prevdatestart1}&${prevdatestart1x ? "to=" : ""}${prevdatestart1x}
    `
      )
      .then((res) => {
        setAllbiddingList(res.data?.success?.data);
        setListshow(1);
        if (res.data?.success?.data?.length === 9) {
          settotalpages(page + 1);
        } else {
          settotalpages(page);
        }
      });
  };

  useEffect(() => {
    if (listshow === 1) {
    
      axios
        .get(
          `${API_HOST}/biding/browseWork?pageSize=9&pageNumber=${page}&search=${setSelectedCategory}&${
            subcateid ? "subCategory=" : ""
          }${subcateid}&${
            prevselectedbiddingvalue ? "bidingValue=" : ""
          }${prevselectedbiddingvalue}&${
            studyset1 ? "location=" : ""
          }${studyset1}&${
            setSelectedCategoryid ? "category=" : ""
          }${setSelectedCategoryid}&${
            prevdatestart1 ? "from=" : ""
          }${prevdatestart1}&${prevdatestart1x ? "to=" : ""}${prevdatestart1x}
`
        )
        .then((res) => {
          setAllbiddingList([...allbiddingList, ...res.data?.success?.data]);
          setListshow(1);
          if (res.data?.success?.data?.length === 9) {
            settotalpages(page + 1);
          } else {
            settotalpages(page);
          }
        });
    }
  }, [page]);

  return (
    <div>
      {listshow === 0 && (
        <div>
          <div style={{}} className="home-postjob-container">
            {width > 700 && (
              <div style={{ width: "35vw" }} className="homepostjob-left">
                <div
                  style={{
                    width: "35vw",
                    position: "relative",
                    right: "3vw",
                    top: "4vw",
                  }}
                  className="homejobpostimgsec"
                >
                  <img
                    src={imgxxx1}
                    style={{
                      marginBottom: "2vw",
                      marginTop: "2vw",
                      width: "32vw",
                      objectfit: "container",
                    }}
                    alt=""
                  />
                </div>
                <div className="homepastjobtrustbox">
                  <div
                    style={{
                      width: "25vw",
                      position: "relative",
                      right: "0vw",
                      top: "5vw",
                    }}
                    className="homepostjobtrust"
                  >
                    Trusted by 44 Resources
                  </div>
                </div>
              </div>
            )}
            <div
              style={{
                overflowX: "hidden",
                overflowY: "scroll",
                width: width > 700 ? "40vw" : "",
                boxShadow: "none",
                padding: "2vw 0vw",
              }}
              className="homepostjob-right"
            >
              <div className="jobpostedformheading">Filter</div>

              <div className="jobpodtedfieldtitile">Job Category</div>
              <div className="jobpostfieldinputbox">
                <input type="text" value={setSelectedCategory} disabled />
              </div>
              <div className="jobpodtedfieldtitile">Sub Category</div>
              <div className="">
                <Box
                  sx={{
                    background: "white",
                    border: "1px solid #7070705b",
                    height: width > 700 ? "3.0vw" : "9vw",
                    width: width > 700 ? "29vw" : "100%",
                    borderRadius: "5px",
                    margin: "0.5vw 0vw",
                  }}
                  className="setting-toggler"
                >
                  <FormControl variant="standard" fullWidth>
                    <Select
                      className={width > 700 ? classes.select : classes.select4}
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
                              width: "31vw",
                              height: "2vw",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: width > 700 ? "0.9vw" : "3vw",
                              lineHeight: width > 700 ? "1.4vw" : "4vw",
                              minHeight: width > 700 ? "1.5vw" : "5vw",
                              color: "#6b6b6b",
                            },
                          },
                        },
                      }}
                    >
                      <MenuItem onClick={() => {}} value={0} hidden>
                        Select
                      </MenuItem>
                      {allsubcategory?.length > 0 &&
                        allsubcategory?.map((res, index) => {
                          return (
                            <MenuItem
                              onClick={() => {
                                setsubcate(res?.subCategory);

                                setsubcateid(res?._id);
                              }}
                              value={index + 1}
                            >
                              {res?.subCategory}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                </Box>
              </div>

              <div className="jobpodtedfieldtitile"> Select Bidding Value </div>

              <div>
                <div
                  style={{
                    left: "0vw",
                    width: width > 700 ? "36vw" : "100%",
                    marginLeft: "0",
                  }}
                  className="loginfield"
                  onClick={handleClick4}
                >
                  <TextField
                    id="outlined-basic"
                    label="Bidding"
                    variant="outlined"
                    disabled
                    value={prevselectedbiddingvalue}
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
                  id={id4}
                  open={open4}
                  anchorEl={anchorEl4}
                  onClose={handleClose4}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <div
                    style={{
                      maxHeight: width > 700 ? "18vw" : "30vw",
                      overflow: "scroll",
                    }}
                  >
                    {arrayofminbudget?.length > 0 &&
                      arrayofminbudget?.map((data, index) => {
                        return (
                          <Typography
                            sx={{
                              p: 0.51,
                              pl: 1,
                              ml: 1,
                              width: width > 700 ? "35vw" : "83vw",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setprevSelectedbiddingvalue(data?.minimumBudget);
                              handleClose4();
                            }}
                          >
                            $ {data?.minimumBudget} +
                          </Typography>
                        );
                      })}
                  </div>
                </Popover>
              </div>

              <div className="jobpodtedfieldtitile"> Select Location </div>

              <div>
                <div
                  style={{
                    left: "0vw",
                    width: width > 700 ? "36vw" : "100%",
                    marginLeft: "0",
                  }}
                  className="loginfield"
                  onClick={handleClickx4}
                >
                  <TextField
                    id="outlined-basic"
                    label="Location"
                    variant="outlined"
                    disabled
                    value={studyset1}
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
                        fontSize: "1.5vw",
                        position: "relative",
                        right: "2vw",
                        top: "1vw",
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
                      maxHeight: width > 700 ? "18vw" : "30vw",
                      overflow: "scroll",
                    }}
                  >
                    <Typography
                      sx={{
                        p: 1,
                        pl: 1,
                        ml: 1,
                        width: width > 700 ? "35vw" : "83vw",
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
                        width: width > 700 ? "35vw" : "83vw",
                        cursor: "pointer",
                      }}
                    ></Typography>

                    {arrayoflongstudy1?.map((data, index) => {
                      return (
                        <Typography
                          sx={{
                            p: 0.51,
                            pl: 1,
                            ml: 1,
                            width: width > 700 ? "35vw" : "83vw",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setstudyset1(
                              data?.area +
                                ", " +
                                data?.city +
                                ", " +
                                data?.state
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

              <div className="jobpodtedfieldtitile">Created on</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "96%",
                }}
              >
                <div
                  style={{
                    width: width > 700 ? "50%" : "48%",
                    marginRight: "2vw",
                  }}
                >
                  <div
                    style={{ fontWeight: "400" }}
                    className="jobpodtedfieldtitile"
                  >
                    From{" "}
                  </div>
                  <div className="jobpostfieldinputbox">
                    <input
                      style={{ width: "100%" }}
                      type="date"
                      className="input-homejobformdate"
                      name=""
                      id=""
                      value={prevdatestart1}
                      max={disablePastDate()}
                      min={"2020-01-01"}
                      maxlength="4"
                      onChange={(e) => {
                        setprevDatestart1(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div style={{ width: width > 700 ? "50%" : "48%" }}>
                  <div
                    style={{ fontWeight: "400" }}
                    className="jobpodtedfieldtitile"
                  >
                    To
                  </div>
                  <div className="jobpostfieldinputbox">
                    <input
                      style={{ width: "100%" }}
                      type="date"
                      className="input-homejobformdate"
                      name=""
                      id=""
                      value={prevdatestart1x}
                      max={disablePastDate()}
                      min={"2020-01-01"}
                      maxlength="4"
                      onChange={(e) => {
                        setprevDatestart1x(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ background: "white" }}></div>

              <div className="homejobbuttons">
                <button style={{ background: "white" }} onClick={handleClose}>
                  Cancel
                </button>

                <button
                  style={{ color: "white" }}
                  onClick={() => {
                    handlesearchJobs();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {listshow === 1 ? (
        <div className="biddinglistcontainer">
          <div className="jobpodtedfieldtitilebiddinglist"> Bidding List </div>

          <div
            style={{ alignItems: "center", paddingLeft: "0.51vw" }}
            className="catalogcontainerdashbaordwiout"
          >
            {allbiddingList?.length > 0 ? (
              allbiddingList?.map((data) => {
                return (
                  <Listofjobbox
                    data={data}
                    width={width}
                    setListshow={setListshow}
                    setSelectedJob={setdata1}
                  />
                );
              })
            ) : (
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                  marginTop: "2vw",
                }}
              >
                There are no jobs similar to your search .{" "}
               
              </div>
            )}
          </div>

          <div>
            {totalpages !== page && (
              <div
                onClick={() => {
                  setPage(page + 1);
                }}
                className="ViewMorebutton"
              >
                View More
              </div>
            )}
          </div>
          <div className="homejobbuttons">
            <button
              style={{ background: "white", marginLeft: "2vw" }}
              onClick={() => {
                setListshow(0);
              }}
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {listshow === 2 ? (
        <div style={{}} className="home-postjob-container">
          {width > 700 && (
            <div style={{ width: "25vw" }} className="homepostjob-left">
              <div
                style={{
                  width: "25vw",
                  position: "relative",
                  right: "3vw",
                  top: "4vw",
                }}
                className="homejobpostimgsec"
              >
                <img
                  src={imgxxx1}
                  style={{
                    marginBottom: "2vw",
                    marginTop: "2vw",
                    width: "23vw",
                    objectfit: "container",
                  }}
                  alt=""
                />
              </div>
              <div className="homepastjobtrustbox">
                <div
                  style={{
                    width: "25vw",
                    position: "relative",
                    right: "3vw",
                    top: "5vw",
                  }}
                  className="homepostjobtrust"
                >
                  Trusted by 44 Resources
                </div>
              </div>
            </div>
          )}
          <div
            style={{
              overflowX: "hidden",
              overflowY: "scroll",
              width: width > 700 ? "fit-content" : "",
              boxShadow: "none",
              padding: "2vw 0vw",
            }}
            className="homepostjob-right"
          >
            <div className="jobpostedformheading">Bidding Details</div>
            <div className="jobpodtedfieldtitile">Full Name *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                name="name"
                // value={name}
                // onChange={(e) => {
                //   setName(e.target.value);
                // }}
                value={formValues.name}
                onChange={handleChangeHomeFormVal}
                style={{ width: "29.2vw" }}
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.name}</p>
            <div className="jobpodtedfieldtitile">Job Category</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={data1?.category?.category}
                disabled
                style={{ width: "29.2vw" }}
              />
            </div>
            <div className="jobpodtedfieldtitile">Job Sub Category</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={data1?.subCategory?.subCategory}
                disabled
                style={{ width: "29.2vw" }}
              />
            </div>
            <div className="jobpodtedfieldtitile">Job Title</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={data1?.workTitle}
                disabled
                style={{ width: "29.2vw" }}
              />
            </div>
            <div className="jobpodtedfieldtitile">Mobile *</div>
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
                      className={
                        width > 700 ? classes.select3 : classes.select6
                      }
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
                style={{ paddingLeft: width > 700 ? "11vw" : "28vw" }}
                name="mobile"
                value={formValues.mobile}
                onChange={handleChangeHomeFormVal}
              />
              {width > 700 && (
                <CloseIcon
                  style={{
                    position: "relative",
                    right: "2vw",
                    top: "1.3vw",
                    fontSize: "1.3vw",
                  }}
                />
              )}
            </div>
            <p style={{ color: "red", fontSize: "1vw" }}>
              {validateMobile ? validateMobile : ""}
            </p>
            <p style={{ color: "red", fontSize: "1vw" }}>{formErrors.mobile}</p>
            <div className="jobpodtedfieldtitile">Email *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleChangeHomeFormVal}
                style={{ width: "29.2vw" }}
              />
            </div>
            <p style={{ color: "red", fontSize: "1vw" }}>
              {validateEmail ? validateEmail : ""}
            </p>
            <p style={{ color: "red", fontSize: "1vw" }}>{formErrors.email}</p>
            <div style={{ background: "white" }}>
              <div className="dashboardtitilemain">
                How do you want to be Paid? *
              </div>

              <div
                onClick={() => setCateaddcheckbox1(true)}
                className="checkboxfromcate"
              >
                <div>
                  {cateaddcheckbox1 ? <img src={img51} /> : <img src={img47} />}{" "}
                </div>
                <div style={{ position: "relative", top: "0.61vw" }}>
                  By Milestone <br />
                  <span
                    style={{
                      fontSize: width > 700 ? "0.7vw" : "1.52vw",
                      lineHeight: "0vw",
                      marginBottom: "1vw",
                    }}
                  >
                    Divide the Project into smaller segments, Called Milestone.
                    You'll be paid for milestone after approved
                  </span>{" "}
                </div>
              </div>
              <div className="checkboxfromcate">
                <div
                  onClick={() => {
                    setArrayofservices([
                      { name: "Starter", price: "10", days: "3", id: 1 },
                    ]);
                    setCateaddcheckbox1(false);
                  }}
                >
                  {cateaddcheckbox1 ? <img src={img47} /> : <img src={img51} />}{" "}
                </div>

                <div
                  style={{ position: "relative", top: "0.61vw" }}
                  onClick={() => {
                    setArrayofservices([
                      { name: "Starter", price: "10", days: "3", id: 1 },
                    ]);
                    setCateaddcheckbox1(false);
                    settotalPrice(parseInt(service1namep));
                  }}
                >
                  By Project <br />
                  <span
                    style={{
                      fontSize: width > 700 ? "0.7vw" : "1.52vw",
                      lineHeight: "0vw",
                      marginBottom: "1vw",
                    }}
                  >
                    join the Project into big segments, Called Project. You'll
                    be paid for Project after approved
                  </span>{" "}
                </div>
              </div>
              <div className="dashboardtitilemain">
                How Many Milestone Do you want to include? (Minimum 1)
              </div>

              <div style={{ marginLeft: "1vw" }} className="servicesmenudiv">
                <div className="servicesmenuname1">Description</div>
                <div className="servicesmenuname2">Price</div>
                <div className="servicesmenuname3">Due Date</div>
                <div className="servicesmenuname4"></div>
              </div>
              {arrayofservices?.slice(0, 5).map((data, index) => {
                return (
                  <div
                    style={{ marginTop: "1vw", marginLeft: "1vw" }}
                    className="servicesmenudiv"
                  >
                    <div className="servicesmenuname1box">
                      <input
                        style={{ color: "#000" }}
                        type="text"
                        name="mile_description"
                        value={
                          index + 1 === 1
                            ? service1name
                            : index + 1 === 2
                            ? service2name
                            : index + 1 === 3
                            ? service3name
                            : index + 1 === 4
                            ? service4name
                            : service5name
                        }
                        onChange={(e) => {
                          index + 1 === 1
                            ? setService1name(e.target.value)
                            : index + 1 === 2
                            ? setService2name(e.target.value)
                            : index + 1 === 3
                            ? setService3name(e.target.value)
                            : index + 1 === 4
                            ? setService4name(e.target.value)
                            : setService5name(e.target.value);
                        }}
                        // value={formValues.mile_description}
                        // onChange={handleChangeHomeFormVal}
                      />
                    </div>
                    <div className="servicesmenuname2box">
                      $
                      <input
                        type="number"
                        onChange={(e) => {
                          if (e.target.value.length === 0) {
                            index + 1 === 1
                              ? setService1namep(0)
                              : index + 1 === 2
                              ? setService2namep(0)
                              : index + 1 === 3
                              ? setService3namep(0)
                              : index + 1 === 4
                              ? setService4namep(0)
                              : setService5namep(0);
                          } else {
                            index + 1 === 1
                              ? setService1namep(e.target.value)
                              : index + 1 === 2
                              ? setService2namep(e.target.value)
                              : index + 1 === 3
                              ? setService3namep(e.target.value)
                              : index + 1 === 4
                              ? setService4namep(e.target.value)
                              : setService5namep(e.target.value);
                          }
                        }}
                        onBlur={() => {
                          if (cateaddcheckbox1) {
                            settotalPrice(
                              parseInt(service1namep) +
                                parseInt(service2namep) +
                                parseInt(service3namep) +
                                parseInt(service4namep) +
                                parseInt(service5namep)
                            );
                          } else {
                            settotalPrice(parseInt(service1namep));
                          }
                        }}
                      />
                    </div>
                    <div className="servicesmenuname3box">
                      <input
                        type="date"
                        className="datenewmilestine"
                        style={{ width: "100%" }}
                        min={disablePastDate()}
                        max={"2025-12-31"}
                        maxlength="4"
                        value={
                          index + 1 === 1
                            ? service1named
                            : index + 1 === 2
                            ? service2named
                            : index + 1 === 3
                            ? service3named
                            : index + 1 === 4
                            ? service4named
                            : service5named
                        }
                        onChange={(e) => {
                          index + 1 === 1
                            ? setService1named(e.target.value)
                            : index + 1 === 2
                            ? setService2named(e.target.value)
                            : index + 1 === 3
                            ? setService3named(e.target.value)
                            : index + 1 === 4
                            ? setService4named(e.target.value)
                            : setService5named(e.target.value);
                        }}
                      />
                    </div>
                    <div className="servicesmenuname4box">
                      <img
                        onClick={() => {
                          setArrayofservices([
                            ...arrayofservices.slice(0, index),
                            ...arrayofservices.slice(
                              index + 1,
                              arrayofservices.length
                            ),
                          ]);
                        }}
                        src={img13}
                        style={{ cursor: "pointer" }}
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}

              {cateaddcheckbox1 ? (
                <div
                  style={{ marginLeft: "1vw" }}
                  className="addmoreservicecatalog"
                  onClick={() => {
                    arrayofservices.length !== 5
                      ? setArrayofservices([
                          ...arrayofservices,
                          { name: "", price: "", days: "" },
                        ])
                      : setArrayofservices([...arrayofservices]);
                  }}
                >
                  <span>
                    <AddIcon
                      style={{ fontSize: width > 700 ? "1.3vw" : "5vw" }}
                    />
                  </span>{" "}
                  Add More Milestones
                </div>
              ) : (
                ""
              )}

              <div
                style={{ width: width > 700 ? "50vw" : "100%" }}
                className="displflexpriceaddbiddingform"
              >
                <div
                  style={{
                    margin: "0vw 0.5vw",
                    marginTop: "1vw",
                    marginLeft: "1vw",
                    textAlign: "left",
                  }}
                  className="dashboardtitilemain"
                >
                  Total Price of Project
                </div>
                <div
                  style={{
                    margin: "0vw 0.5vw",
                    marginTop: "1vw",
                    fontWeight: "400",
                  }}
                  className="dashboardtitilemain"
                >
                  $ {totalPrice}
                </div>
              </div>

              <div>
                <span
                  style={{
                    fontSize: width > 700 ? "0.8vw" : "1.6vw",
                    lineHeight: "0vw",
                    marginBottom: "1vw",
                    fontFamily: "poppins",
                    margin: "0vw 0.5vw",
                    marginLeft: width > 700 ? "1vw" : "0vw",
                  }}
                >
                  Divide the Project into smaller segments, Called Milestone.
                  You'll be paid for milestone after approved
                </span>
              </div>

              <div
                style={{ width: width > 700 ? "50vw" : "100%" }}
                className="displflexpriceaddbiddingform"
              >
                <div
                  style={{
                    margin: "0vw 0.5vw",
                    marginTop: "1vw",
                    marginLeft: "1vw",
                  }}
                  className="dashboardtitilemain"
                >
                  Our Service Fee
                </div>
                <div
                  style={{
                    margin: "0vw 0.5vw",
                    marginTop: "1vw",
                    fontWeight: "400",
                  }}
                  className="dashboardtitilemain"
                >
                  $ {(percentToGet / 100) * totalPrice}
                </div>
              </div>

              <hr style={{ margin: "1vw", marginLeft: "0vw" }} />
              <div
                style={{ width: width > 700 ? "50vw" : "100%" }}
                className="displflexpriceaddbiddingform"
              >
                <div
                  style={{
                    margin: "0vw 0.5vw",
                    marginTop: "1vw",
                    marginLeft: "1vw",
                  }}
                  className="dashboardtitilemain"
                >
                  You'll Receive
                </div>
                <div
                  style={{
                    margin: "0vw 0.5vw",
                    marginTop: "0vw",
                    fontWeight: "400",
                  }}
                  className="dashboardtitilemain"
                >
                  $ {totalPrice - (percentToGet / 100) * totalPrice}
                </div>
              </div>

              <div>
                <span
                  style={{
                    fontSize: width > 700 ? "0.8vw" : "1.7vw",
                    lineHeight: "0vw",
                    marginBottom: "1vw",
                    fontFamily: "poppins",
                    margin: "0vw 0.5vw",

                    marginLeft: "1vw",
                  }}
                >
                  Your estimated payment, after service fees
                </span>{" "}
              </div>
            </div>
            <div
              style={{ background: "white", padding: "1vw", marginTop: "0vw" }}
            >
              <div className="jobpodtedfieldtitile">Description</div>
              <div className="jobpostfieldinputbox">
                <textarea
                  type="text"
                  name="desc"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
              <p style={{ color: "red" }}>{formErrors.desc}</p>

              <div
                style={{ marginBottom: "0.0vw", marginTop: "2vw" }}
                className="jobpodtedfieldtitile"
              >
                Image/Documents
              </div>
              <div
                style={{
                  background: "white",
                  padding: "1vw",
                  marginTop: "0vw",
                  paddingLeft: "0vw",
                }}
              >
                <div className="inputfilebox">
                  <div>
                    <label htmlFor="inputctaelogfile">
                      <div className="inputicon">
                        <img src={img44} alt="" />
                      </div>
                      <div className="inputcateaddformfile">
                        Drag and Drop ,Browse to upload
                      </div>
                      <input
                        type="file"
                        id="inputctaelogfile"
                        onChange={(e) => {
                          setArrayoffiles([...arrayoffiles, e.target.files[0]]);
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
                  fontSize: width > 700 ? "0.8vw" : "2.7vw",
                  paddingRight: "2vw",
                  textAlign: "right",
                }}
              >
                Please upload file having extensions .jpeg/ .jpg/ .png only.
                <br />
                Image should be less then 512 kb.
              </div>
              <div className="inputfilesshowncatebox">
                {arrayoffiles?.length > 0 &&
                  arrayoffiles?.map((file, index) => {
                    return (
                      <div className="inputfilesshowncatboxsingle">
                        <div className="inputfilesshowncatboxsingleimg">
                          <img src={img111} alt="" />
                        </div>
                        <div className="fileselctednamecate">{file?.name}</div>
                        <div className="inputfilesshowncatboxsingleimg">
                          <img
                            style={{
                              fontSize: width > 700 ? "1.5vw" : "4vw",
                              marginLeft: "1vw",
                              cursor: "pointer",
                            }}
                            src={img2}
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
                  Terms and Condition
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
              <button style={{ background: "white" }} onClick={handleClose}>
                Cancel
              </button>
              <button
                onClick={() => setListshow(1)}
                style={{ background: "white" }}
              >
                Back
              </button>
              <button
                style={{ color: "white" }}
                onClick={() => {
                  handlesavedaddcatalogue();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {listshow === 3 ? (
        <div className="homejobpostcinfirm-container">
          <div className="homejobpostconfirmthankuhead">Thank you!!!!</div>
          <div className="homejobpostconfirmthankuheadrequire">
            Your Bid has been placed Sucessfull
          </div>
          <div
            className="homejobpostconfirmheadrequire"
            style={{ color: "#064C87" }}
          >
            We sent an Confirmation mail to your given mail
          </div>

          <div className="homejobconfirmcontainer">
            <div className="homejobconfirmleft">
              <img
                src={img}
                style={{
                  width: width > 700 ? "29vw" : "85%",
                  marginLeft: width > 700 ? "5vw" : "12vw",
                }}
                alt=""
              />
            </div>
            <div className="homejobconfirmright">
              <div className="jobconfirmdetails">
                <div className="homejobconfirmdata">
                  <div className="imgofjobconfirmdetails">
                    <img src={img1} alt="" />
                  </div>
                  <div className="homejocconfirmdattye">Title-</div>
                  <div className="homejocconfirmdattye-value">
                    {data1?.workTitle}
                  </div>
                </div>
                <div className="homejobconfirmdata">
                  <div className="imgofjobconfirmdetails">
                    <img src={img1} alt="" />
                  </div>
                  <div className="homejocconfirmdattye">Tracking id-</div>
                  <div className="homejocconfirmdattye-value">{trackingid}</div>
                </div>
                <div className="homejobconfirmdata">
                  <div className="imgofjobconfirmdetails">
                    <img src={img1} alt="" />
                  </div>
                  <div className="homejocconfirmdattye">Username-</div>
                  <div className="homejocconfirmdattye-value">{username}</div>
                </div>
                <div className="homejobconfirmdata">
                  <div className="imgofjobconfirmdetails">
                    <img src={img1} alt="" />
                  </div>
                  <div className="homejocconfirmdattye">Email-</div>
                  <div className="homejocconfirmdattye-value">
                    {formValues.email}
                  </div>
                </div>
                <div className="homejobconfirmdata">
                  <div className="imgofjobconfirmdetails">
                    <img src={img1} alt="" />
                  </div>
                  <div className="homejocconfirmdattye">Password-</div>
                  <div className="homejocconfirmdattye-value">{password}</div>
                </div>
              </div>

              <button
                onClick={() => {
                  handleClose();
                  handleClosex();
                }}
              >
                Back to main menu
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {listshow === 5 && (
        <div
          style={{
            padding: width > 700 ? "1vw" : "0vw",
            maxHeight: width > 700 ? "45rem" : "35rem",
            overflowY: "scroll",
          }}
        >
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
                  marginLeft: width > 700 ? "1vw" : "2vw",
                  fontSize: width > 700 ? "0.9vw" : "2.6vw",
                }}
              >
                {data1?.subCategory?.subCategory}
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
              marginLeft: width > 700 ? "1vw" : "0vw",
              color: "#064C87",
            }}
          >
            {data1?.workTitle} ({data1?.trackingId})
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>
              <LocationOnOutlinedIcon
                style={{
                  fontSize: width > 700 ? "1.5vw" : "3.5vw",
                  fontWeight: "400",
                  margin: "0.5vw 0vw",
                }}
              />
            </span>
            <span
              style={{
                fontSize: width > 700 ? "1.1vw" : "2.7vw",
                fontWeight: "500",
              }}
            >
              {data1?.remote ? "Remote" : data1?.onSite}
            </span>
          </div>
          <div
            style={{
              width: "fit-content",
              margin: "0vw 1vw",
              fontSize: width > 700 ? "0.85vw" : "2.5vw",
              marginBottom: "0vw",
            }}
            className="dashboardtitilemainparabid"
          >
            {data1?.shortDescription}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                fontSize: width > 700 ? "1.1vw" : "3vw",
                fontWeight: "500",
                margin: width > 700 ? "0.6vw 1vw" : "0.6vw",
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                fontSize: width > 700 ? "1.1vw" : "3vw",
                fontWeight: "500",
                margin: "0.6vw 1vw",
              }}
            >
              Proposal Details
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              margin: "0vw 1vw",
              flexWrap: width < 700 && "wrap",
            }}
          >
            <div className="detailjobposttags">
              <div
                style={{
                  margin: width > 700 ? "0.5vw" : "1vw",
                  color: "#064C87",
                  marginBottom: "0.40vw",
                  fontSize: width > 700 ? "1vw" : "2.7vw",
                  fontWeight: "500",
                }}
              >
                Posted by
              </div>
              <div
                style={{
                  display: "block",
                  height: "fit-content",
                  padding: width <= 700 && "0.5vw",
                  paddingBottom: width > 700 ? "0.3vw" : "2vw",
                  paddingLeft: width > 700 ? "0.61vw" : "1vw",
                  lineHeight: width > 700 ? "2.7vw" : "5vw",
                }}
                className="tagvaluejobpostbox"
              >
                {data1?.user_id?.fullName?.slice(0, 18)}
                {/* <span>
                  <StarIcon
                    style={{ width: "1vw", height: "1vw", color: "#064C87" }}
                  />
                </span>{" "}
                4.5 */}
                {data1?.user_id?.verifiedByAdmin && (
                  <div
                    style={{
                      color: "#064C87",
                      lineHeight: "0",
                    }}
                  >
                    <img
                      style={{
                        width: width > 700 ? "1vw" : "2.5vw",
                        margin: "0 0.1vw",
                      }}
                      src={img3}
                      alt=""
                    />
                    Verified
                  </div>
                )}
              </div>
            </div>

            <div className="detailjobposttags">
              <div
                style={{
                  margin: width > 700 ? "0.5vw" : "1vw",
                  color: "#064C87",
                  marginBottom: "0.40vw",
                  fontSize: width > 700 ? "1vw" : "2.7vw",
                  fontWeight: "500",
                }}
              >
                Budget
              </div>
              <div className="tagvaluejobpostbox">
                <span>
                  <img
                    style={{
                      margin: width > 700 ? "0.6vw" : "1vw",
                      width: width > 700 ? "1.5vw" : "3.5vw",
                      objectFit: "contain",
                    }}
                    src={img41}
                    alt=""
                  />
                </span>
                ${data1?.minimumBudget}- ${data1?.maximuBudget}
              </div>
            </div>

            <div className="detailjobposttags">
              <div
                style={{
                  margin: width > 700 ? "0.5vw" : "1vw",
                  color: "#064C87",
                  marginBottom: "0.40vw",
                  fontSize: width > 700 ? "1vw" : "2.7vw",
                  fontWeight: "500",
                }}
              >
                Duration
              </div>
              <div className="tagvaluejobpostbox">
                <span>
                  <img
                    style={{
                      margin: width > 700 ? "0.6vw" : "1vw",
                      width: width > 700 ? "1.5vw" : "3.5vw",
                      objectFit: "contain",
                    }}
                    src={img10}
                    alt=""
                  />
                </span>
                {data1?.deliveryDate ? data1?.deliveryDate : "-"} days
              </div>
            </div>

            <div className="detailjobposttags">
              <div
                style={{
                  margin: width > 700 ? "0.5vw" : "1vw",
                  color: "#064C87",
                  marginBottom: "0.40vw",
                  fontSize: width > 700 ? "1vw" : "2.7vw",
                  fontWeight: "500",
                }}
              >
                Expires on
              </div>
              <div className="tagvaluejobpostbox">
                <span>
                  <img
                    style={{
                      margin: width > 700 ? "0.6vw" : "1vw",
                      width: width > 700 ? "1.5vw" : "3.5vw",
                      objectFit: "contain",
                    }}
                    src={img11}
                    alt=""
                  />
                </span>
                {data1?.expiry} days
              </div>
            </div>

            <div className="detailjobposttags">
              <div
                style={{
                  margin: width > 700 ? "0.5vw" : "1vw",
                  color: "#064C87",
                  marginBottom: "0.40vw",
                  fontSize: width > 700 ? "1vw" : "2.7vw",
                  fontWeight: "500",
                }}
              >
                No of Bidding
              </div>
              <div className="tagvaluejobpostbox">
                <span>
                  <img
                    style={{
                      margin: width > 700 ? "0.6vw" : "1vw",
                      width: width > 700 ? "1.5vw" : "3.5vw",
                      objectFit: "contain",
                    }}
                    src={img21}
                    alt=""
                  />
                </span>
                {data1?.listOfBider?.length}
              </div>
            </div>
          </div>
         
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                fontSize: width > 700 ? "1.1vw" : "3.3vw",
                fontWeight: "500",
                margin: "1vw",
              }}
            >
           { data1?.icons?.length>0 ? "Documents":"This job Does not have  any Documents  !" } 
            </span>
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
            {data1?.icons?.map((data) => {
              return (
                <div
                  style={{ marginRight: width > 700 ? "" : "1vw" }}
                  className="boxofimageorpdf"
                >
                  <div
                    onClick={() => {
                      handleOpen11();
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
          <Modal
            open={open11}
            onClose={handleClose11}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width > 700 ? style : style1}>
              {imagesave && (
                <div className="imgbocofcerti">
                  <img src={imagesave} alt="" />
                </div>
              )}
            </Box>
          </Modal>
          <div
            style={{
              float: "right",
              width: width > 700 ? "20vw" : "96%",
              marginRight: "2vw",
              marginTop: width > 700 ? "0vw" : "3vw",
              marginBottom: "1vw",
            }}
            className="homejobbuttons"
          >
            <button
              style={{ background: "white" }}
              onClick={() => {
                setListshow(1);
                setdata1();
              }}
            >
              Cancel
            </button>

            <button
              // disabled={checkone && checkone1 ? false : true}
              style={{ color: "white" }}
              onClick={() => {
                setListshow(2);
              }}
            >
              Bid Now
            </button>
          </div>
        </div>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open121}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

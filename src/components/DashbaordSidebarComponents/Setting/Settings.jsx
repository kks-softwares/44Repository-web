import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./setting.css";
import cuntrycide from "../../../helper/c";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/userSlice";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import img51 from "../../../assets/Web 1280 – 14/Group 10219.svg";
import ToggleButton from "react-toggle-button";
import img4 from "../../../assets/Web 1280 – 14/Ellipse 1375.svg";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
import API_HOST from "../../../env";
import BankCard from "./BankCard";
import BankForm from "./BankForm";
import BankEdit from "./BankEdit";
import DocumentCardauth from "./DocumentCardauth";
import AddDocumentauth from "./AddDocumentauth";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import EditDocuments from "./EditDocuments";
// import firebase from "./firebase";
import { authentication } from "./firebase-config";
import { RecaptchaVerifier } from "firebase/auth";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPhoneNumber,
} from "firebase/auth";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
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
  select1: {
    height: "9vw",
    width: "24vw",
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
    top: "0.01vw",
    left: "0.5vw",
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
  select2: {
    height: "1vw",
    width: "34vw",
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
    textAlign: "left",
  },
  select4: {
    height: "8.5vw",
    width: "80vw",
    marginTop: "0vw",
    padding: "0vw 0vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
    color: "#FFFFFF",
    position: "relative",
    top: "0.001vw",
    left: "0.2vw",
    textAlign: "left",
  },
  icon: {
    fill: "white",
  },
}));

export default function Settings({ width }) {
  const dispatch = useDispatch();
  const auth = getAuth();

  const [checkonex, setCheckonex] = useState(false);
  const [checkonex1, setCheckonex1] = useState(false);
  const [checkonex2, setCheckonex2] = useState(false);
  const [checkonex3, setCheckonex3] = useState(false);
  const [checkonex4, setCheckonex4] = useState(false);
  const { user } = useSelector((state) => state.user);
  console.log("user",user);
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Designation, setdesignation] = useState("");
  const [desc, setDesc] = useState("");

  const [age2, setAge2] = React.useState(98);

  const [countrycode, setCountrycode] = useState("+91");
  const [countryside, setCountryside] = useState(cuntrycide);
  const [Category, setCategory] = useState("");
  const [mobilecuntry, setMobilecuntry] = useState(1);
  const [SettingAccEmail, setSettingAccEmail] = useState("");
  const [disabled, setDisabled] = useState(true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleGameClick = () => {
    setDisabled(!disabled);
  };

  const classes = useStyles();

  const handleChange2x = (event) => {
    setAge2(event.target.value);
  };

  const [cateaddcheckbox1, setCateaddcheckbox1] = useState(true);
  const [cateaddcheckboxx1, setCateaddcheckboxx1] = useState(1);
  const [cateaddcheckboxx2, setCateaddcheckboxx2] = useState(1);
  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);
  const [pass1, setPass1] = useState(true);
  const [pass2, setPass2] = useState(true);
  const [pass3, setPass3] = useState(true);
  const [passw1, setPassw1] = useState("");

  const [twofactorauthtogle, setTwofactorauthtogle] = useState(false);
  const [twofactorauthtogle1, setTwofactorauthtogle1] = useState(false);
  const [twofactorauthtogle2, setTwofactorauthtogle2] = useState(false);
  const [age3, setAge3] = React.useState(0);
  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };
  const [age4, setAge4] = React.useState(0);
  const handleChange4 = (event) => {
    setAge4(event.target.value);
  };
  const [answer, setAnswer] = useState("");

  const [mobile, setMobile] = useState();
  const [bankformDetails, setbankformDetails] = useState(false);
  const [selectedBankdetailedit, setSelectedBankdetailedit] = useState();
  const [AuthenticateDocument, setAuthenticateDocument] = useState(true);
  const [oldemail, setoldemail] = useState("");
  const [Categoryid, setCategoryid] = useState();
  const [skill, setskill] = useState("");
  const [skillid, setskillid] = useState();
  const [arrayoflongdegree, setArrayoflongdegree] = useState();
  const [arrayoflongdegreex, setArrayoflongdegreex] = useState();
  const [searchCategorysearch, setSearchCategorysearch] = useState("");
  const [searchskill, setSearchskill] = useState("");

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/theCategory/viewCategory?pageSize=50&pageNumber=1&category=${searchCategorysearch}`
      )
      .then((res) => {
        setArrayoflongdegree(res?.data?.success?.data);
      });
  }, [searchCategorysearch]);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/theSkill/viewSkill?pageSize=50&pageNumber=1&skill=${searchskill}`
      )
      .then((res) => {
        setArrayoflongdegreex(res?.data?.success?.data);
      });
  }, [searchskill]);

  const [anchorElx2, setAnchorElx2] = React.useState(null);
  const handleClickx2 = (event) => {
    setAnchorElx2(event.currentTarget);
  };
  const handleClosex2 = () => {
    setAnchorElx2(null);
  };
  const openx2 = Boolean(anchorElx2);
  const idx2 = openx2 ? "simple-popover" : undefined;

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? "simple-popover" : undefined;

  const [cateerror, setcateError] = useState("");
  const [color, setColor] = useState("#064c87");
  const [btnText, setbtnText] = useState("SAVE");

  const handleAddUser = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!verifymobile) {
      setRestag("Please verify your Mobile");
      return;
    }
    if (!regex.test(email)) {
      setRestag("Email is not correct");
      return;
    } else if (oldemail === email) {
      const formdata = new FormData();
      formdata.append("userId", user?.userId);
      formdata.append("fullName", Name);
      formdata.append("category", Categoryid);
      formdata.append("skills", skillid);
      // formdata.append("countryCode", countrycode);

      formdata.append("contactNo", countrycode + mobile);
      formdata.append("address", desc);
      axios
        .post(`${API_HOST}/users/editEmail`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setColor("green");
          setbtnText("UPDATED");
          axios
            .get(`${API_HOST}/users/viewUser?userName=${user?.userName}`)
            .then((res) => {
              dispatch(
                userActions.setUser({
                  user: { ...res.data.success.data },
                })
              );
            });
        })
        .catch((err) => {
          setSettingAccEmail(err?.response?.data?.fails?.data?.code);
          setRestag(err?.response?.data?.fails?.data?.code);
        });
    } else {
      const formdata = new FormData();
      formdata.append("userId", user?.userId);
      formdata.append("fullName", Name);
      formdata.append("category", Categoryid);
      formdata.append("skills", skillid);
      formdata.append("newEmail", email);
      formdata.append("contactNo", countrycode + mobile);
      formdata.append("address", desc);
      axios
        .post(`${API_HOST}/users/editEmail`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setColor("green");
          setbtnText("UPDATED");
          axios
            .get(`${API_HOST}/users/viewUser?userName=${user?.userName}`)
            .then((res) => {
              dispatch(
                userActions.setUser({
                  user: { ...res.data.success.data },
                })
              );
            });
        })
        .catch((err) => {
          setSettingAccEmail(err?.response?.data?.fails?.data?.code);
          setRestag(err?.response?.data?.fails?.data?.code);
        });
    }
  };

  const [restag, setRestag] = useState(false);
  const [verifymobile, setVerifymobile] = useState(false);
  useEffect(() => {
    setRestag(false);
  }, [Name, Category, Designation, countrycode, email, mobile, desc]);

  useEffect(() => {
    if (user) {
      setName(user?.fullName);
      setCategory(user?.category?.category);
      setCategoryid(user?.category?._id);
      setskill(user?.skillSet?.skill);
      setskillid(user?.skillSet?._id);
      setEmail(user?.emailId);
      setoldemail(user?.emailId);
      setCountrycode(
        user?.contactNo
          ? "+" + JSON.stringify(user?.contactNo).slice(0, 2)
          : "+91"
      );
      if (user?.contactNo) {
        setMobile(parseInt(JSON.stringify(user?.contactNo).slice(2)));
      }
      if (user?.contactNo) {
        setVerifymobile(true);
      }
      setDesc(user?.address);
    }
  }, [user]);

  const [passwordCheck, setpasswordCheck] = useState("");
  const [ErrorMinPassword, setErrorMinPassword] = useState("");
  const [oldPasswordCheck, setOldPasswordCheck] = useState("");

  const handlePasswordSetting = () => {
    if (Object.getOwnPropertyNames(validate(formValues)).length !== 0) {
      setFormErrors(validate(formValues));
      return false;
    }

    if (Object.getOwnPropertyNames(validate(formValues)).length == 0) {
      setFormErrors(validate(formValues));
    }

    setErrorMinPassword("");
    setOldPasswordCheck("");
    const formdata = new FormData();

    formdata.append("userId", user?.userId);
    formdata.append("password", passw1);
    formdata.append("newPassword", formValues.newpasswordChange);
    formdata.append("confirmPassword", formValues.confirmpasswordChange);

    axios
      .post(`${API_HOST}/users/updatePassword`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        setpasswordCheck("Password is successfully updated");
        setPassw1("");
        setFormValues({
          newpasswordChange: "",
          confirmpasswordChange: "",
        });
      })
      .catch((err) => {
        console.log(err?.response);
        setErrorMinPassword(err?.response?.data?.fails?.data);
        setOldPasswordCheck(err.response.data.error.data);
        // setRestag(true);
      });
  };

  const handlePasswordSetting1 = () => {
    if (Object.getOwnPropertyNames(validate(formValues)).length !== 0) {
      setFormErrors(validate(formValues));
      return false;
    }

    if (Object.getOwnPropertyNames(validate(formValues)).length == 0) {
      setFormErrors(validate(formValues));
    }

    setErrorMinPassword("");

    const formdata = new FormData();

    formdata.append("emailId", user?.emailId);

    formdata.append("new_password", formValues.newpasswordChange);
    formdata.append("confirmPassword", formValues.confirmpasswordChange);

    axios
      .post(`${API_HOST}/users/socialLoggerPassword`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        axios
          .get(`${API_HOST}/users/viewUser?userName=${user?.userName}`)
          .then((res) => {
            setpasswordCheck(
              "Password is successfully updated , You can now login with password after verify your email"
            );

            setFormValues({
              newpasswordChange: "",
              confirmpasswordChange: "",
            });
            dispatch(
              userActions.setUser({
                user: { ...res.data.success.data },
              })
            );
          });
      })
      .catch((err) => {
        console.log(err?.response);
        setErrorMinPassword(err?.response?.data?.fails?.data);
      });
  };

  const initialValues = {
    newpasswordChange: "",
    confirmpasswordChange: "",
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
    // var regularExpressionPassword = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const specialCharacter = /.*[\W_]/;
    const regexForUpperCase = /^(?=.*[A-Z])/;
    const regexForDigit = /^(?=.*\d)/;

    if (!regexForDigit.test(values.newpasswordChange)) {
      errors.newpasswordChange = "Password should contain at least one Digit *";
    } else if (!specialCharacter.test(values.newpasswordChange)) {
      errors.newpasswordChange =
        "Password should contain at least one Special character *";
    } else if (!regexForUpperCase.test(values.newpasswordChange)) {
      errors.newpasswordChange =
        "Password should contain at least one UpperCase letter *";
    }
    // ======== Confirfm Password Check ===========
    if (!regexForDigit.test(values.confirmpasswordChange)) {
      errors.confirmpasswordChange =
        "Confirm Password should contain at least one Digit *";
    } else if (!specialCharacter.test(values.confirmpasswordChange)) {
      errors.confirmpasswordChange =
        "Confirm Password should contain at least one Special character *";
    } else if (!regexForUpperCase.test(values.confirmpasswordChange)) {
      errors.confirmpasswordChange =
        "Confirm Password should contain at least one UpperCase letter *";
    }

    return errors;
  };

  const [editDocuments, setEditDocuments] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/users/viewACCount?pageSize=1000&pageNumber=1&userName=${user?.userName}`
      )
      .then((res) => {
        setArrayofbankdetail(res.data?.success?.data);
      });
  }, [user]);

  const [arrayofbankdetail, setArrayofbankdetail] = useState([]);

  const generateCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha_container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("Recaptca verified");
        },
      },
      authentication
    );
  };

  const [OTP, setOTP] = useState();
  const [enterOTPfield, setEnterOTPfield] = useState();
  const [enterOTPmatch, setEnterOTPmatch] = useState();

  const onSignInSubmit = () => {
    // e.preventDefault();
    generateCaptcha();
    const phoneNumber = "+91" + mobile;
    console.log(phoneNumber);
    let appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        handleOpen();
        // ...
      })
      .catch((error) => {
        console.log(error, "SMS not sent");
      });
  };

  const verifyOTP = (e) => {
    // let otp = e.target.value;
    setOTP(enterOTPfield);

    if (enterOTPfield.length === 6) {
      console.log(enterOTPfield);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(enterOTPfield)
        .then((result) => {
          // User signed in successfully.
          const userFirebase = result.user;
          console.log("result", userFirebase);
          setVerifymobile(true);
          setEnterOTPmatch("");
          setOpen(false);
        })
        .catch((error) => {
          setEnterOTPmatch("OTP is not correct, Enter correct OTP");
          console.log("SMS verify", error.message);
          // User couldn't sign in (bad verification code?)
        });
    }
  };

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/users/viewDocument?pageSize=1000&pageNumber=1&userName=${user?.userName}`
      )
      .then((res) => {
        setArrayofdocumentdetail(res.data?.success?.data);
      });
  }, [user]);

  const [arrayofdocumentdetail, setArrayofdocumentdetail] = useState([]);
  const [primaryAccount, setPrimaryAccount] = useState()

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/users/viewPrimary?pageSize=1000&pageNumber=1&userName=${user?.userName}`
      )
      .then((res) => {
        setPrimaryAccount(...res.data?.success?.data);
      });
  }, [user]);



  return (
    <div className="BrowseWorkMain-cntainer">
      <div
        style={{
          width: width > 700 ? "80vw" : "90vw",
          overflowX: width > 700 ? "" : "scroll",
          marginBottom: width > 700 ? "" : "3vw",
        }}
      >
        <div
          style={{
            position: "relative",
            right: "1vw",
            width: width > 700 ? "80vw" : "fit-content",
          }}
          className="profileworkhistruytoggleer"
        >
          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              color: "black",
              width: width > 700 ? "9vw" : "20vw",
            }}
            onClick={() => {
              setWorkhistorytoggle(1);
            }}
          >
            Account
          </div>
          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              color: "black",
              width: width > 700 ? "9vw" : "20vw",
            }}
            onClick={() => {
              setWorkhistorytoggle(2);
            }}
          >
            Security
          </div>
          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              color: "black",
              width: width > 700 ? "9vw" : "22vw",
            }}
            onClick={() => {
              setWorkhistorytoggle(3);
            }}
          >
            Notification
          </div>

          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              color: "black",
              width: width > 700 ? "10vw" : "22vw",
            }}
            onClick={() => {
              setWorkhistorytoggle(5);
            }}
          >
            Bank Details
          </div>
          <div
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              color: "black",
              width: width > 700 ? "20vw" : "45vw",
            }}
            onClick={() => {
              setWorkhistorytoggle(6);
            }}
          >
            Authenticate Documents
          </div>
          <div
            style={{
              color: "#064C87",
              borderBottom:
                width > 700 ? "0.3vw solid #064C87" : "0.7vw solid #064C87",
              width: width > 700 ? "10vw" : "25vw",
              position: "relative",
              right:
                width > 700
                  ? workhistorytoggle === 1
                    ? "67vw"
                    : workhistorytoggle === 2
                    ? "56vw"
                    : workhistorytoggle === 3
                    ? "45vw"
                    : // : workhistorytoggle === 4
                    // ? "35.5vw"
                    workhistorytoggle === 5
                    ? "32.8vw"
                    : "16.5vw"
                  : workhistorytoggle === 1
                  ? "140vw"
                  : workhistorytoggle === 2
                  ? "120vw"
                  : workhistorytoggle === 3
                  ? "96vw"
                  : // : workhistorytoggle === 4
                  // ? "35.5vw"
                  workhistorytoggle === 5
                  ? "72vw"
                  : "40vw",
              bottom: width > 700 ? "0.3vw" : "0.0vw",
              transitionDuration: "1s",
              borderRadius: width > 700 ? "0.2vw" : "0.5vw",
            }}
          ></div>
        </div>
      </div>

      {workhistorytoggle === 1 ? (
        <div className="settingAccountcontainer">
          <div className="settingAccounttitle">
            Need to Update your profile?{" "}
            <span
              onClick={() => {
                navigate("/profile");
              }}
            >
              Go to My Profile
            </span>
          </div>

          <hr style={{ margin: "1vw" }} />
          <div>
            <div className="settingAccountcontainer1">
              <div className="accountdetailbox">
                <div
                  style={{ width: width > 700 ? "15vw" : "18vw" }}
                  className="settingAccounttitle"
                >
                  Name
                </div>
                <div
                  style={{ width: width > 700 ? "40vw" : "100%" }}
                  className="settingAccounttitlevalue"
                >
                  <div className="jobpostfieldinputbox">
                    <input
                      style={{ width: "29.2vw" }}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={Name}
                    />
                  </div>
                </div>
              </div>
              <div className="accountdetailbox">
                <div
                  style={{ width: width > 700 ? "15vw" : "18vw" }}
                  className="settingAccounttitle"
                >
                  Category
                </div>
                <div
                  style={{ width: width > 700 ? "40vw" : "100%" }}
                  className="settingAccounttitlevalue"
                >
                  <div
                    style={{
                      left: "0vw",
                      width: width > 700 ? "94%" : "100%",
                      marginLeft: "0%",
                    }}
                    className="loginfield"
                    onClick={handleClickx2}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Category "
                      variant="outlined"
                      disabled
                      value={Category}
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
                        width: width > 700 ? "35vw" : "80vw",
                      }}
                    >
                      <Typography
                        sx={{
                          p: 1,
                          pl: 1,
                          ml: 1,
                          pr: 0,
                          width: width > 700 ? "34vw" : "75vw",
                          position: "fixed",
                          background: "white",
                          zIndex: "10",
                        }}
                      >
                        <input
                          placeholder="search here .."
                          onChange={(e) => {
                            setSearchCategorysearch(e.target.value);
                          }}
                          style={{
                            width: "97%",
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
                          width: "97%",
                          cursor: "pointer",
                        }}
                      ></Typography>

                      {arrayoflongdegree?.length > 0 &&
                        arrayoflongdegree.map((data, index) => {
                          return (
                            <Typography
                              sx={{
                                p: 0.51,
                                pl: 1,
                                ml: 1,
                                width: "97%",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setCategory(data?.category);
                                setCategoryid(data?._id);
                                handleClosex2();
                                setcateError();
                              }}
                            >
                              {data?.category}
                            </Typography>
                          );
                        })}
                    </div>
                  </Popover>
                  <p style={{ color: "red", fontSize: "0.9vw" }}>{cateerror}</p>
                </div>
              </div>
              <div className="accountdetailbox">
                <div
                  style={{ width: width > 700 ? "15vw" : "30vw" }}
                  className="settingAccounttitle"
                >
                  Skill Set
                </div>
                <div
                  style={{ width: width > 700 ? "40vw" : "100%" }}
                  className="settingAccounttitlevalue"
                >
                  <div
                    style={{
                      left: "0vw",
                      width: width > 700 ? "94%" : "100%",
                      marginLeft: "0%",
                    }}
                    className="loginfield"
                    onClick={handleClick2}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Skill Set"
                      variant="outlined"
                      disabled
                      value={skill}
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
                    id={id2}
                    open={open2}
                    anchorEl={anchorEl2}
                    onClose={handleClose2}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <div
                      style={{
                        maxHeight: width > 700 ? "18vw" : "40vw",
                        overflow: "scroll",
                        width: width > 700 ? "35vw" : "80vw",
                      }}
                    >
                      <Typography
                        sx={{
                          p: 1,
                          pl: 1,
                          ml: 1,
                          pr: 0,
                          width: width > 700 ? "34vw" : "75vw",
                          position: "fixed",
                          background: "white",
                          zIndex: "10",
                        }}
                      >
                        <input
                          placeholder="search here .."
                          onChange={(e) => {
                            setSearchskill(e.target.value);
                          }}
                          style={{
                            width: "97%",
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
                          width: "97%",
                          cursor: "pointer",
                        }}
                      ></Typography>

                      {arrayoflongdegreex?.length > 0 &&
                        arrayoflongdegreex.map((data, index) => {
                          return (
                            <Typography
                              sx={{
                                p: 0.51,
                                pl: 1,
                                ml: 1,
                                width: "97%",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setskill(data?.skill);
                                setskillid(data?._id);
                                handleClose2();
                                setcateError();
                              }}
                            >
                              {data?.skill}
                            </Typography>
                          );
                        })}
                    </div>
                  </Popover>
                  <p style={{ color: "red", fontSize: "0.9vw" }}>{cateerror}</p>
                </div>
              </div>
              <div className="accountdetailbox">
                <div style={{ width: "15vw" }} className="settingAccounttitle">
                  Email
                </div>
                <div
                  style={{ width: width > 700 ? "40vw" : "100%" }}
                  className="settingAccounttitlevalue"
                >
                  <div className="jobpostfieldinputbox">
                    <input
                      type="email"
                      style={{ width: "29.2vw" }}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  alignItems: width > 700 ? "center" : "flex-start",
                  width: width > 700 ? "60vw" : "82vw",
                }}
                className="accountdetailbox"
              >
                <div
                  style={{ width: width > 700 ? "14vw" : "18vw" }}
                  className="settingAccounttitle"
                >
                  Mobile
                </div>
                <div
                  style={{ width: width > 700 ? "37vw" : "100%" }}
                  className="jobpostfieldinputbox"
                >
                  <div
                    style={{
                      width: width > 700 ? "0.1vw" : "15vw",
                      zIndex: "3",
                    }}
                  >
                    <div className="okmobilejobform" onClick={handleOpenx}>
                      {mobilecuntry}
                    </div>
                    <Box
                      sx={{
                        background: "white",
                        border: "1px solid #7070705b",
                        height: width > 700 ? "3.0vw" : "9vw",
                        width: width > 700 ? "10vw" : "24vw",
                        borderRadius: "5px",
                        margin: "0vw 0vw",
                        position: "relative",
                        bottom: width > 700 ? "0.71vw" : "0vw",
                      }}
                      className="setting-toggler"
                    >
                      <FormControl variant="standard" fullWidth>
                        <Select
                          className={
                            width > 700 ? classes.select3 : classes.select1
                          }
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={countrycode}
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
                                width: width > 700 ? "9vw" : "24vw",
                                maxHeight: width > 700 ? "18vw" : "40vw",
                                "& .MuiMenuItem-root": {
                                  padding: "0.1vw 0.1vw",
                                  width: width > 700 ? "9vw" : "25vw",
                                  height: width > 700 ? "2vw" : "6vw",
                                  fontFamily: "Poppins",
                                  fontStyle: "normal",
                                  fontWeight: "500",
                                  fontSize: width > 700 ? "0.81vw" : "2.5vw",
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
                                console.log(
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
                                  value={code?.dial_code}
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
                      if (
                        e.target.value !==
                        JSON.stringify(
                          parseInt(JSON.stringify(user?.contactNo).slice(2))
                        )
                      ) {
                        setVerifymobile(false);
                      } else {
                        setVerifymobile(true);
                      }
                    }}
                  />
                  <CloseIcon
                    style={{
                      display: "none",
                      position: "relative",
                      right: "2vw",
                      top: "1.3vw",
                      fontSize: "1.3vw",
                    }}
                  />
                </div>
                {/* ========= Verify button mobile ==========*/}
                <div>
                  <div
                    style={{
                      background: verifymobile ? "green" : "#163A4F",
                      color: "#fff",
                      cursor: verifymobile ? "default" : "pointer",
                      marginTop: "0",
                    }}
                    className="handlecirclieaboutsaveSetting"
                    onClick={() => {
                      !verifymobile && onSignInSubmit();
                    }}
                  >
                    {verifymobile ? "verified" : "Verify"}
                  </div>
                  <div id="recaptcha_container"></div>
                </div>
              </div>
              <div className="accountdetailbox">
                <div
                  style={{ width: width > 700 ? "15vw" : "18vw" }}
                  className="settingAccounttitle"
                >
                  Address
                </div>
                <div
                  style={{ width: width > 700 ? "40vw" : "100%" }}
                  className="settingAccounttitlevalue"
                >
                  <div className="jobpostfieldinputbox">
                    <textarea
                      type="text"
                      value={desc}
                      onChange={(e) => {
                        setDesc(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <p
                style={{
                  color: "red",
                  fontSize: "0.91vw",
                  marginLeft: "7.5vw",
                }}
              >
                {restag ? restag + "*" : ""}
              </p>

              <div
                style={{ marginTop: "2vw", flexDirection: "row" }}
                className="accountdetailbox homejobbuttons"
              >
                <button
                  style={{ background: "white" }}
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Cancel
                </button>
                <div
                  style={{ background: color }}
                  className="handlecirclieaboutsaveSetting"
                  onClick={() => {
                    handleAddUser();
                  }}
                >
                  {btnText}
                </div>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={width > 700 ? style : style1}>
                  <div className="profiletitleandmenunav">
                    <div className="profiledetailstitle">
                      Enter your mobile OTP
                    </div>
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
                  <hr />
                  <div
                    style={{ width: "38vw" }}
                    className="settingAccounttitlevalue"
                  >
                    {" "}
                    <div
                      style={{ width: "100%" }}
                      className="jobpostfieldinputbox"
                    >
                      <input
                        type="number"
                        value={OTP?.toString()?.slice(0, 6)}
                        onChange={(e) => {
                          setEnterOTPfield(e.target.value);
                        }}
                      />{" "}
                    </div>
                  </div>
                  <p style={{ color: "red", fontSize: "1.4vw" }}>
                    {enterOTPmatch}
                  </p>
                  <div
                    style={{ marginTop: "0.01vw" }}
                    className="handlemoreaboutskill"
                  >
                    <div
                      style={{ cursor: "pointer", marginRight: "0.6vw" }}
                      className="handlecirclieaboutsave"
                      onClick={verifyOTP}
                    >
                      VERIFY OTP
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {workhistorytoggle === 2 ? (
        <>
          <div className="settingAccountcontainer">
            <div className="settingAccounttitle">Set Password</div>

            <hr style={{ margin: "1vw" }} />
            <div
              hidden={user?.password ? false : true}
              className="accountdetailbox"
            >
              <div
                style={{ width: width > 700 ? "15vw" : "100%" }}
                className="settingAccounttitle"
              >
                Old Password
              </div>
              <div
                style={{
                  width: width > 700 ? "40vw" : "100%",
                  display: "flex",
                  alignItems: "center",
                }}
                className="settingAccounttitlevalue"
              >
                <div
                  style={{
                    width: width > 700 ? "35vw" : "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="jobpostfieldinputbox"
                >
                  <input
                    type={pass1 ? "password" : "text"}
                    style={{ width: "29.2vw" }}
                    onChange={(e) => {
                      setPassw1(e.target.value);
                    }}
                    value={passw1}
                  />
                </div>
                <span>
                  <RemoveRedEyeOutlinedIcon
                    style={{
                      fontSize: width > 700 ? "2vw" : "4vw",
                      position: "relative",
                      right: width > 700 ? "5vw" : "6vw",
                      cursor: "pointer",
                    }}
                    onClick={() => setPass1(!pass1)}
                  />
                </span>
              </div>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="settingAccounttitlevalue"
            >
              <span
                style={{ color: "red", marginRight: "15vw", fontSize: "1.3vw" }}
              >
                {oldPasswordCheck}
              </span>
            </div>
            <div className="accountdetailbox">
              <div
                style={{ width: width > 700 ? "15vw" : "100%" }}
                className="settingAccounttitle"
              >
                New Password
              </div>
              <div
                style={{
                  width: width > 700 ? "40vw" : "100%",
                  display: "flex",
                  alignItems: "center",
                }}
                className="settingAccounttitlevalue"
              >
                <div
                  style={{
                    width: width > 700 ? "35vw" : "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="jobpostfieldinputbox"
                >
                  <input
                    type={pass2 ? "password" : "text"}
                    style={{ width: "29.2vw" }}
                    // onChange={(e) => {
                    //   setPassw2(e.target.value);
                    // }}
                    // value={passw2}
                    name="newpasswordChange"
                    value={formValues.newpasswordChange}
                    onChange={handleChangeHomeFormVal}
                  />
                </div>
                <span>
                  <RemoveRedEyeOutlinedIcon
                    style={{
                      fontSize: width > 700 ? "2vw" : "4vw",
                      position: "relative",
                      right: width > 700 ? "5vw" : "6vw",
                      cursor: "pointer",
                    }}
                    onClick={() => setPass2(!pass2)}
                  />
                </span>
              </div>
            </div>
            <div className="accountdetailbox">
              <div
                style={{ width: width > 700 ? "15vw" : "100%" }}
                className="settingAccounttitle"
              >
                Confirm Password
              </div>
              <div
                style={{
                  width: width > 700 ? "40vw" : "100%",
                  display: "flex",
                  alignItems: "center",
                }}
                className="settingAccounttitlevalue"
              >
                <div
                  style={{
                    width: width > 700 ? "35vw" : "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="jobpostfieldinputbox"
                >
                  <input
                    type={pass3 ? "password" : "text"}
                    style={{ width: "29.2vw" }}
                    // onChange={(e) => {
                    //   setPassw3(e.target.value);
                    // }}
                    // value={passw3}
                    name="confirmpasswordChange"
                    value={formValues.confirmpasswordChange}
                    onChange={handleChangeHomeFormVal}
                  />
                </div>
                <span>
                  <RemoveRedEyeOutlinedIcon
                    style={{
                      fontSize: width > 700 ? "2vw" : "4vw",
                      position: "relative",
                      right: width > 700 ? "5vw" : "6vw",
                      cursor: "pointer",
                    }}
                    onClick={() => setPass3(!pass3)}
                  />
                </span>
              </div>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="settingAccounttitlevalue"
            >
              <p
                style={{
                  margin: "0vw 4vw 1vw 4vw",
                  color: "red",
                  fontSize: width > 700 ? "1vw" : "3vw",
                  marginRight: "7vw",
                }}
              >
                {formErrors.newpasswordChange}
              </p>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="settingAccounttitlevalue"
            >
              <p
                style={{
                  margin: "0vw 4vw 1vw 4vw",
                  color: "red",
                  fontSize: "1vw",
                }}
              >
                {formErrors.confirmpasswordChange}
              </p>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="settingAccounttitlevalue"
            >
              <span
                style={{
                  color: "red",
                  fontSize: width > 700 ? "1.3vw" : "3vw",
                }}
              >
                {ErrorMinPassword ? ErrorMinPassword : ""}
              </span>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="settingAccounttitlevalue"
            >
              <span
                style={{
                  color: "green",
                  fontSize: width > 700 ? "1.3vw" : "3vw",
                }}
              >
                {passwordCheck}
              </span>
            </div>

            <div style={{ marginTop: "2vw" }} className="accountdetailbox">
              <div
                style={{
                  cursor: "pointer",
                  color: passwordCheck ? "green" : "",
                }}
                className="handlecirclieaboutsave"
                onClick={() => {
                  user?.password
                    ? handlePasswordSetting()
                    : handlePasswordSetting1();
                }}
              >
                Save
              </div>
            </div>
          </div>

          <div className="settingAccountcontainer">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="settingAccounttitle">Two Step Authentication</div>

              <ToggleButton
                value={twofactorauthtogle}
                onToggle={(value) => {
                  setTwofactorauthtogle(!twofactorauthtogle);
                }}
              />
            </div>

            <hr style={{ margin: "1vw" }} />
            <div
              onClick={() => setCateaddcheckbox1(true)}
              className="checkboxfromcate"
            >
              <div>
                {cateaddcheckbox1 ? <img src={img51} /> : <img src={img4} />}{" "}
              </div>
              <div style={{ fontWeight: "500" }}>
                When My Login or activity Seems risky
              </div>
            </div>
            <div style={{ marginTop: "0.51vw" }} className="checkboxfromcate">
              <div
                onClick={() => {
                  setCateaddcheckbox1(false);
                }}
              >
                {cateaddcheckbox1 ? <img src={img4} /> : <img src={img51} />}{" "}
              </div>

              <div
                style={{ fontWeight: "500" }}
                onClick={() => {
                  setCateaddcheckbox1(false);
                }}
              >
                Every Week end ask to seems Veridication
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1vw",
              }}
            >
              <div
                style={{ fontSize: width > 700 ? "1vw" : "3vw" }}
                className="settingAccounttitle"
              >
                Text message <br />
                <span
                  style={{
                    color: "gray",
                    fontSize: width > 700 ? "0.75vw" : "2.3vw",
                  }}
                >
                  Receive a six digit code by text message to confirm it's you.
                </span>
              </div>

              <ToggleButton
                value={twofactorauthtogle1}
                onToggle={(value) => {
                  setTwofactorauthtogle1(!twofactorauthtogle1);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1vw",
              }}
            >
              <div
                style={{ fontSize: width > 700 ? "1vw" : "3vw" }}
                className="settingAccounttitle"
              >
                Security Question <br />
                <span
                  style={{
                    color: "gray",
                    fontSize: width > 700 ? "0.75vw" : "2.3vw",
                    lineHeight: "0.8vw",
                  }}
                >
                  You'll be promoted to answer your security question when we
                  need to verify your identity, <br /> so be sure to choose a
                  question only you know to answer to.
                </span>
              </div>

              <ToggleButton
                value={twofactorauthtogle2}
                onToggle={(value) => {
                  setTwofactorauthtogle2(!twofactorauthtogle2);
                  handleGameClick(false);
                }}
                // onClick={handleGameClick}
              />
            </div>
            <div style={{ marginTop: "1vw" }}>
              <div
                style={{ fontSize: width > 700 ? "1.1vw" : "3.3vw" }}
                className="settingAccounttitle"
              >
                Question <br />
              </div>

              <div className="">
                <Box
                  sx={{
                    background: "white",
                    border: "1px solid #7070705b",
                    height: width > 700 ? "3.0vw" : "9vw",
                    width: width > 700 ? "29vw" : "100%",
                    borderRadius: "5px",
                    margin: "0.5vw 0vw",
                    padding: "0.3vw 0.51vw",
                  }}
                  className="setting-toggler"
                >
                  <FormControl variant="standard" fullWidth disabled={disabled}>
                    <Select
                      className={ width>700? classes.select:classes.select4}
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
                              height: width>700? "3vw":"8vw",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: width>700? "1vw":"3vw",
                              lineHeight:width>700? "14px":"10px",
                              color: "#6b6b6b",
                            },
                          },
                        },
                      }}
                    >
                      <MenuItem onClick={() => {}} value={0} hidden>
                        Select
                      </MenuItem>

                      <MenuItem value={1}>Your birth place</MenuItem>
                      <MenuItem value={2}>Your city</MenuItem>
                      <MenuItem value={3}>Your study</MenuItem>
                      <MenuItem value={4}>Your book</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>

            <div
              style={{ width: width>700? "30.8vw":"100%" }}
              className="settingAccounttitlevalue"
            >
              <div className="jobpostfieldinputbox">
                <input
                  type="text"
                  style={{ width: "29.2vw" }}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                  value={answer}
                  disabled={disabled}
                />
              </div>
            </div>
            <div
              style={{ width:width>700? "40vw":"100%", marginTop: "2vw" }}
              className="checktemandc"
            >
              <label
                style={{
                  marginTop: "0vw",
                  position: "relative",
                }}
                htmlFor="checkbox"
              >
                <input
                  style={{ height: "12px" }}
                  type="checkbox"
                  onChange={() => {
                    // setCheckedtocompany(!checkedtocompany);
                  }}
                  name=""
                  id="checkbox"
                />

                <div
                  className=""
                  style={{
                    fontSize:width>700? "0.91vw":"2.7vw",
                    fontFamily: "Poppins",
                    fontStyle: "500",
                    fontWeight: "500",
                    color: "#00000080",
                    display: "inline",
                    margin: "0 1vw",
                  }}
                >
                  I understand my account will be locked if I am unable to
                  answer this question
                </div>
              </label>
            </div>
            {/* <div className="checktemandc">
              <div
                className="checkbox"
                onClick={() => setCheckone1(!checkone1)}
                onChange={() => {
                  setCheckedtocompany(!checkedtocompany);
                }}
              >
                {checkone1 ? (
                  <DoneIcon
                    style={{
                      fontSize: "0.8vw",
                      color: "blueviolet",
                      fontWeight: "600",
                    }}
                  />
                ) : (
                  ""
                )}{" "}
              </div>
              <div className="checktermandconditiontext">
                Keep me logged in on this device
              </div>
            </div> */}

            <div style={{ marginTop: "2vw" }}>
              <button
                style={{ borderColor: "#064c87" }}
                className="handlecirclieaboutsave"
                // onClick={() => {
                //   handleTSAuthentication();
                // }}
                // disabled={checkedtocompany ? false : true}
              >
                Save
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      {workhistorytoggle === 3 ? (
        <div
          style={{ marginLeft:width>700? "15vw":"auto", width:width>700? "50vw":"90vw" }}
          className="settingAccountcontainer"
        >
          <div style={{ fontSize:width>700? "1.3vw":"3.8vw" }} className="settingAccounttitle">
            Notifications
          </div>
          <div
            style={{
              marginTop: "1vw",
            }}
          >
            <div style={{ fontSize:width>700? "1.1vw":"3.3vw" }} className="settingAccounttitle">
              Mobile Push Notifications <br />
            </div>

            <div className="">
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: width>700? "3.0vw":"9vw",
                  width: width>700? "29vw":"100%",
                  borderRadius: "5px",
                  margin: "0.5vw 0vw",
                  padding: "0.3vw 0.51vw",
                }}
                className="setting-toggler"
              >
                <FormControl variant="standard" fullWidth>
                  <Select
                    className={width>700?classes.select:classes.select4}
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
                    onChange={handleChange4}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          bgcolor: "white",

                          "& .MuiMenuItem-root": {
                            padding: "0.1vw 2vw",
                            width:  "29vw",
                            height:  "3vw",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize:width>700? "1vw":"3vw",
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

                    <MenuItem value={1}>All new messsages</MenuItem>
                    <MenuItem value={2}>All messsages</MenuItem>
                    <MenuItem value={3}>All new </MenuItem>
                    <MenuItem value={4}> new messsages</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div
            style={{ fontSize: width>700? "1.2vw":"3.6vw", marginTop: width>700? "1vw":"3vw" }}
            className="settingAccounttitle"
          >
            Email Notifications <br />
          </div>
          <div style={{ fontSize: "1vw" }} className="settingAccounttitle">
            <span style={{ color: "gray", fontSize: width>700? "0.75vw":"2.4vw" }}>
              From time to time, we’d like to send you emails with interesting
              news about Substance and your workspace. <br /> You can choose
              which of these updates you’d like to receive :{" "}
            </span>
          </div>
          <div
            style={{ fontSize: width>700?"1.1vw":"3.1vw", marginTop: "1vw" }}
            className="settingAccounttitle"
          >
            Send me Email Notifications <br />
          </div>
          <div
            onClick={() => setCateaddcheckboxx1(1)}
            className="checkboxfromcate"
          >
            <div>
              {cateaddcheckboxx1 === 1 ? (
                <img src={img51} />
              ) : (
                <img src={img4} />
              )}{" "}
            </div>
            <div
              onClick={() => {
                setCateaddcheckboxx1(1);
              }}
              style={{ fontWeight: "500" }}
            >
              Send me email notification
            </div>
          </div>
          <div style={{ marginTop: "0.11vw" }} className="checkboxfromcate">
            <div
              onClick={() => {
                setCateaddcheckboxx1(2);
              }}
            >
              {cateaddcheckboxx1 === 2 ? (
                <img src={img51} />
              ) : (
                <img src={img4} />
              )}{" "}
            </div>

            <div
              style={{ fontWeight: "500" }}
              onClick={() => {
                setCateaddcheckboxx1(2);
              }}
            >
              once an hour at most
            </div>
          </div>
          <div style={{ marginTop: "0.11vw" }} className="checkboxfromcate">
            <div
              onClick={() => {
                setCateaddcheckboxx1(3);
              }}
            >
              {cateaddcheckboxx1 === 3 ? (
                <img src={img51} />
              ) : (
                <img src={img4} />
              )}{" "}
            </div>

            <div
              style={{ fontWeight: "500" }}
              onClick={() => {
                setCateaddcheckboxx1(3);
              }}
            >
              never
            </div>
          </div>

          <div
            style={{ fontSize:width>700? "1.2vw":"3.2vw", marginTop: "2vw" }}
            className="settingAccounttitle"
          >
            Email News & Updates <br />
          </div>

          <div style={{ fontSize:width>700? "1vw":"3vw" }} className="settingAccounttitle">
            <span style={{ color: "gray", fontSize: width>700? "0.75vw":"2.2vw" }}>
              From time to time, we’d like to send you emails with interesting
              news about Substance and your workspace. <br /> You can choose
              which of these updates you’d like to receive :
            </span>
          </div>

          <div
            style={{ width:width>700?  "40vw":"100%", marginTop: "2vw" }}
            className="checktemandc"
          >
            <div className="checkbox" onClick={() => setCheckonex(!checkonex)}>
              {checkonex ? (
                <DoneIcon
                  style={{
                    fontSize: width>700? "0.81vw":"3.3vw",
                    color: "blueviolet",
                    fontWeight: "600",
                  }}
                />
              ) : (
                ""
              )}{" "}
            </div>
            <div
              style={{ fontSize:width>700?   "0.9vw":"2.7vw" }}
              className="checktermandconditiontext"
            >
              Tips and Tricks
            </div>
          </div> 
          <div
            style={{ width:width>700?  "40vw":"100%", marginTop: "1vw" }}
            className="checktemandc"
          >
            <div
              className="checkbox"
              onClick={() => setCheckonex1(!checkonex1)}
            >
              {checkonex1 ? (
                <DoneIcon
                  style={{
                    fontSize: width>700? "0.81vw":"3.3vw",
                    color: "blueviolet",
                    fontWeight: "600",
                  }}
                />
              ) : (
                ""
              )}{" "}
            </div>
            <div
              style={{ fontSize:width>700?   "0.9vw":"2.7vw" }}
              className="checktermandconditiontext"
            >
              Offers and Promotions
            </div>
          </div>
          <div
            style={{ width: width>700?  "40vw":"100%", marginTop: "1vw" }}
            className="checktemandc"
          >
            <div
              className="checkbox"
              onClick={() => setCheckonex2(!checkonex2)}
            >
              {checkonex2 ? (
                <DoneIcon
                  style={{
                    fontSize: width>700? "0.81vw":"3.3vw",
                    color: "blueviolet",
                    fontWeight: "600",
                  }}
                />
              ) : (
                ""
              )}{" "}
            </div>
            <div
              style={{ fontSize: width>700?   "0.9vw":"2.7vw" }}
              className="checktermandconditiontext"
            >
              Research Opportunies
            </div>
          </div>
          <div
            style={{ width: width>700?  "40vw":"100%", marginTop: "1vw" }}
            className="checktemandc"
          >
            <div
              className="checkbox"
              onClick={() => setCheckonex3(!checkonex3)}
            >
              {checkonex3 ? (
                <DoneIcon
                  style={{
                    fontSize: width>700? "0.81vw":"3.3vw",
                    color: "blueviolet",
                    fontWeight: "600",
                  }}
                />
              ) : (
                ""
              )}{" "}
            </div>
            <div
              style={{ fontSize: width>700?   "0.9vw":"2.7vw" }}
              className="checktermandconditiontext"
            >
              Substance Developer Newsletter:Best practices for connecting your
              work to Substance via our platform
            </div>
          </div>
          <div
            style={{ width: width>700?  "40vw":"100%", marginTop: "1vw" }}
            className="checktemandc"
          >
            <div
              className="checkbox"
              onClick={() => setCheckonex4(!checkonex4)}
            >
              {checkonex4 ? (
                <DoneIcon
                  style={{
                    fontSize: width>700? "0.81vw":"3.3vw",
                    color: "blueviolet",
                    fontWeight: "600",
                  }}
                />
              ) : (
                ""
              )}{" "}
            </div>
            <div
              style={{ fontSize: width>700?   "0.9vw":"2.7vw" }}
              className="checktermandconditiontext"
            >
              Substance Platform Changelog:Stay in the know when we make updates
              to our APIs
            </div>
          </div>

          <div
            style={{ fontSize: width>700?  "1.2vw":"3.3vw" , marginTop: "2vw" }}
            className="settingAccounttitle"
          >
            Sign-in Notifications <br />
          </div>

          <div style={{ fontSize:width>700?  "1vw":"3vw" }} className="settingAccounttitle">
            <span style={{ color: "gray", fontSize:width>700?  "0.75vw":"2.5vw" }}>
              These emails help keep your Substance account secure. If you
              haven’t already, you should also enable two-factor authentication.
            </span>
          </div>
          <div
            style={{ alignItems: "baseline", marginTop: "0.5vw" }}
            onClick={() => setCateaddcheckboxx2(1)}
            className="checkboxfromcate"
          >
            <div>
              {cateaddcheckboxx2 === 1 ? (
                <img src={img51} />
              ) : (
                <img src={img4} />
              )}{" "}
            </div>
            <div
              onClick={() => {
                setCateaddcheckboxx2(1);
              }}
              style={{ fontWeight: "500" }}
            >
              Most secure
              <br />
              <span style={{ fontSize: width>700? "0.75vw":"2.4vw" }}>
                Receive an email anytime someone signs in to your Substance
                account from an unrecognized device.
              </span>
            </div>
          </div>
          <div
            style={{ alignItems: "baseline", marginTop: "0.5vw" }}
            onClick={() => setCateaddcheckboxx2(2)}
            className="checkboxfromcate"
          >
            <div>
              {cateaddcheckboxx2 === 2 ? (
                <img src={img51} />
              ) : (
                <img src={img4} />
              )}{" "}
            </div>
            <div
              onClick={() => {
                setCateaddcheckboxx2(2);
              }}
              style={{ fontWeight: "500" }}
            >
              Standard
              <br />
              <span style={{ fontSize:width>700?  "0.75vw":"2.4vw" }}>
                Receive an email when someonesigns in from a new location, with
                an unrecognized device.{" "}
              </span>
            </div>
          </div>
          <div
            style={{ alignItems: "baseline", marginTop: "0.5vw" }}
            onClick={() => setCateaddcheckboxx2(3)}
            className="checkboxfromcate"
          >
            <div>
              {cateaddcheckboxx2 === 3 ? (
                <img src={img51} />
              ) : (
                <img src={img4} />
              )}{" "}
            </div>
            <div
              onClick={() => {
                setCateaddcheckboxx2(3);
              }}
              style={{ fontWeight: "500" }}
            >
              Don’t send me any sign-in notifications
              <br />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {workhistorytoggle === 5 ? (
        !bankformDetails ? (
          <div>
            <div
              style={{
                color: "black",
                display: "flex",
                justifyContent: "space-between",
                width: "96%",
                cursor: "auto",

              }}
              className="profileworkhistruytoggleervalue"
            >
              <div>List Of Bank Details</div>
              <div
                onClick={() => {
                  setbankformDetails(true);
                  setSelectedBankdetailedit(false);
                }}
                style={{ cursor: "pointer", color: "#064C87" }}
              >
                Add Bank Details
              </div>
            </div>
            <div className="flexbanakcards">
              {arrayofbankdetail?.map((data, index) => {
                return (
                  <BankCard
                  width={width}
                    setArrayofbankdetail={setArrayofbankdetail}
                    data={data}
                    setSelectedBankdetailedit={setSelectedBankdetailedit}
                    setbankformDetails={setbankformDetails}
                    primaryAccount={primaryAccount}
                    setPrimaryAccount={setPrimaryAccount}
                  />
                );
              })}
            </div>
          </div>
        ) : selectedBankdetailedit ? (
          <div>
            <BankEdit
              width={width}
              setSelectedBankdetailedit={setSelectedBankdetailedit}
              setbankformDetails={setbankformDetails}
              setArrayofbankdetail={setArrayofbankdetail}
              selectedBankdetailedit={selectedBankdetailedit}
            />
          </div>
        ) : (
          <div>
            <BankForm
              width={width}
              setSelectedBankdetailedit={setSelectedBankdetailedit}
              setbankformDetails={setbankformDetails}
              setArrayofbankdetail={setArrayofbankdetail}
            />
          </div>
        )
      ) : (
        ""
      )}
      {workhistorytoggle === 6 ? (
        AuthenticateDocument ? (
          <div>
            <div
              style={{
                color: "black",
                display: "flex",
                justifyContent: "space-between",
                width: "96%",
                cursor: "auto",
              }}
              className="profileworkhistruytoggleervalue"
            >
              <div>List Of Document Details</div>
              <div
                onClick={() => {
                  setAuthenticateDocument(false);
                  setEditDocuments(false);
                }}
                style={{ cursor: "pointer", color: "#064C87" }}
              >
                Add Document Details
              </div>
            </div>
            <div className="flexbanakcards">
              {arrayofdocumentdetail?.map((data) => {
                return (
                  <DocumentCardauth
                    width={width}
                    setAuthenticateDocument={setAuthenticateDocument}
                    setEditDocuments={setEditDocuments}
                    data={data}
                    setArrayofdocumentdetail={setArrayofdocumentdetail}
                  />
                );
              })}
            </div>
          </div>
        ) : editDocuments ? (
          <div>
            <EditDocuments
              width={width}
              setEditDocuments={setEditDocuments}
              editDocuments={editDocuments}
              setAuthenticateDocument={setAuthenticateDocument}
              setArrayofdocumentdetail={setArrayofdocumentdetail}
            />
          </div>
        ) : (
          <div>
            <AddDocumentauth
              width={width}
              setEditDocuments={setEditDocuments}
              setAuthenticateDocument={setAuthenticateDocument}
              setArrayofdocumentdetail={setArrayofdocumentdetail}
            />
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
}

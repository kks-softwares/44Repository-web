import React, { useEffect, useState } from "react";
import "./navbar.css";
import img from "../../assets/Landing page/svgviewer-png-output (3).png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import img21 from "../../assets/jobhome/Secure login-pana.svg";
import img22 from "../../assets/jobhome/Group 8414.svg";
import { TextField } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { makeStyles } from "@material-ui/core";
import img1 from "../../assets/Webfiles/Web 1366 – 9/LinkedIn_icon.svg.png";
import { LinkedIn } from "react-linkedin-login-oauth2";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import img2x from "../../assets/png/Landing/facebook.png";
import img4 from "../../assets/png/Landing/Group 7792.png";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { userActions } from "../../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import FacebookLogin from "@doopage/react-facebook-login";
import Fade from "react-reveal/Fade";
import axios from "axios";
import API_HOST, { GOOGLE_CLIENT_ID } from "../../env";
import CloseIcon from "@mui/icons-material/Close";
import { Dropdown } from "react-bootstrap";
import { FACEBOOK_APP_ID } from "../../env";
import UserIcon from "../../assets/icons/user.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import LogoutIcon from "../../assets/icons/log-out.svg";
import { Link, useSearchParams } from "react-router-dom";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75vw",
  bgcolor: "background.paper",
  boxShadow: 24,
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1.5,
};
const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.91vw",
    color: "#263238",
  },
}));

export default function Navbar({ width }) {
  const [searchParams] = useSearchParams();
  const [linkedcode, setLinkedcode] = useState("");
  const [linkedstate, setLinkedstate] = useState("");
  const [linkedverify, setLinkedverify] = useState("");

  useEffect(() => {
    for (const entry of searchParams.entries()) {
      if (entry[0] === "code") {
        setLinkedcode(entry[1]);
      }
      if (entry[0] === "oauth_token") {
        setLinkedstate(entry[1]);
     
      }
      if (entry[0] === "oauth_verifier") {
        setLinkedverify(entry[1]);
        
      }
    }
  }, [searchParams]);

  const linkedinlogin = async (linkedcode, linkedstate) => {
    try {
      const response = await axios.post(`${API_HOST}/linkedin2login`, {
        code: linkedcode,
      });

      if (response.data.success) {
        window.localStorage.setItem(
          "token",
          JSON.stringify(
            response?.data?.success?.Tokens
              ? response?.data?.success?.Tokens
              : response?.data?.success?.newTokens
          )
        );
        window.localStorage.setItem(
          "user",
          JSON.stringify({ ...response.data.success?.data })
        );
   
        dispatch(
          userActions.setUser({
            user: { ...response.data.success.data },
          })
        );
        navigate("/dashbaord/postwork");
      }
    } catch (err) {
 
    }
  };
  const twitterlogin = async (linkedverify, linkedstate) => {
    try {
      const response = await axios.post(`${API_HOST}/twitter2login`, {
        tokenaccess: linkedstate,
        verifytoken: linkedverify,
      });

      if (response.data.success) {
        window.localStorage.setItem(
          "token",
          JSON.stringify(
            response?.data?.success?.Tokens
              ? response?.data?.success?.Tokens
              : response?.data?.success?.newTokens
          )
        );
        window.localStorage.setItem(
          "user",
          JSON.stringify({ ...response.data.success?.data })
        );
     
        dispatch(
          userActions.setUser({
            user: { ...response.data.success.data },
          })
        );
        navigate("/dashbaord/postwork");
      }
    } catch (err) {
  
    }
  };

  useEffect(() => {
    if (linkedcode) {
      linkedinlogin(linkedcode);
    }
  }, [linkedcode]);

  useEffect(() => {
    if (linkedverify) {
      twitterlogin(linkedverify, linkedstate);
    }
  }, [linkedverify]);

  function logoutUser() {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    window.location.pathname = "/";
    dispatch(userActions.removeUser());
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loggedInStatus, signupOpen, loginOpen } = useSelector(
    (state) => state.user
  );

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    dispatch(userActions.closeloginform());
  };
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => {
    setOpen2(false);
    dispatch(userActions.closeSignupform());
  };

  const [openEmailVeriPopup, setopenEmailVeriPopup] = useState(false);
  const handleOpen3 = () => setopenEmailVeriPopup(true);
  const handleClose3 = () => setopenEmailVeriPopup(false);

  const [resetpassword, setResetpassword] = useState(true);
  const [checkmail, setCheckmail] = useState(false);
  const [newpassword, setnewpassword] = useState(false);
  const [resetdone, setResetdone] = useState(false);
  const [visitpassword, setVisitpassword] = useState(false);
  const [formInvalid, setformInvalid] = useState("");
  const [emailInvalid, setemailInvalid] = useState("");
  const [passwordLenthVD, setpasswordLenthVD] = useState("");
  const [checkboxValidaData, setcheckboxValidaData] = useState("");
  const [checkboxValidaData_2, setcheckboxValidaData_2] = useState("");
  const [passwordMatched, setpasswordMatched] = useState("");

  useEffect(() => {
    setOpen2(signupOpen);
  }, [signupOpen]);

  useEffect(() => {
    setOpen(loginOpen);
  }, [loginOpen]);

  const handlesignup = () => {
    // setFormErrors(validate(formValues));
    if (checkedtocompany === false) {
      setcheckboxValidaData("Please Select the Terms & Condition");
      return false;
    }
    if (checkedtocompany_2 === false) {
      setcheckboxValidaData_2("Please Select the Privacy Policy");
      return false;
    }

    if(Object.getOwnPropertyNames(validate(formValues)).length !== 0){
      setFormErrors(validate(formValues));
      return false;
    }
    if(Object.getOwnPropertyNames(validate(formValues)).length === 0){
      setFormErrors(validate(formValues));
    }

    setpasswordLenthVD("");
    setemailInvalid("");
    setpasswordMatched("");

    if (formValues.signuppassword !== formValues.signupcpassword){
        setpasswordMatched("The password and confirmation password do not match!");
      } 

    if (
      formValues.signuppassword === formValues.signupcpassword 
      // && formValues.signupcpassword.length !== 0
    ) {
      const data = {
        firstName: formValues.signupfname,
        lastName: formValues.signuplname,
        emailId: formValues.signupemail,
        password: formValues.signuppassword,
      };
      axios
        .post(`${API_HOST}/users/createUser`, data)
        .then((res) => {
     
          setpasswordLenthVD(res?.data?.fails?.data);
          const data = {
            emailId: formValues.signupemail,
            password: formValues.signuppassword,
          };
         
          handleOpen3()
            // axios
            //   .post(`${API_HOST}/login`, data)
            //   .then((res) => {
            
            //     setWrongid(false);
            //     setWrongidp(false);
            //     window.localStorage.setItem(
            //       "user",
            //       JSON.stringify({ ...res.data.success.data })
            //     );
            //     window.localStorage.setItem(
            //       "token",
            //       JSON.stringify(res.data.success.Tokens)
            //     );
            //     dispatch(
            //       userActions.setUser({
            //         user: { ...res.data.success.data },
            //       })
            //     );
            //     navigate("/dashbaord/postwork");
            //   })
            .catch((e) => {
        
              if (e.response.status === 404) {
                setWrongid(true);
                setWrongidp(false);
              } else if (e.response.data.error.data) {
                setformInvalid(e.response.data.error.data);
              } else {
                setWrongidp(true);
                setWrongid(false);
              }
            });
        })
        .catch((e) => {
          if (e.response.status === 406) {
            setemailInvalid(e.response.data.fails.data.message);
         
          }
          // setWrongsignupemail(true);
        });
    } else {
      setHandlepasswordmatch(true);
    }
  };
  const [handlepasswordmatch, setHandlepasswordmatch] = useState(false);
  const [EmailVerifyCheck, setEmailVerifyCheck] = useState("");

  const handlelogin = () => {
    setEmailVerifyCheck("");
    const data = {
      emailId: loginid,
      password: loginpassword,
    };
    axios
      .post(`${API_HOST}/login`, data)
      .then((res) => {
        
        setWrongid(false);
        setWrongidp(false);
        window.localStorage.setItem(
          "user",
          JSON.stringify({ ...res.data.success.data })
        );
        window.localStorage.setItem(
          "token",
          JSON.stringify(res.data.success.Tokens)
        );
        dispatch(
          userActions.setUser({
            user: { ...res.data.success.data },
          })
        );
        navigate("/dashbaord/postwork");
      })
      .catch((e) => {
       
        if (e.response.status === 406) {
          setEmailVerifyCheck(e.response?.data?.fails?.message);
        }
        if (e.response.status === 500) {
          setWrongid(true);
          setWrongidp(false);
        } else {
          setWrongid(false);
          setWrongidp(true);
        }
      });
  };
  const [checkedtocompany, setCheckedtocompany] = useState(false);
  const [checkedtocompany_2, setCheckedtocompany_2] = useState(false);
  const [wrongid, setWrongid] = useState(false);
  const [wrongidp, setWrongidp] = useState(false);
  const [loginid, setLoginid] = useState("");
  const [loginpassword, setLoginpassword] = useState("");
  const [signupfname, setSignupfname] = useState("");
  const [signuplname, setSignuplname] = useState("");
  const [signupemail, setSignupemail] = useState("");
  const [signuppassword, setSignuppassword] = useState("");
  const [signupcpassword, setSignupcpassword] = useState("");
  const [visitPasswords, setVisitPasswords] = useState(false);
  const [visitPasswords1, setVisitPasswords1] = useState(false);
  // const [wrongsignupemail, setWrongsignupemail] = useState(false);
  const [istdropdown, setIstdropdown] = useState(false);
  const [secdropdown, setsecdropdown] = useState(false);
  const [thidropdown, setthidropdown] = useState(false);

  /* VALIDATION FUNCTIONALITY */
  const initialValues = {
    signupfname: "",
    signuplname: "",
    signupemail: "",
    signuppassword: "",
    signupcpassword: ""
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
    const regexForChar = /^.{8,20}$/;
    const regexForUpperCase = /^(?=.*[A-Z])/;
    const regexForDigit = /^(?=.*\d)/;

    if (!values.signupfname) {
      errors.signupfname = "First name is required!";
    }
    if (!values.signuplname) {
      errors.signuplname = "Last name is required!";
    }
    if (!values.signupemail) {
      errors.signupemail = "Email is required!";
    } else if (!regex.test(values.signupemail)) {
      errors.signupemail = "The email address is improperly formatted!";
    }
    if (!regexForDigit.test(values.signuppassword)) {
      errors.signuppassword = "Password should contain at least one Digit *";
    } else if (!specialCharacter.test(values.signuppassword)) {
      errors.signuppassword =
        "Password should contain at least one Special character *";
    } else if (!regexForUpperCase.test(values.signuppassword)) {
      errors.signuppassword =
        "Password should contain at least one UpperCase letter *";
    } else if (!regexForChar.test(values.signuppassword)) {
      errors.signuppassword = "Password must be more than 8 Character's *";
    }
    // ======== Confirfm Password Check ===========
    if (!regexForDigit.test(values.signupcpassword)) {
      errors.signupcpassword = "Confirm Password should contain at least one Digit *";
    } else if (!specialCharacter.test(values.signupcpassword)) {
      errors.signupcpassword =
        "Confirm Password should contain at least one Special character *";
    } else if (!regexForUpperCase.test(values.signupcpassword)) {
      errors.signupcpassword =
        "Confirm Password should contain at least one UpperCase letter *";
    } else if (!regexForChar.test(values.signupcpassword)) {
      errors.signupcpassword = "Confirm Password must be more than 8 Character's *";
    }

    return errors;
  };

  async function googleLoginSuccess(res) {
    try {
      const response = await axios.post(API_HOST + "/google2login", res);

      if (response.data.success) {
        window.localStorage.setItem(
          "token",
          JSON.stringify(
            response?.data?.success?.Tokens
              ? response?.data?.success?.Tokens
              : response?.data?.success?.newTokens
          )
        );
        window.localStorage.setItem(
          "user",
          JSON.stringify({ ...response.data.success?.data })
        );
   
        dispatch(
          userActions.setUser({
            user: { ...response.data.success.data },
          })
        );
        navigate("/dashbaord/postwork");
      }
    } catch (err) {
  
    }
  }

  async function facebookLoginSuccess(res) {
    try {
      const accessToken = res.accessToken;
      const response = await axios.post(`${API_HOST}/facebook2login`, {
        access_token: accessToken,
      });

      if (response.data.success) {
        window.localStorage.setItem(
          "token",
          JSON.stringify(
            response?.data?.success?.Tokens
              ? response?.data?.success?.Tokens
              : response?.data?.success?.newTokens
          )
        );
        window.localStorage.setItem(
          "user",
          JSON.stringify({ ...response.data.success?.data })
        );
        
        dispatch(
          userActions.setUser({
            user: { ...response.data.success.data },
          })
        );
        navigate("/dashbaord/postwork");
      }
    } catch (err) {

    }
  }

  const [forgetemail, setforgetemail] = useState("");
  const [forgetemailr, setforgetemailr] = useState("");
  const [forgetotp, setforgetotp] = useState("");
  const [forgettotp, setforgettotp] = useState("");

  const [password, setPassword] = useState("");
  const [passwordc, setPasswordc] = useState("");
  const [passwordr, setPasswordr] = useState("");
  const [passwordcr, setPasswodcr] = useState("");

  const sendotp = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!forgetemail) {
      setforgetemailr("Email is required!");
    } else if (!regex.test(forgetemail)) {
      setforgetemailr("The email address is improperly formatted!");
    } else {
      axios
        .post(`${API_HOST}/users/resetPassword`, { userEmail: forgetemail })
        .then((res) => {
          if (res?.data?.success?.success) {
            setCheckmail(true);
          }
        })
        .catch(() => {
          setforgetemailr("Email not Found");
        });
    }
  };

  const confirmOtp = () => {
    axios
      .post(`${API_HOST}/users/otpMatch`, {
        emailId: forgetemail,
        otp: forgetotp,
      })
      .then((res) => {
        if (res?.data?.success?.success) {
          setnewpassword(true);
        } else {
          setforgettotp("Otp does not match");
        }
      })
      .catch(() => {
        setforgettotp("Otp does not match");
      });
  };

  const setresetPassword = () => {
    if (password === passwordc) {
      axios
        .post(`${API_HOST}/users/newPassword`, {
          emailId: forgetemail,
          new_password: password,
          confirmPassword: passwordc,
        })
        .then((res) => {
          if (res?.data?.success?.success) {
            setResetdone(true);
          } else {
            setPasswordr("Password must be more than 8 character's");
            setPasswodcr("Password must be more than 8 character's");
          }
        })
        .catch(() => {
          setPasswodcr("Password must be more than 8 character's");
          setPasswordr("Password must be more than 8 character's");
        });
    } else {
      setPasswodcr("Password Does Not Match");
    }
  };

  const magicallogin = () => {
    const data = {
      emailId: forgetemail,
      password: password,
    };
    axios
      .post(`${API_HOST}/login`, data)
      .then((res) => {
        
        setWrongid(false);
        setWrongidp(false);
        window.localStorage.setItem(
          "user",
          JSON.stringify({ ...res.data.success.data })
        );
        window.localStorage.setItem(
          "token",
          JSON.stringify(res.data.success.Tokens)
        );
        dispatch(
          userActions.setUser({
            user: { ...res.data.success.data },
          })
        );
        navigate("/dashbaord/postwork");
      })
      .catch((e) => {
      
        if (e.response.status === 406) {
          setEmailVerifyCheck(e.response?.data?.fails?.message);
          setResetpassword(true);
          setCheckmail(false);
          setResetdone(false);
          setnewpassword(false);
        }
        if (e.response.status === 500) {
          setWrongid(true);
          setWrongidp(false);
          setResetpassword(true);
          setCheckmail(false);
          setResetdone(false);
          setnewpassword(false);
        } else {
          setWrongid(false);
          setWrongidp(true);
          setResetpassword(true);
          setCheckmail(false);
          setResetdone(false);
          setnewpassword(false);
        }
      });
  };

  return (
    <div id="myHeader" className="nav-container">
      <div className="navlofogo">
        <img
          onClick={() => {
            navigate("/");
          }}
          src={img}
          alt="error"
        />
      </div>
      <div
        style={{
          width: width > 700 ? "45vw" : "25vw",
          height: width > 700 ? "3vw" : "7vw",
        }} // remove this style
        className="nav-menuitems"
      >
        {width > 700 && (
          <div
            onClick={() => {
              navigate("/");
            }}
            onMouseEnter={() => {
              setIstdropdown(false);
              setsecdropdown(false);
              setthidropdown(false);
            }}
          >
            Home
          </div>
        )}
        {width > 700 && (
          <div
            onClick={() => {
              navigate("/aboutus");
            }}
            onMouseEnter={() => {
              setIstdropdown(false);
              setsecdropdown(false);
              setthidropdown(false);
            }}
          >
             About us
          </div>
        )}
        {width > 700 && (
          <div
            onClick={() => {
              navigate("/services");
            }}
            onMouseEnter={() => {
              setIstdropdown(false);
              setsecdropdown(false);
              setthidropdown(false);
            }}
          >
            Services
          </div>
        )}
        {width > 700 && (
          <div
            onClick={() => {
              navigate("/blogs");
            }}
            onMouseEnter={() => {
              setIstdropdown(false);
              setsecdropdown(false);
              setthidropdown(false);
            }}
          >
            Blogs
          </div>
        )}
        {width > 700 && (
          <div
            onClick={() => {
              navigate("/contactus");
            }}
            onMouseEnter={() => {
              setIstdropdown(false);
              setsecdropdown(false);
              setthidropdown(false);
            }}
          >
            Contact Us
          </div>
        )}
        {/* <div style={{ width: width > 700 ? "5vw" : "13.5vw", height: "4vw" }}>
          <div
            onMouseEnter={() => {
              setIstdropdown(true);
              setsecdropdown(false);
              setthidropdown(false);
            }}
          >
            About us
          </div>
          {istdropdown ? (
            <Fade timeout={400}>
              <div
                onMouseLeave={() => setIstdropdown(false)}
                className="dropdownboxhoverdefault"
                style={{
                  right: "5vw",
                  width: width > 700 ? "15.5vw" : "30.5vw",
                  top: "0.5vw",
                }}
              >
                <Typography
                  sx={{
                    p: width > 700 ? 2 : 0.61,
                    pb: width > 700 ? 0.5 : 0.5,
                    pt: width > 700 ? 1 : 0.5,
                    fontSize: width > 700 ? "1vw" : "3vw",
                    fontWeight: "500",
                    fontFamily: "poppins",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/aboutus");
                    setIstdropdown(false);
                  }}
                >
                  Our Company
                </Typography>
                <Typography
                  sx={{
                    p: width > 700 ? 2 : 0.61,
                    pb: width > 700 ? 0.5 : 0.5,
                    pt: width > 700 ? 1 : 0.5,
                    fontSize: width > 700 ? "1vw" : "3vw",
                    fontWeight: "500",
                    fontFamily: "poppins",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/benifits");
                    setIstdropdown(false);
                  }}
                >
                  Benefits
                </Typography>
                <Typography
                  sx={{
                    p: width > 700 ? 2 : 0.61,
                    pb: width > 700 ? 0.5 : 0.5,
                    pt: width > 700 ? 1 : 0.5,
                    fontSize: width > 700 ? "1vw" : "3vw",
                    fontWeight: "500",
                    fontFamily: "poppins",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/howitwork");
                    setIstdropdown(false);
                  }}
                >
                  How it Works
                </Typography>
                <Typography
                  sx={{
                    p: width > 700 ? 2 : 0.61,
                    pb: width > 700 ? 0.5 : 0.5,
                    pt: width > 700 ? 1 : 0.5,
                    fontSize: width > 700 ? "1vw" : "3vw",
                    fontWeight: "500",
                    fontFamily: "poppins",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/success_stories");
                    setIstdropdown(false);
                  }}
                >
                  Success Stories
                </Typography>
                <Typography
                  sx={{
                    p: width > 700 ? 2 : 0.61,
                    pb: width > 700 ? 0.5 : 0.5,
                    pt: width > 700 ? 1 : 0.5,
                    fontSize: width > 700 ? "1vw" : "3vw",
                    fontWeight: "500",
                    fontFamily: "poppins",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/Career");
                    setIstdropdown(false);
                  }}
                >
                  Current Opening
                </Typography>
              </div>
            </Fade>
          ) : (
            ""
          )}
        </div>
        <div
          style={{ width: width > 700 ? "6vw" : "13vw", height: "4vw" }}
          onMouseEnter={() => {
            setIstdropdown(false);
            setsecdropdown(true);
            setthidropdown(false);
          }}
        >
          <div> Services</div>
          {secdropdown ? (
            <Fade timeout={400}>
              <div
                onMouseLeave={() => setsecdropdown(false)}
                className="dropdownboxhoverdefault"
                style={{
                  right: "6vw",
                  width: width > 700 ? "18.5vw" : "30.5vw",
                }}
              >
                <Typography
                  sx={{
                    p: width > 700 ? 2 : 0.61,
                    pb: width > 700 ? 0.5 : 0.5,
                    pt: width > 700 ? 1 : 0.5,
                    fontSize: width > 700 ? "1vw" : "3vw",
                    fontWeight: "500",
                    fontFamily: "poppins",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/services");
                    setsecdropdown(false);
                  }}
                >
                  Our Services
                </Typography>
                <Typography
                  sx={{
                    p: width > 700 ? 2 : 0.61,
                    pb: width > 700 ? 0.5 : 0.5,
                    pt: width > 700 ? 1 : 0.5,
                    fontSize: width > 700 ? "1vw" : "3vw",
                    fontWeight: "500",
                    fontFamily: "poppins",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    // navigate("/success_stories");
                    setsecdropdown(false);
                  }}
                >
                  Become a 44 Resources Expert
                </Typography>
              </div>
            </Fade>
          ) : (
            ""
          )}
        </div>
        {width > 700 && (
          <div
            onMouseEnter={() => {
              setIstdropdown(false);
              setsecdropdown(false);
              setthidropdown(false);
            }}
            style={{ width: "4.3vw" }}
            onClick={() => navigate("/pricing")}
          >
            <div> Pricing</div>
          </div>
        )}
        <div style={{ width: width > 700 ? "6vw" : "14vw", height: "4vw" }}>
          <div
            onMouseEnter={() => {
              setIstdropdown(false);
              setsecdropdown(false);
              setthidropdown(true);
            }}
          >
            Resources
          </div>
          {thidropdown ? (
            <Fade timeout={400}>
              <div
                onMouseLeave={() => setthidropdown(false)}
                className="dropdownboxhoverdefault"
                style={{
                  right: "4vw",
                  width: width > 700 ? "15.5vw" : "25.5vw",
                }}
              >
                <Typography
                  sx={{
                    p: width > 700 ? 2 : 0.61,
                    pb: width > 700 ? 0.5 : 0.5,
                    pt: width > 700 ? 1 : 0.5,
                    fontSize: width > 700 ? "1vw" : "3vw",

                    fontWeight: "500",
                    fontFamily: "poppins",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/skills");
                    setthidropdown(false);
                  }}
                >
                  Get Skills
                </Typography>
                <Typography
                  sx={{
                    p: width > 700 ? 2 : 0.61,
                    pb: width > 700 ? 0.5 : 0.5,
                    pt: width > 700 ? 1 : 0.5,
                    fontSize: width > 700 ? "1vw" : "3vw",
                    fontWeight: "500",
                    fontFamily: "poppins",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/blogs");
                    setthidropdown(false);
                  }}
                >
                  Blogs
                </Typography>
                <Typography
                  sx={{
                    p: width > 700 ? 2 : 0.61,
                    pb: width > 700 ? 0.5 : 0.5,
                    pt: width > 700 ? 1 : 0.5,
                    fontSize: width > 700 ? "1vw" : "3vw",
                    fontWeight: "500",
                    fontFamily: "poppins",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/commuinity");
                    setthidropdown(false);
                  }}
                >
                  Community
                </Typography>
                <Typography
                  sx={{
                    p: width > 700 ? 2 : 0.61,
                    pb: width > 700 ? 0.5 : 0.5,
                    pt: width > 700 ? 1 : 0.5,
                    fontSize: width > 700 ? "1vw" : "3vw",
                    fontWeight: "500",
                    fontFamily: "poppins",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/events");
                    setthidropdown(false);
                  }}
                >
                  Contests
                </Typography>
                <Typography
                  sx={{
                    p: width > 700 ? 2 : 0.61,
                    pb: width > 700 ? 0.5 : 0.5,
                    pt: width > 700 ? 1 : 0.5,
                    fontSize: width > 700 ? "1vw" : "3vw",
                    fontWeight: "500",
                    fontFamily: "poppins",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/faq");
                    setthidropdown(false);
                  }}
                >
                  FAQ's
                </Typography>
              </div>
            </Fade>
          ) : (
            ""
          )}
        </div> */}

        {/* {width > 700 && (
          <div
            onMouseEnter={() => {
              setIstdropdown(false);
              setsecdropdown(false);
              setthidropdown(false);
            }}
            onClick={() => navigate("/contactus")}
          >
            Contact us
          </div>
        )} */}

        {!loggedInStatus ? <div onClick={handleOpen2}>Sign up</div> : ""}
        {!loggedInStatus ? (
          <button onClick={handleOpen} className="nav-button">
            Login
          </button>
        ) : (
          <div className="profileDropdown">
            <Dropdown className="d-flex justify-content-center ">
              <Dropdown.Toggle id="dropdown-autoclose-true">
                {width > 700 ? (
                  <div
                    style={{ position: "relative", bottom: "1vw" }}
                    className="settinsiconpnav pnavusername"
                  >
                    <div
                      style={{ overflow: "hidden", display: "flex" }}
                      className="pnav-name"
                    >
                      {user?.fullName?.length > 11
                        ? user?.fullName?.slice(0, 11)
                        : user?.fullName}
                    </div>
                    <div className="pnavuserimage">
                      <img src={user?.media ? user?.media : img4} alt="" />
                    </div>
                  </div>
                ) : (
                  <div
                    style={{ width: "8vw", height: "8vw", marginLeft: "13vw" }}
                    className="pnavuserimage"
                  >
                    <img
                      style={{
                        width: "8vw",
                        height: "8vw",
                        borderRadius: "50%",
                        border: "2px solid #064C87",
                      }}
                      src={user?.media ? user?.media : img4}
                      alt=""
                    />
                  </div>
                )}
              </Dropdown.Toggle>
              <Dropdown.Menu
                className={
                  width > 700
                    ? "p-2  px-3 bottom2px"
                    : "p-1  px-1 bottom2px mx-5 my-2"
                }
              >
                <div
                  className={
                    width > 700
                      ? "py-0 px-1 d-flex align-items-center cusror-pointer"
                      : "py-2 px-1 d-flex align-items-center cusror-pointer"
                  }
                >
                  <Link to={`/dashbaord/postwork`}>
                    <img src={SettingsIcon} className="mx-1" alt="user" />{" "}
                    <span className="profileDropdownMenu mx-2">Dashboard </span>
                  </Link>
                </div>

                <div
                  className={
                    width > 700
                      ? "py-0 px-1 d-flex align-items-center cusror-pointer"
                      : "py-2 px-1 d-flex align-items-center cusror-pointer"
                  }
                >
                  <Link to="/profile">
                    <img src={UserIcon} className="mx-1" alt="settings" />{" "}
                    <span className="profileDropdownMenu mx-2">Profile </span>
                  </Link>
                </div>
                <div
                  className={
                    width > 700
                      ? "py-1 px-1 d-flex align-items-center cusror-pointer"
                      : "py-2 px-1 d-flex align-items-center cusror-pointer"
                  }
                  onClick={() => logoutUser()}
                >
                  <img src={LogoutIcon} className="mx-1" alt="logout" />{" "}
                  <span className="profileDropdownMenu mx-2">Logout</span>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style : style1}>
          <Fade>
            <div style={{ height: "fit-content" }} className="loginbox">
              {width > 700 && (
                <div className="loginbox1">
                  <div className="loginbox1title">Welcome to 44 Resources</div>
                  <div className="loginbox1subtitle">
                    See your Growth and get the Support
                  </div>
                  <div className="loginbox-img">
                    <img src={img21} alt="" />
                  </div>
                </div>
              )}
              {resetpassword ? (
                <div className="loginbox2">
                  <div className="lgointext">Login</div>
                  <div className="loginfield">
                    <TextField
                      error={!wrongid ? false : true}
                      id={"outlined-basic"}
                      label="Email"
                      helperText={wrongid ? "Please enter a valid Email" : ""}
                      value={loginid}
                      variant="outlined"
                      style={{
                        width: "100%",
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: width > 700 ? "1vw" : "3vw",
                          fontFamily: "Poppins",
                          fontStyle: "500",
                          fontWeight: "500",
                          color: !wrongid ? "black" : "#dc3545",
                        },
                      }}
                      inputProps={{
                        className: classes.input,
                      }}
                      onChange={(e) => {
                        setLoginid(e.target.value);
                        setWrongid(false);
                      }}
                    />
                    <div style={{ width: "2vw" }}>
                      {/* <AlternateEmailIcon
                        style={{
                          fontSize: width > 700 ? "2vw" : "6vw",
                          position: "relative",
                          top: width > 700 ? "1vw" : "3vw",
                          right: width > 700 ? "3vw" : "8vw",
                          cursor: "pointer",
                        }}
                      /> */}
                    </div>
                  </div>
                  {/* <div className="loginfield">
                    <p style={{ color: 'red' }}>{formInvalid}</p>
                  </div> */}
                  <div className="loginfield">
                    <TextField
                      type={visitpassword ? "text" : "password"}
                      error={!wrongidp ? false : true}
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      value={loginpassword}
                      helperText={
                        wrongidp ? "Please enter a valid Password" : ""
                      }
                      style={{
                        width: "100%",
                      }}
                      InputLabelProps={{
                        style: {
                          fontSize: width > 700 ? "1vw" : "3vw",
                          fontFamily: "Poppins",
                          fontStyle: "500",
                          fontWeight: "500",
                          color: !wrongidp ? "black" : "#dc3545",
                        },
                      }}
                      inputProps={{ className: classes.input }}
                      onChange={(e) => {
                        setLoginpassword(e.target.value);
                        setWrongidp(false);
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handlelogin();
                        }
                      }}
                    />
                    <div style={{ width: "2vw" }}>
                      <VisibilityIcon
                        style={{
                          fontSize: width > 700 ? "2vw" : "6vw",
                          position: "relative",
                          top: width > 700 ? "1vw" : "3vw",
                          right: width > 700 ? "3vw" : "8vw",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setVisitpassword(!visitpassword);
                        }}
                      />
                    </div>
                  </div>
                  <div className="loginfield" style={{ color: "red" }}>
                    {EmailVerifyCheck}
                  </div>
                  <div
                    className="forget-password"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setResetpassword(false);
                    }}
                  >
                    Forget Password
                  </div>

                  <button onClick={handlelogin} className="loginbutton">
                    Login
                  </button>
                  <div className="Loginor">
                    <div className="linelogin"></div>
                    <div>OR</div>
                    <div className="linelogin"></div>
                  </div>

                  <div className="continueloginwithx">Continue with</div>
                  <div className="continueloginwith">
                    <div className="scicailsign">
                      <LinkedIn
                        clientId="866osi2ww06h8a"
                        redirectUri={`${window.location.origin}`}
                        onSuccess={(code) => {
                    
                        }}
                        onError={(error) => {
                      
                        }}
                        scope="r_liteprofile r_emailaddress w_member_social"
                      >
                        {({ linkedInLogin }) => (
                          <img
                            onClick={linkedInLogin}
                            src={img1}
                            alt="Sign in with Linked In"
                            style={{ maxWidth: "180px", cursor: "pointer" }}
                          />
                        )}
                      </LinkedIn>
                    </div>
                
                    <FacebookLogin
                      appId={FACEBOOK_APP_ID}
                      disableMobileRedirect={true}
                      callback={(res) => {
                        facebookLoginSuccess(res);
                      }}
                    >
                      {({ onClick, disabled }) => {
                        return (
                          <div onClick={onClick} className="scicailsign">
                            <img src={img2x} alt="" />
                          </div>
                        );
                      }}
                    </FacebookLogin>

                    {/* <TwitterICon /> */}

                    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                      <GoogleLogin
                        type="icon"
                        onSuccess={(credentialResponse) => {
                          googleLoginSuccess(credentialResponse);
                        }}
                        onError={() => {
                          
                        }}
                        useOneTap
                      />
                    </GoogleOAuthProvider>
                  </div>
                  <div
                    style={{ height: "4vw" }}
                    className="continueloginwithdont"
                  >
                    Don't have an account ?{" "}
                    <span
                      onClick={() => {
                        handleOpen2();
                        handleClose();
                      }}
                    >
                      Signup
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  {checkmail ? (
                    <>
                      {newpassword ? (
                        <>
                          {resetdone ? (
                            <div
                              style={{ marginTop: "6vw" }}
                              className="loginbox2"
                            >
                              <div
                                className="lgointext"
                                style={{ marginBottom: "0.11vw" }}
                              >
                                Password Reset
                              </div>
                              <div
                                className="loginbox1subtitle"
                                style={{ marginBottom: "2vw" }}
                              >
                                Your Password has been changed Succesfully reset{" "}
                                <br />
                                Click below to log in magically
                              </div>

                              <button
                                className="loginbutton"
                                onClick={() => {
                                  magicallogin();
                                }}
                              >
                                Continue
                              </button>

                              <div
                                style={{ cursor: "pointer" }}
                                className="continueloginwithdont"
                              >
                                <span>
                                  <ArrowBack
                                    style={{
                                      fontSize: "1.5vw",
                                      marginRight: "1vw",
                                    }}
                                  />
                                </span>
                                Back to{" "}
                                <span
                                  onClick={() => {
                                    setResetpassword(true);
                                    setCheckmail(false);
                                    setResetdone(false);
                                    setnewpassword(false);
                                  }}
                                >
                                  {" "}
                                  Login
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div
                              style={{ marginTop: "3vw" }}
                              className="loginbox2"
                            >
                              <div
                                className="lgointext"
                                style={{ marginBottom: "0.11vw" }}
                              >
                                Set new password
                              </div>
                              <div
                                className="loginbox1subtitle"
                                style={{ marginBottom: "2vw" }}
                              >
                                Your new password must be different to
                                previously used passwords
                              </div>
                              <div className="loginfield">
                                <TextField
                                  id="outlined-basic"
                                  label="Password"
                                  variant="outlined"
                                  type={visitPasswords ? "text" : "password"}
                                  value={password}
                                  onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordr();
                                  }}
                                  style={{
                                    width: "100%",
                                  }}
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
                                <div style={{ width: "2vw" }}>
                                  <VisibilityIcon
                                    onClick={() =>
                                      setVisitPasswords(!visitPasswords)
                                    }
                                    style={{
                                      fontSize: width > 700 ? "2vw" : "6vw",
                                      position: "relative",
                                      top: width > 700 ? "1vw" : "3vw",
                                      right: width > 700 ? "3vw" : "8vw",
                                      cursor: "pointer",
                                    }}
                                  />
                                </div>
                              </div>
                              <p
                                style={{
                                  color: "red",
                                  marginLeft: width > 700 ? "4vw" : "",
                                }}
                                className="redp"
                              >
                                {passwordr}
                              </p>
                              <div className="loginfield">
                                <TextField
                                  id="outlined-basic"
                                  label="Confirm Password"
                                  variant="outlined"
                                  type={visitPasswords1 ? "text" : "password"}
                                  value={passwordc}
                                  onChange={(e) => {
                                    setPasswordc(e.target.value);
                                    setPasswodcr();
                                  }}
                                  style={{
                                    width: "100%",
                                  }}
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

                                <div style={{ width: "2vw" }}>
                                  <VisibilityIcon
                                    onClick={() =>
                                      setVisitPasswords1(!visitPasswords1)
                                    }
                                    style={{
                                      fontSize: width > 700 ? "2vw" : "6vw",
                                      position: "relative",
                                      top: width > 700 ? "1vw" : "3vw",
                                      right: width > 700 ? "3vw" : "8vw",
                                      cursor: "pointer",
                                    }}
                                  />
                                </div>
                              </div>
                              <p
                                style={{
                                  color: "red",
                                  marginLeft: width > 700 ? "4vw" : "",
                                }}
                                className="redp"
                              >
                                {passwordcr}
                              </p>
                              <button
                                className="loginbutton"
                                onClick={() => {
                                  setresetPassword();
                                }}
                              >
                                Reset Password
                              </button>

                              {/* <div className="continueloginwithdont">
                          Don't receive the mail? <span> Click to resend</span>
                        </div> */}
                              <div
                                style={{ cursor: "pointer" }}
                                className="continueloginwithdont"
                              >
                                <span>
                                  <ArrowBack
                                    style={{
                                      fontSize: "1.5vw",
                                      marginRight: "1vw",
                                    }}
                                  />
                                </span>
                                Back to{" "}
                                <span
                                  onClick={() => {
                                    setResetpassword(true);
                                    setCheckmail(false);
                                    setResetdone(false);
                                    setnewpassword(false);
                                  }}
                                >
                                  {" "}
                                  Login
                                </span>
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div style={{ marginTop: "6vw" }} className="loginbox2">
                          <div
                            className="lgointext"
                            style={{ marginBottom: "0.11vw" }}
                          >
                            Check your mail
                          </div>
                          <div
                            className="loginbox1subtitle"
                            style={{ marginBottom: "3vw" }}
                          >
                            We sent a Password reset otp to your Mail
                          </div>
                          <div className="loginfield">
                            <TextField
                              type="number"
                              id="outlined-basic"
                              label="OTP"
                              variant="outlined"
                              value={forgetotp}
                              onChange={(e) => {
                                setforgetotp(e.target.value);
                                setforgettotp();
                              }}
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

                            <div style={{ width: "2vw" }}></div>
                          </div>
                          <p
                            style={{
                              color: "red",
                              marginLeft: width > 700 ? "4vw" : "",
                            }}
                            className="redp"
                          >
                            {forgettotp}
                          </p>
                          <button
                            className="loginbutton"
                            onClick={() => {
                              confirmOtp();
                            }}
                          >
                            Verify
                          </button>

                          <div className="continueloginwithdont">
                            Don't receive the mail?{" "}
                            <span> Click to resend</span>
                          </div>
                          <div
                            style={{ cursor: "pointer" }}
                            className="continueloginwithdont"
                          >
                            <span>
                              <ArrowBack
                                style={{
                                  fontSize: "1.5vw",
                                  marginRight: "1vw",
                                }}
                              />
                            </span>
                            Back to{" "}
                            <span
                              onClick={() => {
                                setResetpassword(true);
                                setCheckmail(false);
                                setResetdone(false);
                                setnewpassword(false);
                              }}
                            >
                              {" "}
                              Login
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div style={{ marginTop: "3vw" }} className="loginbox2">
                      <div
                        className="lgointext"
                        style={{ marginBottom: "0.82vw" }}
                      >
                        Forgot Password
                      </div>
                      <div className="loginbox1subtitle">
                        No worries we'll send your reset instructions
                      </div>
                      <div className="loginfield">
                        <TextField
                          id="outlined-basic"
                          label="Email"
                          variant="outlined"
                          value={forgetemail}
                          onChange={(e) => {
                            setforgetemail(e.target.value);
                            setforgetemailr();
                          }}
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
                        <div style={{ width: "2vw" }}>
                          <AlternateEmailIcon
                            style={{
                              fontSize: width > 700 ? "2vw" : "6vw",
                              position: "relative",
                              top: width > 700 ? "1vw" : "3vw",
                              right: width > 700 ? "3vw" : "8vw",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </div>
                      <p
                        style={{
                          color: "red",
                          marginLeft: width > 700 ? "4vw" : "",
                        }}
                        className="redp"
                      >
                        {forgetemailr}
                      </p>
                      <button
                        className="loginbutton"
                        onClick={() => {
                          sendotp();
                        }}
                      >
                        Reset Password
                      </button>

                      <div
                        style={{ cursor: "pointer" }}
                        className="continueloginwithdont"
                      >
                        <span>
                          <ArrowBack
                            style={{ fontSize: "1.5vw", marginRight: "1vw" }}
                          />
                        </span>
                        Back to{" "}
                        <span
                          onClick={() => {
                            setResetpassword(true);
                            setCheckmail(false);
                            setResetdone(false);
                            setnewpassword(false);
                          }}
                        >
                          {" "}
                          Login
                        </span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </Fade>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style : style1}>
          <Fade>
            <div style={{ height: "fit-content" }} className="loginbox">
              {width > 700 && (
                <div className="loginbox1">
                  <div className="loginbox1title">Welcome to 44 Resources</div>
                  <div className="loginbox1subtitle">
                    See your Growth and get the Support
                  </div>
                  <div className="loginbox-img">
                    <img
                      src={img22}
                      style={{
                        width: "30vw",
                        position: "relative",
                        top: "2vw",
                        right: "2vw",
                      }}
                      alt=""
                    />
                  </div>
                </div>
              )}
              <div className="loginbox2">
                <div className="lgointext">SignUp</div>
                <div className="loginfield">
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    name="signupfname"
                    value={formValues.signupfname}
                    variant="outlined"
                    style={{
                      width: "100%",
                    }}
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
                    // onChange={(e) => setSignupfname(e.target.value)}
                    onChange={handleChangeHomeFormVal}
                  />
                  <AlternateEmailIcon
                    style={{
                      fontSize: "2vw",
                      position: "relative",
                      top: "1vw",
                      right: "3vw",
                      opacity: "0",
                    }}
                  />
                </div>
                <p style={{ marginLeft: "4vw", color: "red", fontSize: "1vw" }}>
                  {formErrors.signupfname ? formErrors.signupfname : ""}
                </p>
                <div className="loginfield">
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    name="signuplname"
                    value={formValues.signuplname}
                    style={{
                      width: "100%",
                    }}
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
                    // onChange={(e) => setSignuplname(e.target.value)}
                    onChange={handleChangeHomeFormVal}
                  />
                  <AlternateEmailIcon
                    style={{
                      fontSize: "2vw",
                      position: "relative",
                      top: "1vw",
                      right: "3vw",
                      opacity: "0",
                    }}
                  />
                </div>
                <p style={{ marginLeft: "4vw", color: "red", fontSize: "1vw" }}>
                  {formErrors.signuplname ? formErrors.signuplname : ""}
                </p>
                <div className="loginfield">
                  <TextField
                    // error={!wrongsignupemail ? false : true}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    name="signupemail"
                    value={formValues.signupemail}
                    style={{
                      width: "100%",
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: width > 700 ? "1vw" : "3vw",
                        fontFamily: "Poppins",
                        fontStyle: "500",
                        fontWeight: "500",
                        // color: !wrongsignupemail ? "black" : "#dc3545",
                      },
                    }}
                    inputProps={{ className: classes.input }}
                    // onChange={(e) => {
                    //   handleChangeHomeFormVal
                    //   // setSignupemail(e.target.value);
                    //   setWrongsignupemail(false);
                    // }}
                    onChange={handleChangeHomeFormVal}
                  />
                  <div style={{ width: "2vw" }}>
                    {/* <AlternateEmailIcon
                      style={{
                        fontSize: width > 700 ? "2vw" : "6vw",
                        position: "relative",
                        top: width > 700 ? "1vw" : "3vw",
                        right: width > 700 ? "3vw" : "8vw",
                        cursor: "pointer",
                      }}
                    /> */}
                  </div>
                </div>
                <p style={{ marginLeft: "4vw", color: "red", fontSize: "1vw" }}>
                  {formErrors.signupemail
                    ? formErrors.signupemail
                    : emailInvalid
                    ? emailInvalid
                    : ""}{" "}
                  {/* {emailInvalid ? emailInvalid : ""} */}
                </p>
                <div
                  style={{
                    color: "red",
                    width: "30vw",
                    margin: "auto",
                    fontSize: "1vw",
                  }}
                ></div>
                <div className="loginfield">
                  <TextField
                    type={visitPasswords ? "text" : "password"}
                    id="outlined-basic"
                    label="Password"
                    // value={signuppassword}
                    name="signuppassword"
                    value={formValues.signuppassword}
                    variant="outlined"
                    style={{
                      width: "100%",
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: width > 700 ? "1vw" : "3vw",
                        fontFamily: "Poppins",
                        fontStyle: "500",
                        fontWeight: "500",
                        color: !handlepasswordmatch ? "black" : "#dc3545",
                      },
                    }}
                    inputProps={{ className: classes.input }}
                    // onChange={(e) => setSignuppassword(e.target.value)}
                    onChange={handleChangeHomeFormVal}
                  />
                  <div style={{ width: "2vw" }}>
                    <VisibilityIcon
                      style={{
                        fontSize: width > 700 ? "2vw" : "6vw",
                        position: "relative",
                        top: width > 700 ? "1vw" : "3vw",
                        right: width > 700 ? "3vw" : "8vw",
                        cursor: "pointer",
                      }}
                      onClick={() => setVisitPasswords(!visitPasswords)}
                    />
                  </div>
                </div>
                <p
                  style={{
                    margin: "0vw 4vw 1vw 4vw",
                    color: "red",
                    fontSize: "1vw",
                  }}
                >{formErrors.signuppassword ? formErrors.signuppassword : ""}</p>
                <div className="loginfield">
                  <TextField
                    error={!handlepasswordmatch ? false : true}
                    type={visitPasswords1 ? "text" : "password"}
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                    name="signupcpassword"
                    value={formValues.signupcpassword}
                    style={{
                      width: "100%",
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: width > 700 ? "1vw" : "3vw",
                        fontFamily: "Poppins",
                        fontStyle: "500",
                        fontWeight: "500",
                        color: !handlepasswordmatch ? "black" : "#dc3545",
                      },
                    }}
                    inputProps={{ className: classes.input }}
                    // onChange={(e) => {
                    //   setSignupcpassword(e.target.value);
                    //   setHandlepasswordmatch(false);
                    // }}
                    onChange={handleChangeHomeFormVal}
                  />
                  <div style={{ width: "2vw" }}>
                    <VisibilityIcon
                      style={{
                        fontSize: width > 700 ? "2vw" : "6vw",
                        position: "relative",
                        top: width > 700 ? "1vw" : "3vw",
                        right: width > 700 ? "3vw" : "8vw",
                        cursor: "pointer",
                      }}
                      onClick={() => setVisitPasswords1(!visitPasswords1)}
                    />
                  </div>
                </div>
                <p
                  style={{
                    margin: "0vw 4vw 1vw 4vw",
                    color: "red",
                    fontSize: "1vw",
                  }}
                >
                  {formErrors.signupcpassword ? formErrors.signupcpassword : ""}<br/>
                  {passwordMatched}<br/>
                  {passwordLenthVD}
                </p>
                {/* <div className="loginfield">
                  <p style={{ color: 'red' }}>{formInvalid ? formInvalid : ""}</p>
                </div> */}
                <label
                  style={{
                    marginTop: "0vw",
                    position: "relative",
                    bottom: "0vw",
                    marginLeft: "3.7vw",
                    display: "flex",
                    alignItems: "center",
                  }}
                  htmlFor="checkbox"
                >
                  <input
                    type="checkbox"
                    onChange={() => {
                      setCheckedtocompany(!checkedtocompany);
                      setcheckboxValidaData("");
                    }}
                    name=""
                    id="checkbox"
                  />

                  <div
                    className="mt-1"
                    style={{
                      fontSize: width > 700 ? "1vw" : "3vw",
                      fontFamily: "Poppins",
                      fontStyle: "500",
                      fontWeight: "500",
                      color: "#00000080",
                      display: "inline",
                      margin: "0 1vw",
                    }}
                  >
                    I agree the{" "}
                    <span
                      style={{ cursor: "pointer", color: "#6868f7" }}
                      onClick={() =>
                        window.open("/termsandconditions", "_blank")
                      }
                    >
                      Terms and Condition
                    </span>
                  </div>
                </label>
                <div style={{ display: "flex" }} className="pb-2">
                  <span
                    style={{
                      marginLeft: "5.8vw",
                      fontSize: "0.8vw",
                      color: "red",
                    }}
                  >
                    {checkboxValidaData}
                  </span>
                </div>
                <label
                  style={{
                    position: "relative",
                    bottom: "0vw",
                    marginLeft: "3.7vw",
                    display: "flex",
                    alignItems: "center",
                  }}
                  // htmlFor="checkbox"
                >
                  <input
                    type="checkbox"
                    onChange={() => {
                      setCheckedtocompany_2(!checkedtocompany_2);
                      setcheckboxValidaData_2("");
                    }}
                    name=""
                    id="checkbox"
                  />

                  <div
                    className="mt-1"
                    style={{
                      fontSize: width > 700 ? "1vw" : "3vw",
                      fontFamily: "Poppins",
                      fontStyle: "500",
                      fontWeight: "500",
                      color: "#00000080",
                      display: "inline",
                      margin: "0 1vw",
                    }}
                  >
                    I agree the{" "}
                    <span
                      style={{ cursor: "pointer", color: "#6868f7" }}
                      onClick={() => window.open("/privacypolicy", "_blank")}
                    >
                      Privacy Policy
                    </span>
                  </div>
                </label>
                <div style={{ display: "flex" }} className="pb-2">
                  <span
                    style={{
                      marginLeft: "5.8vw",
                      fontSize: "0.8vw",
                      color: "red",
                    }}
                  >
                    {checkboxValidaData_2}
                  </span>
                </div>
                <button
                  onClick={handlesignup}
                  // disabled={checkedtocompany ? false : true}
                  className="loginbutton"
                >
                  SignUp
                </button>
                <div
                  style={{ marginBottom: "5vw" }}
                  className="continueloginwithdont"
                >
                  Have an account ?{" "}
                  <span
                    onClick={() => {
                      handleClose2();
                      handleOpen();
                    }}
                  >
                    Login
                  </span>
                </div>
              </div>
            </div>
          </Fade>
        </Box>
      </Modal>
      <Modal
        open={openEmailVeriPopup}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="profiletitleandmenunav pt-3">
            <div className="profiledetailstitle"></div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={() => {
                    handleClose3();
                    handleClose2();
                  }}
                  style={{ fontSize: "1.5vw", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#565454" }} />
          <div
            className="jobpodtedfieldtitile"
            style={{
              fontSize: "1.8vw",
              padding: "4vw",
              display: "flex",
              justifyContent: "center",
              color: "#565454",
            }}
          >
            The&nbsp;
            <span style={{ color: "#074D87" }}>e-mail verification link</span>
            &nbsp;has been sent to your Mail.
          </div>
        </Box>
      </Modal>
    </div>
  );
}

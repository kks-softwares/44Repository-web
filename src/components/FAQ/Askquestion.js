import React from "react";
import "./askquestion.css";
import SearchIcon from "@mui/icons-material/Search";
import { Modal } from "react-bootstrap";
import validator from "validator";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import Askboxes from "./Askboxes";
import API_HOST from "../../env";
const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: "DM Sans",

    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.9vw",
    lineHeight: "1.1vw",
    color: "#263238",
  },
}));
function MyVerticallyCenteredModal(props) {
  const classes = useStyles();
  const [labelFullname, setlabelFullname] = useState("");
  const [labelEmail, setLabelEmail] = useState("");
  const [labelmobile, setLabelmobile] = useState("");
  const [labeltextArea, setLabeltextArea] = useState("");
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [colorsavebg, setColorSavebg] = useState(false);
  
  function handlesubmit() {
    if (fullname === "" || email === "" || mobile === "" || message === "") {
    
    } else {
      const formdata = {
        fullName: fullname,
        emailId: email,
        contactNo: mobile,
        question: message,
      };
      axios
        .post(API_HOST + "/submitQuestion/addSubmitQuestion", formdata)
        .then((res) => {

          setColorSavebg(true);

          setTimeout(() => {
            setfullname("")  
            setEmail("")
            setMobile("")
            setMessage("")
            setColorSavebg(false);
            props.onHide()
          }, 1000)
        });
    }
  }
  function checkemailormobile(data) {
    if (validator.isEmail(data)) {
      setLabelEmail("Email Address");
    } else if (data === "") {
      setLabelEmail("");
    } else {
      setLabelEmail("Invalid Email Address");
    }
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        width: "27.5vw",
        margin: "0vw 37vw",
        padding: "0 auto",
        borderRadius: "10px",
      }}
    >
      <Modal.Body style={{ margin: "0 auto" }}>
        <h4>
          <ClearIcon
            onClick={props.onHide}
            style={{ cursor: "pointer", float: "right" }}
          />
        </h4>
        <div className="spopup-heading">Submit Question</div>
        <div style={{ marginTop: "1.4vw" }} className="login-linered"></div>
        <p className="spopup-subheading">
          Have a question? Please don’t <br />
          hesitate to ask us. Happy to help you!
        </p>
        <div
          style={{ width: "23.5vw", marginTop: "1vw" }}
          className="email-box"
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "25ch" },
              "& .MuiTextField-root": {
                mt: "0.75vw",
                pl: 2,
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              InputProps={{ disableUnderline: true }}
              id="standard-basic"
              label={labelFullname}
              placeholder="Full Name"
              inputProps={{ className: classes.input }}
              InputLabelProps={{
                style: {
                  fontSize: "1vw",

                  marginLeft: "15px",
                  fontFamily: "DM Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  color: "#6B6B6B",
                },
              }}
              onChange={(e) => {
                setfullname(e.target.value);
                setlabelFullname("Full Name");
                if (e.target.value === "") {
                  setlabelFullname("");
                }
              }}
              variant="standard"
            />
          </Box>
        </div>
        <div
          style={{ width: "23.5vw", marginTop: "1vw" }}
          className="email-box"
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "25ch" },
              "& .MuiTextField-root": {
                mt: "0.75vw",
                pl: 2,
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              InputProps={{ disableUnderline: true }}
              id="standard-basic"
              label={labelEmail}
              placeholder="Email Address"
              inputProps={{ className: classes.input }}
              InputLabelProps={{
                style: {
                  fontSize: "1vw",

                  marginLeft: "15px",
                  fontFamily: "DM Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  color: "#6B6B6B",
                },
              }}
              onBlur={(e) => {
                checkemailormobile(e.target.value);
              }}
              onChange={(e) => {
                setEmail(e.target.value);
                setLabelEmail("Email Address");
                if (e.target.value === "") {
                  setLabelEmail("");
                }
              }}
              variant="standard"
            />
          </Box>
        </div>
        <div
          style={{ width: "23.5vw", marginTop: "1vw" }}
          className="email-box"
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "25ch" },
              "& .MuiTextField-root": {
                mt: "0.75vw",
                pl: 2,
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              type="number"
              InputProps={{ disableUnderline: true }}
              id="standard-basic"
              label={labelmobile}
              value={mobile}
              placeholder="Mobile Number"
              inputProps={{ className: classes.input }}
              InputLabelProps={{
                style: {
                  fontSize: "1vw",

                  marginLeft: "15px",
                  fontFamily: "DM Sans",
                  fontStyle: "normal",
                  fontWeight: "500",
                  color: "#6B6B6B",
                },
              }}
              onChange={(e) => {
                if (e.target.value.length < 11) {
                  setMobile(e.target.value);
                }
                setLabelmobile("Mobile Number");
                if (e.target.value === "") {
                  setLabelmobile("");
                }
              }}
              variant="standard"
            />
          </Box>
        </div>
        <div className="form1profile-textme">
          <div
            style={{ width: "23.5vw", height: "8.5vw", marginTop: "1vw" }}
            className="email-box"
          >
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "96%", height: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <p
                className="labeltextarea"
                style={{ height: "0.5vw", width: "10vw", color: "black" }}
              >
                {labeltextArea}
              </p>
              <textarea
                style={{ width: "22vw" }}
                rows="3"
                placeholder="Please write your Question"
                className="textareaProfile"
                onChange={(e) => {
                  setMessage(e.target.value);
                  setLabeltextArea("message");
                  if (e.target.value === "") {
                    setLabeltextArea("");
                  }
                }}
              />
            </Box>
          </div>
        </div>
        <button
          style={{ backgroundColor: colorsavebg ? "#6AB04C" : "#064C87" }}
          className="popupaskbutton ripple-button"
          onClick={(e) => {
            const rect = e.target.getBoundingClientRect();
            setCoords({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
            handlesubmit();
          }}
        >
          {isRippling ? (
            <span
              className="ripple"
              style={{
                left: coords.x,
                top: coords.y,
              }}
            />
          ) : (
            ""
          )}
          <span className="content">
            Submit {colorsavebg ? " Sucessfully" : ""}
          </span>
        </button>
      </Modal.Body>
    </Modal>
  );
}
export default function Askquestion() {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div style={{ background: "#FFFFFF" }} className="AskQuestion-container">
        <div className="ask-heading">Hello, how can we help you?</div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }} className="searchbox">
            <span className="searchicon">
              <SearchIcon />
            </span>
            <input placeholder="Ask A Question..." type="text" />
          </div>
          <span>
            <button
              className="searchbutton ripple-button"
              onClick={(e) => {
                const rect = e.target.getBoundingClientRect();
                setCoords({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
            >
              {isRippling ? (
                <span
                  className="ripple"
                  style={{
                    left: coords.x,
                    top: coords.y,
                  }}
                />
              ) : (
                ""
              )}
              <span className="content"> Search</span>
            </button>
          </span>
        </div>

        <div className="ask-subheading">
          {" "}
          Didn’t find the answer to your question ?{" "}
          <span onClick={() => setModalShow(true)}>Submit Question</span>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      <div>
        <Askboxes />
      </div>
    </div>
  );
}

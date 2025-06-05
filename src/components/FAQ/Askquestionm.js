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

import Askboxesxxx from "./AskBoxesxxx";
import API_HOST from "../../env";
const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "3vw",
    color: "#263238",
  },
}));
function MyVerticallyCenteredModal(props) {
  const classes = useStyles();
  const [labelFullname, setlabelFullname] = useState("Full Name");
  const [labelEmail, setLabelEmail] = useState("Email");
  const [labelmobile, setLabelmobile] = useState("Mobile Number");
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
      //console.log(("fill all field*");
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
      setLabelEmail("Email Address");
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
        width: "93vw",
        margin: "0vw 3.5vw",
        padding: "0 auto",
        borderRadius: "15px",
        height: "100vh",
      }}
    >
      <Modal.Body style={{ margin: "0", height: "135vw" }}>
        <h4>
          <ClearIcon
            onClick={props.onHide}
            style={{ cursor: "pointer", float: "right", height: "16vw" }}
          />
        </h4>
        <div className="spopup-heading">Submit Question</div>
        <div
          style={{
            marginTop: "2.4vw",
            width: "15vw",
            height: "1.2vw",
            borderRadius: "10vw",
          }}
          className="login-linered"
        ></div>
        <p className="spopup-subheading">
          Have a question? Please don’t <br />
          hesitate to ask us. Happy to help you!
        </p>
        <div
          style={{ width: "81vw", marginTop: "3vw", height: "16vw" }}
          className="email-box"
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "25ch" },
              "& .MuiTextField-root": {
                mt: "1.75vw",
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
              inputProps={{ className: classes.input }}
              InputLabelProps={{
                style: {
                  fontSize: "3vw",

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
              }}
              variant="standard"
            />
          </Box>
        </div>
        <div
          style={{ width: "81vw", marginTop: "2vw", height: "16vw" }}
          className="email-box"
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "25ch" },
              "& .MuiTextField-root": {
                mt: "1.75vw",
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
              inputProps={{ className: classes.input }}
              InputLabelProps={{
                style: {
                  fontSize: "3vw",

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
              }}
              variant="standard"
            />
          </Box>
        </div>
        <div
          style={{ width: "81vw", marginTop: "2vw", height: "16vw" }}
          className="email-box"
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "25ch" },
              "& .MuiTextField-root": {
                mt: "1.75vw",
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
              inputProps={{ className: classes.input }}
              InputLabelProps={{
                style: {
                  fontSize: "3vw",

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
              }}
              variant="standard"
            />
          </Box>
        </div>
        <div className="form1profile-textme">
          <div
            style={{ width: "81vw", height: "35vw", marginTop: "2vw" }}
            className="email-box"
          >
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  width: "96%",
                  height: "100%",
                  marginLeft: "3vw",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <p
                className="labeltextarea"
                style={{
                  height: "4.5vw",
                  width: "10vw",
                  color: "#6B6B6B",
                  fontSize: "3vw",
                  padding: "2vw",
                }}
              >
                {labeltextArea}
              </p>
              <textarea
                style={{ width: "75vw" }}
                rows="7"
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
          //   onClick={handlesubmit}
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
              className="searchbutton  ripple-button"
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
        <Askboxesxxx />
      </div>
    </div>
  );
}

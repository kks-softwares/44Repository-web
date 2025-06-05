import React, { useEffect } from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@material-ui/core";

import { KeyboardArrowDownOutlined } from "@mui/icons-material";

import img from "../../../assets/Web 1280 – 14/Icon.svg";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";

import img21 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import axios from "axios";
import API_HOST from "../../../env";
import { useSelector } from "react-redux";

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

export default function EditDocumentauth({
  setAuthenticateDocument,
  width,
  setArrayofdocumentdetail,

  editDocuments,
}) {
  const classes = useStyles();

  const [jobTitle, setJobTitle] = useState("");
  const [arrayoffiles, setArrayoffiles] = useState([]);
  const { user } = useSelector((state) => state.user);
  const [arrayofdegree, setArrayofdegree] = useState([
    "Pancard",
    "Driving Licence",
    "Aadhar",
    "Voter Id",
    "Passport",
  ]);
  const [arrayoflongdegree, setArrayoflongdegree] = useState(arrayofdegree);
  const [degreeset, setDegreeset] = useState("");

  const [anchorElx2, setAnchorElx2] = React.useState(null);
  const handleClickx2 = (event) => {
    setAnchorElx2(event.currentTarget);
  };

  const handleClosex2 = () => {
    setAnchorElx2(null);
  };

  const openx2 = Boolean(anchorElx2);
  const idx2 = openx2 ? "simple-popover" : undefined;

  const [jobtitleerror, setjobtitleerror] = useState("");

  const [idtyperror, setIdtyperror] = useState("");

  const handleSumbitbank = () => {
    if (!jobTitle || !degreeset) {
      if (!degreeset) {
        setIdtyperror("Document type is required!");
      }
      if (!jobTitle) {
        setjobtitleerror("Account holder name is required!");
      }

      return false;
    } else {
      const formdata = new FormData();
      formdata.append("documentType", degreeset);
      formdata.append("documentNumber", jobTitle);
      formdata.append("confirmDocumentNumber", jobTitle);
      formdata.append("documentId", editDocuments?.documentId);

      axios
        .post(`${API_HOST}/users/editDocuments`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          axios
            .get(
              `${API_HOST}/users/viewDocument?pageSize=1000&pageNumber=1&userName=${user?.userName}`
            )
            .then((res) => {
              setArrayofdocumentdetail(res.data?.success?.data);
              setAuthenticateDocument(true);
              setJobTitle("");
              setDegreeset("");
            });
        });
    }
  };

  useEffect(() => {
    setDegreeset(editDocuments?.documentType);
    setJobTitle(editDocuments?.documentNumber);
    setArrayoffiles(editDocuments?.files);
  }, [editDocuments]);

  const handledelteFile = (id) => {
    axios
      .post(`${API_HOST}/users/removeDocumetfile`, {
        _id: id,
        documentId: editDocuments?.documentId,
      })
      .then(() => {});
  };

  const handleaddFile = (data) => {
    const formdata = new FormData();

    formdata.append("fileName", data);

    formdata.append("documentId", editDocuments?.documentId);
    axios
      .post(`${API_HOST}/users/updateDoc`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
          setArrayoffiles(res.data?.success?.data?.files)
      });
  };

  return (
    <div
      style={{
        width: width>700?  "60vw":"90vw",
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
          width: width>700?  "60vw":"90vw",
          paddingTop: "2vw",
        }}
        className="homepostjob-right"
      >
        <div className="jobpostedformheading">Edit Documents</div>

        <div>
          <div
            style={{ left: "0vw", width: "100%" }}
            className="loginfield"
            onClick={handleClickx2}
          >
            <TextField
              id="outlined-basic"
              label="ID Type"
              variant="outlined"
              disabled
              value={degreeset}
              style={{ width:  width>700? "94%" :"100%" }}
              InputLabelProps={{
                style: {
                  fontSize: width>700?  "1vw":"3vw",
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
                    fontSize: width>700?  "1.5vw":"4vw",
                    position: "relative",
                    right:width>700?  "2vw":"5vw",
                    top: width>700? "1vw":"3vw",
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
            <div style={{ maxHeight: "18vw", overflow: "scroll" }}>
              <Typography
                sx={{
                  p: 1,
                  pl: 1,
                  ml: 1,
                  width: "55vw",
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
                  }}
                  style={{
                    width: "100%",
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
                  width: "55vw",
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
                      width: "55vw",
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
          </Popover>
          <p
            style={{
              color: "red",
              fontSize: width > 700 ? "0.9vw" : "2.7vw",
            }}
          >
            {idtyperror}
          </p>
          <div className="jobpodtedfieldtitile">ID No</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => {
                setJobTitle(e.target.value);
              }}
            />
          </div>
          <p
            style={{
              color: "red",
              fontSize: width > 700 ? "0.9vw" : "2.7vw",
            }}
          >
            {jobtitleerror}
          </p>
          <div
            style={{
              marginBottom: "0.0vw",
              marginLeft: "1vw",
              marginTop: "2vw",
            }}
            className="jobpodtedfieldtitile"
          >
            Image/Documents
          </div>
          <div
            style={{
              background: "white",
              padding: "1vw",
              marginTop: "0vw",
            }}
          >
            <div className="inputfilebox">
              <div>
                <label htmlFor="inputctaelogfile">
                  <div className="inputicon">
                    <img src={img} alt="" />
                  </div>
                  <div className="inputcateaddformfile">
                    Drag and Drop ,Browse to upload
                  </div>
                  <input
                    type="file"
                    id="inputctaelogfile"
                    onChange={(e) => {
                      handleaddFile(e.target.files[0]);
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
              fontSize: width > 700 ? "0.9vw" : "2.7vw",
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
                      <img src={img1} alt="" />
                    </div>
                    <div className="fileselctednamecate">
                      {file?.name ? file?.name : file?.file?.split("%24")[1]}
                    </div>
                    <div className="inputfilesshowncatboxsingleimg">
                      <img
                        style={{
                          width: width > 700 ? "1.5vw" : "4vw",
                          marginLeft: "1vw",
                          cursor: "pointer",
                        }}
                        src={img21}
                        alt=""
                        onClick={() => {
                          handledelteFile(file?._id);
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

          <div style={{ marginBottom: "4vw" }} className="homejobbuttons">
            <button
              style={{ background: "white" }}
              onClick={() => {
                setAuthenticateDocument(true);
              }}
            >
              Cancel
            </button>
            <button
              style={{ background: "white" }}
              onClick={() => {
                setJobTitle("");
                setDegreeset("");
                setArrayoffiles([]);
              }}
            >
              Reset
            </button>
            <button
              style={{ color: "white" }}
              onClick={() => {
                handleSumbitbank();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

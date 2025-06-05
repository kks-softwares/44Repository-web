import React, { useState } from "react";
import img1 from "../../assets/My profile – 28/Component 70 – 6.svg";
import "./profile.css";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import ProfileCerticateDetails from "./Profilepopup/ProfileCerticateDetails";
import { useDispatch } from "react-redux";
import API_HOST from "../../env";
import axios from "axios";
import { userActions } from "../../store/userSlice";
import img3 from "../../assets/Web 1280 – 14/Group 9831.svg";
import img from "../../assets/Web 1280 – 14/Icon.svg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "48vw",
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
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
export default function ProfileCertificate({ user, width }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [iamge, setIamge] = useState();
  const [month1, setMonth1] = useState("");
  const [year1, setyear1] = useState("");
  const [month2, setMonth2] = useState("");
  const [year2, setyear2] = useState("");
  const dispatch = useDispatch();
  const handleaddcertificate = () => {
    const formdata = new FormData();
    formdata.append("userId", user?.userId);
    formdata.append("certificateName", callagename);
    formdata.append("issueMonth", month1);
    formdata.append("issueYear", year1);
    formdata.append("organization", organisation);
    formdata.append("doesNotExpire", checkmarkcertificate);
    formdata.append("expiredMonth", month2);
    formdata.append("expiredYear", year2);
    formdata.append("verifiedUrl", certiurl);
    formdata.append("creditalId", certificateid);
    if (iamge) {
      formdata.append("fileName", iamge);
    }

    axios
      .post(`${API_HOST}/users/addCertificates`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
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
  };
  const [callagename, setcallagename] = useState("");
  const [organisation, setorganisation] = useState("");
  const [certificateid, setcerticateid] = useState("");
  const [certiurl, setcertiurl] = useState("");
  const [checkmarkcertificate, setCheckmarkcertificate] = useState(false);

  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Certifications</div>
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
          <Box sx={width > 700 ? style : style1}>
            <div style={{ maxHeight: "90vh", overflowY: "scroll" }}>
              <div className="profiletitleandmenunav">
                <div className="profiledetailstitle">Add Certification</div>
                <div className="profiledetailnavmanu">
                  <div>
                    <CloseIcon
                      onClick={handleClose}
                      style={{ fontSize: width > 700 ? "1.5vw" : "4vw" }}
                    />
                  </div>
                </div>
              </div>
              <hr style={{ color: "#00000090" }} />
              <div
                style={{ left: "0vw", width: "100%" }}
                className="loginfield"
              >
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  value={callagename}
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
                  onChange={(e) => setcallagename(e.target.value)}
                />
              </div>
              <div
                style={{ left: "0vw", width: "100%" }}
                className="loginfield"
              >
                <TextField
                  id="outlined-basic"
                  label="Organization"
                  variant="outlined"
                  value={organisation}
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
                  onChange={(e) => setorganisation(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="checkbox">
                  <input
                    type="checkbox"
                    name=""
                    id="checkbox"
                    onChange={() =>
                      setCheckmarkcertificate(!checkmarkcertificate)
                    }
                  />
                  <div
                    style={{
                      fontSize: width > 700 ? "0.91vw" : "2.7vw",
                      fontFamily: "Poppins",
                      fontStyle: "500",
                      fontWeight: "500",
                      color: "#00000080",
                      display: "inline",
                      margin: "0 1vw",
                      cursor: "pointer",
                    }}
                  >
                    Does not expire
                  </div>
                </label>
              </div>
              <div className="jobpodtedfieldtitile">Issue Date</div>
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
                </div>
              </div>
              {!checkmarkcertificate ? (
                <>
                  {" "}
                  <div className="jobpodtedfieldtitile">Expired Date</div>
                  <div style={{ display: "flex", width: "100%" }}>
                    <div
                      style={{
                        left: "0vw",
                        width: "50%",
                        margin: "0.3vw 0",
                      }}
                      className="loginfield"
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
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}

              {/* </div> */}
              <div
                style={{ left: "0vw", width: "100%" }}
                className="loginfield"
              >
                <TextField
                  id="outlined-basic"
                  label="Credital Id"
                  variant="outlined"
                  value={certificateid}
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
                  onChange={(e) => setcerticateid(e.target.value)}
                />
              </div>
              <div
                style={{ left: "0vw", width: "100%" }}
                className="loginfield"
              >
                <TextField
                  id="outlined-basic"
                  label="Verified URL"
                  value={certiurl}
                  variant="outlined"
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
                  onChange={(e) => setcertiurl(e.target.value)}
                />
              </div>
              <div
                style={{ width: width > 700 ? "99%" : "99%", height: "10vw" }}
                className="inputfilebox"
              >
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
                        setIamge(e.target.files[0]);
                      }}
                      hidden
                    />
                  </label>
                </div>
              </div>
              {iamge ? (
                <div className="inputfilesshowncatboxsingle">
                  <div className="inputfilesshowncatboxsingleimg">
                    <img
                      style={{ width: width > 700 ? "" : "5vw" }}
                      src={img3}
                      alt=""
                    />
                  </div>
                  <div className="fileselctednamecate">
                    {iamge?.name.slice(0, 50)}
                  </div>
                </div>
              ) : (
                ""
              )}
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
                  style={{ cursor: "pointer" }}
                  className="handlecirclieaboutsave"
                  onClick={handleaddcertificate}
                >
                  SAVE
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="pcertificate-container">
        {user?.certificates?.map((cerificate) => {
          return (
            <ProfileCerticateDetails certificate={cerificate} width={width} />
          );
        })}
      </div>
    </div>
  );
}

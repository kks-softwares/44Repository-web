import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useParams } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddTableofContent1 from "./AddTableofContent1";
import Cataloguecarosel1 from "./CatalogCarosel1";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img21 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import API_HOST from "../../../env";
import { useSelector } from "react-redux";
import { TextEditors } from "../AddBlog/TextEditor_second";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  height: "50vw",
  maxHeight: "50vw",
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  overflowY: "scroll",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles((theme) => ({
  select: {
    height: "1vw",
    width: "100%",
    padding: "1vw 0.5vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
  },
  select2: {
    height: "1vw",
    width: "100%",
    padding: "1vw 0.5vw",
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
    fill: "black",
  },
}));
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95vw",
  height: "80vh",
  maxHeight: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  overflowY: "scroll",
  boxShadow: 24,
  p: 1,
};

export default function Addblog({ width }) {
  const classes = useStyles();

  const [arrayofblogs, setArrayofblogs] = useState([
    { heading: "", toc: "", file: "", desc: "", title: "", button: "" },
  ]);
  const navigate = useNavigate();
  const [erroeshow, setErroeshow] = useState(false);
  const [title, setTitle] = useState("");
  const [imagetitle, setimagetitle] = useState("");
  const [imageTagAlt, setImageTagAlt] = useState("");
  const [metaTag, setMetaTag] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age3, setAge3] = React.useState(0);
  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };
  const { Id } = useParams();
  const [arrayoffiles, setArrayoffiles] = useState([]);
  const [scate, setsCate] = useState("");
  const [allCtitle, setAllCtitle] = useState([]);
  const [allCbutton, setAllCbutton] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    axios
      ?.get(`${API_HOST}/contentManagement/viewcontent?contentId=${Id}`)
      .then((res) => {
        setData(res?.data?.success?.data[0]);
        setTitle(res?.data?.success?.data[0]?.contentName);
        setimagetitle(res?.data?.success?.data[0]?.iconTitle);
        setMetaTag(res?.data?.success?.data[0]?.slug);
        setMetaTitle(res?.data?.success?.data[0]?.metaTitle);
        setMetaDescription(res?.data?.success?.data[0]?.metaDescription);
        setImageTagAlt(res?.data?.success?.data[0]?.imageAltTag);
        setArrayofblogs(res?.data?.success?.data[0]?.toC);
        setAge3(
          res?.data?.success?.data[0]?.category === "Business Ideas"
            ? 1
            : res?.data?.success?.data[0]?.category === "Business Plans"
            ? 2
            : res?.data?.success?.data[0]?.category === "Business Problems"
            ? 3
            : 4
        );
        setsCate(
          res?.data?.success?.data[0]?.category === "Business Ideas"
            ? "Business Ideas"
            : res?.data?.success?.data[0]?.category === "Business Plans"
            ? "Business Plans"
            : res?.data?.success?.data[0]?.category === "Business Problems"
            ? "Business Problems"
            : "Others"
        );
        setArrayoffiles(res?.data?.success?.data[0]?.icon);
      });
  }, [Id]);

  const handlesumbitBlog = () => {
    const formdata = new FormData();

    formdata.append("contentName", title);
    formdata.append("category", scate);
    formdata.append("contentId", Id);
    formdata.append("iconTitle", imagetitle);
    formdata.append("imageAltTag", imageTagAlt);
    formdata.append("slug", metaTag);
    formdata.append("metaTitle", metaTitle);
    formdata.append("metaDescription", metaDescription);

    axios
      .post(`${API_HOST}/contentManagement/editcontent`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        const formdata = new FormData();

        formdata.append("toC", JSON.stringify(arrayofblogs));
        formdata.append("contentId", Id);

        axios
          .post(`${API_HOST}/contentManagement/editToC`, formdata, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          })
          .then((res) => {
            const formdata = new FormData();

            formdata.append("icon", JSON.stringify(arrayoffiles));
            formdata.append("contentId", Id);

            axios
              .post(`${API_HOST}/contentManagement/updateFile`, formdata, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem("token")),
                },
              })
              .then((res) => {
                navigate(-1);
              });
          });
      });
  };

  const [erroraddblog, setErroraddblog] = useState(false);

  const handlecheck = () => {
    if (
      title &&
      imagetitle &&
      scate &&
      arrayoffiles?.length > 0 &&
      !erroraddblog
    ) {
      handleOpen();
    } else {
      setErroraddblog(true);
    }
  };

  useEffect(() => {
    if (arrayofblogs?.length > 0) {
    } else {
      if (title && imagetitle && scate && arrayoffiles?.length > 0) {
        setErroraddblog(false);
      } else {
        setErroraddblog(true);
      }
    }
  }, [title, imagetitle, scate, arrayoffiles, arrayofblogs]);

  const handleuploadimage = (file) => {
    const formdata = new FormData();
    formdata.append("fileName", file);

    axios
      .post(`${API_HOST}/contentManagement/tableContent`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setArrayoffiles([...arrayoffiles, res?.data?.success?.data?.file]);
      });
  };

  useEffect(() => {
    axios.get(`${API_HOST}/callToActionTitle/viewTitle`).then((res) => {
      setAllCtitle(res?.data?.success?.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${API_HOST}/callToActionButton/viewButton`).then((res) => {
      setAllCbutton(res?.data?.success?.data);
    });
  }, []);

  return (
    <div>
      <div
        style={{
          width: width > 700 ? "70vw" : "90vw",
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
            width: width > 700 ? "70vw" : "90vw",
            paddingTop: "2vw",
          }}
          className="homepostjob-right"
        >
          <div className="jobpostedformheading">Edit Blogs</div>

          <div className="jobpodtedfieldtitile">Blog Category *</div>
          <div className="">
            <Box
              sx={{
                background: "white",
                border: "1px solid #7070705b",
                height: width > 700 ? "2.8vw" : "9vw",
                width: width > 700 ? "64vw" : "100%",
                borderRadius: "5px",
                margin: "0.5vw 1.5vw",
                padding: width > 700 ? "0.2vw 0.2vw" : "3vw 1vw",
                marginLeft: "0vw",
              }}
              className="setting-toggler"
            >
              <FormControl variant="standard" fullWidth>
                <Select
                  className={classes.select2}
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
                          width: "100%",
                          height: width > 700 ? "3vw" : "8vw",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: width > 700 ? "1vw" : "3vw",
                          lineHeight: width > 700 ? "24px" : "4vw",
                          color: "#6b6b6b",
                        },
                      },
                    },
                  }}
                >
                  <MenuItem onClick={() => {}} value={0} hidden>
                    Select
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      setsCate("Business Ideas");
                    }}
                    value={1}
                  >
                    Business Ideas
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      setsCate("Business Plans");
                    }}
                    value={2}
                  >
                    Business Plans
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setsCate("Business Problems");
                    }}
                    value={3}
                  >
                    Business Problems
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setsCate("Others");
                    }}
                    value={4}
                  >
                    Others
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div>
            <div className="jobpodtedfieldtitile">Blog Title *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              {width > 700 && (
                <CloseIcon
                  style={{
                    position: "relative",
                    right: "2vw",
                    top: "1.1vw",
                    fontSize: width > 700 ? "1.5vw" : "3vw",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setTitle("");
                  }}
                />
              )}
            </div>
            <div
              style={{
                marginBottom: "0.0vw",
                marginLeft: "0.01vw",
                marginTop: "2vw",
              }}
              className="jobpodtedfieldtitile"
            >
              Cover Images *(upload images changes permanent )
            </div>
            <div
              style={{
                background: "white",
                padding: "0.51vw",
                marginTop: "0vw",
                paddingRight: "3vw",
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
                        handleuploadimage(e.target.files[0]);
                      }}
                      hidden
                    />
                  </label>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  textAlign: "right",
                  fontSize: width > 700 ? "0.9vw" : "2.5vw",
                  fontWeight: "400",
                }}
              >
                Image should be less then 200 kb and Dimension should be in
                ratio (3:5)
              </div>
            </div>
            <div
              className={
                arrayoffiles?.length > 0 ? "inputfilesshowncatebox" : ""
              }
            >
              {arrayoffiles?.length > 0 &&
                arrayoffiles?.map((file, index) => {
                  return (
                    <div className="inputfilesshowncatboxsingle">
                      <div className="inputfilesshowncatboxsingleimg">
                        <img src={img1} alt="" />
                      </div>
                      <div className="fileselctednamecate">{file}</div>
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
            <div className="jobpodtedfieldtitile mt-4">Image ALT TAG *</div>
            <div className="jobpostfieldinputbox">
              {/* <input
                type="text"
                value={imageTagAlt}
                onChange={(e) => {
                  setImageTagAlt(e.target.value);
                }}
              />
              {width > 700 && (
                <CloseIcon
                  style={{
                    position: "relative",
                    right: "2vw",
                    top: "1.1vw",
                    fontSize: width > 700 ? "1.5vw" : "3vw",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setImageTagAlt("");
                  }}
                />
              )} */}
              <div style={{ margin: "0vw 0vw 1vw 0vw" }}>
              {imageTagAlt && (<TextEditors
                  width={"64vw"}
                  setTitle={setImageTagAlt}
                  title={imageTagAlt}
                />
              )}
              </div>
            </div>
            <div className="jobpodtedfieldtitile"> Image Title *</div>
            <div className="jobpostfieldinputbox">
              {/* <input
                type="text"
                value={imagetitle}
                onChange={(e) => {
                  setimagetitle(e.target.value);
                }}
              />
              {width > 700 && (
                <CloseIcon
                  style={{
                    position: "relative",
                    right: "2vw",
                    top: "1.1vw",
                    fontSize: "1.5vw",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setimagetitle("");
                  }}
                />
              )} */}
              <div style={{ margin: "0vw 0vw 1vw 0vw" }}>
              {imagetitle && (<TextEditors
                  width={"64vw"}
                  setTitle={setimagetitle}
                  title={imagetitle}
                />
              )}
              </div>
            </div>
            <hr style={{height: '3px', background: '#064C87', width: '98%'}}/>
            <div
              style={{
                textAlign: "left",
                fontSize: width > 700 ? "1.4vw" : "3.5vw",
                marginTop: width > 700 ? "1vw" : "3vw",
              }}
              className="jobpodtedfieldtitile"
            >
              Table of Content
            </div>
            {arrayofblogs?.length > 0 &&
              arrayofblogs?.map((data, index) => {
                return (
                  <AddTableofContent1
                    width={width}
                    setArrayofblogs={setArrayofblogs}
                    arrayofblogs={arrayofblogs}
                    data={data}
                    index={index}
                    setErroraddblog={setErroraddblog}
                    erroraddblog={erroraddblog}
                    title={title}
                    scate={scate}
                    arrayoffiles={arrayoffiles}
                    imagetitle={imagetitle}
                    allCbutton={allCbutton}
                    allCtitle={allCtitle}
                  />
                );
              })}
            <div
              style={{ marginLeft: "1vw" }}
              className="addmoreservicecatalog"
              onClick={() => {
                setArrayofblogs([
                  ...arrayofblogs,
                  {
                    heading: " ",
                    toc: " ",
                    file: "",
                    desc: " ",
                    title: "",
                    button: "",
                  },
                ]);
              }}
            >
              <span>
                <AddIcon
                  style={{ fontSize: width > 700 ? "1.3vw" : "4.5vw" }}
                />
              </span>{" "}
              Add Paragraph
            </div>
            <hr style={{height: '3px', background: '#064C87', width: '98%'}}/>
            {erroeshow ? (
              <div style={{ color: "red" }} className="jobpodtedfieldtitile">
                {" "}
                * Fill All the Fields
              </div>
            ) : (
              ""
            )}{" "}
            <div className="jobpodtedfieldtitile" style={{ fontSize: '1.6vw', fontSize: '1.5vw', marginTop: '2vw' }}>*All Meta Field's are required for GOOGLE ranking.</div>
            <div className="jobpodtedfieldtitile mt-4">META TAG *</div>
            <div className="jobpostfieldinputbox">
              {/* <input
                type="text"
                value={metaTag}
                onChange={(e) => {
                  setMetaTag(e.target.value);
                }}
              />
              {width > 700 && (
                <CloseIcon
                  style={{
                    position: "relative",
                    right: "2vw",
                    top: "1.1vw",
                    fontSize: width > 700 ? "1.5vw" : "3vw",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setMetaTag("");
                  }}
                />
              )} */}
              <div style={{ margin: "0vw 0vw 1vw 0vw" }}>
                {metaTag && (<TextEditors
                  width={"64vw"}
                  setTitle={setMetaTag}
                  title={metaTag}
                />
                )}
              </div>
            </div>
            <div className="jobpodtedfieldtitile">META TITLE *</div>
            <div className="jobpostfieldinputbox">
              {/* <input
                type="text"
                value={metaTitle}
                onChange={(e) => {
                  setMetaTitle(e.target.value);
                }}
              />
              {width > 700 && (
                <CloseIcon
                  style={{
                    position: "relative",
                    right: "2vw",
                    top: "1.1vw",
                    fontSize: width > 700 ? "1.5vw" : "3vw",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setMetaTitle("");
                  }}
                />
              )} */}
              <div style={{ margin: "0vw 0vw 1vw 0vw" }}>
                {metaTitle && (<TextEditors
                  width={"64vw"}
                  setTitle={setMetaTitle}
                  title={metaTitle}
                />
                )}
              </div>
            </div>
            <div className="jobpodtedfieldtitile">META DESCRIPTION *</div>
            <div className="jobpostfieldinputbox">
              {/* <input
                type="text"
                value={metaDescription}
                onChange={(e) => {
                  setMetaDescription(e.target.value);
                }}
              />
              {width > 700 && (
                <CloseIcon
                  style={{
                    position: "relative",
                    right: "2vw",
                    top: "1.1vw",
                    fontSize: width > 700 ? "1.5vw" : "3vw",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setMetaDescription("");
                  }}
                />
              )} */}
              <div style={{ margin: "0vw 0vw 1vw 0vw" }}>
                {metaDescription && (<TextEditors
                  width={"64vw"}
                  setTitle={setMetaDescription}
                  title={metaDescription}
                />
                )}
              </div>
            </div>
            {erroraddblog && (
              <div
                style={{
                  marginLeft: "1vw",
                  color: "red",
                  width: width > 700 ? "" : "100%",
                }}
                className="min-maxhomejob"
              >
                fill all field are cumpulsary these are marked as *
              </div>
            )}
            <div style={{ marginBottom: "4vw" }} className="homejobbuttons">
              <button
                style={{ background: "white" }}
                onClick={() => {
                  navigate(-1);
                }}
              >
                Cancel
              </button>

              <button onClick={handlecheck} style={{ color: "white" }}>
                Preview
              </button>
            </div>
          </div>
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
            <div className="profiledetailstitle">Preview Blogs</div>
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
          <hr style={{ color: "#00000090" }} />
          {arrayoffiles?.length > 0 && (
            <div style={{ padding: "0vw" }} className="Blogdbannercontainer">
              <div className="ctatlogcarouseltitle">
                <button
                  style={{
                    marginLeft: "1vw",
                    width: width > 700 ? "10vw" : "30vw",
                    cursor: "auto",
                    position: "relative",
                    top: "4vw",
                    zIndex: "100",
                  }}
                  className="hb-button"
                >
                  {scate}
                </button>
                <div
                  style={{
                    fontSize: width > 700 ? "" : "2.8vw",
                    width: width <= 700 && "88vw",
                  }}
                  className="textofcontainercatalgue"
                  dangerouslySetInnerHTML={{ __html: imagetitle }}
                >
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  bottom: width > 700 ? "2.2vw" : "5vw",
                }}
              >
                <Cataloguecarosel1
                  width={width}
                  img1={arrayoffiles[0]}
                  img2={arrayoffiles[1] ? arrayoffiles[1] : arrayoffiles[1]}
                  img3={
                    arrayoffiles[2]
                      ? arrayoffiles[2]
                      : arrayoffiles[0]
                      ? arrayoffiles[0]
                      : arrayoffiles[1]
                  }
                  img4={
                    arrayoffiles[3]
                      ? arrayoffiles[3]
                      : arrayoffiles[1]
                      ? arrayoffiles[1]
                      : arrayoffiles[0]
                      ? arrayoffiles[0]
                      : arrayoffiles[2]
                  }
                />
              </div>
            </div>
          )}{" "}
          {width > 700 && <hr style={{ margin: "0vw", height: "0vw" }} />}
          <div
            style={{
              position: "relative",
              bottom: width > 700 ? "1vw" : "9vw",
            }}
          >
            <div className="jobpodtedfieldtitile"> Title</div>
            <div className="jobpostfieldinputbox">
              <input type="text" value={title} disabled />
            </div>
            <div className="jobpodtedfieldtitile"> Category</div>
            <div className="jobpostfieldinputbox">
              <input type="text" value={scate} disabled />
            </div>

            <div className="jobpodtedfieldtitile"> Table of Content</div>

            <div className="widthfullblofpreview">
              {arrayofblogs?.length > 0 &&
                arrayofblogs?.map((data, index) => {
                  return (
                    <div>
                      <div
                        className=""
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: width > 700 ? "1.4vw" : "3.8vw",
                        }}
                        dangerouslySetInnerHTML={{__html: data?.heading}}
                      >
                      </div>
                      <div
                        className="dataeofblogcontnet1"
                        style={{
                          color: "black",
                          fontSize: width > 700 ? "0.9vw" : "2.5vw",
                        }}
                        dangerouslySetInnerHTML={{ __html: data?.toc }}
                      ></div>

                      {data?.file && (
                        <div
                          style={{
                            width: width > 700 ? "" : "85vw",
                            height: width > 700 ? "" : "42vw",
                          }}
                          className="blogcontentimagebanner"
                        >
                          <img
                            style={{
                              width: width > 700 ? "63vw" : "85vw",
                              height: width > 700 ? "" : "40vw",
                              objectFit: "contain",
                            }}
                            src={data?.file}
                            alt=""
                          />
                        </div>
                      )}
                      <div
                        style={{ width: width > 700 ? "63vw" : "85vw" }}
                        className="Joinwithusblogbox"
                      >
                        <div
                          style={{
                            width: width > 700 ? "60%" : "100%",
                            textAlign: "center",
                          }}
                        >
                          <div className="Joinwithusblogboxtitle">
                            {data?.title.slice(0, 100)}
                          </div>
                          <div className="Joinwithusblogboxdetail" dangerouslySetInnerHTML={{__html: data?.desc?.slice(0, 150)}}>
                          </div>
                        </div>
                        <div
                          style={{
                            width: width > 700 ? "40%" : "100%",
                            textAlign: "center",
                          }}
                        >
                          <button> {data?.button}</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            >
              <div
                onClick={() => {
                  handleClose();
                }}
                style={{
                  background: "white",
                  color: "black",
                  cursor: "pointer",
                }}
                className="handlecirclieaboutsave"
              >
                Cancel
              </div>
              <div
                onClick={() => {
                  handlesumbitBlog();
                }}
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
              >
                Update
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

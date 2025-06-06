import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img22 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import { TextEditor } from "./Texteditor";
import axios from "axios";
import API_HOST from "../../../env";
import { TextEditor_TOC } from "../BiddingForm/Texteditor_TOC";

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
    color: "black",
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
export default function AddTableofContent1({
  setArrayofblogs,
  arrayofblogs,
  width,
  data,
  index,
  setErroraddblog,
  erroraddblog,
  title,
  scate,
  arrayoffiles,
  imagetitle,
  allCbutton,
  allCtitle,
}) {
  const [description1, setDescription1] = useState(data.toc);
  const [description2, setDescription2] = useState(data.desc);
  const [heading1, setHeading1] = useState(data.heading);
  const [desc1, setDesc1] = useState(data.desc);
  const classes = useStyles();
  const [age4, setAge4] = React.useState(10);
  const [age5, setAge5] = React.useState(10);

  const [arrayoffile, setArrayoffile] = useState();

  const handleChange4x = (event) => {
    setAge4(event.target.value);
  };
  const handleChange5x = (event) => {
    setAge5(event.target.value);
  };
  const [wrongsec, setwrongsec] = useState(false);

  useEffect(() => {
    setArrayofblogs([
      ...arrayofblogs.slice(0, index),
      {
        heading: heading1,
        toc: description1,
        file: data?.file,
        desc: desc1,
        title: data?.title,
        button: data?.button,
      },
      ...arrayofblogs.slice(index + 1, arrayofblogs.length),
    ]);
  }, [description1, heading1, desc1]);

  useEffect(() => {
    if (
      data?.toc &&
      data?.desc &&
      data?.title &&
      data?.button &&
      data?.heading
    ) {
      setwrongsec(false);
      if (title && imagetitle && scate && arrayoffiles?.length > 0) {
        setErroraddblog(false);
      } else {
        setErroraddblog(true);
      }
    } else {
      setwrongsec(true);
      setErroraddblog(true);
    }
  }, [data, title, scate, arrayoffiles, imagetitle]);

  useEffect(() => {
    setHeading1(data?.heading);
    setDesc1(data?.desc);
    setDescription1(data?.toc);
    setAge4(data?.title ? data?.title : 10);
    setAge5(data?.button ? data?.button : 10);
    setArrayoffile(data?.file);
  }, [data]);

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
        setArrayofblogs([
          ...arrayofblogs.slice(0, index),
          {
            heading: data?.heading,
            toc: data?.toc,
            file: res?.data?.success?.data?.file,
            desc: data?.desc,
            title: data?.title,
            button: data?.button,
          },
          ...arrayofblogs.slice(index + 1, arrayofblogs.length),
        ]);
      });
  };

  return (
    <>
      {
        <div>
          <div
            style={{
              left: "0vw",
              width: width > 700 ? "96%" : "100%",
              margin: "1vw 0vw 1vw 0vw",
              display: "block",
            }}
            className="loginfield"
          >
            <div
              style={{
                marginBottom: "1vw",
                display: "flex",
                justifyContent: "space-between",
              }}
              className="jobpodtedfieldtitile"
            >
              <div style={{ fontSize: width > 700 ? "1.2vw" : "3.1vw" }}>
                {" "}
                Paragraph {index + 1}{" "}
              </div>{" "}
              {arrayofblogs?.length > 1 && (
                <div>
                  <CloseIcon
                    style={{
                      position: "relative",
                      right: "1vw",
                      fontSize: width > 700 ? "2vw" : "5vw",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setArrayofblogs([
                        ...arrayofblogs?.slice(0, index),
                        ...arrayofblogs?.slice(index + 1, arrayofblogs?.length),
                      ]);
                    }}
                  />
                </div>
              )}
            </div>
            <div className="jobpodtedfieldtitile"> Paragraph heading *</div>
            <div
              style={{ width: width > 700 ? "69vw" : "100%" }}
              className="jobpostfieldinputbox"
            >
              <div style={{ margin: "0vw 0vw 1vw 0vw" }}>
                {heading1 && (
                  <TextEditor_TOC
                    width={"64vw"}
                    setDescription1={setHeading1}
                    description1={heading1}
                  />
                )}
              </div>
              {/* <input
                type="text"
                style={{ width: "100vw" }}
                value={data?.heading}
                onChange={(e) => {
                  setArrayofblogs([
                    ...arrayofblogs.slice(0, index),
                    {
                      heading: e.target.value,
                      toc: data?.toc,
                      file: data?.file,
                      desc: data?.desc,
                      title: data?.title,
                      button: data?.button,
                    },
                    ...arrayofblogs.slice(index + 1, arrayofblogs.length),
                  ]);
                }}
              /> */}
            </div>
          </div>
          <div
            style={{
              marginBottom: "0.0vw",

              marginTop: "2vw",
            }}
            className="jobpodtedfieldtitile"
          >
            Paragraph Image
          </div>
          <div
            style={{
              background: "white",
              padding: "1vw",
              marginTop: "0vw",
              paddingRight: "2.5vw",
              paddingLeft: "0vw",
            }}
          >
            <div className="inputfilebox">
              <div>
                <label htmlFor={`inputctaelogfile${index}`}>
                  <div className="inputicon">
                    <img src={img} alt="" />
                  </div>
                  <div className="inputcateaddformfile">
                    Drag and Drop ,Browse to upload
                  </div>
                  <input
                    type="file"
                    id={`inputctaelogfile${index}`}
                    onChange={(e) => {
                      handleuploadimage(e.target.files[0]);
                      setArrayoffile(e.target.files[0]);
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
                fontSize: width > 700 ? "0.9vw" : "2.6vw",

                fontWeight: "400",
              }}
            >
              Image should be less then 200 kb
            </div>
          </div>

          {data?.file && (
            <div
              style={{ marginTop: "0.3vw" }}
              className="inputfilesshowncatebox"
            >
              <div className="inputfilesshowncatboxsingle">

                <div className="inputfilesshowncatboxsingleimg">
                  <img src={img1} alt="" />
                </div>
                <div className="fileselctednamecate">{data?.file}</div>
                <div className="inputfilesshowncatboxsingleimg">
                  <img
                    style={{
                      width: width > 700 ? "1.5vw" : "5vw",
                      marginLeft: "1vw",
                      cursor: "pointer",
                    }}
                    src={img22}
                    alt=""
                    onClick={() => {
                      setArrayofblogs([
                        ...arrayofblogs.slice(0, index),
                        {
                          heading: data?.heading,
                          toc: data?.toc,
                          file: "",
                          desc: data?.desc,
                          title: data?.title,
                          button: data?.button,
                        },
                        ...arrayofblogs.slice(index + 1, arrayofblogs.length),
                      ]);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="jobpodtedfieldtitile"> Paragraph Description </div>
          <div
            style={{ marginBottom: "2vw", height: width > 700 ? "" : "10rem" }}
          >
            {description1 && (
              <TextEditor
                width={width > 700 ? "65vw" : "100%"}
                setDescription1={setDescription1}
                description1={description1}
              />
            )}
          </div>

          <div className="jobpodtedfieldtitile">Call to Action</div>
          <div
            style={{ flexDirection: width > 700 ? "row" : "column" }}
            className="homjobpost-popbudegt"
          >
            <div className="min-maxhomejob">Title *</div>
            <div className="">
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: width > 700 ? "2.6vw" : "9vw",
                  width: width > 700 ? "24.5vw" : "87vw",
                  borderRadius: "5px",
                  margin: width > 700 ? "0.5vw 1.5vw" : "2vw 1vw",
                  padding: width > 700 ? "0.2vw 0.2vw" : "3vw 1vw",
                }}
                className="setting-toggler"
              >
                <FormControl variant="standard" fullWidth>
                  <Select
                    className={classes.select2}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={allCtitle?.length > 0 ? age4 : 10}
                    disableUnderline
                    inputProps={{
                      classes: {
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
                            width: width > 700 ? "23vw" : "100%",
                            height: width > 700 ? "2vw" : "7vw",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: width > 700 ? "0.81vw" : "2.6vw",
                            lineHeight: width > 700 ? "24px" : "4vw",
                            color: "#6b6b6b",
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem hidden value={10}>
                      Select
                    </MenuItem>
                    {allCtitle?.length > 0 &&
                      allCtitle?.map((data1) => {
                        return (
                          <MenuItem
                            onClick={() => {
                              setArrayofblogs([
                                ...arrayofblogs.slice(0, index),
                                {
                                  heading: data?.heading,
                                  toc: data?.toc,
                                  file: data?.file,
                                  desc: data?.desc,
                                  title: data1?.callToActionTitle,
                                  button: data?.button,
                                },
                                ...arrayofblogs.slice(
                                  index + 1,
                                  arrayofblogs.length
                                ),
                              ]);
                            }}
                            value={data1?.callToActionTitle}
                          >
                            {data1?.callToActionTitle}
                          </MenuItem>
                        );
                      })}{" "}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div
              style={{ marginLeft: "1vw", width: width > 700 ? "" : "100%" }}
              className="min-maxhomejob"
            >
              Button Name *
            </div>
            <div className="">
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: width > 700 ? "2.6vw" : "9vw",
                  width: width > 700 ? "24.5vw" : "87vw",
                  borderRadius: "5px",
                  margin: width > 700 ? "0.5vw 1.5vw" : "2vw 1vw",
                  padding: width > 700 ? "0.2vw 0.2vw" : "3vw 1vw",
                }}
                className="setting-toggler"
              >
                <FormControl variant="standard" fullWidth>
                  <Select
                    className={classes.select2}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={allCbutton?.length > 0 ? age5 : 10}
                    disableUnderline
                    inputProps={{
                      classes: {
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
                            width: width > 700 ? "23vw" : "100%",
                            height: width > 700 ? "2vw" : "7vw",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: width > 700 ? "0.81vw" : "2.6vw",
                            lineHeight: width > 700 ? "24px" : "4vw",
                            color: "#6b6b6b",
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem
                      hidden
                      onClick={() => {
                        setArrayofblogs([
                          ...arrayofblogs.slice(0, index),
                          {
                            heading: data?.heading,
                            toc: data?.toc,
                            file: data?.file,
                            desc: data?.desc,
                            title: data?.title,
                            button: "Join Now",
                          },
                          ...arrayofblogs.slice(index + 1, arrayofblogs.length),
                        ]);
                      }}
                      value={10}
                    >
                      Select
                    </MenuItem>
                    {allCbutton?.length > 0 &&
                      age4 &&
                      allCbutton?.map((data1) => {
                        return (
                          <MenuItem
                            onClick={() => {
                              setArrayofblogs([
                                ...arrayofblogs.slice(0, index),
                                {
                                  heading: data?.heading,
                                  toc: data?.toc,
                                  file: data?.file,
                                  desc: data?.desc,
                                  title: data?.title,
                                  button: data1?.callToActionButton,
                                },
                                ...arrayofblogs.slice(
                                  index + 1,
                                  arrayofblogs.length
                                ),
                              ]);
                            }}
                            value={data1?.callToActionButton}
                          >
                            {data1?.callToActionButton}
                          </MenuItem>
                        );
                      })}{" "}
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div className="jobpodtedfieldtitile">Button Description *</div>

          <div className="jobpostfieldinputbox">
          {/* {console.log("heading1",desc1)} */}
            {desc1 && (
              <TextEditor_TOC
                width={"64vw"}
                setDescription1={setDesc1}
                description1={desc1}
              />
            )}
            {/* <textarea
              type="text"
              placeholder="distinctio debitis est neque dolore ipsum ut amet pariatur laboriosam nisi ipsam?"
              style={{
                padding: width > 700 ? "0.5vw" : "1.5vw",
                fontSize: width > 700 ? "1vw" : "3.2vw",
              }}
              value={description2}
              onChange={(e) => {
                setDescription2(e.target.value);
                setArrayofblogs([
                  ...arrayofblogs.slice(0, index),
                  {
                    heading: data?.heading,
                    toc: data?.toc,
                    file: data?.file,
                    desc: e.target.value,
                    title: data?.title,
                    button: data?.button,
                  },
                  ...arrayofblogs.slice(index + 1, arrayofblogs.length),
                ]);
              }}
            /> */}
          </div>
        </div>
      }
    </>
  );
}

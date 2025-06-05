import React, { useState } from "react";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import CloseIcon from "@mui/icons-material/Close";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import imgxxx from "../../assets/jobhome/Group 8797.svg";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import img2 from "../../assets/file.svg";
import img3 from "../../assets/close.svg";
import DoneIcon from "@mui/icons-material/Done";

import cuntrycide from "../../helper/c";
const useStyles = makeStyles((theme) => ({
  select: {
    height: "2.5vw",
    width: "28.5vw",
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
    width: "10vw",
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
    width: "5vw",
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

export default function CareerDetailsForm() {
  const classes = useStyles();
  const [age, setAge] = React.useState(10);
  const [codec, setcodec] = React.useState(1);
  const [list1, setlist1] = useState(true);
  const [list2, setlist2] = useState(false);
  const [list3, setlist3] = useState(false);
  const [age2, setAge2] = React.useState(1);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange2x = (event) => {
    setAge2(event.target.value);
  };
  const [age3, setAge3] = React.useState(1);
  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };

  const [mobilecuntry, setMobilecuntry] = useState(1);
  const [list11, setlist11] = useState(true);
  const [list21, setlist21] = useState(false);
  const [list31, setlist31] = useState(false);

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);

  const [checkone, setCheckone] = useState(false);
  const [checkone1, setCheckone1] = useState(false);
  return (
    <div className="CareerDetailFormConrainer">
      <div style={{ width: "47vw" }}>
        <div className="titleCareerDetails">User Experience Designer</div>

        <div className="flexoftitlrecareer">
          <div style={{ width: "27%" }} className="detailsofcareer">
            <WorkHistoryOutlinedIcon
              style={{ fontSize: "2vw", marginRight: "0.5vw" }}
            />{" "}
            Full Time
          </div>
          <div className="detailsofcareer" style={{ width: "40%" }}>
            <LocationOnOutlinedIcon
              style={{ fontSize: "2vw", marginRight: "0.5vw" }}
            />{" "}
            Chennai, Bangalore
          </div>
          <div className="detailsofcareer" style={{ width: "30%" }}>
            <CollectionsBookmarkOutlinedIcon
              style={{ fontSize: "2vw", marginRight: "0.5vw" }}
            />
            2-5 yrs
          </div>
        </div>
        <div className="paraofcareer">
          We are looking for a UX/UI Designer to turn our software into
          easy-to-use products for our clients. As UX/UI Designers are
          responsible for collecting, researching, investigating and evaluating
          user requirements. Their responsibility is to deliver an outstanding
          user experience providing an exceptional and intuitive application
          design.
        </div>
        <div className="subtutilecareer">Responsiblities</div>
        <div className="paraofcareer">
          Gather and evaluate user requirements in collaboration with product
          managers and engineers
          <br /> <br />
          A deep understanding of current technologies and design trends, and
          the desire to innovate using digital platforms. <br /> <br />
          A strong eye for detail. <br /> <br /> Work well in a participatory,
          team-based environment. Positive and enthusiastic with a drive for
          continuous learning and skill development of self & team. <br />{" "}
          <br /> Produce user flows, wireframes, prototypes, user interface
          specifications Initiate and manage user experience research and
          testing processes <br /> <br /> Drive the development and
          communication of visual design guidelines and patterns <br /> <br />{" "}
          Work strategically with other executives and team members across the
          organisation.{" "}
        </div>
        <div className="subtutilecareer">Requirement</div>
        <div className="paraofcareer">
          Gather and evaluate user requirements in collaboration with product
          managers and engineers
          <br /> <br />
          A deep understanding of current technologies and design trends, and
          the desire to innovate using digital platforms. <br /> <br />
          A strong eye for detail. <br /> <br /> Work well in a participatory,
          team-based environment. Positive and enthusiastic with a drive for
          continuous learning and skill development of self & team. <br />{" "}
          <br /> Produce user flows, wireframes, prototypes, user interface
          specifications Initiate and manage user experience research and
          testing processes <br /> <br /> Drive the development and
          communication of
        </div>
      </div>
      <div style={{ width: "42vw" }}>
        <div className="careerForm">
          <div
            style={{ color: "#064C87", textAlign: "center" }}
            className="subtutilecareer"
          >
            Application
          </div>
          <div className="jobpodtedfieldtitile">Name</div>
          <div className="jobpostfieldinputbox">
            <input
              type="email"
              style={{ width: "30vw", paddingRight: "0vw", paddingLeft: "1vw" }}
            />
          </div>
          <div className="jobpodtedfieldtitile">Role</div>
          <div className="jobpostfieldinputbox">
            <input
              type="email"
              style={{ width: "30vw", paddingRight: "0vw", paddingLeft: "1vw" }}
            />
          </div>
          <div className="jobpodtedfieldtitile">Experience</div>
          <div className="jobpostfieldinputbox">
            <input
              type="email"
              style={{ width: "30vw", paddingRight: "0vw", paddingLeft: "1vw" }}
            />
          </div>

          <div className="jobpodtedfieldtitile">Mobile</div>
          <div className="jobpostfieldinputbox">
            <div style={{ width: "0.1vw", zIndex: "3" }}>
              <div className="okmobilejobform" onClick={handleOpenx}>
                {mobilecuntry}
              </div>
              <Box
                sx={{
                  background: "white",
                  border: "1px solid #7070705b",
                  height: "3.0vw",
                  width: "5vw",
                  borderRadius: "5px",
                  margin: "0vw 0vw",
                  position: "relative",
                  bottom: "0.71vw",
                }}
                className="setting-toggler"
              >
                <FormControl variant="standard" fullWidth>
                  <Select
                    className={classes.select3}
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
                          width: "3vw",
                          maxHeight: "18vw",
                          "& .MuiMenuItem-root": {
                            padding: "0.1vw 0.1vw",
                            width: "3vw",
                            height: "2vw",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "0.81vw",
                            lineHeight: "24px",
                            color: "#6b6b6b",
                          },
                        },
                      },
                    }}
                  >
                    {cuntrycide &&
                      cuntrycide?.map((code, index) => {
                        return (
                          <MenuItem
                            onClick={() => {
                              setlist1(true);
                              setlist2(false);
                              setlist3(false);
                            }}
                            value={index + 1}
                          >
                            <div style={{ textAlign: "center" }}>
                              {code?.dial_code}
                            </div>
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Box>
            </div>

            <input type="number" style={{ paddingLeft: "5.5vw" }} />
            <CloseIcon
              style={{
                position: "relative",
                right: "2vw",
                top: "1.3vw",
                fontSize: "1.3vw",
              }}
            />
          </div>
          <div className="jobpodtedfieldtitile">Email</div>
          <div className="jobpostfieldinputbox">
            <input
              type="email"
              style={{ width: "30vw", paddingRight: "0vw", paddingLeft: "1vw" }}
            />
          </div>

          <div className="jobpodtedfieldtitile">Description</div>

          <div className="jobpostfieldinputbox">
            <textarea type="text" />
          </div>

          <div className="jobpodtedfieldtitile">Image/Documents</div>

          <div style={{width:"34vw"}} className="fileinputbox">
            <label htmlFor="fileupload">
              <div>
                <FileUploadIcon
                  style={{ fontSize: "3vw", color: "#8f92a173" }}
                />
              </div>
              <input type="file" name="fileupload" id="fileupload" hidden />
              <div className="min-maxhomejob" style={{ textAlign: "center" }}>
                Drag and Drop or Browse to upload
              </div>
            </label>
          </div>
          <div className="selectedhjobfile">
            <div>
              <img src={img2} alt="" />
            </div>
            <div className="">Modern submitted.docx</div>
            <div>
              <img
                style={{ marginLeft: "1vw", width: "1.2vw" }}
                src={img3}
                alt=""
              />
            </div>
          </div>
          <div className="selectedhjobfile">
            <div>
              <img src={img2} alt="" />
            </div>
            <div className="">logo.jpg</div>
            <div>
              <img
                style={{ marginLeft: "1vw", width: "1.2vw" }}
                src={img3}
                alt=""
              />
            </div>
          </div>
          <div className="homejobbuttons">
              <div></div>
            <button style={{ background: "white" }} >
              Cancel
            </button>
           
            <button style={{ color: "white" }} onClick={handleOpenx}>
              Submit
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

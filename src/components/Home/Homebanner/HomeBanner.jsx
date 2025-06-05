import React, { useState } from "react";
import "./Homebanner.css";
import img1 from "../../../assets/Landing page/Group 436.svg";
import { SearchSharp } from "@mui/icons-material";
import img2 from "../../../assets/Landing page/Group 787.svg";
import { makeStyles } from "@material-ui/core";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import HomePostjob from "./HomePostjob";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Homeformbid from "./Homeformbid";
import img5 from "../../../assets/Lpagesmalllogo/Group 790.svg";
import img6 from "../../../assets/Lpagesmalllogo/Group 791.svg";
import img7 from "../../../assets/Lpagesmalllogo/Group 792.svg";
import img8 from "../../../assets/Lpagesmalllogo/Group 793.svg";
import axios from "axios";
import API_HOST from "../../../env";
import { useSelector } from "react-redux";

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
  pr: 1,
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

export default function HomeBanner({ width }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const [openx, setOpenx] = React.useState(false);
  const [anchorElx, setAnchorElx] = React.useState(null);

  const canBeOpen = openx && Boolean(anchorElx);
  const id = canBeOpen ? "transition-popper" : undefined;

  const [postfindbuttontotggle, setPostfindbuttontotggle] = useState(true);

  const [allcategory, setAllcategory] = useState([0]);

  const handleSearchCategory = (e) => {
    axios
      .get(
        `${API_HOST}/theCategory/viewCategory?pageSize=30&pageNumber=1&category=${e.target.value}`
      )
      .then((res) => {
          
        setAllcategory(res?.data?.success?.data);

        setOpenx(true);
      });
  };

  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  const [setSelectedCategoryid, setSetSelectedCategoryid] = useState("");
  const [setsubSelectedCategory, setsubSetSelectedCategory] = useState([]);
  const { user, loggedInStatus } = useSelector((state) => state.user);
  return (
    <>
      <div className="hbanner-container">
        <div className="h-banner-data">
          <div className="h-banner-accerlate">
            Expertise, Skill, & Solution!
          </div>
          <div className="h-banner-carrierland">Services at Your Fingertip</div>
          <div className="hbsmalltext">
            We provide competent services while saving valuable time.
          </div>
          {!loggedInStatus && (
            <div className="buttons-habnner">
              <button
                className={postfindbuttontotggle ? "hb-button" : "hb-buttonx"}
                onClick={() => {
                  setPostfindbuttontotggle(true);
                  setOpenx(false);
                }}
              >
                Post a Job
              </button>
              <button
                className={postfindbuttontotggle ? "hb-buttonx" : "hb-button"}
                onClick={() => {
                  setPostfindbuttontotggle(false);
                  setOpenx(false);
                }}
              >
                Browse a Job
              </button>
            </div>
          )}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width > 700 ? style : style1}>
              <HomePostjob
                width={width}
                handleClose={handleClose}
                setsubSelectedCategory={setsubSelectedCategory}
                setSelectedCategory={setSelectedCategory}
                setSelectedCategoryid={setSelectedCategoryid}
              />
            </Box>
          </Modal>
          {!loggedInStatus && (
            <div className="serachjobbox">
              <span>
                <SearchSharp
                  style={{ fontSize: width < 700 ? "3.5vw" : "1.6vw" }}
                />
              </span>
              <input
                type="text"
                placeholder="search for what you need"
                onChange={(e) => {
                  if (e.target.value !== "") {
                    handleSearchCategory(e);
                    setAnchorElx(e.currentTarget);
                  } else {
                    setOpenx(false);
                  }
                }}
              />
              <Popper id={id} open={openx} anchorEl={anchorElx} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box
                      sx={{
                        width: width < 700 ? "96vw" : "35vw",
                        border: 1,
                        p: 1,
                        bgcolor: "background.paper",
                        position: "relative",
                        top: "0.81vw",
                        left: width < 700 ? "2vw" : "3.5vw",
                        borderRadius: "0.3vw",
                        maxHeight: width < 700 ? "50vw" : "16vw",
                        overflow: "scroll",
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        <div className="recentsearch">Recent search</div>
                        {allcategory.length > 0 &&
                          allcategory?.map((cate) => {
                            return (
                              <div
                                className="recentnamesearc"
                                onClick={() => {
                                  setSetSelectedCategory(cate?.category);
                                  setSetSelectedCategoryid(cate?._id);
                                  setsubSetSelectedCategory(
                                    cate?.subCategories
                                  );
                                  postfindbuttontotggle
                                    ? handleOpen()
                                    : handleOpen3();
                                }}
                              >
                                {cate?.category}
                                <span>
                                  <ArrowUpwardIcon
                                    style={{
                                      fontSize: width < 700 ? "3.5vw" : "1.7vw",
                                      transform: "rotate(-45deg)",
                                    }}
                                  />
                                </span>
                              </div>
                            );
                          })}

                        <Modal
                          open={open3}
                          onClose={handleClose3}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={width > 700 ? style : style1}>
                            <Homeformbid
                              width={width}
                              handleClose={handleClose3}
                              setsubSelectedCategory={setsubSelectedCategory}
                              setSelectedCategory={setSelectedCategory}
                              setSelectedCategoryid={setSelectedCategoryid}
                            />
                          </Box>
                        </Modal>
                      </div>
                    </Box>
                  </Fade>
                )}
              </Popper>
              <button
                style={{
                  width: width < 700 ? "28vw" : "11vw",
                  height: width < 700 ? "6vw" : "2.5vw",
                }}
                className="hb-button"
              >
              
                Get Started
              </button>
            </div>
          )}{" "}
        </div>
        <div className="home-banner-img">
          <div className="home-banner-imgright">
            <img src={img1} alt="" />
          </div>
          <div className="more-buttons-dummy">
            <button
              style={{
                position: "relative",
                bottom: width < 700 ? "20vw" : "23vw",
                right: width < 700 ? "8vw" : "4vw",
                width: width < 700 ? "27vw" : "10vw",
                cursor: "auto",
              }}
              className="hb-button"
            >
              Saved Cost 25%
            </button>
            <button
              style={{
                position: "relative",
                bottom: width < 700 ? "38vw" : "21vw",
                left: width < 700 ? "30vw" : "13vw",
                width: width < 700 ? "32vw" : "11vw",
                cursor: "auto",
              }}
              className="hb-button"
            >
              Saved vaucher 2k
            </button>
            <button
              style={{
                position: "relative",
                left: width < 700 ? "30vw" : "10vw",
                bottom: width < 700 ? "5vw" : "3vw",
                width: width < 700 ? "25vw" : "11vw",
                cursor: "auto",
              }}
              className="hb-button"
            >
              Saved Time 2 hr
            </button>
          </div>
        </div>
      </div>
      <div className="hb-5boxesresult">
        <div className="hb-trustbox">
          <div className="hbimgminibox">
            <div className="hbimgmini">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="hbimgminibox-dtata">
            <div className="hbtrusttext"> Trusted by</div>
            <div className="hbtrusttext-exactvalue">6345+ Users</div>
          </div>
        </div>
        <div className="hb-trustbox">
          <div className="hbimgminibox">
            <div className="hbimgmini">
              <img src={img5} alt="" />
            </div>
          </div>
          <div className="hbimgminibox-dtata">
            <div className="hbtrusttext"> Job Posted by</div>
            <div className="hbtrusttext-exactvalue">1200 + Users</div>
          </div>
        </div>
        <div className="hb-trustbox">
          <div className="hbimgminibox">
            <div className="hbimgmini">
              <img src={img6} alt="" />
            </div>
          </div>
          <div className="hbimgminibox-dtata">
            <div className="hbtrusttext"> Experts</div>
            <div className="hbtrusttext-exactvalue">2700 + Users</div>
          </div>
        </div>
        <div className="hb-trustbox">
          <div className="hbimgminibox">
            <div className="hbimgmini">
              <img src={img8} alt="" />
            </div>
          </div>
          <div className="hbimgminibox-dtata">
            <div className="hbtrusttext"> Queries Solved</div>
            <div className="hbtrusttext-exactvalue">2100 +</div>
          </div>
        </div>
        {width >= 700 && (
          <div className="hb-trustbox">
            <div className="hbimgminibox">
              <div className="hbimgmini">
                <img src={img7} alt="" />
              </div>
            </div>
            <div className="hbimgminibox-dtata">
              <div className="hbtrusttext"> Ratings </div>
              <div className="hbtrusttext-exactvalue">4.9 +</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

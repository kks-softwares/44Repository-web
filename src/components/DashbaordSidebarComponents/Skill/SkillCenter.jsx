import "./skill.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { SearchSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Skillpopup from "./Skillpopup";
import SkillCard1 from "./Skillsearchcard1";
import img5 from "../../../assets/course/tick.svg";
import img7 from "../../../assets/course/signal_cellular_alt_black_24dp.svg";
import img17 from "../../../assets/experts/Iconly-Light-Chart.svg";
import img27 from "../../../assets/experts/Iconly-Light-Bookmark.svg";
import img37 from "../../../assets/experts/Iconly-Light-Time Circle.svg";
import Skillcard2 from "./Skillcard2";
import SkillongoingCard from "./SkillongoingCard";
import imge1 from "../../../assets/Dashboard/Skill center – 2/clipboard.svg";
import imge2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Document.svg";
import imge3 from "../../../assets/Dashboard/Skill center – 2/trending.svg";
import SkillCertificateCard from "./SkillCertificateCard";
import imgfilter from "../../../assets/Dashboard/Iconly-Light-Filter 2.png";
import Modal from "@mui/material/Modal";
import { filter } from "dom-helpers";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};
export default function SkillCenter() {
  const [openx, setOpenx] = React.useState(false);
  const [anchorElx, setAnchorElx] = React.useState(null);
  const canBeOpen = openx && Boolean(anchorElx);
  const id = canBeOpen ? "transition-popper" : undefined;
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { user, loggedInStatus } = useSelector((state) => state.user);
  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);
  const [workhistorytoggle1, setWorkhistorytoggle1] = useState(1);
  const { type } = useParams();

  useEffect(() => {
    if (type === "Explore skill and Learn") {
      setWorkhistorytoggle(1);
      setWorkhistorytoggle1(1);
    } else if (type === "Ongoing skill and learn") {
      setWorkhistorytoggle(2);
      setWorkhistorytoggle1(2);
    } else if (type === "Examination") {
      setWorkhistorytoggle(3);
      setWorkhistorytoggle1(3);
    } else if (type === "Certifications") {
      setWorkhistorytoggle(4);
      setWorkhistorytoggle1(4);
    } else {
      setWorkhistorytoggle1(5);
    }
  }, [type]);

  const handleSearchCategory = (e) => {
    axios
      .get(`${API_HOST}/category/viewCategory?categories=${e.target.value}`)
      .then((res) => {
        setAllcategory(res?.data?.success?.data?.docs);

        setOpenx(true);
      });
  };

  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  const [setsubSelectedCategory, setsubSetSelectedCategory] = useState([]);
  const [allcategory, setAllcategory] = useState([0]);

  const [arrayoffilters, setArrayoffilters] = useState([
    {
      filternameName: "Categories",
      filters: [
        "Digital Marketing",
        "Graphic Design",
        "Data Analystics",
        "Communication",
      ],
    },
    {
      filternameName: "Course Length",
      filters: ["Under 2 hours", "2-10 hours", "11-20 hours", "20+ hours"],
    },
    {
      filternameName: "Certification",
      filters: ["Paid Certification", "Free Certification"],
    },
    {
      filternameName: "Course Difficulty",
      filters: ["Begineer", "Intermediate", "Advanced", "Expert"],
    },
    {
      filternameName: "Course Provider",
      filters: ["Google", "Udemy", "Coursera", "Future Learn"],
    },
  ]);

  const [arrayoffilterselected, setarrayoffilterselected] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previosfilter, setPreviosfilter] = useState([]);
  return (
    <div className="BrowseWorkMain-cntainer">
      <div className="searchboxcontainer">
        <div className="serachjobbox">
          <span>
            <SearchSharp style={{ fontSize: "1.7vw" }} />
          </span>
          <input
            type="text"
            onChange={(e) => {
              handleSearchCategory(e);
              setAnchorElx(e.currentTarget);
            }}
          />
          <Popper id={id} open={openx} anchorEl={anchorElx} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Box
                  sx={{
                    width: "35vw",
                    border: 1,
                    p: 1,
                    bgcolor: "background.paper",
                    position: "relative",
                    top: "0.81vw",
                    left: "3.4vw",
                    borderRadius: "0.3vw",
                    maxHeight: "16vw",
                    overflow: "scroll",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <div
                      onClick={() => {
                        setOpenx(false);
                        setAnchorElx(null);
                      }}
                      className="recentsearch"
                    >
                      Recent search
                    </div>

                    {allcategory.length > 0 &&
                      allcategory?.map((cate) => {
                        return (
                          <div
                            className="recentnamesearc"
                            onClick={() => {
                              setSetSelectedCategory(cate?.categories);
                              setsubSetSelectedCategory(cate?.subCategories);
                            }}
                          >
                            {cate?.categories}
                            <span>
                              <ArrowUpwardIcon
                                style={{
                                  fontSize: "1.7vw",
                                  transform: "rotate(-45deg)",
                                }}
                              />
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </Box>
              </Fade>
            )}
          </Popper>
          <button
            style={{ width: "11vw", height: "2.6vw" }}
            className="hb-button"
          >
            Search
          </button>
        </div>

        <div onClick={()=>{navigate('/dashbaord/wallet')}}  className="digitalwallate">
          Digital Wallet
          <span>$1200</span>
        </div>
      </div>

      <div
        style={{ position: "relative", right: "1vw", width: "80vw" }}
        className="profileworkhistruytoggleer"
      >
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            width: "14vw",
          }}
          onClick={() => {
            navigate("/dashbaord/skill/Explore skill and Learn");
          }}
        >
          Explore skill and Learn
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
            width: "14vw",
          }}
          onClick={() => {
            navigate("/dashbaord/skill/Ongoing skill and learn");
          }}
        >
          Ongoing skill and Learn
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
          }}
          onClick={() => {
            navigate("/dashbaord/skill/Examination");
          }}
        >
          Examination
        </div>
        <div
          className="profileworkhistruytoggleervalue"
          style={{
            textAlign: "center",
            color: "black",
          }}
          onClick={() => {
            navigate("/dashbaord/skill/Certifications");
          }}
        >
          Certifications
        </div>
        <div
          style={{
            color: "#064C87",
            borderBottom: "0.3vw solid #064C87",
            width: "12vw",
            position: "relative",
            right:
              workhistorytoggle === 1
                ? "58vw"
                : workhistorytoggle === 2
                ? "42vw"
                : workhistorytoggle === 3
                ? "27vw"
                : "13vw",
            bottom: "0.3vw",
            transitionDuration: "1s",
            borderRadius: "0.2vw",
          }}
        ></div>
      </div>
      {workhistorytoggle1 === 1 ? (
        <div>
          <div style={{flexWrap:"wrap"}} className="filterboxflex">
            <div
              onClick={() => {
                handleOpen();
                setPreviosfilter([...arrayoffilterselected]);
              }}
              className="filtericonbox"
            >
              <img src={imgfilter} alt="" />
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="profiletitleandmenunav">
                  <div className="profiledetailstitle">Add Filters</div>
                  <div className="profiledetailnavmanu">
                    <div>
                      <CloseIcon
                        onClick={handleClose}
                        style={{ fontSize: "1.5vw" }}
                      />
                    </div>
                  </div>
                </div>
                <hr style={{ color: "#00000090" }} />

                {arrayoffilters?.map((data, index) => {
                  return (
                    <div>
                      <div
                        style={{ fontSize: "1.2vw" }}
                        className="profiledetailstitle"
                      >
                        {data?.filternameName}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "wrap",
                        }}
                      >
                        {data?.filters?.map((data1, index) => {
                          return (
                            <div
                              onClick={() => {
                                console.log(
                                  arrayoffilterselected.indexOf(data1)
                                );
                                if (arrayoffilterselected.indexOf(data1) > -1) {
                                  setarrayoffilterselected([
                                    ...arrayoffilterselected.slice(
                                      0,
                                      arrayoffilterselected.indexOf(data1)
                                    ),
                                    ...arrayoffilterselected.slice(
                                      arrayoffilterselected.indexOf(data1) + 1,
                                      arrayoffilterselected.length
                                    ),
                                  ]);
                                } else {
                                  setarrayoffilterselected([
                                    ...arrayoffilterselected,
                                    data1,
                                  ]);
                                }
                              }}
                              style={{
                                background: arrayoffilterselected.includes(
                                  data1
                                )
                                  ? "#064C8720"
                                  : "",
                                cursor: "pointer",
                              }}
                              className="filterboxnameskill"
                            >
                              {data1}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

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
                    onClick={() => {
                      setarrayoffilterselected(previosfilter);
                      handleClose();
                    }}
                  >
                    Cancel
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className="handlecirclieaboutsave"
                    // onClick={handleeducationdelete}
                  >
                    Submit
                  </div>
                </div>
              </Box>
            </Modal>

            {arrayoffilterselected?.length > 0 &&
              arrayoffilterselected?.map((filtername) => {
                return <div className="filtericonboxname">{filtername}</div>;
              })}

            <div onClick={()=>setarrayoffilterselected([])} style={{cursor:"pointer"}} className="filtericonboxname">Clear all</div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <SkillCard1 />
            <SkillCard1 />
            <SkillCard1 />
            <SkillCard1 />
            <SkillCard1 />
            <SkillCard1 />
          </div>
          <div className="paginationbox">
            <div>
              <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
            </div>
            <div style={{ color: page === 1 ? "#2A6599" : "" }}>1</div>
            <div>2</div>
            <div>3</div>
            <div>.</div>
            <div>.</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>
              <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {workhistorytoggle1 === 2 ? (
        <div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <SkillongoingCard />
            <SkillongoingCard />
            <SkillongoingCard />
            <SkillongoingCard />
            <SkillongoingCard />
          </div>

          <div className="paginationbox">
            <div>
              <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
            </div>
            <div style={{ color: page === 1 ? "#2A6599" : "" }}>1</div>
            <div>2</div>
            <div>3</div>
            <div>.</div>
            <div>.</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>
              <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {workhistorytoggle1 === 3 ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "0 5vw",
            }}
          >
            <div className="cardofexamstype">
              <div className="titileofcardofexamstype">Total Exams</div>
              <div className="imgsamllexamtype">
                <img src={imge1} alt="" />
              </div>
              <div className="valueofcardofexamstype">56</div>
            </div>
            <div className="cardofexamstype">
              <div className="titileofcardofexamstype">Exams Completed</div>
              <div
                style={{ background: "#00875A20" }}
                className="imgsamllexamtype"
              >
                <img src={imge2} alt="" />
              </div>
              <div className="valueofcardofexamstype">30</div>
            </div>
            <div className="cardofexamstype">
              <div className="titileofcardofexamstype">Upcoming Exams</div>
              <div
                style={{ background: "#FF991F20" }}
                className="imgsamllexamtype"
              >
                <img src={imge3} alt="" />
              </div>
              <div className="valueofcardofexamstype">26</div>
            </div>
            <div className="cardofexamstype">
              <div className="titileofcardofexamstype">Percentage</div>
              <div className="imgsamllexamtype">
                <img src={imge1} alt="" />
              </div>
              <div className="valueofcardofexamstype">90%</div>
            </div>
          </div>

          <div
            style={{ margin: "0vw 0vw", padding: "0", marginBottom: "2vw" }}
            className="navoftableblogs"
          >
            List of Exams
          </div>
          <div>
            <div
              style={{ margin: "0vw 1vw", padding: "0vw 1vw" }}
              className="navoftableblogs"
            >
              <div style={{ width: "20vw" }}>Name</div>
              <div style={{ width: "12vw" }}>Date</div>
              <div style={{ width: "12vw" }}>Percentage</div>
              <div style={{ width: "15vw" }}>Status</div>
              <div style={{ width: "10vw" }}>Certificate</div>
              <div style={{ width: "8vw" }}></div>
            </div>

            <Skillpopup />
            <Skillpopup />
            <Skillpopup />
            <Skillpopup />
            <Skillpopup />
            <Skillpopup />
            <Skillpopup />
            <Skillpopup />

            <div className="paginationbox">
              <div>
                <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div style={{ color: page === 1 ? "#2A6599" : "" }}>1</div>
              <div>2</div>
              <div>3</div>
              <div>.</div>
              <div>.</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>
                <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {workhistorytoggle1 === 4 ? (
        <div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <SkillCertificateCard />
            <SkillCertificateCard />
            <SkillCertificateCard />
            <SkillCertificateCard />
            <SkillCertificateCard />
          </div>
          <div className="paginationbox">
            <div>
              <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
            </div>
            <div style={{ color: page === 1 ? "#2A6599" : "" }}>1</div>
            <div>2</div>
            <div>3</div>
            <div>.</div>
            <div>.</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>
              <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {workhistorytoggle1 === 5 ? (
        <div style={{ padding: "1vw" }}>
          <div className="courseaboutdetailtitile">Get a Business Online</div>
          <div style={{ margin: "1vw 0" }} className="subcbtitile">
            Find out how to build a digital presence, sell to customers online,
            and stay safe from hackers.
          </div>
          <div className="courseaboutdetailtitile">Get a Business Online</div>
          <div style={{ margin: "1vw 0" }} className="subcbtitile">
            Start out this free of charge course to discover what it takes to
            start and run a successful business online. You'll also learn how to
            build a digital presence, use e-commerce, keep a business safe from
            hackers, and get noticed locally. Start out this free of charge
            course to discover what it takes to start and run a successful
            business online. You'll also learn how to build a digital presence,
            use e-commerce, keep a business safe from hackers, and get noticed
            locally . Start out this free of charge course to discover what it
            takes to start and run a successful business online. You'll also
            learn how to build a digital presence, use e- commerce, keep a
            business safe from hackers, and get noticed locally.
          </div>

          <div style={{ display: "flex" }} className="flex">
            <div style={{ width: "30vw" }}>
              <div className="courseaboutdetailtitile">Course Detail</div>
              <div className="courseaboutdetailtitilevalue">
                <img src={img37} alt="" /> 30 hours
              </div>
              <div className="courseaboutdetailtitilevalue">
                <img src={img27} alt="" /> 3 Badges
              </div>
              <div className="courseaboutdetailtitilevalue">
                <img src={img17} alt="" /> 24 Modules
              </div>
              <div className="courseaboutdetailtitilevalue">
                <img src={img7} alt="" /> 30 hours
              </div>
            </div>
            <div style={{ width: "30vw" }}>
              <div className="courseaboutdetailtitile">Course Features</div>
              <div className="courseaboutdetailtitilevalue">
                <img src={img5} alt="" /> Video tutorials
              </div>
              <div className="courseaboutdetailtitilevalue">
                <img src={img5} alt="" /> End-of-topic assesments
              </div>
              <div className="courseaboutdetailtitilevalue">
                <img src={img5} alt="" /> Easy-to-implement tips
              </div>
              <div className="courseaboutdetailtitilevalue">
                <img src={img5} alt="" /> Unlimited access
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "2vw" }}>
            <Skillcard2 />
            <Skillcard2 />
            <Skillcard2 />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button
              style={{ width: "12vw", marginRight: "2vw", marginTop: "2vw" }}
              className="hb-button"
            >
              Start Free Cource
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

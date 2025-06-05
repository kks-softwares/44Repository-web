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
import SkillCard1 from "../Skill/Skillsearchcard1";
import imgfilter from "../../../assets/Dashboard/Iconly-Light-Filter 2.png";
import Modal from "@mui/material/Modal";
import ShopCard1 from "./ShopCard1";
import ShopCard2 from "./ShopCard2";

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
export default function ShopRedeam() {
  const [openx, setOpenx] = React.useState(false);
  const [anchorElx, setAnchorElx] = React.useState(null);
  const canBeOpen = openx && Boolean(anchorElx);
  const id = canBeOpen ? "transition-popper" : undefined;
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { user, loggedInStatus } = useSelector((state) => state.user);

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
        "Mobile Phones",
        "Computers",
        "Television",
        "Electronics",
        "Men's Fashion",
        "Graphic Design",
        "Women's Fashion",
        "Kitchen",
        "Pet Food",
        "Note Books",
        "Car accesories",
        "Home",
      ],
    },
  ]);

  const [arrayoffilterselected, setarrayoffilterselected] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previosfilter, setPreviosfilter] = useState([]);
  const [selectedShopreadeam, setSelectedShopreadeam] = useState(null)
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
      <div style={{marginTop:"1vw"}} className="profiledetailstitle">Shop & Redeem</div>
    {!selectedShopreadeam?  <div>
        <div style={{ flexWrap: "wrap" }} className="filterboxflex">
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
                              background: arrayoffilterselected.includes(data1)
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

          <div
            onClick={() => setarrayoffilterselected([])}
            style={{ cursor: "pointer" }}
            className="filtericonboxname"
          >
            Clear all
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <ShopCard1  setSelectedShopreadeam={setSelectedShopreadeam}/>
          <ShopCard1  setSelectedShopreadeam={setSelectedShopreadeam}/>
          <ShopCard1  setSelectedShopreadeam={setSelectedShopreadeam}/>
          <ShopCard1  setSelectedShopreadeam={setSelectedShopreadeam}/>
          <ShopCard1  setSelectedShopreadeam={setSelectedShopreadeam}/>
          <ShopCard1  setSelectedShopreadeam={setSelectedShopreadeam}/>
          <ShopCard1  setSelectedShopreadeam={setSelectedShopreadeam}/>
          <ShopCard1  setSelectedShopreadeam={setSelectedShopreadeam}/>
          <ShopCard1  setSelectedShopreadeam={setSelectedShopreadeam}/>
          <ShopCard1  setSelectedShopreadeam={setSelectedShopreadeam}/>
          <ShopCard1  setSelectedShopreadeam={setSelectedShopreadeam}/>
          <ShopCard1  setSelectedShopreadeam={setSelectedShopreadeam}/>
          
         
          
          
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
      </div>: <div style={{display:"flex",height:"33.5rem",justifyContent:"center",alignItems:"center"}}>
            <ShopCard2/>
      </div>
      }
    </div>
  );
}

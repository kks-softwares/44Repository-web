import React, { useState } from "react";
import "./refrenece.css";
import { useNavigate } from "react-router";
import { SearchSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { useSelector } from "react-redux";
import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RefrencePopup from "./RefrencePopup";

export default function Refrences() {
  const [openx, setOpenx] = React.useState(false);
  const [anchorElx, setAnchorElx] = React.useState(null);
  const canBeOpen = openx && Boolean(anchorElx);
  const id = canBeOpen ? "transition-popper" : undefined;

  
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

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

        <div
          onClick={() => {
            navigate("/dashbaord/wallet");
          }}
          className="digitalwallate"
        >
          Digital Wallet
          <span>$1200</span>
        </div>
      </div>

      <div className="navoftableblogs">
        <div style={{ width: "6vw" }}>Id</div>
        <div style={{ width: "15vw" }}>Name</div>
        <div style={{ width: "15vw" }}>Category</div>
        <div style={{ width: "20vw" }}>Skill Set</div>
        <div style={{ width: "15vw" }}>Status</div>
        <div style={{ width: "8vw" }}></div>
      </div>

      <RefrencePopup />
      <RefrencePopup />
      <RefrencePopup />
      <RefrencePopup />
      <RefrencePopup />
      <RefrencePopup />
      <RefrencePopup />

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
  );
}

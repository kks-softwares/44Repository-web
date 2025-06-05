import React, { useState } from "react";
import "./faq.css";
import SettingFaq from "../../Services/SettingFaq";
import axios from "axios";
import API_HOST from "../../../env";
import { SearchSharp } from "@mui/icons-material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";
export default function Faq() {
  const navigate=useNavigate()
    const handleSearchCategory = (e) => {
        axios
          .get(`${API_HOST}/category/viewCategory?categories=${e.target.value}`)
          .then((res) => {
            setAllcategory(res?.data?.success?.data?.docs);
            setOpenxp(true);
          });
      };
    
      const [setSelectedCategory, setSetSelectedCategory] = useState("");
      const [setsubSelectedCategory, setsubSetSelectedCategory] = useState([]);
      const [allcategory, setAllcategory] = useState([0]);
    
      const [openxp, setOpenxp] = React.useState(false);
      const [anchorElxp, setAnchorElxp] = React.useState(null);
      const canBeOpenp = openxp && Boolean(anchorElxp);
      const idxp = canBeOpenp ? "transition-popper" : undefined;
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
            setAnchorElxp(e.currentTarget);
          }}
        />
        <Popper id={idxp} open={openxp} anchorEl={anchorElxp} transition>
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
                      setOpenxp(false);
                      setAnchorElxp(null);
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

    <div style={{marginTop:"2vw"}}>
      <SettingFaq />
    </div>

    </div>
  );
}

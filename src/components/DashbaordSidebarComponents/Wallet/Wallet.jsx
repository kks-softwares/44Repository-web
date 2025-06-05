import React, { useState } from "react";
import "./Wallet.css";
import axios from "axios";
import API_HOST from "../../../env";
import Box from "@mui/material/Box";
import Catelogfaqquestion from "../../Catalogue/Catelogfaqquestion";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { SearchSharp } from "@mui/icons-material";
import { useNavigate } from "react-router";
import SearchIcon from "@mui/icons-material/Search";
import img11 from "../../../assets/walletimage/Amazon_Pay-Logo.wine.svg";
import img12 from "../../../assets/walletimage/Flipkart-Logo.wine.svg";
import img13 from "../../../assets/walletimage/Google_Pay-Logo.wine.svg";
import img14 from "../../../assets/walletimage/PayPal-Logo.wine.svg";
import img15 from "../../../assets/walletimage/Paytm-Logo.wine.svg";
import imge3 from "../../../assets/Dashboard/Skill center – 2/trending.svg";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import imgdot from "../../../assets/walletimage/Ellipse 1400.svg";
import imgdot1 from "../../../assets/walletimage/Ellipse 1402.svg";
export default function Wallet() {
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
      <div style={{ marginTop: "1vw" }} className="profiledetailstitle">
        Digital Wallet
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "0 5vw",
        }}
      >
        <div className="cardofexamstype">
          <div className="titileofcardofexamstype">Total Amount</div>
          <div style={{ background: "#FF991F20" }} className="imgsamllexamtype">
            <img src={imge3} alt="" />
          </div>
          <div className="valueofcardofexamstype">$197328</div>
        </div>
        <div className="cardofexamstype">
          <div style={{ display: "flex" }} className="titileofcardofexamstype">
            Hold Amount{" "}
            <span>
              <HelpOutlineOutlinedIcon
                style={{ fontSize: "1.6vw", margin: "0 0.5vw" }}
              />
            </span>{" "}
          </div>
          <div style={{ background: "#FF991F20" }} className="imgsamllexamtype">
            <img src={imge3} alt="" />
          </div>
          <div className="valueofcardofexamstype">$1973</div>
        </div>
        <div className="cardofexamstype">
          <div className="titileofcardofexamstype">Redeem Amount</div>
          <div style={{ background: "#FF991F20" }} className="imgsamllexamtype">
            <img src={imge3} alt="" />
          </div>
          <div className="valueofcardofexamstype">$97328</div>
        </div>
        <div className="cardofexamstype">
          <div className="titileofcardofexamstype">Withdraw Amount</div>
          <div style={{ background: "#FF991F20" }} className="imgsamllexamtype">
            <img src={imge3} alt="" />
          </div>
          <div className="valueofcardofexamstype">$197328</div>
        </div>
      </div>

      <div style={{ marginTop: "1vw" }} className="profiledetailstitle">
        Redeem Cash
      </div>
      <div
        style={{
          display: "flex",

          alignItems: "center",
          padding: "0 1vw",
        }}
      >
        <div className="redeamCardoftranctionwallet">
          <img src={img15} alt="" />
        </div>
        <div className="redeamCardoftranctionwallet">
          <img src={img11} alt="" />
        </div>
        <div className="redeamCardoftranctionwallet">
          <img src={img14} alt="" />
        </div>
        <div className="redeamCardoftranctionwallet">
          <img src={img13} alt="" />
        </div>
      </div>
      <div style={{ marginTop: "1vw" }} className="profiledetailstitle">
        Redeem Through Shopping
      </div>
      <div
        style={{
          display: "flex",

          alignItems: "center",
          padding: "0 1vw",
        }}
      >
        <div className="redeamCardoftranctionwallet">
          <img src={img11} alt="" />
        </div>
        <div className="redeamCardoftranctionwallet">
          <img src={img12} alt="" />
        </div>
        <div className="redeamCardoftranctionwallet">
          <img src={img15} alt="" />
        </div>
        <div className="redeamCardoftranctionwallet">
          <img src={img11} alt="" />
        </div>
      </div>

      <div
        style={{ marginTop: "1vw", display: "flex", alignItems: "center" }}
        className="profiledetailstitle"
      >
        <div style={{ width: "75%" }}>Redeem List</div>
        <div style={{ width: "25%" }}>Redeem</div>
      </div>
      <div style={{ marginTop: "0.51vw", display: "flex" }}>
        <div style={{ width: "75%" }}>
          <div className="Redeamlistboxes">
            <div>
              Login your account and Get your Reward of Rs 500 will Credit your
              Wallet
            </div>
            <div>Claim Now</div>
          </div>
          <div className="Redeamlistboxes">
            <div>
              Login your account and Get your Reward of Rs 500 will Credit your
              Wallet
            </div>
            <div>Claim Now</div>
          </div>
          <div className="Redeamlistboxes">
            <div>
              Login your account and Get your Reward of Rs 500 will Credit your
              Wallet
            </div>
            <div>Claim Now</div>
          </div>
          <div className="Redeamlistboxes">
            <div>
              Login your account and Get your Reward of Rs 500 will Credit your
              Wallet
            </div>
            <div>Claim Now</div>
          </div>
          <div className="Redeamlistboxes">
            <div>
              Login your account and Get your Reward of Rs 500 will Credit your
              Wallet
            </div>
            <div>Claim Now</div>
          </div>
          <div className="Redeamlistboxes">
            <div>
              Login your account and Get your Reward of Rs 500 will Credit your
              Wallet
            </div>
            <div>Claim Now</div>
          </div>
        </div>
        <div style={{ width: "25%" }}>
          <div className="Redeamlistboxes1">
            <div className="flexofredeamname">
              <span>
                <img
                  src={imgdot}
                  style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "1vw",
                  }}
                  alt=""
                />
              </span>{" "}
              Login Succesfully
            </div>
            <div className="flexofredeamname">
              <span>
                <img
                  src={imgdot}
                  style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "1vw",
                  }}
                  alt=""
                />
              </span>{" "}
              Create a 1st Post
            </div>
            <div className="flexofredeamname">
              <span>
                <img
                  src={imgdot}
                  style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "1vw",
                  }}
                  alt=""
                />
              </span>{" "}
              Bid a 1st Job
            </div>
            <div className="flexofredeamname">
              <span>
                <img
                  src={imgdot1}
                  style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "1vw",
                  }}
                  alt=""
                />
              </span>{" "}
              Create a 25th Job
            </div>
            <div className="flexofredeamname">
              <span>
                <img
                  src={imgdot1}
                  style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "1vw",
                  }}
                  alt=""
                />
              </span>{" "}
              Bid a 25th Job
            </div>
            <div className="flexofredeamname">
              <span>
                <img
                  src={imgdot1}
                  style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "1vw",
                  }}
                  alt=""
                />
              </span>{" "}
              Refer your Friend
            </div>
            <div className="flexofredeamtag flexofredeamname">
              <span>
                <img style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "0.51vw",
                  }} src={imgdot} alt="" />
              </span>{" "}
              complete
            </div>
            <div className="flexofredeamtag flexofredeamname">
              <span>
                <img style={{
                    width: "0.7vw",
                    objectFit: "contain",
                    margin: "0.51vw",
                  }} src={imgdot1} alt="" />
              </span>{" "}
              In complete
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "1vw" }} className="profiledetailstitle">
        Transaction List
      </div>
      <div className="navoftableblogs">
        <div style={{ width: "15vw" }}>Transaction Via</div>
        <div style={{ width: "15vw" }}>Transaction id</div>
        <div style={{ width: "12vw" }}>Type</div>
        <div style={{ width: "12vw" }}>Date </div>
        <div style={{ width: "12vw" }}>Amount</div>
        <div style={{ width: "15vw" }}>Status</div>
      </div>
      <div className="navoftableblogsdata">
        <div style={{ width: "15vw" }}>Paytm</div>
        <div style={{ width: "15vw" }}>#341831</div>
        <div style={{ width: "12vw" }}>Credited</div>

        <div style={{ width: "12vw" }}>10/12/2022</div>
        <div style={{ width: "12vw" }}>$200</div>
        <div style={{ width: "15vw", color: "#41B541", fontWeight: "500" }}>
          Completed
        </div>
      </div>
      <div className="navoftableblogsdata">
        <div style={{ width: "15vw" }}>Paytm</div>
        <div style={{ width: "15vw" }}>#341831</div>
        <div style={{ width: "12vw" }}>Credited</div>

        <div style={{ width: "12vw" }}>10/12/2022</div>
        <div style={{ width: "12vw" }}>$200</div>
        <div style={{ width: "15vw", color: "#41B541", fontWeight: "500" }}>
          Completed
        </div>
      </div>
      <div className="navoftableblogsdata">
        <div style={{ width: "15vw" }}>Paytm</div>
        <div style={{ width: "15vw" }}>#341831</div>
        <div style={{ width: "12vw" }}>Credited</div>

        <div style={{ width: "12vw" }}>10/12/2022</div>
        <div style={{ width: "12vw" }}>$200</div>
        <div style={{ width: "15vw", color: "#41B541", fontWeight: "500" }}>
          Completed
        </div>
      </div>
      <div className="navoftableblogsdata">
        <div style={{ width: "15vw" }}>Paytm</div>
        <div style={{ width: "15vw" }}>#341831</div>
        <div style={{ width: "12vw" }}>Credited</div>

        <div style={{ width: "12vw" }}>10/12/2022</div>
        <div style={{ width: "12vw" }}>$200</div>
        <div style={{ width: "15vw", color: "#41B541", fontWeight: "500" }}>
          Completed
        </div>
      </div>

      <div style={{ marginLeft: "36vw" }} className="loadmorebutton">
        <button>Load More</button>
      </div>

      <div>
        <div
          style={{ margin: "auto", marginBottom: "5vw", marginTop: "3vw" }}
          className="cafaqcontainer"
        >
          <div className="catefaqhead">FAQS</div>
          <div className="catefaqheadname">Frequently asked questions</div>
          <div className="catefaqheadhaveq">
            Have questioners? we're here to help
          </div>
          <div className="catesearchboxfaq">
            <span>
              <SearchIcon style={{ margin: "0vw 0.81vw", fontSize: "1.7vw" }} />
            </span>
            <input type="text" />
          </div>

          <div style={{ marginTop: "1vw" }} className="profiledetailstitle">
            Digital Wallet
          </div>
          <Catelogfaqquestion />

          <Catelogfaqquestion />
          <Catelogfaqquestion />
          <Catelogfaqquestion />
          <div style={{ marginTop: "1vw" }} className="profiledetailstitle">
            Redeem through Shopping
          </div>
          <Catelogfaqquestion />

          <Catelogfaqquestion />
          <Catelogfaqquestion />
          <Catelogfaqquestion />
          <div style={{ marginTop: "1vw" }} className="profiledetailstitle">
            Redeem Cash
          </div>
          <Catelogfaqquestion />
          <Catelogfaqquestion />
          <Catelogfaqquestion />
        </div>
      </div>
    </div>
  );
}

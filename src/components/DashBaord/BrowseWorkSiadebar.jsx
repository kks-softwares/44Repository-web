import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import imgx from "../../assets/Landing page/svgviewer-png-output (3).png";
import img from "../../assets/walletimage/Activity.svg";
import img1 from "../../assets/Dashboard/Iconly-Light-outline-Bookmark.svg";
import img2 from "../../assets/Dashboard/Iconly-Light-outline-Buy.svg";
import img3 from "../../assets/Dashboard/Iconly-Light-outline-Chart.svg";
import img4 from "../../assets/Dashboard/Iconly-Light-outline-Document.svg";
import img5 from "../../assets/Dashboard/Iconly-Light-outline-Paper Plus.svg";
import img6 from "../../assets/Dashboard/Iconly-Light-outline-Paper-1.svg";
import img7 from "../../assets/Dashboard/Iconly-Light-outline-Paper.svg";
import img8 from "../../assets/Dashboard/Iconly-Light-outline-Setting.svg";
import img9 from "../../assets/Dashboard/Iconly-Light-outline-Work.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
export default function BrowseWorkSiadebar({ toggleDrawer, width }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? "simple-popover" : undefined;

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? "simple-popover" : undefined;

  const [anchorElx, setAnchorElx] = React.useState(null);
  const handleClickx = (event) => {
    setAnchorElx(event.currentTarget);
  };
  const handleClosex = () => {
    setAnchorElx(null);
  };
  const openx = Boolean(anchorElx);
  const idx = openx ? "simple-popover" : undefined;

  const [anchorElxx, setAnchorElxx] = React.useState(null);
  const handleClickxx = (event) => {
    setAnchorElxx(event.currentTarget);
  };
  const handleClosexx = () => {
    setAnchorElxx(null);
  };
  const openxx = Boolean(anchorElxx);
  const idxx = openxx ? "simple-popover" : undefined;

  const navigate = useNavigate();

  const location = useLocation();

  const [colorsidebar, setColorsidebar] = useState(1);

  useEffect(() => {
    if (location.pathname === "/dashbaord") {
      setColorsidebar(1);
    }
    if (location.pathname === "/dashbaord/createWork") {
      setColorsidebar(2);
    }
    if (location.pathname === "/dashbaord/addcreatework") {
      setColorsidebar(2);
    }
    if (location.pathname === "/dashbaord/addApplyWork") {
      setColorsidebar(3);
    }
    if (location.pathname === "/dashbaord/applyWork") {
      setColorsidebar(3);
    }

    if (location.pathname === "/dashbaord/blog") {
      setColorsidebar(4);
    }
    if (location.pathname === "/dashbaord/blogs") {
      setColorsidebar(4);
    }
    if (location.pathname === "/dashbaord/addblog") {
      setColorsidebar(4);
    }
    if (location.pathname === "/dashbaord/explore_skill") {
      setColorsidebar(5);
    }
    if (location.pathname === "/dashbaord/examination") {
      setColorsidebar(5);
    }
    if (location.pathname === "/dashbaord/shop") {
      setColorsidebar(6);
    }

    if (location.pathname === "/dashbaord/addrefrences") {
      setColorsidebar(7);
    }
    if (location.pathname === "/dashbaord/refrences") {
      setColorsidebar(7);
    }
    if (location.pathname === "/dashbaord/filemanager") {
      setColorsidebar(8);
    }
    if (location.pathname === "/dashbaord/setting") {
      setColorsidebar(9);
    }

    if (location.pathname === "/dashbaord/faq") {
      setColorsidebar(10);
    }
  }, [location]);

  return (
    <div
      style={{ position: "sticky", width: width > 700 ? "" : "100%" }}
      className="sidebardashbord-container"
    >
      {width <= 700 && (
        <div style={{ width: "50vw" }} className="navlofogo">
          <img
            style={{
              width: "40vw",
              position: "relative",
              left: "3vw",
              bottom: "2vw",
            }}
            onClick={() => navigate("/dashbaord")}
            src={imgx}
            alt="error"
          />
        </div>
      )}
      <Link to="/dashbaord/postwork">
        {" "}
        <div
          className={
            colorsidebar === 1 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
          onClick={width <= 700 && toggleDrawer("left", false)}
        >
          <img
            style={{
              width: width > 700 ? "1.8vw" : "5.5vw",
              margin: width > 700 ? "" : "0vw 2.3vw",
            }}
            src={img}
            alt=""
          />
          Dashboard
        </div>
      </Link>

      <div
        onClick={handleClick1}
        className={
          colorsidebar === 2 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
        <img src={img9} alt="" />
        Create Work
      </div>

      <Popover
        id={id1}
        open={open1}
        anchorEl={anchorEl1}
        onClose={handleClose1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{
            p: 1,
            pr: 2,
            pb: width > 700 ? 1.5 : 1,
            fontSize: width > 700 ? "1.1vw" : "1.5vw",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/dashbaord/addcreatework");
            handleClose1();
          }}
        >
          {" "}
          <span onClick={width <= 700 && toggleDrawer("left", false)}>
            <AddIcon
              style={{
                paddingRight: width > 700 ? "1vw" : "2vw",
                width: width > 700 ? "2.5vw" : "7vw",
              }}
              src={img7}
              alt=""
            />
            Add Create Work{" "}
          </span>
        </Typography>
        <Typography
          onClick={() => {
            navigate("/dashbaord/createWork");
            handleClose1();
          }}
          sx={{
            p: 1,
            pr: 2,
            pb: width > 700 ? 1.5 : 1,
            fontSize: width > 700 ? "1.1vw" : "1.5vw",
            cursor: "pointer",
          }}
        >
          {" "}
          <span onClick={width <= 700 && toggleDrawer("left", false)}>
            <img
              style={{
                paddingRight: width > 700 ? "1vw" : "2vw",
                width: width > 700 ? "2.5vw" : "7vw",
              }}
              src={img7}
              alt=""
            />
            List of Create Work{" "}
          </span>
        </Typography>
      </Popover>

      <div
        onClick={handleClick2}
        className={
          colorsidebar === 3 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
        <img src={img1} alt="" />
        Applied Jobs
      </div>

      <Popover
        id={id2}
        open={open2}
        anchorEl={anchorEl2}
        onClose={handleClose2}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{
            p: 1,
            pr: 2,
            pb: width > 700 ? 1.5 : 1,
            fontSize: width > 700 ? "1.1vw" : "1.5vw",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/dashbaord/addApplyWork");
            handleClose2();
          }}
        >
          {" "}
          <span onClick={width <= 700 && toggleDrawer("left", false)}>
            <AddIcon
              style={{
                paddingRight: width > 700 ? "1vw" : "2vw",
                width: width > 700 ? "2.5vw" : "7vw",
              }}
              src={img7}
              alt=""
            />
            Apply Work{" "}
          </span>
        </Typography>
        <Typography
          onClick={() => {
            navigate("/dashbaord/applyWork");
            handleClose2();
          }}
          sx={{
            p: 1,
            pr: 2,
            pb: width > 700 ? 1.5 : 1,
            fontSize: width > 700 ? "1.1vw" : "1.5vw",
            cursor: "pointer",
          }}
        >
          {" "}
          <span onClick={width <= 700 && toggleDrawer("left", false)}>
            <img
              style={{
                paddingRight: width > 700 ? "1vw" : "2vw",
                width: width > 700 ? "2.5vw" : "7vw",
              }}
              src={img7}
              alt=""
            />
            List of Apply Work{" "}
          </span>
        </Typography>
      </Popover>

      <div
        onClick={handleClick}
        className={
          colorsidebar === 4 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
        <img src={img7} alt="" />
        Blog
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{
            p: 1,
            pr: 2,
            pb: width > 700 ? 1.5 : 1,
            fontSize: width > 700 ? "1.1vw" : "1.5vw",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/dashbaord/addblog");
            handleClose();
          }}
        >
          {" "}
          <span onClick={width <= 700 && toggleDrawer("left", false)}>
            <AddIcon
              style={{
                paddingRight: width > 700 ? "1vw" : "2vw",
                width: width > 700 ? "2.5vw" : "7vw",
              }}
              src={img7}
              alt=""
            />
            Add Blogs{" "}
          </span>
        </Typography>
        <Typography
          onClick={() => {
            navigate("/dashbaord/blog");
            handleClose();
          }}
          sx={{
            p: 1,
            pr: 2,
            pb: width > 700 ? 1.5 : 1,
            fontSize: width > 700 ? "1.1vw" : "1.5vw",
            cursor: "pointer",
          }}
        >
          {" "}
          <span onClick={width <= 700 && toggleDrawer("left", false)}>
            <img
              style={{
                paddingRight: width > 700 ? "1vw" : "2vw",
                width: width > 700 ? "2.5vw" : "7vw",
              }}
              src={img7}
              alt=""
            />
            List of Blogs{" "}
          </span>
        </Typography>
      </Popover>

      <div
        onClick={handleClickxx}
        className={
          colorsidebar === 5 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
        <img src={img4} alt="" />
        Skill Center
      </div>

      <Popover
        id={idxx}
        open={openxx}
        anchorEl={anchorElxx}
        onClose={handleClosexx}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{
            p: 1,
            pr: 2,
            pb: width > 700 ? 1.5 : 1,
            fontSize: width > 700 ? "1.1vw" : "1.5vw",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/dashbaord/explore_skill");
            handleClosexx();
          }}
        >
          {" "}
          <span onClick={width <= 700 && toggleDrawer("left", false)}>
            <AddIcon
              style={{
                paddingRight: width > 700 ? "1vw" : "2vw",
                width: width > 700 ? "2.5vw" : "7vw",
              }}
              src={img7}
              alt=""
            />
            Explore skill{" "}
          </span>
        </Typography>

        <Typography
          onClick={() => {
            navigate("/dashbaord/examination");
            handleClosexx();
          }}
          sx={{
            p: 1,
            pr: 2,
            pb: width > 700 ? 1.5 : 1,
            fontSize: width > 700 ? "1.1vw" : "1.5vw",
            cursor: "pointer",
          }}
        >
          <span onClick={width <= 700 && toggleDrawer("left", false)}>
            <img
              style={{
                paddingRight: width > 700 ? "1vw" : "2vw",
                width: width > 700 ? "2.5vw" : "7vw",
              }}
              src={img7}
              alt=""
            />
            Examination Certifications{" "}
          </span>
        </Typography>
      </Popover>

      <Link to="/dashbaord/shop">
        <div
          className={
            colorsidebar === 6 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
          onClick={width <= 700 && toggleDrawer("left", false)}
        >
          <img src={img2} alt="" />
          Shop & Redeem
        </div>
      </Link>

      <div
        onClick={handleClickx}
        className={
          colorsidebar === 7 ? "firstsidebarmenu1" : "firstsidebarmenu"
        }
      >
        <img src={img6} alt="" />
        References
      </div>

      <Popover
        id={idx}
        open={openx}
        anchorEl={anchorElx}
        onClose={handleClosex}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{
            p: 1,
            pr: 2,
            pb: width > 700 ? 1.5 : 1,
            fontSize: width > 700 ? "1.1vw" : "1.5vw",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/dashbaord/addrefrences");
            handleClosex();
          }}
        >
          <span onClick={width <= 700 && toggleDrawer("left", false)}>
            <AddIcon
              style={{
                paddingRight: width > 700 ? "1vw" : "2vw",
                width: width > 700 ? "2.5vw" : "6vw",
              }}
              src={img7}
              alt=""
            />
            Add Reference
          </span>
        </Typography>
        <Typography
          onClick={() => {
            navigate("/dashbaord/refrences");
            handleClosex();
          }}
          sx={{
            p: 1,
            pr: 2,
            pb: width > 700 ? 1.5 : 1,
            fontSize: width > 700 ? "1.1vw" : "1.5vw",
            cursor: "pointer",
          }}
        >
          <span onClick={width <= 700 && toggleDrawer("left", false)}>
            <img
              style={{
                paddingRight: width > 700 ? "1vw" : "2vw",
                width: width > 700 ? "2.5vw" : "7vw",
              }}
              src={img7}
              alt=""
            />
            Reference List
          </span>
        </Typography>
      </Popover>

      <Link to="/dashbaord/filemanager">
        <div
          className={
            colorsidebar === 8 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
          onClick={width <= 700 && toggleDrawer("left", false)}
        >
          <img src={img5} alt="" />
          File Manager
        </div>
      </Link>
      <Link to="/dashbaord/setting">
        <div
          className={
            colorsidebar === 9 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
          onClick={width <= 700 && toggleDrawer("left", false)}
        >
          <img src={img8} alt="" />
          Settings
        </div>
      </Link>

      <Link to="/dashbaord/faq">
        <div
          className={
            colorsidebar === 10 ? "firstsidebarmenu1" : "firstsidebarmenu"
          }
          onClick={width <= 700 && toggleDrawer("left", false)}
        >
          <img src={img3} alt="" />
          FAQ
        </div>
      </Link>
    </div>
  );
}

import React, { useState } from "react";
import "./DashBoard.css";
import { Dropdown } from "react-bootstrap";
import img from "../../assets/Landing page/svgviewer-png-output (3).png";
import img4 from "../../assets/My profile – 28/pexels-stefan-stefancik-91227.png";
import img5 from "../../assets/My profile – 28/Iconly-Light-outline-Notification.svg";
import img6 from "../../assets/Web-dashboard/Iconly-Light-Message.svg";
import { useNavigate } from "react-router";
import "../../components/Profilecomp/profile.css";
import Popover from "@mui/material/Popover";
import { useDispatch } from "react-redux";
import UserIcon from "../../assets/icons/user.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import LogoutIcon from "../../assets/icons/log-out.svg";
import { userActions } from "../../store/userSlice";
import { Link } from "react-router-dom";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import BrowseWorkSiadebar from "./BrowseWorkSiadebar";
export default function DashbaordNav({ user, width }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function logoutUser() {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    window.location.pathname = "/";
    dispatch(userActions.removeUser());
  }

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : "57vw" }}
      onKeyDown={toggleDrawer(anchor, false)}
      role="presentation"
    >
      <BrowseWorkSiadebar width={width} toggleDrawer={toggleDrawer} />
    </Box>
  );

  return (
    <div className="pnav-container">
      <div style={{ display: width > 700 ? "" : "flex" }} className="navlofogo">
        {width <= 700 && (
          <span onClick={toggleDrawer("left", true)}>
            <ListOutlinedIcon
              style={{
                fontSize: "8vw",
                marginRight: "0.51vw",
                position: "relative",
                top: "0.2vw",
                right: "1vw",
              }}
            />
          </span>
        )}
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
        {width > 700 && (
          <img onClick={() => navigate("/dashbaord")} src={img} alt="error" />
        )}
      </div>
      <div className="pnav-container2">
        {width > 700 ? (
          <div
            onClick={() => {
              navigate("/dashbaord/wallet");
            }}
            className="digitalwallate"
          >
            Digital Wallet
            <span>$1200</span>
          </div>
        ) : (
          <div
            onClick={() => {
              navigate("/dashbaord/wallet");
            }}
            className="digitalwallate"
          >
            <span>
              {" "}
              <AccountBalanceWalletOutlinedIcon
                style={{ fontSize: "6vw", marginRight: "1vw" }}
              />
              $1200
            </span>
          </div>
        )}
        <div
          onClick={() => {
            navigate("/dashbaord/messages");
          }}
          className="settinsiconpnav"
        >
          <img
            src={img6}
            style={{
              fontSize: "2vw",
              width: width > 700 ? "2vw" : "6vw",
              objectFit: "contain",
              cursor: "pointer",
            }}
            alt=""
          />{" "}
        </div>
        <div onClick={handleClick} className="settinsiconpnav">
          <img
            src={img5}
            style={{
              fontSize: "2vw",
              width: width > 700 ? "2vw" : "6vw",
              objectFit: "contain",
              cursor: "pointer",
            }}
            alt=""
          />{" "}
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <div className="notificationpopup">
            <div className="notificationpopuptitile">
              <div className="notification-title">Notifications</div>
              <div className="notificationmarkallread">Mark all read</div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: "36vw" }}>
                <div className="notificationname">
                  Your bid was created Succesfull
                </div>
                <div className="notificationnamevalue">
                  Here is some tips to "Getting standard with substance"{" "}
                </div>
              </div>
              <div className="notificationtime" style={{ width: "10vw" }}>
                about 3 hours ago
              </div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: "36vw" }}>
                <div className="notificationname">You have 1 new message </div>
                <div className="notificationnamevalue">
                  What is your basic budget ?{" "}
                </div>
              </div>
              <div className="notificationtime" style={{ width: "10vw" }}>
                about 6 hours ago
              </div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: "36vw" }}>
                <div className="notificationname">
                  Your bid was created Succesfull
                </div>
                <div className="notificationnamevalue">
                  Here is some tips to "Getting standard with substance"{" "}
                </div>
              </div>
              <div className="notificationtime" style={{ width: "10vw" }}>
                about 3 hours ago
              </div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: "36vw" }}>
                <div className="notificationname">You have 1 new message </div>
                <div className="notificationnamevalue">
                  What is your basic budget ?{" "}
                </div>
              </div>
              <div className="notificationtime" style={{ width: "10vw" }}>
                about 6 hours ago
              </div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: "36vw" }}>
                <div className="notificationname">
                  Your bid was created Succesfull
                </div>
                <div className="notificationnamevalue">
                  Here is some tips to "Getting standard with substance"{" "}
                </div>
              </div>
              <div className="notificationtime" style={{ width: "10vw" }}>
                about 3 hours ago
              </div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: "36vw" }}>
                <div className="notificationname">You have 1 new message </div>
                <div className="notificationnamevalue">
                  What is your basic budget ?{" "}
                </div>
              </div>
              <div className="notificationtime" style={{ width: "10vw" }}>
                about 6 hours ago
              </div>
            </div>

            <div
              onClick={() => {
                handleClose();
                navigate("/notification");
              }}
              className="seeallnotification"
            >
              See all Notification{" "}
            </div>
          </div>
        </Popover>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/profile")}
          className="profileDropdown"
        >
          {width > 700 ? (
            <div className="settinsiconpnav pnavusername">
              <div
                style={{ overflow: "hidden", display: "flex" }}
                className="pnav-name"
              >
                {user?.fullName?.length > 11
                  ? user?.fullName?.slice(0, 11)
                  : user?.fullName}
              </div>
              <div className="pnavuserimage">
                <img src={user?.media ? user?.media : img4} alt="" />
              </div>
            </div>
          ) : (
            <div style={{ width: "8vw", height: "4vw", marginTop: "" }}>
              <div
                style={{
                  width: "8vw",
                  height: "8vw",
                  position: "relative",
                  bottom: "2vw",
                }}
                className="pnavuserimage"
              >
                <img
                  style={{
                    width: "8vw",
                    height: "8vw",
                    borderRadius: "50%",

                    border: "2px solid #064C87",
                  }}
                  src={user?.media ? user?.media : img4}
                  alt=""
                />
              </div>
            </div>
          )}{" "}
        </div>
      </div>
    </div>
  );
}

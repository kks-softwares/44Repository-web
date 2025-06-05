import React from "react";
import img from "../../assets/Landing page/svgviewer-png-output (3).png";
import img4 from "../../assets/My profile – 28/pexels-stefan-stefancik-91227.png";
import img5 from "../../assets/My profile – 28/Iconly-Light-outline-Notification.svg";
import img6 from "../../assets/My profile – 28/Iconly-Light-outline-Setting.svg";
import { useNavigate } from "react-router";
import "./profile.css";
import { Dropdown } from "react-bootstrap";
import Popover from "@mui/material/Popover";
import { useDispatch } from "react-redux";
import UserIcon from "../../assets/icons/user.svg";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LogoutIcon from "../../assets/icons/log-out.svg";
import { userActions } from "../../store/userSlice";
import { Link } from "react-router-dom";

export default function Profilenav({ user, width }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logoutUser() {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    window.location.pathname = "/";
    dispatch(userActions.removeUser());
  }

  return (
    <div className="pnav-container">
      <div
        className="navlofogo"
        onClick={() => navigate("/")}
      >
        <img src={img} alt="" />
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
        <div className="settinsiconpnav">
          <img
          onClick={() => {
            navigate("dashbaord/setting");
          }}
            src={img6}
            style={{
              fontSize: width > 700 ? "2vw" : "6vw",
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
              fontSize: width > 700 ? "2vw" : "6vw",
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
              <div style={{ width: width > 700 ? "36vw" : "50vw" }}>
                <div className="notificationname">
                  Your bid was created Succesfull
                </div>
                <div className="notificationnamevalue">
                  Here is some tips to "Getting standard with substance"{" "}
                </div>
              </div>
              <div
                className="notificationtime"
                style={{ width: width > 700 ? "10vw" : "20vw" }}
              >
                about 3 hours ago
              </div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: width > 700 ? "36vw" : "55vw" }}>
                <div className="notificationname">You have 1 new message </div>
                <div className="notificationnamevalue">
                  What is your basic budget ?{" "}
                </div>
              </div>
              <div
                className="notificationtime"
                style={{ width: width > 700 ? "10vw" : "20vw" }}
              >
                about 6 hours ago
              </div>
            </div>

            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: width > 700 ? "36vw" : "50vw" }}>
                <div className="notificationname">
                  Your bid was created Succesfull
                </div>
                <div className="notificationnamevalue">
                  Here is some tips to "Getting standard with substance"{" "}
                </div>
              </div>
              <div
                className="notificationtime"
                style={{ width: width > 700 ? "10vw" : "20vw" }}
              >
                about 3 hours ago
              </div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: width > 700 ? "36vw" : "55vw" }}>
                <div className="notificationname">You have 1 new message </div>
                <div className="notificationnamevalue">
                  What is your basic budget ?{" "}
                </div>
              </div>
              <div
                className="notificationtime"
                style={{ width: width > 700 ? "10vw" : "20vw" }}
              >
                about 6 hours ago
              </div>
            </div>

            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: width > 700 ? "36vw" : "50vw" }}>
                <div className="notificationname">
                  Your bid was created Succesfull
                </div>
                <div className="notificationnamevalue">
                  Here is some tips to "Getting standard with substance"{" "}
                </div>
              </div>
              <div
                className="notificationtime"
                style={{ width: width > 700 ? "10vw" : "20vw" }}
              >
                about 3 hours ago
              </div>
            </div>
            <div className="notification-entriesbox">
              <div className="notificationentrieslogo">
                <img src={img4} alt="" />
              </div>
              <div style={{ width: width > 700 ? "36vw" : "55vw" }}>
                <div className="notificationname">You have 1 new message </div>
                <div className="notificationnamevalue">
                  What is your basic budget ?{" "}
                </div>
              </div>
              <div
                className="notificationtime"
                style={{ width: width > 700 ? "10vw" : "20vw" }}
              >
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

        <div className="profileDropdown">
          <Dropdown className="d-flex justify-content-center mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
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
            </Dropdown.Toggle>
            <Dropdown.Menu
              className={width>700 ? "p-2 px-3 extradropdownmwnu" : "p-2 px-3 my-1"}
            >
              <div className="py-1 px-1 d-flex align-items-center">
                <Link to={`/dashbaord/postwork`}>
                  <img src={UserIcon} className="mx-1" alt="user" />{" "}
                  <span className="profileDropdownMenu mx-2">Dashboard </span>
                </Link>
              </div>
             
              <div
                className="py-2 px-1 d-flex align-items-center cusror-pointer"
                onClick={() => logoutUser()}
              >
                <img src={LogoutIcon} className="mx-1" alt="logout" />{" "}
                <span className="profileDropdownMenu mx-2">Logout</span>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

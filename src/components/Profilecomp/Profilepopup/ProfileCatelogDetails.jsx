import React from "react";
import "../profile.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { LockClockOutlined } from "@mui/icons-material";
import StarRatings from "react-star-ratings";
import img2 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import edit_logo from "../../../assets/My profile – 28/edit_logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";
import API_HOST from "../../../env";
import img46 from "../../../assets/My profile – 28/Landing page – 19.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};

export default function ProfileCatelogdetails({
  width,
  catalogue,
  setAllCatalogs,
}) {
  const navigate = useNavigate();
  const { user, loggedInStatus } = useSelector((state) => state.user);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleltecatalogue = () => {
    axios
      .post(`${API_HOST}/catalouge/removeCatalouge`, {
        catalogueId: catalogue?.catalogueId,
      })
      .then((res) => {
        axios
          .get(
            `${API_HOST}/catalouge/viewCatalouge?pageSize=8&pageNumber=1&userId=${user?.userId}`
          )
          .then((res) => {
            setAllCatalogs(res.data.success.data);
            handleClose();
          });
      });
  };

  // console.log("user", user);

  return (
    <div>
      <div className="pcatelogbox">
        <div
          style={{
            background: `url('${catalogue?.files[0]?.file ? catalogue?.files[0]?.file : img46
              }') center center / cover no-repeat`,
          }}
          className="pcatelogimg"
        >
          <div className="pcatelogimg2">
            <div className="porfolioprofilemenu">
              <RemoveRedEyeIcon
                // onClick={() => navigate(`/dashbaord/blog/${data?.contentId}`)}
                onClick={() => navigate(`/catalogue/${catalogue?.catalogueId}`)}
                style={{
                  margin: "0 0.5vw",
                  width: width > 700 ? "3vw " : "9vw",
                  height: width > 700 ? "3vw " : "9vw",
                  borderRadius: "50%",
                  cursor: "pointer",
                  objectFit: "cover",
                  backgroundColor: "white",
                  padding: "3px",
                }}
              />
            </div>
            <div className="porfolioprofilemenu">
              <Link to={`/updatecatalogue/${catalogue?.catalogueId}`}>
                <img src={edit_logo} alt="" />
              </Link>
            </div>
            <div onClick={handleOpen} className="porfolioprofilemenu">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "1vw" }} className="pcatelogperson">
          <div className="pcatelogpersonimg">
            <img src={catalogue?.u_id?.media} alt="" />
          </div>
          <div className="pcatelogpersonname">
            <div className="pcatelogpersonname1">{catalogue?.u_id?.fullName}</div>
          </div>
        </div>
        <div className="pcatelog-title">
          {catalogue?.catalougeTitle.slice(0, 35)}
        </div>
        <hr style={{ padding: "0vw", margin: "0.3vw" }} />
        <div className="pcatelogdate">
          <div>
            <span>
              <LockClockOutlined style={{ fontSize: "1vw" }} />
            </span>
            {catalogue?.deliveryDate} Days Delivery
          </div>
          <div>
            Starting At <span style={{marginLeft:'1vw'}}>$</span><span>{catalogue?.servicePrice1 ? catalogue?.servicePrice1 : "---"}</span>
          </div>
        </div>
        <div className="pcatelogperson">
          <div className="pcatelogpersonRatings">
            <span hidden
              style={{
                position: "relative",
                bottom: "0.15vw",
                right: "0.2vw",
              }}
            >
              <StarRatings
                rating={1}
                starDimension={width > 700 ? "1.2vw" : "3vw"}
                starSpacing={width > 700 ? "0.15vw" : "1vw"}
                numberOfStars={1}
                starRatedColor="#064C87"
              />
            </span>
            {/* 4.4 (512) */}
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style : style1}>
          <div className="profiletitleandmenunav">
            <div className="profiledetailstitle"> Delete Catalogue</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClose}
                  style={{ fontSize: width > 700 ? "1.5vw" : "4vw" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#00000090" }} />
          <div
            style={{
              color: "gray",
              fontSize: width > 700 ? "1vw" : "2.7vw",
              fontWeight: "300",
            }}
            className="profiledetailstitle"
          >
            The action will delete "UX/UI Designer" From all of your profiles.
          </div>
          <div
            style={{
              color: "gray",
              fontSize: width > 700 ? "1vw" : "2.7vw",
              fontWeight: "400",
              marginBottom: "5vw",
            }}
            className="profiledetailstitle"
          >
            Are you sure you want to delete this Catalogue?
          </div>
          <hr style={{ color: "#00000090" }} />
          <div style={{ marginTop: "0.31vw" }} className="handlemoreaboutskill">
            <div
              style={{
                background: "white",
                color: "black",
                cursor: "pointer",
              }}
              className="handlecirclieaboutsave"
              onClick={handleClose}
            >
              Cancel
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="handlecirclieaboutsave"
              onClick={deleltecatalogue}
            >
              Delete
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

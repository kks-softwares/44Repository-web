import React from "react";
import "../profile.css";
import img2 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import edit_logo from "../../../assets/My profile – 28/edit_logo.svg";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

import CloseIcon from "@mui/icons-material/Close";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import img46 from "../../../assets/My profile – 28/Landing page – 19.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API_HOST from "../../../env";
import { useSelector } from "react-redux";
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

export default function ProfilePortfoliodetails({
  width,
  portfolio,
  setAllprotfoilio,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user, loggedInStatus } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const deleltecatalogue = () => {
    axios
      .post(`${API_HOST}/portfolio/removeProjectPortfolio`, {
        projectPortfolioId: portfolio?.projectPortfolioId,
      })
      .then((res) => {
        axios
          .get(
            `${API_HOST}/portfolio/viewProjectPortfolio?pageSize=8&pageNumber=1&userId=${user?.userId}`
          )
          .then((res) => {
            setAllprotfoilio(res.data.success.data);
            handleClose();
          });
      });
  };

  return (
    <div>
      <div className="pportfoliocard">
        <div
          style={{
            background: `url('${
              portfolio?.icon ? portfolio?.icon : img46
            }') center center / cover no-repeat`,
          }}
          className="pportimg"
        >
          <div className="pportimg2">
            <div className="porfolioprofilemenu">
              <RemoveRedEyeIcon
                // onClick={() => navigate(`/dashbaord/blog/${data?.contentId}`)}
                onClick={() =>
                  navigate(`/portfolio/${portfolio?.projectPortfolioId}`)
                }
                style={{
                  margin: "0 0.5vw",
                  width: width > 700 ? "3vw " : "9vw",
                  height: width > 700 ? "3vw " : "9vw",
                  borderRadius: "50%",
                  cursor: "pointer",
                  objectFit: "cover",
                  backgroundColor: "white",
                  padding: "4px",
                }}
              />
            </div>
            <Link to={`/updateportfolio/${portfolio?.projectPortfolioId}`}>
              <div className="porfolioprofilemenu">
                <img src={edit_logo} alt="" />
              </div>
            </Link>
            <div onClick={handleOpen} className="porfolioprofilemenu">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div className="pportfoliotext">{portfolio?.projectTitle}</div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style : style1}>
          <div className="profiletitleandmenunav">
            <div className="profiledetailstitle"> Delete Portfolio</div>
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
            Are you sure you want to delete this Portfolio?
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

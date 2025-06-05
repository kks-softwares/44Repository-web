import React from "react";
import axios from "axios";
import { userActions } from "../../../store/userSlice";
import API_HOST from "../../../env";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { DeleteOutlineOutlined } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
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
const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.91vw",
    color: "#263238",
    border: "yellow !important",
  },
}));
export default function ProfileCerticateDetails({ certificate, width }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleeducationdelete = () => {
    const data = {
      userId: user?.userId,
      _id: certificate?._id,
    };
    axios.post(`${API_HOST}/users/removeCertificates`, data).then((res) => {
      axios
        .get(`${API_HOST}/users/viewUser?userName=${user?.userName}`)
        .then((res) => {
          window.localStorage.setItem(
            "user",
            JSON.stringify({ ...res.data.success.data })
          );
          dispatch(
            userActions.setUser({
              user: { ...res.data.success.data },
            })
          );
          handleClose();
        });
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div>
          <a href={certificate?.verifiedUrl} target="_blank">
            <div className="pusercertificatebox">
              <div className="pusercertificateboximg">
                <img src={certificate?.images} alt="" />
              </div>
              <div className="pusercertificateboxtext">
                <div className="pusercertificateboxtexthead">
                  {certificate?.certificateName}
                </div>

                <div className="pusercertificateboxtexthead1">
                  Provider: {certificate?.organization}
                </div>
                <div className="pusercertificateboxtexthead3">
                  Issued on {certificate?.issueMonth} {certificate?.issueYear} -{" "}
                  {certificate?.doesNotExpire
                    ? "present"
                    : certificate?.expiredMonth +
                      " " +
                      certificate?.expiredYear}
                </div>
              </div>
            </div>
          </a>
        </div>

        <div style={{ display: "flex", width: "5vw" }}>
          <DeleteOutlineOutlined
            onClick={handleOpen}
            style={{
              cursor: "pointer",
              fontSize: width > 700 ? "1.7vw" : "4vw",
              color: "gray",
              margin: "0 0.61vw",
            }}
          />
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={width > 700 ? style : style1}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Delete Certification</div>
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
              The action will delete " {certificate?.certificateName}" From all
              of your profiles.
            </div>
            <div
              style={{
                color: "gray",
                fontSize: width > 700 ? "1vw" : "2.5vw",
                fontWeight: "400",
                marginBottom: "5vw",
              }}
              className="profiledetailstitle"
            >
              Are you sure you want to delete this education?
            </div>
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
                onClick={handleClose}
              >
                Cancel
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={handleeducationdelete}
                className="handlecirclieaboutsave"
              >
                Delete
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <hr
        style={{
          width: "80vw",
          margin: "1vw 0vw",
          marginBottom: "1vw",
          color: "#00000090",
        }}
      />
    </>
  );
}

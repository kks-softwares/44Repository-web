import React, { useState } from "react";
import img from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import img1 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Delete.svg";
import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import API_HOST from "../../../env";
import { useSelector } from "react-redux";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
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
    p: 2,
  };
  

const styl3 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "91vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};
export default function DocumentCardauth({
  setAuthenticateDocument,
  setEditDocuments,
  data,
  width,
  setArrayofdocumentdetail,
}) {
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);

  const [imagesave, setImagesave] = useState();
  const { user } = useSelector((state) => state.user);
  const handleDelete = () => {
    axios
      .post(`${API_HOST}/users/removeDocument`, {
        documentId: data?.documentId,
      })
      .then((res) => {
        axios
          .get(
            `${API_HOST}/users/viewDocument?pageSize=1000&pageNumber=1&userName=${user?.userName}`
          )
          .then((res) => {
            setArrayofdocumentdetail(res.data?.success?.data);
            handleClose1();
          });
      });
  };
  return (
    <div
      style={{ width: width>700? "47vw":"90vw", margin:width>700? "2vw 5vw":"2vw", height: "fit-content" }}
      className="bankcardContainer"
    >
      <div style={{ marginBottom: "1vw" }} className="titleboxflexofbank">
        <div>Document Details</div>
        <div>
          <span
            onClick={() => {
              setAuthenticateDocument(false);
              setEditDocuments(data);
            }}
          >
            <img
              style={{ width: width>700? "1.82vw":"4vw", objectFit: "contain", margin: "0 1vw" }}
              src={img}
              alt=""
            />
          </span>
          <span
            onClick={() => {
              handleOpen1(true);
            }}
          >
            <img
              style={{ width: width>700? "1.82vw":"4vw", objectFit: "contain", margin: "0 1vw" }}
              src={img1}
              alt=""
            />
          </span>
        </div>
      </div>

      <hr style={{ margin: "1vw 0", color: "gray" }} />
      <div className="flexofbankdetails">
        <div className="titleboxflexofbank">Document Type</div>
        <div style={{ fontWeight: "400" }} className="titleboxflexofbank">
          {data?.documentType}
        </div>
      </div>

      <div className="flexofbankdetails">
        <div className="titleboxflexofbank">Document No</div>
        <div style={{ fontWeight: "400" }} className="titleboxflexofbank">
          {data?.documentNumber}
        </div>
      </div>

      <div
        style={{
          margin: "1vw",
          flexWrap: "wrap",
          marginTop: "0vw",
          justifyContent: "flex-start",
        }}
        className="activejobpistbudgetbox"
      >
        {data?.files?.map((data) => {
          return (
            <div style={{ marginTop: "1vw" }} className="boxofimageorpdf">
              <div
                onClick={() => {
                  handleOpenx();
                  setImagesave(data?.file);
                }}
                style={{ cursor: "pointer" }}
                className="imageshowboxofpdf"
              >
                <img style={{ cursor: "pointer" }} src={data?.file} alt="" />
              </div>
              <div className="imageshowboxofpdfname">
                <div>
                  <PictureAsPdfIcon
                    style={{
                      color: "red",
                      fontSize: width > 700 ? "1.7vw" : "4vw",
                    }}
                  />
                </div>
                <div className="nameifimagedocuments">
                  {data?.file?.split("%24")[1]?.slice(0, 17)}
                </div>
                <div className="inputfilesshowncatboxsingleimg">
                  <a href={`${data?.file}`} download>
                    {" "}
                    <CloudDownloadOutlinedIcon
                      style={{
                        fontSize: width > 700 ? "1.5vw" : "4vw",
                        margin: "0 1vw",
                      }}
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Modal
        open={openx}
        onClose={handleClosex}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style : styl3}>
          {imagesave && (
            <div className="imgbocofcerti">
              <img src={imagesave} alt="" />
            </div>
          )}
        </Box>
      </Modal>

      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ?style:style1}>
          <div className="profiletitleandmenunav">
            <div className="profiledetailstitle"> Delete Document</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClose1}
                  style={{ fontSize:width>700? "1.5vw":"4vw" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#00000090" }} />
          <div
            style={{ color: "gray", fontSize:width>700? "1vw":"3vw", fontWeight: "300" }}
            className="profiledetailstitle"
          >
            The action will delete "{data?.documentType}" From all of your Documents.{" "}
          </div>
          <div
            style={{
              color: "gray",
              fontSize:width>700? "1vw":"3vw",
              fontWeight: "400",
              marginBottom: "5vw",
            }}
            className="profiledetailstitle"
          >
            Are you sure you want to delete this document?
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
              onClick={handleClose1}
            >
              Cancel
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="handlecirclieaboutsave"
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

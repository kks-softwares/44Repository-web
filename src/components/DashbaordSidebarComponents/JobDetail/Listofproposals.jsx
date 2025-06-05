import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import img2 from "../../../assets/Success stories Definition/checkmark (1).svg";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import axios from "axios";
import API_HOST from "../../../env";

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "scroll",
};
const style3 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};
const style2 = {
  position: "absolute",
  maxHieght: "90vh",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "91vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",

};

export default function Listofproposals({
  width,
  data,
  data1,
  setdata1,
  setLongofproposallist,
  jobdetail,
}) {
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const navigate = useNavigate();
  const handleClosex = () => setOpenx(false);

  const [openx1, setOpenx1] = React.useState(false);
  const handleOpenx1 = () => setOpenx1(true);

  const handleClosex1 = () => setOpenx1(false);

  const [openx2, setOpenx2] = React.useState(false);
  const handleOpenx2 = () => setOpenx2(true);
  const handleClosex2 = () => setOpenx2(false);

  const [openx3, setOpenx3] = React.useState(false);
  const handleOpenx3 = () => setOpenx3(true);
  const handleClosex3 = () => setOpenx3(false);

  const handleAcceptbid = () => {
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    axios
      .post(`${API_HOST}/biding/editBiding`, {
        bidingId: data.bidingId?.bidingId,
        workStatus: "Accepted",
        assignedJob: true,
        assignedJobDate: date,
      })
      .then((res) => {
        axios
          .post(`${API_HOST}/jobPost/editJobPost`, {
            jobPostId: data1.jobPostId,
            workStatus: "Accepted",
            workAssigned: true,
            workAssignDate: date,
            jobDoerId: data?.user_id?._id,
            workAssignedTo: data?.bidingId?._id,
          })
          .then(() => {
            axios
              .get(
                `${API_HOST}/jobPost/viewJobPost?jobPostId=${data1.jobPostId}`
              )
              .then((res) => {
           
                setdata1(res?.data?.success?.data[0]);
                setLongofproposallist(res?.data?.success?.data[0]?.listOfBider);
                handleClosex();
                handleClosex1();
                handleClosex2();
                handleClosex3();
              });
          });
      });
  };
  const handleRejectbid = () => {
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    axios
      .post(`${API_HOST}/biding/editBiding`, {
        bidingId: data.bidingId?.bidingId,
        workStatus: "Reject",
        assignedJob: true,
        assignedJobDate: date,
      })
      .then((res) => {
        axios
          .get(`${API_HOST}/jobPost/viewJobPost?jobPostId=${data1.jobPostId}`)
          .then((res) => {
            
            setdata1(res?.data?.success?.data[0]);
            setLongofproposallist(res?.data?.success?.data[0]?.listOfBider);
            handleClosex();
            handleClosex1();
            handleClosex2();
            handleClosex3();
          });
      });
  };

  const [imagesave, setImagesave] = useState();

  return (
    <div className="listofproposalname">
      <div
        style={{
          padding: width > 700 ? "0" : "2vw 0vw",
          margin: "0",
          fontWeight: "400",
          fontSize: width > 700 ? "1vw" : "2.5vw",
        }}
        className="navoftableblogs"
      >
        <div style={{ width: width > 700 ? "18vw" : "21vw" }}>
          {data?.user_id?.fullName}
        </div>
        {width > 700 && (
          <div style={{ width: width > 700 ? "13vw" : "25vw" }}>
            {" "}
            {data?.bidingId?.milestoneDueDate5
              ? data?.bidingId?.milestoneDueDate5
              : data?.bidingId?.milestoneDueDate4
              ? data?.bidingId?.milestoneDueDate4
              : data?.bidingId?.milestoneDueDate3
              ? data?.bidingId?.milestoneDueDate3
              : data?.bidingId?.milestoneDueDate2
              ? data?.bidingId?.milestoneDueDate2
              : data?.bidingId?.milestoneDueDate1}
          </div>
        )}
        <div style={{ width: width > 700 ? "12vw" : "24vw" }}>
          {data?.timestamps?.slice(0, 10)}
        </div>
        <div style={{ width: width > 700 ? "12vw" : "20vw" }}>
          $ {data?.bidingId?.totalProjectPrice}
        </div>
       
        <div
          style={{
            width: width > 700 ? "12vw" : "25vw",
            color:
              data?.bidingId?.workStatus === "Completed"
                ? "green"
                : data?.bidingId?.workStatus === "pending" ||
                  data?.bidingId?.workStatus === "Withdraw" ||
                  data?.bidingId?.workStatus === "Reject"
                ? "red"
                : "#E2E228",
          }}
        >
          {data?.bidingId?.workStatus}
        </div>
        <div
          onClick={() => {
            handleOpenx();
          }}
          style={{
            width: width > 700 ? "7vw" : "10vw",
            cursor: "pointer",
            color: "#064C87",
          }}
        >
          View
        </div>
     
      </div>
      <Modal
        open={openx}
        onClose={handleClosex}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style : style2}>
          <div
            style={{
              padding: width > 700 ? "2vw" : "1vw",
              width:  "100%",
              height: "100%",
              maxHeight: "90vh",
              overflowY: "scroll",
              overflowX:"hidden"
            }}
          >
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="appliedjobformtitleflex"
            >
              <div>Proposal Detail</div>
              <div>
                <CloseIcon
                  onClick={handleClosex}
                  style={{ fontSize:width > 700 ? "1.5vw":"4vw", cursor: "pointer" }}
                />
              </div>
            </div>
            <hr style={{ height: "0.1vw" }} />
            <div
              style={{ margin: "1vw", fontSize: width > 700 ? "" : "2.5vw" }}
              className="activejobpistbudgetbox"
            >
              <div>
                Bidder Name <br /> <span>{data?.user_id?.fullName}</span>
              </div>
              <div style={{ marginRight: "1vw" }}>
                Bids Applied On <br />{" "}
                <span> {data?.timestamps?.slice(0, 10)}</span>
              </div>
              <div style={{ marginRight: "1vw" }}>
                Estimate Time to Complete <br />{" "}
                <span>
                  {data?.bidingId?.milestoneDueDate5
                    ? data?.bidingId?.milestoneDueDate5
                    : data?.bidingId?.milestoneDueDate4
                    ? data?.bidingId?.milestoneDueDate4
                    : data?.bidingId?.milestoneDueDate3
                    ? data?.bidingId?.milestoneDueDate3
                    : data?.bidingId?.milestoneDueDate2
                    ? data?.bidingId?.milestoneDueDate2
                    : data?.bidingId?.milestoneDueDate1}
                </span>
              </div>
              <div style={{ marginRight: "1vw" }}>
                {" "}
                Status <br />{" "}
                <span
                  style={{
                    color:
                      data?.bidingId?.workStatus === "Completed"
                        ? "green"
                        : data?.bidingId?.workStatus === "pending" ||
                          data?.bidingId?.workStatus === "Withdraw" ||
                          data?.bidingId?.workStatus === "Reject"
                        ? "red"
                        : "#E2E228",
                  }}
                >
                  {data?.bidingId?.workStatus}
                </span>
              </div>
            </div>

            {data?.bidingId?.files?.length > 0 && (
              <div
                style={{
                  color: "#064C87",
                  margin: width > 700 ? "0.5vw" : "1vw",
                  fontWeight: "500",
                }}
              >
                Image / Documents
              </div>
            )}
            <div
              style={{
                margin: "1vw",
                flexWrap: "wrap",
                marginTop: "0vw",
                justifyContent: "flex-start",
              }}
              className="activejobpistbudgetbox"
            >
              {data?.bidingId?.files?.map((data) => {
                return (
                  <div
                    style={{ margin: width > 700 ? "" : "1.5vw" }}
                    className="boxofimageorpdf"
                  >
                    <div
                      onClick={() => {
                        handleOpenx1();
                        setImagesave(data?.file);
                      }}
                      style={{ cursor: "pointer" }}
                      className="imageshowboxofpdf"
                    >
                      <img src={data?.file} alt="" />
                    </div>
                    <div className="imageshowboxofpdfname">
                      <div>
                        <PictureAsPdfIcon
                          style={{
                            color: "red",
                            fontSize: width > 700 ? "1.7vw" : "4.5vw",
                          }}
                        />
                      </div>
                      <div className="nameifimagedocuments">
                        {data?.file?.split("%24")[1]?.slice(0, 16)}
                      </div>
                      <div className="inputfilesshowncatboxsingleimg">
                        <a href={`${data?.file}`} download>
                          {" "}
                          <CloudDownloadOutlinedIcon
                            style={{
                              fontSize: width > 700 ? "1.5vw" : "5vw",
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
              open={openx1}
              onClose={handleClosex1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={width > 700 ? style1 : style3}>
                {imagesave && (
                  <div className="imgbocofcerti">
                    <img src={imagesave} alt="" />
                  </div>
                )}
              </Box>
            </Modal>

            <div
              style={{ color: "#064C87", margin: "0.5vw", fontWeight: "500" }}
            >
              Description
            </div>
            <div
              style={{
                width: "100%",
                margin: "0.5vw 1vw",
                fontSize: width > 700 ? "0.85vw" : "2.5vw",
                marginBottom: "0.0vw",
                marginRight: "2vw",
              }}
              className="dashboardtitilemainparabid"
            >
              {data?.bidingId?.shortDescription}
            </div>
            <div style={{ margin: "0.5vw", fontWeight: "500" }}>
              Total Milestone
            </div>

            {data?.bidingId?.milestoneDescription1 !== null && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="colpletedmilestonescontacts"
              >
                <div>
                  <div>1. {data?.bidingId?.milestoneDescription1}</div>
                  <div
                    style={{
                      fontSize: width > 700 ? "0.95vw" : "2.8vw",
                      color: "black",
                      fontWeight: "400",
                    }}
                  >
                    $ {data?.bidingId?.milestonePrice1} ,
                    <span> Due Date - {data?.bidingId?.milestoneDueDate1}</span>
                  </div>
                </div>
                <div>
                  <div
                    style={{ color: "#064C87", fontWeight: "400" }}
                    className="profilebannernameandpostemail"
                  >
                    <span>
                      <img src={img2} alt="" />
                    </span>
                    -
                  </div>
                </div>
              </div>
            )}
            {data?.bidingId?.milestoneDescription1 !== null && (
              <hr
                style={{ width: "100%", margin: width > 700 ? "0.3vw" : "1vw" }}
              />
            )}
            {data?.bidingId?.milestoneDescription2 !== null && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="colpletedmilestonescontacts"
              >
                <div>
                  <div>2. {data?.bidingId?.milestoneDescription2}</div>
                  <div
                    style={{
                      fontSize: width > 700 ? "0.95vw" : "2.8vw",
                      color: "black",
                      fontWeight: "400",
                    }}
                  >
                   $ {data?.bidingId?.milestonePrice2} ,
                    <span> Due Date - {data?.bidingId?.milestoneDueDate2}</span>
                  </div>
                </div>
                <div>
                  <div
                    style={{ color: "#064C87", fontWeight: "400" }}
                    className="profilebannernameandpostemail"
                  >
                    <span>
                      <img src={img2} alt="" />
                    </span>
                    -
                  </div>
                </div>
              </div>
            )}
            {data?.bidingId?.milestoneDescription2 !== null && (
              <hr style={{ width: "100%", margin: "0.3vw" }} />
            )}
            {data?.bidingId?.milestoneDescription3 !== null && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="colpletedmilestonescontacts"
              >
                <div>
                  <div>3. {data?.bidingId?.milestoneDescription3}</div>
                  <div
                    style={{
                      fontSize: width > 700 ? "0.95vw" : "2.8vw",
                      color: "black",
                      fontWeight: "400",
                    }}
                  >
                $ {data?.bidingId?.milestonePrice3} ,
                    <span> Due Date - {data?.bidingId?.milestoneDueDate3}</span>
                  </div>
                </div>
                <div>
                  <div
                    style={{ color: "#064C87", fontWeight: "400" }}
                    className="profilebannernameandpostemail"
                  >
                    <span>
                      <img src={img2} alt="" />
                    </span>
                    -
                  </div>
                </div>
              </div>
            )}
            {data?.bidingId?.milestoneDescription3 !== null && (
              <hr style={{ width: "100%", margin: "0.3vw" }} />
            )}
            {data?.bidingId?.milestoneDescription4 !== null && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="colpletedmilestonescontacts"
              >
                <div>
                  <div>4. {data?.bidingId?.milestoneDescription4}</div>
                  <div
                    style={{
                      fontSize: width > 700 ? "0.95vw" : "2.8vw",
                      color: "black",
                      fontWeight: "400",
                    }}
                  >
             $ {data?.bidingId?.milestonePrice4} ,
                    <span> Due Date - {data?.bidingId?.milestoneDueDate4}</span>
                  </div>
                </div>
                <div>
                  <div
                    style={{ color: "#064C87", fontWeight: "400" }}
                    className="profilebannernameandpostemail"
                  >
                    <span>
                      <img src={img2} alt="" />
                    </span>
                    -
                  </div>
                </div>
              </div>
            )}
            {data?.bidingId?.milestoneDescription4 !== null && (
              <hr style={{ width: "100%", margin: "0.3vw" }} />
            )}
            {data?.bidingId?.milestoneDescription5 !== null && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="colpletedmilestonescontacts"
              >
                <div>
                  <div>5. {data?.bidingId?.milestoneDescription5}</div>
                  <div
                    style={{
                      fontSize: width > 700 ? "0.95vw" : "2.8vw",
                      color: "black",
                      fontWeight: "400",
                    }}
                  >
                 $ {data?.bidingId?.milestonePrice5} ,
                    <span> Due Date - {data?.bidingId?.milestoneDueDate5}</span>
                  </div>
                </div>
                <div>
                  <div
                    style={{ color: "#064C87", fontWeight: "400" }}
                    className="profilebannernameandpostemail"
                  >
                    <span>
                      <img src={img2} alt="" />
                    </span>
                    -
                  </div>
                </div>
              </div>
            )}
            {data?.bidingId?.milestoneDescription5 !== null && (
              <hr style={{ width: "100%", margin: "0.3vw" }} />
            )}
            
            {data?.bidingId?.workStatus === "pending" && (
              <div
                style={{
                  fontSize: width > 700 ? "0.9vw" : "2.7vw",
                  marginLeft: "1vw",
                  marginTop: "1vw",
                }}
              >
                Are you Ready to Accept the Proposal ?
              </div>
            )}
            {data?.bidingId?.workStatus === "pending" &&
            data1?.workAssigned === false ? (
              <div
                style={{
                  float: "right",
                  marginBottom: "2vw",
                  marginTop: width > 700 ? "0.3vw" : "1vw",
                }}
                className="homejobbuttons"
              >
                <button
                  style={{ background: "white" }}
                  onClick={() => navigate("/dashbaord/messages")}
                >
                  Chat us
                </button>
                <button style={{ background: "white" }} onClick={handleOpenx2}>
                  Rejected
                </button>
                <button style={{ color: "white" }} onClick={handleOpenx3}>
                  Accepted
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </Box>
      </Modal>
      <Modal
        open={openx2}
        onClose={handleClosex2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ?style:style2}>
          <div
            style={{ left: "0vw", width: "100%", padding: "1vw" }}
            className="profiletitleandmenunav"
          >
            <div className="profiledetailstitle">Reject Proposal</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClosex2}
                  style={{ fontSize: width > 700 ?"1.5vw":"4vw", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#00000090" }} />

          <div
            style={{ left: "0vw", width: "100%", padding: "1vw" }}
            className="loginfield"
          >
            The action will Reject "{data?.user_id?.fullName} " for your
            Upcoming Work. Are you sure Want to Reject the Contract with the
            bidder ?
          </div>

          <hr style={{ color: "#00000090" }} />
          <div
            style={{ marginTop: "0.31vw", padding: "1vw" }}
            className="handlemoreaboutskill"
          >
            <div
              style={{
                background: "white",
                color: "black",
                cursor: "pointer",
              }}
              className="handlecirclieaboutsave"
              onClick={handleClosex2}
            >
              Cancel
            </div>
            <div
              onClick={() => {
                handleRejectbid();
              }}
              style={{ cursor: "pointer", background: "#FE2323" }}
              className="handlecirclieaboutsave"
            >
              Reject
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={openx3}
        onClose={handleClosex3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ?style:style2}>
          <div style={{ padding: "1vw" }} className="profiletitleandmenunav">
            <div className="profiledetailstitle">Accept Proposal</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClosex3}
                  style={{ fontSize:width > 700 ? "1.5vw":"4vw", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#00000090" }} />

          <div
            style={{ left: "0vw", width: "100%", padding: "1vw" }}
            className="loginfield"
          >
            The action will Accept "{data?.user_id?.fullName}" for your Upcoming
            Work. Are you sure Want to accept the Contract with the bidder ?
          </div>

          <hr style={{ color: "#00000090" }} />
          <div
            style={{ marginTop: "0.31vw", padding: "1vw" }}
            className="handlemoreaboutskill"
          >
            <div
              style={{
                background: "white",
                color: "black",
                cursor: "pointer",
              }}
              className="handlecirclieaboutsave"
              onClick={handleClosex3}
            >
              Cancel
            </div>
            <div
              onClick={() => {
                handleAcceptbid();
              }}
              style={{ cursor: "pointer", background: "#168B12" }}
              className="handlecirclieaboutsave"
            >
              Accept
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

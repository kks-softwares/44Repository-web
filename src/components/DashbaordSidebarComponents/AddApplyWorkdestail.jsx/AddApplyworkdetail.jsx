import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import API_HOST from "../../../env";
import "../BiddingForm/BiddingFormDashboard.css";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import img10 from "../../../assets/User Dashboard After Login - Apply work Description/Iconly-Light-Calendar.svg";
import img11 from "../../../assets/User Dashboard After Login - Apply work Description/Iconly-Light-Chart.svg";
import img2 from "../../../assets/User Dashboard After Login - Apply work Description/Iconly-Light-Profile.svg";
import img3 from "../../../assets/User Dashboard After Login - Apply work Description/verified_black_24dp.svg";
import img41 from "../../../assets/User Dashboard After Login - Apply work Description/Wallet.svg";
import { useNavigate, useParams } from "react-router-dom";
import img51 from "../../../assets/Web 1280 – 14/Group 10219.svg";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img13 from "../../../assets/Web 1280 – 14/close_black_24dp.svg";
import AddIcon from "@mui/icons-material/Add";
import img4 from "../../../assets/Web 1280 – 14/Ellipse 1375.svg";
import img33 from "../../../assets/Landing page/Group 1179.svg";
import { useSelector } from "react-redux";
import img21 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60.3vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "scroll",
  padding: "1vw",
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
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "hidden",
  padding: 1,
};

export default function AddApplyworkdetail({ width }) {
  const [arrayoffiles, setArrayoffiles] = useState([]);
  const { user } = useSelector((state) => state.user);
  const [down2, setDown2] = useState(false);
  const [data1, setdata1] = useState();
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_HOST}/jobPost/viewJobPost?jobPostId=${id}`).then((res) => {
      setdata1(res?.data?.success?.data[0]);
    });
  }, [id]);

  const [imagesave, setImagesave] = useState();

  const [showbiddingForm, setShowbiddingForm] = useState(false);

  const [openp, setOpenp] = React.useState(false);
  const handleOpenp = () => {
    setOpenp(true);
    setTimeout(function () {
      setOpenp(false);
      navigate("/dashbaord/applyWork");
    }, 5000);
  };
  const handleClosep = () => {
    setOpenp(false);
    navigate("/dashbaord/applyWork");
  };

  const [description1, setDescription1] = useState("");
  const [description1err, setDescription1err] = useState("");

  const [cateaddcheckbox1, setCateaddcheckbox1] = useState(true);

  const [service1name, setService1name] = useState("");
  const [service2name, setService2name] = useState("");
  const [service3name, setService3name] = useState("");
  const [service4name, setService4name] = useState("");
  const [service5name, setService5name] = useState("");

  const [service1namep, setService1namep] = useState(0);
  const [service2namep, setService2namep] = useState(0);
  const [service3namep, setService3namep] = useState(0);
  const [service4namep, setService4namep] = useState(0);
  const [service5namep, setService5namep] = useState(0);

  const [service1named, setService1named] = useState("");
  const [service2named, setService2named] = useState("");
  const [service3named, setService3named] = useState("");
  const [service4named, setService4named] = useState("");
  const [service5named, setService5named] = useState("");
  const [arrayofservices, setArrayofservices] = useState([
    { name: "Starter", price: "10", days: "3", id: 1 },
  ]);

  const handlesavedaddcatalogue = () => {
    if (checkedtocompany === false || checkedtocompany_2 === false) {
      setcheckboxValidaData("Please Select the Terms & Condition");
      setcheckboxValidaData_2("Please Select the Privacy Policy");
      return false;
    }

    if (!description1) {
      setDescription1err("Description is required !");
      return false;
    }

    if (cateaddcheckbox1) {
      const formdata = new FormData();

      arrayoffiles?.length > 0 &&
        arrayoffiles?.map((data, index) => {
          formdata.append("fileName", data);
        });

      if (arrayofservices.length === 0) {
        setRestag(true);
        return;
      }
      if (arrayofservices.length === 1) {
        formdata.append("milestoneDescription1", service1name);
        formdata.append("milestonePrice1", service1namep);
        formdata.append("milestoneDueDate1", service1named);
      }
      if (arrayofservices.length === 2) {
        formdata.append("milestoneDescription1", service1name);
        formdata.append("milestonePrice1", service1namep);
        formdata.append("milestoneDueDate1", service1named);
        formdata.append("milestoneDescription2", service2name);
        formdata.append("milestonePrice2", service2namep);
        formdata.append("milestoneDueDate2", service2named);
      }
      if (arrayofservices.length === 3) {
        formdata.append("milestoneDescription1", service1name);
        formdata.append("milestonePrice1", service1namep);
        formdata.append("milestoneDueDate1", service1named);
        formdata.append("milestoneDescription2", service2name);
        formdata.append("milestonePrice2", service2namep);
        formdata.append("milestoneDueDate2", service2named);
        formdata.append("milestoneDescription3", service3name);
        formdata.append("milestonePrice3", service3namep);
        formdata.append("milestoneDueDate3", service3named);
      }
      if (arrayofservices.length === 4) {
        formdata.append("milestoneDescription1", service1name);
        formdata.append("milestonePrice1", service1namep);
        formdata.append("milestoneDueDate1", service1named);
        formdata.append("milestoneDescription2", service2name);
        formdata.append("milestonePrice2", service2namep);
        formdata.append("milestoneDueDate2", service2named);
        formdata.append("milestoneDescription3", service3name);
        formdata.append("milestonePrice3", service3namep);
        formdata.append("milestoneDueDate3", service3named);
        formdata.append("milestoneDescription4", service4name);
        formdata.append("milestonePrice4", service4namep);
        formdata.append("milestoneDueDate4", service4named);
      }
      if (arrayofservices.length === 5) {
        formdata.append("milestoneDescription1", service1name);
        formdata.append("milestonePrice1", service1namep);
        formdata.append("milestoneDueDate1", service1named);
        formdata.append("milestoneDescription2", service2name);
        formdata.append("milestonePrice2", service2namep);
        formdata.append("milestoneDueDate2", service2named);
        formdata.append("milestoneDescription3", service3name);
        formdata.append("milestonePrice3", service3namep);
        formdata.append("milestoneDueDate3", service3named);
        formdata.append("milestoneDescription4", service4name);
        formdata.append("milestonePrice4", service4namep);
        formdata.append("milestoneDueDate4", service4named);
        formdata.append("milestoneDescription5", service5name);
        formdata.append("milestonePrice5", service5namep);
        formdata.append("milestoneDueDate5", service5named);
      }
      formdata.append("jobPostId", data1?._id);
      formdata.append("category", data1?.category?._id);
      formdata.append("subCategory", data1?.subCategory?._id);
      formdata.append("shortDescription", description1);
      formdata.append("totalProjectPrice", totalPrice);
      formdata.append("byMiletone", true);
      formdata.append("byProject", false);
      axios
        .post(`${API_HOST}/biding/addBiding`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          const formdata = new FormData();

          formdata.append("jobPostId", id);
          formdata.append("userName", user?.userName);
          formdata.append("user_id", user?._id);
          formdata.append("bidingId", res?.data?.success?.data?._id);
          axios
            .post(`${API_HOST}/jobPost/updateListOfBider`, formdata, {
              headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
              },
            })
            .then((res) => {
              handleOpenp();
            });
        })
        .catch((err) => {
          setRestag(true);
        });
    } else {
      const formdata = new FormData();

      arrayoffiles?.length > 0 &&
        arrayoffiles?.map((data, index) => {
          formdata.append("fileName", data);
        });

      if (arrayofservices.length === 0) {
        setRestag(true);
        return;
      }
      if (arrayofservices.length === 1) {
        formdata.append("milestoneDescription1", service1name);
        formdata.append("milestonePrice1", service1namep);
        formdata.append("milestoneDueDate1", service1named);
      }
      formdata.append("jobPostId", data1?._id);
      formdata.append("category", data1?.category?._id);
      formdata.append("subCategory", data1?.subCategory?._id);
      formdata.append("shortDescription", description1);
      formdata.append("totalProjectPrice", totalPrice);
      formdata.append("byMiletone", false);
      formdata.append("byProject", true);

      axios
        .post(`${API_HOST}/biding/addBiding`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          const formdata = new FormData();

          formdata.append("jobPostId", id);
          formdata.append("userName", user?.userName);
          formdata.append("user_id", user?._id);
          formdata.append("bidingId", res?.data?.success?.data?._id);
          axios
            .post(`${API_HOST}/jobPost/updateListOfBider`, formdata, {
              headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
              },
            })
            .then((res) => {
              handleOpenp();
            });
        })
        .catch((err) => {
          setRestag(true);
        });
    }
  };

  const [restag, setRestag] = useState(false);

  const [totalPrice, settotalPrice] = useState(0);
  const [percentToGet, setPercentToGet] = useState(30);

  const [checkedtocompany, setCheckedtocompany] = useState(false);
  const [checkedtocompany_2, setCheckedtocompany_2] = useState(false);
  const [checkboxValidaData, setcheckboxValidaData] = useState("");
  const [checkboxValidaData_2, setcheckboxValidaData_2] = useState("");

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          background: "white",
          padding: width > 700 ? "1vw 1vw" : "2vw",
          margin: "1vw 0vw",
        }}
      >
        <button
          style={{
            cursor: "pointer",
            zIndex: "100",
            padding: "0.5vw 0.7vw",
            backgroundColor: "white",
            color: "#000",
            fontSize: "1.2vw",
            borderRadius: "0.3vw",
            border: "1px solid #d7d7d7",
            marginBottom: width > 700 ? "1vw" : "3vw",
            marginTop: "0vw",
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIosNewIcon />
        </button>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="tagblue">{data1?.category?.category}</div>
            <div
              style={{
                marginLeft: "1vw",
                fontSize: width > 700 ? "0.9vw" : "2.7vw",
              }}
            >
              {data1?.subCategory?.subCategory}
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            fontWeight: "600",
            fontSize: width > 700 ? "1.3vw" : "3.5vw",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "1vw",
            marginLeft: "1vw",
            color: "#064C87",
          }}
        >
          {data1?.workTitle} ({data1?.trackingId})
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>
            <LocationOnOutlinedIcon
              style={{
                fontSize: width > 700 ? "1.5vw" : "4.5vw",
                fontWeight: "400",
                margin: "0.5vw 1vw",
              }}
            />
          </span>
          <span
            style={{
              fontSize: width > 700 ? "1.1vw" : "3vw",
              fontWeight: "500",
            }}
          >
            {data1?.remote ? "Remote" : data1?.onSite}
          </span>
        </div>
        <div
          style={{
            width: "100%",
            margin: "0.8vw 1vw",
            fontSize: width > 700 ? "0.85vw" : "2.5vw",
            marginBottom: "0.0vw",
            marginRight: "2vw",
          }}
          className="dashboardtitilemainparabid"
        >
          {data1?.shortDescription}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: width > 700 ? "1.1vw" : "3.2vw",
              fontWeight: "500",
              margin: "1vw",
            }}
          >
            {"Skills"}
          </span>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          {data1?.skill1 && <div className="skillmap">{data1?.skill1}</div>}
          {data1?.skill2 && <div className="skillmap">{data1?.skill2}</div>}
          {data1?.skill3 && <div className="skillmap">{data1?.skill3}</div>}
          {data1?.skill4 && <div className="skillmap">{data1?.skill4}</div>}
          {data1?.skill5 && <div className="skillmap">{data1?.skill5}</div>}
          {data1?.skill6 && <div className="skillmap">{data1?.skill6}</div>}
          {data1?.skill7 && <div className="skillmap">{data1?.skill7}</div>}
          {data1?.skill8 && <div className="skillmap">{data1?.skill8}</div>}
          {data1?.skill9 && <div className="skillmap">{data1?.skill9}</div>}
          {data1?.skill10 && <div className="skillmap">{data1?.skill10}</div>}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: width > 700 ? "1.1vw" : "3.3vw",
              fontWeight: "500",
              margin: "1vw",
            }}
          >
            Proposal Details
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            margin: "1vw 2vw",
            marginTop: "0vw",
            flexWrap: width <= 700 && "wrap",
          }}
        >
          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw",
                color: "#064C87",
                marginBottom: "0.40vw",
                fontSize: width > 700 ? "1vw" : "3vw",
                fontWeight: "500",
              }}
            >
              Posted by
            </div>
            <div
              style={{
                display: "block",
                height: "fit-content",
                paddingBottom: "0.3vw",
                paddingLeft: "0.61vw",
                lineHeight: "2.7vw",
                cursor: "pointer",
              }}
              className="tagvaluejobpostbox"
              onClick={() => {
                navigate(`/profile/${data1?.user_id?.userName}`);
              }}
            >
              {data1?.user_id?.fullName?.slice(0, 18)}
              {/* <span>
                <StarIcon
                  style={{ width: "1vw", height: "1vw", color: "#064C87" }}
                />
              </span>{" "}
              4.5 */}
              {data1?.user_id?.verifiedByAdmin && (
                <div
                  style={{
                    color: "#064C87",
                    lineHeight: width > 700 ? "0" : "5vw",
                  }}
                >
                  <img
                    style={{
                      width: width > 700 ? "1vw" : "3vw",
                      margin: "0 0.1vw",
                    }}
                    src={img3}
                    alt=""
                  />
                  Verified
                </div>
              )}
            </div>
          </div>

          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw",
                color: "#064C87",
                marginBottom: "0.40vw",
                fontSize: width > 700 ? "1vw" : "3vw",
                fontWeight: "500",
              }}
            >
              Budget
            </div>
            <div className="tagvaluejobpostbox">
              <span>
                <img
                  style={{
                    margin: width > 700 ? "0.6vw" : "1.2vw",
                    width: width > 700 ? "1.5vw" : "4vw",
                    objectFit: "contain",
                  }}
                  src={img41}
                  alt=""
                />
              </span>
              ${data1?.minimumBudget}- ${data1?.maximuBudget}
            </div>
          </div>

          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw",
                color: "#064C87",
                marginBottom: "0.40vw",
                fontSize: width > 700 ? "1vw" : "3vw",
                fontWeight: "500",
              }}
            >
              Duration
            </div>
            <div className="tagvaluejobpostbox">
              <span>
                <img
                  style={{
                    margin: width > 700 ? "0.6vw" : "1.2vw",
                    width: width > 700 ? "1.5vw" : "4vw",
                    objectFit: "contain",
                  }}
                  src={img10}
                  alt=""
                />
              </span>
              {data1?.deliveryDate ? data1?.deliveryDate : "-"} days
            </div>
          </div>

          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw 0vw",
                color: "#064C87",
                marginBottom: "0.40vw",
                fontSize: width > 700 ? "1vw" : "3vw",
                fontWeight: "500",
              }}
            >
              Expires on
            </div>
            <div className="tagvaluejobpostbox">
              <span>
                <img
                  style={{
                    margin: width > 700 ? "0.6vw" : "1.2vw",
                    width: width > 700 ? "1.5vw" : "4vw",
                    objectFit: "contain",
                  }}
                  src={img11}
                  alt=""
                />
              </span>
              {data1?.expiry} days
            </div>
          </div>

          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw 0vw",
                color: "#064C87",
                marginBottom: "0.40vw",
                fontSize: width > 700 ? "1vw" : "3vw",
                fontWeight: "500",
              }}
            >
              No of Bidding
            </div>
            <div className="tagvaluejobpostbox">
              <span>
                <img
                  style={{
                    margin: width > 700 ? "0.6vw" : "1.2vw",
                    width: width > 700 ? "1.5vw" : "4vw",
                    objectFit: "contain",
                  }}
                  src={img2}
                  alt=""
                />
              </span>
              {data1?.listOfBider?.length}
            </div>
          </div>
        </div>
        <div
          style={{
            height: down2
              ? `${
                  parseInt(
                    (data1?.icons?.length + (width > 700 ? 2 : 1)) /
                      (width > 700 ? 3 : 2)
                  ) *
                    (width > 700 ? 13.5 : 35) +
                  (width > 700 ? 5 : 8)
                }vw`
              : "",
          }}
          className="boxofextension"
        >
          <div className="flexofboxextentionnav">
            <div style={{ color: down2 ? "#064C87" : "", marginLeft: "0.5vw" }}>
              {data1?.icons?.length > 0
                ? "view Documents"
                : "This job Does not have  any Documents  !"}
            </div>
            <div
              onClick={() => {
                setDown2(!down2);
              }}
            >
              {!down2 ? (
                <KeyboardArrowDownIcon
                  style={{
                    fontSize: width > 700 ? "2vw" : "5vw",
                    margin: "1vw",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  style={{
                    fontSize: width > 700 ? "2vw" : "5vw",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </div>
          <div hidden={!down2}>
            <div
              style={{
                margin: "1vw",
                flexWrap: "wrap",
                marginTop: "0vw",
                justifyContent: "flex-start",
              }}
              className="activejobpistbudgetbox"
            >
              {data1?.icons?.map((data) => {
                return (
                  <div className="boxofimageorpdf">
                    <div
                      onClick={() => {
                        handleOpenx();
                        setImagesave(data?.icon);
                      }}
                      style={{ cursor: "pointer" }}
                      className="imageshowboxofpdf"
                    >
                      <img
                        style={{ cursor: "pointer" }}
                        src={data?.icon}
                        alt=""
                      />
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
                        {data?.icon?.split("%24")[1]?.slice(0, 17)}
                      </div>
                      <div className="inputfilesshowncatboxsingleimg">
                        <a href={`${data?.icon}`} download>
                          {" "}
                          <CloudDownloadOutlinedIcon
                            style={{
                              fontSize: width > 700 ? "1.7vw" : "4vw",
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
        </div>
        {!showbiddingForm && (
          <div
            style={{
              width: "95%",
              display: "flex",
              justifyContent: "end",
              marginTop: "2vw",
            }}
          >
            <button
              className="hb-button"
              onClick={() => {
                setShowbiddingForm(true);
              }}
            >
              <div style={{ color: "#fff", fontSize: "12px" }}>Bid Now</div>
            </button>
          </div>
        )}
        {showbiddingForm && (
          <div style={{ marginTop: "2vw" }}>
            <div style={{ background: "white" }}>
              <div className="dashboardtitilemain">
                How do you want to be Paid? *
              </div>

              <div
                onClick={() => setCateaddcheckbox1(true)}
                className="checkboxfromcate"
              >
                <div>
                  {cateaddcheckbox1 ? <img src={img51} /> : <img src={img4} />}{" "}
                </div>
                <div style={{ position: "relative", top: "0.61vw" }}>
                  By Milestone <br />
                  <span
                    style={{
                      fontSize: width > 700 ? "0.7vw" : "2vw",
                      lineHeight: "0vw",
                      marginBottom: "1vw",
                    }}
                  >
                    Divide the Project into smaller segments, Called Milestone.
                    You'll be paid for milestone after approved
                  </span>{" "}
                </div>
              </div>
              <div className="checkboxfromcate">
                <div
                  onClick={() => {
                    setArrayofservices([
                      { name: "Starter", price: "10", days: "3", id: 1 },
                    ]);
                    setCateaddcheckbox1(false);
                  }}
                >
                  {cateaddcheckbox1 ? <img src={img4} /> : <img src={img51} />}{" "}
                </div>

                <div
                  style={{ position: "relative", top: "0.61vw" }}
                  onClick={() => {
                    setArrayofservices([
                      { name: "Starter", price: "10", days: "3", id: 1 },
                    ]);
                    setCateaddcheckbox1(false);
                    settotalPrice(parseInt(service1namep));
                  }}
                >
                  By Project <br />
                  <span
                    style={{
                      fontSize: width > 700 ? "0.7vw" : "2vw",

                      lineHeight: "0vw",
                      marginBottom: "1vw",
                    }}
                  >
                    Divide the Project into smaller segments, Called Milestone.
                    You'll be paid for milestone after approved
                  </span>{" "}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: "2vw",
                  alignItems: "center",
                }}
              >
                <div className="dashboardtitilemain">
                  How Many Milestone Do you want to include?(
                  {width > 700 ? "Minimum" : "Min"}-1)
                </div>
                <div
                  style={{ width: width > 700 ? "15%" : "15%" }}
                  className="servicesmenuname4box"
                >
                  <span
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => {
                      const index = arrayofservices.length - 1;

                      index + 1 === 1
                        ? setService1named("")
                        : index + 1 === 2
                        ? setService2named("")
                        : index + 1 === 3
                        ? setService3named("")
                        : index + 1 === 4
                        ? setService4named("")
                        : setService5named("");

                      index + 1 === 1
                        ? setService1namep("")
                        : index + 1 === 2
                        ? setService2namep("")
                        : index + 1 === 3
                        ? setService3namep("")
                        : index + 1 === 4
                        ? setService4namep("")
                        : setService5namep("");

                      index + 1 === 1
                        ? setService1name("")
                        : index + 1 === 2
                        ? setService2name("")
                        : index + 1 === 3
                        ? setService3name("")
                        : index + 1 === 4
                        ? setService4name("")
                        : setService5name("");

                      setArrayofservices([
                        ...arrayofservices.slice(0, arrayofservices.length - 1),
                      ]);
                    }}
                  >
                    Remove
                  </span>
                </div>
              </div>

              <div style={{ marginLeft: "1vw" }} className="servicesmenudiv">
                <div className="servicesmenuname1">Description</div>
                <div className="servicesmenuname2">Price</div>
                <div className="servicesmenuname3">Due Date</div>
                <div className="servicesmenuname4"></div>
              </div>
              {arrayofservices?.slice(0, 5).map((data, index) => {
                return (
                  <div
                    style={{ marginTop: "1vw", marginLeft: "1vw" }}
                    className="servicesmenudiv"
                  >
                    <div className="servicesmenuname1box">
                      <input
                        type="text"
                        name="desc"
                        value={
                          index + 1 === 1
                            ? service1name
                            : index + 1 === 2
                            ? service2name
                            : index + 1 === 3
                            ? service3name
                            : index + 1 === 4
                            ? service4name
                            : service5name
                        }
                        onChange={(e) => {
                          index + 1 === 1
                            ? setService1name(e.target.value)
                            : index + 1 === 2
                            ? setService2name(e.target.value)
                            : index + 1 === 3
                            ? setService3name(e.target.value)
                            : index + 1 === 4
                            ? setService4name(e.target.value)
                            : setService5name(e.target.value);
                        }}
                      />
                    </div>
                    <div className="servicesmenuname2box">
                      $
                      <input
                        type="number"
                        onChange={(e) => {
                          if (e.target.value.length === 0) {
                            index + 1 === 1
                              ? setService1namep(0)
                              : index + 1 === 2
                              ? setService2namep(0)
                              : index + 1 === 3
                              ? setService3namep(0)
                              : index + 1 === 4
                              ? setService4namep(0)
                              : setService5namep(0);
                          } else {
                            index + 1 === 1
                              ? setService1namep(e.target.value)
                              : index + 1 === 2
                              ? setService2namep(e.target.value)
                              : index + 1 === 3
                              ? setService3namep(e.target.value)
                              : index + 1 === 4
                              ? setService4namep(e.target.value)
                              : setService5namep(e.target.value);
                          }
                        }}
                        onBlur={() => {
                          if (cateaddcheckbox1) {
                            settotalPrice(
                              parseInt(service1namep) +
                                parseInt(service2namep) +
                                parseInt(service3namep) +
                                parseInt(service4namep) +
                                parseInt(service5namep)
                            );
                          } else {
                            settotalPrice(parseInt(service1namep));
                          }
                        }}
                      />
                    </div>
                    <div className="servicesmenuname3box">
                      <input
                        type="date"
                        className="datenewmilestine"
                        style={{ width: "100%" }}
                        min={disablePastDate()}
                        max={"9999-12-31"}
                        maxlength="4"
                        value={
                          index + 1 === 1
                            ? service1named
                            : index + 1 === 2
                            ? service2named
                            : index + 1 === 3
                            ? service3named
                            : index + 1 === 4
                            ? service4named
                            : service5named
                        }
                        onChange={(e) => {
                          index + 1 === 1
                            ? setService1named(e.target.value)
                            : index + 1 === 2
                            ? setService2named(e.target.value)
                            : index + 1 === 3
                            ? setService3named(e.target.value)
                            : index + 1 === 4
                            ? setService4named(e.target.value)
                            : setService5named(e.target.value);
                        }}
                      />
                    </div>
                    <div className="servicesmenuname4box"></div>
                  </div>
                );
              })}

              {cateaddcheckbox1 ? (
                <div
                  style={{ marginLeft: "1vw" }}
                  className="addmoreservicecatalog"
                  onClick={() => {
                    const index = arrayofservices.length;

                    index + 1 === 1
                      ? setService1named("")
                      : index + 1 === 2
                      ? setService2named("")
                      : index + 1 === 3
                      ? setService3named("")
                      : index + 1 === 4
                      ? setService4named("")
                      : setService5named("");

                    index + 1 === 1
                      ? setService1namep(0)
                      : index + 1 === 2
                      ? setService2namep(0)
                      : index + 1 === 3
                      ? setService3namep(0)
                      : index + 1 === 4
                      ? setService4namep(0)
                      : setService5namep(0);

                    index + 1 === 1
                      ? setService1name("")
                      : index + 1 === 2
                      ? setService2name("")
                      : index + 1 === 3
                      ? setService3name("")
                      : index + 1 === 4
                      ? setService4name("")
                      : setService5name("");
                    arrayofservices.length !== 5
                      ? setArrayofservices([
                          ...arrayofservices,
                          { name: "", price: "", days: "" },
                        ])
                      : setArrayofservices([...arrayofservices]);
                  }}
                >
                  <span>
                    <AddIcon
                      style={{ fontSize: width > 700 ? "1.3vw" : "4vw" }}
                    />
                  </span>{" "}
                  Add More Milestones
                </div>
              ) : (
                ""
              )}

              <div
                style={{ width: width > 700 ? "" : "100%" }}
                className="displflexpriceaddbiddingform"
              >
                <div
                  style={{ margin: "0vw 0.5vw", marginTop: "1vw" }}
                  className="dashboardtitilemain"
                >
                  Total Price of Project
                </div>
                <div
                  style={{
                    margin: "0vw 0.5vw",
                    marginTop: "1vw",
                    fontWeight: "400",
                  }}
                  className="dashboardtitilemain"
                >
                  $ {totalPrice}
                </div>
              </div>

              <div>
                <span
                  style={{
                    fontSize: width > 700 ? "0.8vw" : "2.5vw",
                    lineHeight: "0vw",
                    marginBottom: "1vw",
                    fontFamily: "poppins",
                    margin: "0vw 0.5vw",
                    marginLeft: "1.5vw",
                  }}
                >
                  {width > 700 &&
                    "Divide the Project into smaller segments, Called Milestone."}
                  You'll be paid for milestone after approved
                </span>{" "}
              </div>

              <div
                style={{ width: width > 700 ? "" : "100%" }}
                className="displflexpriceaddbiddingform"
              >
                <div
                  style={{ margin: "0vw 0.5vw", marginTop: "1vw" }}
                  className="dashboardtitilemain"
                >
                  Our Service Fee
                </div>
                <div
                  style={{
                    margin: "0vw 0.5vw",
                    marginTop: "1vw",
                    fontWeight: "400",
                  }}
                  className="dashboardtitilemain"
                >
                  $ {(percentToGet / 100) * totalPrice}
                </div>
              </div>

              <hr style={{ margin: "1vw" }} />
              <div
                style={{ width: width > 700 ? "" : "100%" }}
                className="displflexpriceaddbiddingform"
              >
                <div
                  style={{ margin: "0vw 0.5vw", marginTop: "0vw" }}
                  className="dashboardtitilemain"
                >
                  You'll Receive
                </div>
                <div
                  style={{
                    margin: "0vw 0.5vw",
                    marginTop: "0vw",
                    fontWeight: "400",
                  }}
                  className="dashboardtitilemain"
                >
                  $ {totalPrice - (percentToGet / 100) * totalPrice}
                </div>
              </div>

              <div>
                <span
                  style={{
                    fontSize: width > 700 ? "0.8vw" : "2.5vw",
                    lineHeight: "0vw",
                    marginBottom: "1vw",
                    fontFamily: "poppins",
                    margin: "0vw 0.5vw",
                    marginLeft: "1.5vw",
                  }}
                >
                  Your estimated payment, after service fees
                </span>{" "}
              </div>
            </div>

            <div style={{ marginLeft: "2vw" }}>
              <div className="jobpodtedfieldtitile">Description</div>
              <div className="jobpostfieldinputbox">
                <textarea
                  type="text"
                  name="desc"
                  // value={desc}
                  // onChange={(e) => {
                  //   setDesc(e.target.value);
                  // }}
                  value={description1}
                  onChange={(e) => {
                    setDescription1(e.target.value);
                    setDescription1err("");
                  }}
                />
              </div>
              <p style={{ color: "red", fontSize: "0.9vw" }}>
                {description1err}
              </p>
            </div>
            <div
              style={{ background: "white", padding: "1vw", marginTop: "2vw" }}
            >
              <div
                style={{
                  marginBottom: "0.0vw",
                  marginLeft: "1vw",
                  marginTop: "2vw",
                }}
                className="jobpodtedfieldtitile"
              >
                Image/Documents
              </div>
              <div
                style={{
                  background: "white",
                  padding: "1vw",
                  marginTop: "0vw",
                }}
              >
                <div className="inputfilebox">
                  <div>
                    <label htmlFor="inputctaelogfile">
                      <div className="inputicon">
                        <img src={img} alt="" />
                      </div>
                      <div className="inputcateaddformfile">
                        Drag and Drop ,Browse to upload
                      </div>
                      <input
                        type="file"
                        id="inputctaelogfile"
                        onChange={(e) => {
                          setArrayoffiles([...arrayoffiles, e.target.files[0]]);
                        }}
                        hidden
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: width > 700 ? "0.9vw" : "2.7vw",
                  paddingRight: "2vw",
                  textAlign: "right",
                }}
              >
                Please upload file having extensions .jpeg/ .jpg/ .png only.
                <br />
                Image should be less then 512 kb.
              </div>
              <div className="inputfilesshowncatebox">
                {arrayoffiles?.length > 0 &&
                  arrayoffiles?.map((file, index) => {
                    return (
                      <div className="inputfilesshowncatboxsingle">
                        <div className="inputfilesshowncatboxsingleimg">
                          <img src={img1} alt="" />
                        </div>
                        <div className="fileselctednamecate">{file?.name}</div>
                        <div className="inputfilesshowncatboxsingleimg">
                          <img
                            style={{
                              width: width > 700 ? "1.5vw" : "4vw",
                              marginLeft: "1vw",
                              cursor: "pointer",
                            }}
                            src={img21}
                            alt=""
                            onClick={() => {
                              setArrayoffiles([
                                ...arrayoffiles.slice(0, index),
                                ...arrayoffiles.slice(
                                  index + 1,
                                  arrayoffiles.length
                                ),
                              ]);
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="checktemandc">
                <div style={{ border: "none" }} className="checkbox">
                  <input
                    type="checkbox"
                    onChange={() => {
                      setCheckedtocompany(!checkedtocompany);
                      setcheckboxValidaData("");
                    }}
                    name=""
                    id="checkbox"
                  />
                </div>
                <div className="checktermandconditiontext">
                  I agree the{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => window.open("/termsandconditions", "_blank")}
                  >
                    Terms and Condition *
                  </span>
                </div>
              </div>
              <span style={{ color: "red", fontSize: "10px" }}>
                {checkboxValidaData}
              </span>
              <div className="checktemandc">
                <div style={{ border: "none" }} className="checkbox">
                  <input
                    type="checkbox"
                    onChange={() => {
                      setCheckedtocompany_2(!checkedtocompany_2);
                      setcheckboxValidaData_2("");
                    }}
                    name=""
                    id="checkbox"
                  />
                </div>
                <div className="checktermandconditiontext">
                  I agree the{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => window.open("/privacypolicy", "_blank")}
                  >
                    Privacy Policy *
                  </span>
                </div>
              </div>
              <span
                style={{
                  color: "red",
                  fontSize: width > 700 ? "0.9vw" : "2.7vw",
                }}
              >
                {checkboxValidaData_2}
              </span>
              <span
                style={{
                  color: "red",
                  fontSize: width > 700 ? "0.9vw" : "2.7vw",
                }}
              >
                {restag ? "You Already bid to this job" : ""}
              </span>

              <div
                style={{
                  margin: "0vw auto",
                  float: "right",
                  width: width > 700 ? "23vw" : "50vw",
                  marginRight: "2vw",
                  marginBottom: "2vw",
                }}
                className="homejobbuttons"
              >
                <button style={{ background: "white", marginRight: "2vw" }}>
                  Cancel
                </button>

                <button
                  // disabled={checkone && checkone1 && service1name ? false : true}
                  style={{ color: "white" }}
                  onClick={handlesavedaddcatalogue}
                >
                  Submit
                </button>
              </div>
            </div>
          
            <Modal
              open={openp}
              onClose={handleClosep}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={width > 700 ? style : styl3}>
                <div className="imgboxofrewardpostlogo">
                  <img src={img33} alt="" />
                  {width > 700 && (
                    <span>
                      {" "}
                      <CloseIcon
                        style={{
                          position: "relative",
                          left: "23vw",
                          bottom: "22vw",
                          fontSize: "1.5vw",
                          cursor: "pointer",
                        }}
                        onClick={() => handleClosep()}
                      />
                    </span>
                  )}
                </div>
                <div
                  style={{ textAlign: "center" }}
                  className="rewardtiitle500"
                >
                  Successfully Bid the Job
                </div>

                <div style={{ height: "2vw" }}></div>
              </Box>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}

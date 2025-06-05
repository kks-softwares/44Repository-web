import React, { useEffect, useState } from "react";
import { SearchSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import imgfilter from "../../../assets/walletimage/Iconly-Light-Color-Filter.svg";
import Modal from "@mui/material/Modal";
import Listofjobbox from "./Listofjobbox";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid white",
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
  border: "2px solid white",
  boxShadow: 24,
  p: 1,
};
export default function CreateWork({ width }) {
  const { user } = useSelector((state) => state.user);
  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);
  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  const [alljobposted, setAlljobposted] = useState([]);
  const classes = useStyles();
  const [subcategogryid, setsubCategogryid] = useState();
  const [prevsubcategogryid, setprevsubCategogryid] = useState();
  const [searchsubCategorysearch, setSearchsubCategorysearch] = useState("");
  const [degreeset, setDegreeset] = useState("");
  const [arrayoflongdegree, setArrayoflongdegree] = useState();
  const [searchCategorysearch, setSearchCategorysearch] = useState("");
  const [arrayoflongstudy, setArrayoflongstudy] = useState();
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/theCategory/viewCategory?pageSize=50&pageNumber=1&category=${searchCategorysearch}`
      )
      .then((res) => {
        setArrayoflongdegree(res?.data?.success?.data);
      });
  }, [searchCategorysearch]);

  const [Cateid, setCateid] = useState("");
  const [prevCateid, setprevCateid] = useState("");
  useEffect(() => {
    if (prevCateid) {
      axios
        .get(
          `${API_HOST}/subCategory/viewSubCategory?pageSize=50&pageNumber=1&subCategory=${searchsubCategorysearch}&categoryId=${prevCateid}`
        )
        .then((res) => {
          setArrayoflongstudy(res?.data?.success?.data);
        });
    }
  }, [searchsubCategorysearch, prevCateid]);

  const [anchorElx4, setAnchorElx4] = React.useState(null);
  const handleClickx4 = (event) => {
    setAnchorElx4(event.currentTarget);
  };
  const handleClosex4 = () => {
    setAnchorElx4(null);
  };
  const openx4 = Boolean(anchorElx4);
  const idx4 = openx4 ? "simple-popover" : undefined;

  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  const open4 = Boolean(anchorEl4);
  const id4 = open4 ? "simple-popover" : undefined;

  const [selectedbiddingvalue, setSelectedbiddingvalue] = useState("");
  const [prevselectedbiddingvalue, setprevSelectedbiddingvalue] = useState("");

  const [locationname, setLocationname] = useState([]);

  const [arrayoflongstudy1, setArrayoflongstudy1] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/location/viewLocation?pageSize=100&pageNumber=1&search=${locationname}`
      )
      .then((res) => {
        setArrayoflongstudy1(res?.data?.success?.data);
      });
  }, [locationname]);

  const [studyset, setstudyset] = useState("");
  const [studyset1, setstudyset1] = useState("");

  const [arrayofminbudget, setArrayofminbudget] = useState([]);

  useEffect(() => {
    axios.get(`${API_HOST}/budget/viewBudget`).then((res) => {
      setArrayofminbudget(res?.data?.success?.data);
    });
  }, []);

  const [prevdatestart1, setprevDatestart1] = useState();
  const [prevdatestart1x, setprevDatestart1x] = useState();
  const [datestart1, setDatestart1] = useState();
  const [datestart1x, setDatestart1x] = useState();
  const [studyset2, setstudyset2] = useState("");
  const [studyset3, setstudyset3] = useState("");
  const [anchorElx3, setAnchorElx3] = React.useState(null);

  const handleClickx3 = (event) => {
    setAnchorElx3(event.currentTarget);
  };

  const handleClosex3 = () => {
    setAnchorElx3(null);
  };

  const openx3 = Boolean(anchorElx3);
  const idx3 = openx3 ? "simple-popover" : undefined;

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const setdateadd = (datestart3x) => {
    const today = new Date(datestart3x);
  
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const [anchorElx2, setAnchorElx2] = React.useState(null);
  const handleClickx2 = (event) => {
    setAnchorElx2(event.currentTarget);
  };
  const handleClosex2 = () => {
    setAnchorElx2(null);
  };
  const openx2 = Boolean(anchorElx2);
  const idx2 = openx2 ? "simple-popover" : undefined;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [allusers, setAllusers] = useState([]);

  const [recall, setRecall] = useState(false);

  useEffect(() => {
    if (user?.userName) {
      axios
        .get(
          `${API_HOST}/biding/bidsByUser?userName=${
            user?.userName
          }&pageSize=9&pageNumber=${page}&search=${setSelectedCategory}&${
            subcategogryid ? "subCategory=" : ""
          }${subcategogryid}&${
            selectedbiddingvalue ? "bidingValue=" : ""
          }${selectedbiddingvalue}&${studyset ? "location=" : ""}${studyset}&${
            Cateid ? "category=" : ""
          }${Cateid}&${datestart1 ? "from=" : ""}${datestart1}&${
            datestart1x ? "to=" : ""
          }${datestart1x}
        `
        )
        .then((res) => {
          setAllusers(res.data?.success?.data);
          if (res.data?.success?.data?.length === 9) {
            settotalpages(page + 1);
          } else {
            settotalpages(page);
          }
        });
    }
  }, [page, setSelectedCategory, recall, user]);

  return (
    <div className="BrowseWorkMain-cntainer">
      <div
        style={{ alignItems: "center", justifyContent: "flex-start" }}
        className="searchboxcontainer"
      >
        <div className="serachjobbox">
          <span>
            <SearchSharp style={{ fontSize: width > 700 ? "1.7vw" : "5vw" }} />
          </span>
          <input
            type="text"
            placeholder={"search Your Job "}
            value={setSelectedCategory}
            onChange={(e) => {
              setSetSelectedCategory(e.target.value);
            }}
          />
          {width > 700 && (
            <button
              style={{ width: "11vw", height: "2.6vw" }}
              className="hb-button"
            >
              Search
            </button>
          )}
        </div>
        <div>
          <div
            style={{
              marginTop: width > 700 ? "0vw" : "1vw",
              marginBottom: "0vw",
              paddingBottom: "0.5vw",
              paddingTop: "0vw",
            }}
            className="filterboxflex"
          >
            <div
              onClick={() => {
                handleOpen();
              }}
              className="filtericonbox"
            >
              <img src={imgfilter} alt="" /> {width > 700 && "Filter"}
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={width > 700 ? style : style1}>
                <div
                  style={{
                    maxHeight: "80vh",
                    overflow: "scroll",
                    overflowX: "hidden",
                  }}
                >
                  <div className="profiletitleandmenunav">
                    <div className="profiledetailstitle">Add Filters</div>
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
                  <div className="jobpodtedfieldtitile"> Select Category </div>

                  <div
                    style={{ left: "0vw", width: "98%", marginLeft: "0%" }}
                    className="loginfield"
                    onClick={handleClickx2}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Category "
                      variant="outlined"
                      disabled
                      value={degreeset}
                      style={{ width: "100%" }}
                      InputLabelProps={{
                        style: {
                          fontSize: width > 700 ? "1vw" : "3vw",
                          fontFamily: "Poppins",
                          fontStyle: "500",
                          fontWeight: "500",
                          color: "black",
                        },
                      }}
                      inputProps={{ className: classes.input }}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                    <span style={{ width: "0.1vw" }}>
                      <KeyboardArrowDownOutlined
                        style={{
                          fontSize: width > 700 ? "1.5vw" : "5vw",
                          position: "relative",
                          right: width > 700 ? "2vw" : "6vw",
                          top: width > 700 ? "1vw" : "3vw",
                        }}
                      />
                    </span>
                  </div>

                  <Popover
                    id={idx2}
                    open={openx2}
                    anchorEl={anchorElx2}
                    onClose={handleClosex2}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <div
                      style={{
                        maxHeight: width > 700 ? "18vw" : "40vw",
                        overflow: "scroll",
                        width: width > 700 ? "44vw" : "83vw",
                      }}
                    >
                      <Typography
                        sx={{
                          p: 1,
                          pl: 1,
                          ml: 1,
                          pr: 0,
                          width: width > 700 ? "43vw" : "80vw",
                          position: "fixed",
                          background: "white",
                          zIndex: "10",
                        }}
                      >
                        <input
                          placeholder="search here .."
                          onChange={(e) => {
                            setSearchCategorysearch(e.target.value);
                          }}
                          style={{
                            width: "97%",
                            border: "1.5px solid #00000050",
                            outline: "none",
                            height: "2.5",
                            borderRadius: "0.21vw",
                          }}
                        />
                      </Typography>
                      <Typography
                        sx={{
                          p: 2.5,
                          pl: 1,
                          ml: 1,
                          width: "95%",
                          cursor: "pointer",
                        }}
                      ></Typography>

                      {arrayoflongdegree?.length > 0 &&
                        arrayoflongdegree.map((data, index) => {
                          return (
                            <Typography
                              sx={{
                                p: 0.51,
                                pl: 1,
                                ml: 1,
                                width: "95%",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setDegreeset(data?.category);
                                setprevCateid(data?._id);
                                handleClosex2();
                              }}
                            >
                              {data?.category}
                            </Typography>
                          );
                        })}
                    </div>
                  </Popover>

                  <div>
                    <div
                      style={{ left: "0vw", width: "98%", marginLeft: "0%" }}
                      className="loginfield"
                      onClick={handleClickx3}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Sub Category *"
                        variant="outlined"
                        disabled
                        value={studyset2}
                        style={{ width: "100%" }}
                        InputLabelProps={{
                          style: {
                            fontSize: width > 700 ? "1vw" : "3vw",
                            fontFamily: "Poppins",
                            fontStyle: "500",
                            fontWeight: "500",
                            color: "black",
                          },
                        }}
                        inputProps={{ className: classes.input }}
                        onChange={(e) => {
                          console.log(e.target.value);
                        }}
                      />
                      <span style={{ width: "0.1vw" }}>
                        <KeyboardArrowDownOutlined
                          style={{
                            fontSize: width > 700 ? "1.5vw" : "5vw",
                            position: "relative",
                            right: width > 700 ? "2vw" : "6vw",
                            top: width > 700 ? "1vw" : "3vw",
                          }}
                        />
                      </span>
                    </div>
                    <Popover
                      id={idx3}
                      open={openx3}
                      anchorEl={anchorElx3}
                      onClose={handleClosex3}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <div
                        style={{
                          maxHeight: width > 700 ? "18vw" : "40vw",
                          overflow: "scroll",
                          width: width > 700 ? "44vw" : "83vw",
                        }}
                      >
                        <Typography
                          sx={{
                            p: 1,
                            pl: 1,
                            ml: 1,
                            width: width > 700 ? "43vw" : "80vw",
                            position: "fixed",
                            background: "white",
                            zIndex: "10",
                          }}
                        >
                          <input
                            onChange={(e) => {
                              setSearchsubCategorysearch(e.target.value);
                            }}
                            style={{
                              width: "97%",
                              border: "1.5px solid #00000050",
                              outline: "none",
                              height: "2.5",
                              borderRadius: "0.21vw",
                            }}
                          />
                        </Typography>
                        <Typography
                          sx={{
                            p: 2.5,
                            pl: 1,
                            ml: 1,
                            width: "95%",
                            cursor: "pointer",
                          }}
                        ></Typography>

                        {arrayoflongstudy?.length > 0 &&
                          arrayoflongstudy?.map((data, index) => {
                            return (
                              <Typography
                                sx={{
                                  p: 0.51,
                                  pl: 1,
                                  ml: 1,
                                  width: "95%",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  setstudyset2(data?.subCategory);
                                  setprevsubCategogryid(data?._id);

                                  handleClosex3();
                                }}
                              >
                                {data?.subCategory}
                              </Typography>
                            );
                          })}
                      </div>
                    </Popover>
                  </div>

                  <div className="jobpodtedfieldtitile">
                    {" "}
                    Select Bidding Value{" "}
                  </div>

                  <div>
                    <div
                      style={{ left: "0vw", width: "98%", marginLeft: "0%" }}
                      className="loginfield"
                      onClick={handleClick4}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Bidding"
                        variant="outlined"
                        disabled
                        value={prevselectedbiddingvalue}
                        style={{ width: "100%" }}
                        InputLabelProps={{
                          style: {
                            fontSize: width > 700 ? "1vw" : "3vw",
                            fontFamily: "Poppins",
                            fontStyle: "500",
                            fontWeight: "500",
                            color: "black",
                          },
                        }}
                        inputProps={{ className: classes.input }}
                      />
                      <span style={{ width: "0.1vw" }}>
                        <KeyboardArrowDownOutlined
                          style={{
                            fontSize: width > 700 ? "1.5vw" : "5vw",
                            position: "relative",
                            right: width > 700 ? "2vw" : "6vw",
                            top: width > 700 ? "1vw" : "3vw",
                          }}
                        />
                      </span>
                    </div>
                    <Popover
                      id={id4}
                      open={open4}
                      anchorEl={anchorEl4}
                      onClose={handleClose4}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <div
                        style={{
                          maxHeight: width > 700 ? "18vw" : "40vw",
                          overflow: "scroll",
                        }}
                      >
                        {arrayofminbudget?.length > 0 &&
                          arrayofminbudget?.map((data, index) => {
                            return (
                              <Typography
                                sx={{
                                  p: 0.51,
                                  pl: 1,
                                  ml: 1,
                                  width: width > 700 ? "43.5vw" : "80vw",

                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  setprevSelectedbiddingvalue(
                                    data?.minimumBudget
                                  );
                                  handleClose4();
                                }}
                              >
                                $ {data?.minimumBudget} +
                              </Typography>
                            );
                          })}
                      </div>
                    </Popover>
                  </div>

                  <div className="jobpodtedfieldtitile"> Select Location </div>

                  <div>
                    <div
                      style={{ left: "0vw", width: "98%", marginLeft: "0%" }}
                      className="loginfield"
                      onClick={handleClickx4}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Location"
                        variant="outlined"
                        disabled
                        value={studyset1}
                        style={{ width: "100%" }}
                        InputLabelProps={{
                          style: {
                            fontSize: width > 700 ? "1vw" : "3vw",
                            fontFamily: "Poppins",
                            fontStyle: "500",
                            fontWeight: "500",
                            color: "black",
                          },
                        }}
                        inputProps={{ className: classes.input }}
                        onChange={(e) => {
                          console.log(e.target.value);
                        }}
                      />
                      <span style={{ width: "0.1vw" }}>
                        <KeyboardArrowDownOutlined
                          style={{
                            fontSize: width > 700 ? "1.5vw" : "5vw",
                            position: "relative",
                            right: width > 700 ? "2vw" : "6vw",
                            top: width > 700 ? "1vw" : "3vw",
                          }}
                        />
                      </span>
                    </div>
                    <Popover
                      id={idx4}
                      open={openx4}
                      anchorEl={anchorElx4}
                      onClose={handleClosex4}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <div
                        style={{
                          maxHeight: width > 700 ? "18vw" : "40vw",
                          overflow: "scroll",
                          width: width > 700 ? "" : "83vw",
                        }}
                      >
                        <Typography
                          sx={{
                            p: 1,
                            pl: 1,
                            ml: 1,
                            width: width > 700 ? "43vw" : "80vw",
                            position: "fixed",
                            background: "white",
                            zIndex: "10",
                          }}
                        >
                          <input
                            onChange={(e) => {
                              setLocationname(e.target.value);
                            }}
                            style={{
                              width: "95%",
                              border: "1.5px solid #00000050",
                              outline: "none",
                              height: "2.5",
                              borderRadius: "0.21vw",
                            }}
                          />
                        </Typography>
                        <Typography
                          sx={{
                            p: 2.5,
                            pl: 1,
                            ml: 1,
                            width: width > 700 ? "43vw" : "80vw",
                            cursor: "pointer",
                          }}
                        ></Typography>

                        {arrayoflongstudy1?.map((data, index) => {
                          return (
                            <Typography
                              sx={{
                                p: 0.51,
                                pl: 1,
                                ml: 1,
                                width: width > 700 ? "43vw" : "80vw",

                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setstudyset1(
                                  data?.area +
                                    ", " +
                                    data?.city +
                                    ", " +
                                    data?.state
                                );
                                handleClosex4();
                              }}
                            >
                              {data?.area +
                                ", " +
                                data?.city +
                                ", " +
                                data?.state}
                            </Typography>
                          );
                        })}
                      </div>
                    </Popover>
                  </div>

                  <div className="jobpodtedfieldtitile">Created on</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "98%",
                    }}
                  >
                    <div style={{ width: "50%" }}>
                      <div
                        style={{ fontWeight: "400" }}
                        className="jobpodtedfieldtitile"
                      >
                        From{" "}
                      </div>
                      <div className="jobpostfieldinputbox">
                        <input
                          style={{ width: "100%" }}
                          type="date"
                          className="input-homejobformdate"
                          name=""
                          id=""
                          value={prevdatestart1}
                          max={disablePastDate()}
                          min={"2020-01-01"}
                          maxlength="4"
                          onChange={(e) => {
                            setprevDatestart1(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ width: "50%" }}>
                      <div
                        style={{ fontWeight: "400" }}
                        className="jobpodtedfieldtitile"
                      >
                        To
                      </div>
                      <div className="jobpostfieldinputbox">
                        <input
                          style={{ width: "100%" }}
                          type="date"
                          className="input-homejobformdate"
                          name=""
                          id=""
                          value={prevdatestart1x}
                          max={disablePastDate()}
                          min={"2020-01-01"}
                          maxlength="4"
                          onChange={(e) => {
                            setprevDatestart1x(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>

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
                      onClick={() => {
                        handleClose();
                      }}
                    >
                      Cancel
                    </div>
                    {width <= 700 && (
                      <div
                        style={{
                          background: "white",
                          color: "black",
                          cursor: "pointer",
                        }}
                        className="handlecirclieaboutsave"
                        onClick={() => {
                          setCateid();
                          setDatestart1();
                          setDatestart1x();
                          setstudyset("");
                          setSelectedbiddingvalue("");

                          setsubCategogryid();
                          setprevCateid();
                          setprevDatestart1();
                          setprevDatestart1x();
                          setstudyset1("");
                          setprevSelectedbiddingvalue("");
                          setprevsubCategogryid();
                          setDegreeset("");
                          setstudyset2("");
                        }}
                      >
                        Reset
                      </div>
                    )}
                    <div
                      style={{ cursor: "pointer" }}
                      className="handlecirclieaboutsave"
                      onClick={() => {
                        setCateid(prevCateid);
                        setDatestart1(prevdatestart1);
                        setDatestart1x(prevdatestart1x);
                        setstudyset(studyset1);
                        setSelectedbiddingvalue(prevselectedbiddingvalue);
                        handleClose();
                        setsubCategogryid(prevsubcategogryid);
                        setRecall(!recall);
                      }}
                    >
                      Submit
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>

            {width > 700 && (
              <div
                onClick={() => {
                  setCateid();
                  setDatestart1();
                  setDatestart1x();
                  setstudyset("");
                  setSelectedbiddingvalue("");
                  handleClose();
                  setsubCategogryid();
                  setprevCateid();
                  setprevDatestart1();
                  setprevDatestart1x();
                  setstudyset1("");
                  setprevSelectedbiddingvalue("");
                  setprevsubCategogryid();
                  setDegreeset("");
                  setstudyset2("");

                  setRecall(!recall);
                }}
                style={{ cursor: "pointer" }}
                className="filtericonboxname"
              >
                Clear all
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: width > 700 ? "2vw" : "6vw",
          marginTop: width > 700 ? "" : "2vw",
        }}
      >
        <div style={{ width: "100%" }}>
          <div
            style={{
              position: "relative",
              right: "1vw",
              top: width > 700 ? "1vw" : "5vw",
            }}
            className="profileworkhistruytoggleer"
          >
            <div
              className="profileworkhistruytoggleervalue"
              style={{
                textAlign: "center",
                width: width > 700 ? "12vw" : "36vw",
                color: "#064C87",
              }}
            >
              List of Applied Jobs
            </div>

            <div
              style={{
                color: "#064C87",
                borderBottom: "0.3vw solid #064C87",
                width: width > 700 ? "12vw" : "36vw",
                position: "relative",
                right: width > 700 ? "13vw" : "37vw",
                bottom: "0.0vw",
                transitionDuration: "1s",
                borderRadius: "0.2vw",
              }}
            ></div>
          </div>
        </div>
      </div>

      {workhistorytoggle === 1 ? (
        <>
          <div className="catalogcontainerdashbaord">
            {allusers?.length > 0 ?
              allusers?.map((data, index) => {
                return (
                  <Listofjobbox
                    data={data?.appliedForJobPost[0]?.jobPostId}
                    data1={data}
                    width={width}
                  />
                );
              }):
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                  marginTop: "2vw",
                }}
              >
                There are no jobs similar to your search .{" "}
               
              </div>}
          </div>
          {totalpages !== 1 ? (
            <div
              style={{ width: width > 700 ? "25vw" : "90vw" }}
              className="paginationbox"
            >
              <div>
                <ArrowBackIosIcon
                  style={{ fontSize: width > 700 ? "1.5vw" : "4vw" }}
                />
              </div>

              <div
                hidden={page - 4 > 0 ? false : true}
                onClick={() => setPage(page - 4)}
              >
                {page - 4}
              </div>
              <div
                hidden={page - 3 > 0 ? false : true}
                onClick={() => setPage(page - 3)}
              >
                {page - 3}
              </div>
              <div
                hidden={page - 2 > 0 ? false : true}
                onClick={() => setPage(page - 2)}
              >
                {page - 2}
              </div>
              <div
                hidden={page - 1 > 0 ? false : true}
                onClick={() => setPage(page - 1)}
              >
                {page - 1}
              </div>
              <div style={{ color: "#2A6599" }}>{page}</div>
              <div
                hidden={page + 1 > totalpages ? true : false}
                onClick={() => setPage(page + 1)}
              >
                {page + 1}
              </div>

              <div>
                <ArrowForwardIosIcon
                  style={{ fontSize: width > 700 ? "1.5vw" : "4vw" }}
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

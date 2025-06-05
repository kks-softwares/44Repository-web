import React, { useEffect, useState } from "react";
import img from "../../assets/experts/Iconly-Light-Search.svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import axios from "axios";
import API_HOST from "../../env";
import CategorySearchItem from "../Category/CategorySearchItem";
import { height } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  select: {
    height: "2.5vw",
    width: "100%",
    marginTop: "0.2vw",
    padding: "1vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1vw",
    lineHeight: "120%",
    color: "#FFFFFF",
  },
  select2: {
    height: "1vw",
    width: "100%",
    marginTop: "0.1vw",
    padding: "0.9vw 0.5vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
    color: "#FFFFFF",
  },
  select3: {
    height: "1vw",
    width: "100%",
    marginTop: "0.1vw",
    padding: "0vw 0vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
    color: "#FFFFFF",
    position: "relative",
    top: "0.81vw",
    left: "0.2vw",
  },
  icon: {
    fill: "white",
  },
}));

export default function CateGoryBanner({ width }) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [age4, setAge4] = React.useState(0);
  const [age5, setAge5] = React.useState(0);
  const handleChange4x = (event) => {
    setAge4(event.target.value);
  };
  const handleChange5x = (event) => {
    setAge5(event.target.value);
  };
  const [minBudegt, setMinBudegt] = useState();
  const [maxBudegt, setMaxBudegt] = useState();

  const [arrayofminbudget, setArrayofminbudget] = useState([]);
  const [arrayofminbudget2, setArrayofminbudget2] = useState([
    5, 10, 15, 20, 30,
  ]);
  useEffect(() => {
    axios.get(`${API_HOST}/budget/viewBudget`).then((res) => {
      setArrayofminbudget(res?.data?.success?.data);
    });
  }, []);

  const [searchedData, setSearchedData] = useState([]);

  const [page, setpage] = useState(1);
  const [CatalogueTtile, setCatalogueTtile] = useState("");
  const [totalcount, setTotalcount] = useState(1);

  const [settextdata, setSettextdata] = useState("");

  useEffect(() => {
    if (page !== 1) {
      axios
        .get(
          `${API_HOST}/catalouge/viewCatalouge?pageSize=6&pageNumber=${page}&${
            text ? "catalougeTitle" : "catalougeTitle"
          }=${text}&${minBudegt ? "budget" : ""}=${minBudegt}&${
            maxBudegt ? "deliveryDate" : ""
          }=${maxBudegt}`
        )
        .then((res) => {
          setSearchedData([...searchedData, ...res?.data?.success?.data]);
          setTotalcount(res?.data?.success?.data?.length);
          setCatalogueTtile(settextdata);
        })
        .catch((err) => {});
    }
  }, [page]);

  const handle_search = () => {
    axios
      .get(
        `${API_HOST}/catalouge/viewCatalouge?pageSize=6&pageNumber=${page}&${
          text ? "catalougeTitle" : "catalougeTitle"
        }=${text}&${minBudegt ? "budget" : ""}=${minBudegt}&${
          maxBudegt ? "deliveryDate" : ""
        }=${maxBudegt}`
      )
      .then((res) => {
        setSearchedData(res?.data?.success?.data);
        setTotalcount(res?.data?.success?.data?.length);
        setCatalogueTtile(settextdata);
        setpage(1)
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div className="baxkground1">
        <div style={{height:width>700?"":"125vw"}} className="expertgbannercontainer1">
          <div style={{ width: width > 700 ? "55%" : "92%", marginTop: "7vw" }}>
            <div style={{ color: "white" }} className="h-banner-accerlate">
              ACCELERATE YOUR CAREER
            </div>
            <div style={{ color: "white" }} className="h-banner-carrierland">
              Land Your Dream Tech Job
            </div>
            <div
              style={{
                color: "white",
                marginBottom: width > 700 ? "2vw" : "5vw",
              }}
              className="hbsmalltext"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </div>
            <div className="searchbuttonexpert">
              <img src={img} alt="" />
              <input
                style={{ width: "100%" }}
                type="text"
                input={text}
                placeholder="back end developer"
                onChange={(e) => setText(e.target.value)}
              />
              <button
                style={{ width: width > 700 ? "16vw" : "30vw" }}
                onClick={() => {
                  handle_search();
                }}
              >
                Search
              </button>
            </div>
            <div className="filter-row-service">
              <div style={{width:"fit-content"}}>Filter by :</div>

              <div style={{ width: width>700? "35%":"30%" }}>
                <div className="jobpostfieldinputbox">
                  <Box
                    sx={{
                      background: "white",
                      border: "1px solid #7070705b",
                      height: width > 700 ? "2.1vw" : "8vw",
                      width: "95%",
                      borderRadius: "5px",
                      padding: width > 700 ? "0.1vw" : "3vw 1vw",
                      margin: width > 700 ? "0.5vw 0vw" : "1vw 0",
                    }}
                    className="setting-toggler"
                  >
                    <FormControl variant="standard" fullWidth>
                      <Select
                        className={classes.select2}
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age4}
                        disableUnderline
                        inputProps={{
                          classes: {
                            icon: classes.icon,
                          },
                        }}
                        onChange={handleChange4x}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              bgcolor: "white",

                              "& .MuiMenuItem-root": {
                                padding: width > 700 ? "0.1vw 2vw" : "0vw 3vw",
                                width: "100%",
                                height: width > 700 ? "2vw" : "7vw",
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: width > 700 ? "0.81vw" : "2.7vw",
                                lineHeight: width > 700 ? "1vw" : "4vw",
                                color: "#6b6b6b",
                                minHeight: width > 700 ? "2vw" : "6vw",
                              },
                            },
                          },
                        }}
                      >
                        <MenuItem onClick={() => {}} value={0} hidden>
                          Budget
                        </MenuItem>
                        {arrayofminbudget?.length > 0 &&
                          arrayofminbudget?.map((data, index) => {
                            return (
                              <MenuItem
                                onClick={() => {
                                  setMinBudegt(data?.minimumBudget);
                                }}
                                value={index + 1}
                              >
                                $ {data?.minimumBudget}
                              </MenuItem>
                            );
                          })}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>

              <div style={{ width: width>700? "35%":"39%" }}>
                <div className="jobpostfieldinputbox">
                  <Box
                    sx={{
                      background: "white",
                      border: "1px solid #7070705b",
                      height: width > 700 ? "2.1vw" : "8vw",
                      width: "94%",
                      borderRadius: "5px",
                      padding: width > 700 ? "0.01vw" : "3vw 1vw",
                      margin: width > 700 ? "0.5vw 0vw" : "1vw 0",
                    }}
                    className="setting-toggler"
                  >
                    <FormControl variant="standard" fullWidth>
                      <Select
                        className={classes.select2}
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age5}
                        disableUnderline
                        inputProps={{
                          classes: {
                            icon: classes.icon,
                          },
                        }}
                        onChange={handleChange5x}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              bgcolor: "white",

                              "& .MuiMenuItem-root": {
                                padding: width > 700 ? "0.1vw 2vw" : "0vw 3vw",
                                width: "100%",
                                height: width > 700 ? "2vw" : "7vw",
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: width > 700 ? "0.81vw" : "2.7vw",
                                lineHeight: width > 700 ? "1vw" : "4vw",
                                color: "#6b6b6b",
                                minHeight: width > 700 ? "2vw" : "6vw",
                              },
                            },
                          },
                        }}
                      >
                        <MenuItem onClick={() => {}} value={0} hidden>
                          Delivery Time
                        </MenuItem>
                        {arrayofminbudget2?.length > 0 &&
                          arrayofminbudget2?.map((data, index) => {
                            return (
                              <MenuItem
                                onClick={() => {
                                  setMaxBudegt(data);
                                }}
                                value={index + 1}
                              >
                                {data} days
                              </MenuItem>
                            );
                          })}
                      </Select>
                    </FormControl>
                  </Box>
                </div>{" "}
              </div>

              <div
                style={{ cursor: "pointer", width:"fit-content"}}
           
                onClick={() => {
                  setAge4(0);
                  setAge5(0);
                }}
              >
                Clear All
              </div>
            </div>
          </div>

          <div
            style={{
              width: "40%",
              position: "relative",
              bottom: width > 700 ? "5vw" : "0vw",
              marginTop:width<=700 && "2vw"
            }}
          >
            <div
              style={{ padding: "1vw", margin: "5vw", marginLeft: "25vw" }}
              className="expertdetailsbox"
            >
              <div className="hradingcategorybox1">Service in number</div>
              <div className="hradingcategorybox">4000+</div>
            </div>
            <div
              style={{ padding: "1vw", margin: "5vw" }}
              className="expertdetailsbox"
            >
              <div className="hradingcategorybox1">Response time</div>
              <div className="hradingcategorybox">2 hrs</div>
            </div>
            <div
              style={{ padding: "1vw", margin: "5vw", marginLeft: "25vw" }}
              className="expertdetailsbox"
            >
              <div className="hradingcategorybox1">Satisfation rate</div>
              <div className="hradingcategorybox">80%</div>
            </div>
          </div>
        </div>
      </div>
      {searchedData.length > 0 && (
        <CategorySearchItem
          searchedData={searchedData}
          CatalogueTtile={CatalogueTtile}
          totalcount={totalcount}
          setpage={setpage}
          page={page}
          width={width}
        />
      )}
    </div>
  );
}

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
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
export default function CommunityForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const [month1, setMonth1] = useState("");
  const [year1, setyear1] = useState("");
  const [month2, setMonth2] = useState("");
  const [year2, setyear2] = useState("");

  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");

  const [anchorElx, setAnchorElx] = React.useState(null);
  const handleClickx = (event) => {
    setAnchorElx(event.currentTarget);
  };

  const handleClosex = () => {
    setAnchorElx(null);
  };

  const openx = Boolean(anchorElx);
  const idx = openx ? "simple-popover" : undefined;

  const [anchorElx1, setAnchorElx1] = React.useState(null);
  const handleClickx1 = (event) => {
    setAnchorElx1(event.currentTarget);
  };

  const handleClosex1 = () => {
    setAnchorElx1(null);
  };

  const openx1 = Boolean(anchorElx1);
  const idx1 = openx1 ? "simple-popover" : undefined;
  const [anchorElx2, setAnchorElx2] = React.useState(null);
  const handleClickx2 = (event) => {
    setAnchorElx2(event.currentTarget);
  };

  const handleClosex2 = () => {
    setAnchorElx2(null);
  };

  const openx2 = Boolean(anchorElx2);
  const idx2 = openx2 ? "simple-popover" : undefined;
  const [anchorElx3, setAnchorElx3] = React.useState(null);
  const handleClickx3 = (event) => {
    setAnchorElx3(event.currentTarget);
  };

  const handleClosex3 = () => {
    setAnchorElx3(null);
  };

  const openx3 = Boolean(anchorElx3);
  const idx3 = openx3 ? "simple-popover" : undefined;

  const [anchorElx3deg, setAnchorElx3deg] = React.useState(null);
  const handleClickx3deg = (event) => {
    setAnchorElx3deg(event.currentTarget);
  };

  const handleClosex3deg = () => {
    setAnchorElx3deg(null);
  };

  const openx3deg = Boolean(anchorElx3deg);
  const idx3deg = openx3deg ? "simple-popover" : undefined;

  const [arrayofdegree, setArrayofdegree] = useState([
    "UX/UI Designer",
    "UX/UI Designer2",
  ]);
  const [arrayoflongdegree, setArrayoflongdegree] = useState(arrayofdegree);
  const [degreeset, setDegreeset] = useState("");

  const [companyName, setCompanyName] = useState("");

  const [descriptioncallageadd, setdescriptioncallageadd] = useState("");

  return (
    <div>
      <div className="addnewbutton">
        <button onClick={handleOpen}>Add New</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="profiletitleandmenunav">
            <div className="profiledetailstitle">New Topic</div>

            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClose}
                  style={{ fontSize: "1.5vw" }}
                />
              </div>
            </div>
          </div>

          <hr />
          <div style={{ left: "0vw", width: "100%" }} className="loginfield">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={companyName}
              style={{ width: "100%" }}
              InputLabelProps={{
                style: {
                  fontSize: "1vw",
                  fontFamily: "Poppins",
                  fontStyle: "500",
                  fontWeight: "500",
                  color: "black",
                },
              }}
              inputProps={{ className: classes.input }}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
            />
          </div>

          <div
            style={{ left: "0vw", width: "100%" }}
            className="loginfield"
            onClick={handleClickx3deg}
          >
            <TextField
              id="outlined-basic"
              label="Category"
              variant="outlined"
              disabled
              value={degreeset}
              style={{ width: "100%" }}
              InputLabelProps={{
                style: {
                  fontSize: "1vw",
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
                  fontSize: "1.5vw",
                  position: "relative",
                  right: "2vw",
                  top: "1vw",
                }}
              />
            </span>
          </div>
          <Popover
            id={idx3deg}
            open={openx3deg}
            anchorEl={anchorElx3deg}
            onClose={handleClosex3deg}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div style={{ maxHeight: "18vw", overflow: "scroll" }}>
              <Typography
                sx={{
                  p: 1,
                  pl: 1,
                  ml: 1,
                  width: "45.9vw",
                  position: "fixed",
                  background: "white",
                  zIndex: "10",
                }}
              >
                <input
                  onChange={(e) => {
                    setArrayoflongdegree(
                      arrayofdegree.filter((x) => x.includes(e.target.value))
                    );
                   
                  }}
                  style={{
                    width: "99%",
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
                  width: "45.9vw",
                  cursor: "pointer",
                }}
              ></Typography>

              {arrayoflongdegree.map((data, index) => {
                return (
                  <Typography
                    sx={{
                      p: 0.51,
                      pl: 1,
                      ml: 1,
                      width: "43vw",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setDegreeset(data);
                      handleClosex3deg();
                    }}
                  >
                    {data}
                  </Typography>
                );
              })}
            </div>
          </Popover>

          <div style={{ left: "0vw", width: "100%" }} className="loginfield">
            <TextField
              id="outlined-basic"
              label="Description (Optional)"
              variant="outlined"
              value={descriptioncallageadd}
              multiline
              rows="6"
              style={{ width: "100%" }}
              InputLabelProps={{
                style: {
                  fontSize: "1vw",
                  fontFamily: "Poppins",
                  fontStyle: "500",
                  fontWeight: "500",
                  color: "black",
                },
              }}
              inputProps={{ className: classes.input }}
              onChange={(e) => {
                
                setdescriptioncallageadd(e.target.value);
              }}
            />
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
              //   onClick={handleaddcallage}
            >
              SAVE
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

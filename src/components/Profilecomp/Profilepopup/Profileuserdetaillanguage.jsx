import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/userSlice";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import {
  DeleteOutlineOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
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
export default function Profileuserdetaillanguage({ language, width }) {
  const dispatch = useDispatch();
  const [month1, setMonth1] = useState(language?.language);
  const [year1, setyear1] = useState(language?.proficiencyLevel);
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const handlelangugaedlete = () => {
    const data = {
      userId: user?.userId,
      _id: language?._id,
    };
    axios.post(`${API_HOST}/users/removeUserLanguage`, data).then((res) => {
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

  const handleeditlanguage = () => {
    const data = {
      userId: user?.userId,
      _id: language?._id,
      language: month1,
      proficiencyLevel: year1,
    };
    axios.post(`${API_HOST}/users/editLanguage`, data).then((res) => {
      window.localStorage.setItem(
        "user",
        JSON.stringify({ ...res.data.success.data })
      );
      dispatch(
        userActions.setUser({
          user: { ...res.data.success.data },
        })
      );
      handleClose1();
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: width > 700 ? "21vw" : "90vw",
        }}
      >
        <div className="profileuserfirstonedata">
          {language?.language} , {language?.proficiencyLevel}
        </div>
        <div style={{ display: "flex" }}>
          <DeleteOutlineOutlined
            onClick={handleOpen}
            style={{
              cursor: "pointer",
              fontSize: width > 700 ? "1.3vw" : "4vw",
              color: "gray",
              margin: "0 0.61vw",
            }}
          />
          <EditIcon
            onClick={handleOpen1}
            style={{
              fontSize: width > 700 ? "1.3vw" : "4vw",
              color: "gray",
              margin: "0 0.61vw",
              cursor: "pointer",
            }}
          />
        </div>
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={  width>700? style:style1}>
            <div className="profiletitleandmenunav">
              <div style={{ width: "200%" }} className="profiledetailstitle">
                Edit Language
              </div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose1}
                    style={{ fontSize: width>700?  "1.5vw":"4vw" ,marginRight:"2vw", cursor: "pointer"  }}
                  />
                </div>
              </div>
            </div>

            <hr style={{ color: "#00000090" }} />

            <div style={{ display: "flex", width: "100%",flexDirection:width>700? "row":"column" }}>
              <div
                style={{
                  left:width>700 ?"0vw":"",
                  width: width>700? "49%":"98%",
                  margin: width>700?"0.3vw 0":"2vw 0vw",
                }}
                className="loginfield"
                onClick={handleClickx}
              >
                <TextField
                  id="outlined-basic"
                  label="Language"
                  variant="outlined"
                  placeholder="English"
                  value={month1}
                  style={{ width:width>700?  "95%":"100%" }}
                  InputLabelProps={{
                    style: {
                      fontSize:width>700?  "1vw":"3vw",
                      fontFamily: "Poppins",
                      fontStyle: "500",
                      fontWeight: "500",
                      color: "black",
                    },
                  }}
                  onChange={handleClickx}
                  inputProps={{ className: classes.input }}
                />
               {width>700 && <span>
                  <KeyboardArrowDownOutlined
                    style={{
                      fontSize: "1.5vw",
                      position: "relative",
                      right: "2vw",
                      top: "1vw",
                    }}
                  />
                </span>}
              </div>
              <Popover
                id={idx}
                open={openx}
                anchorEl={anchorElx}
                onClose={handleClosex}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                style={{}}
              >
                <div style={{ maxHeight: "20vw", overflow: "scroll" }}>
                  <Typography
                    sx={{
                      p: 1,
                      pl: 1,
                      ml: 1,
                      width:width>700 ?"20vw":"80vw",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setMonth1("English");
                      handleClosex();
                    }}
                  >
                    English
                  </Typography>
                  <Typography
                    sx={{
                      p: 1,
                      pl: 1,
                      ml: 1,
                      width:width>700 ?"20vw":"80vw",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setMonth1("Hindi");
                      handleClosex();
                    }}
                  >
                    Hindi
                  </Typography>
                  <Typography
                    sx={{
                      p: 1,
                      pl: 1,
                      ml: 1,
                      width:width>700 ?"20vw":"80vw",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setMonth1("French");
                      handleClosex();
                    }}
                  >
                    French
                  </Typography>
                </div>
              </Popover>

              <div
                style={{
                    width: width>700? "49%":"98%",
                    margin: width>700?"0.3vw 0":"2vw 0vw",
                }}
                className="loginfield"
                onClick={handleClickx1}
              >
                <TextField
                  id="outlined-basic"
                  label="Proficiency Level"
                  variant="outlined"
                  placeholder="Intermediate"
                  value={year1}
                  style={{
                    width: width>700 ? "95%":"100%",
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: width>700 ?"1vw":"3vw",
                      fontFamily: "Poppins",
                      fontStyle: "500",
                      fontWeight: "500",
                      color: "black",
                    },
                  }}
                  onChange={handleClickx1}
                  inputProps={{ className: classes.input }}
                />
             { width>700 &&  <span>
                  <KeyboardArrowDownOutlined
                    style={{
                      fontSize: "1.5vw",
                      position: "relative",
                      right: "2vw",
                      top: "1vw",
                    }}
                  />
                </span>}
              </div>
              <Popover
                id={idx1}
                open={openx1}
                anchorEl={anchorElx1}
                onClose={handleClosex1}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                style={{}}
              >
                <div style={{ maxHeight: width>700 ?"20vw":"50vw", overflow: "scroll" }}>
                  <Typography
                    sx={{ p: 1, pl: 1, ml: 1,  width:width>700 ?"20vw":"80vw", }}
                    onClick={() => {
                      setyear1("   Learning");
                      handleClosex1();
                    }}
                  >
                    Learning
                  </Typography>
                  <Typography
                    sx={{ p: 1, pl: 1, ml: 1,  width:width>700 ?"20vw":"80vw", }}
                    onClick={() => {
                      setyear1("Intermediate");
                      handleClosex1();
                    }}
                  >
                    Intermediate
                  </Typography>
                  <Typography
                    sx={{ p: 1, ml: 1,  width:width>700 ?"20vw":"80vw", }}
                    onClick={() => {
                      setyear1("Highly");
                      handleClosex1();
                    }}
                  >
                    Highly
                  </Typography>
                </div>
              </Popover>
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
                onClick={handleClose1}
              >
                Cancel
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
                onClick={handleeditlanguage}
              >
                SAVE
              </div>
            </div>
          </Box>
        </Modal>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={  width>700? style:style1}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Delete Language</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose}
                    style={{ fontSize:width>700?  "1.5vw":"4vw" }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000090" }} />
            <div
              style={{ color: "gray", fontSize:width>700?  "1vw":"2.2vw", fontWeight: "300" }}
              className="profiledetailstitle"
            >
              The action will delete "{language?.language}" level "
              {language?.proficiencyLevel}" From all of your profiles.
            </div>
            <div
              style={{
                color: "gray",
                fontSize: width>700? "1vw":"2.5vw",
                fontWeight: "400",
                marginBottom: "5vw",
              }}
              className="profiledetailstitle"
            >
              Are you sure you want to delete this Language?
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
                onClick={handlelangugaedlete}
                className="handlecirclieaboutsave"
              >
                Delete
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

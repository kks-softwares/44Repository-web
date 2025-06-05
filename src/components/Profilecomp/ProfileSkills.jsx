import React, { useEffect, useState } from "react";

import img2 from "../../assets/My profile – 28/Component 71 – 6.svg";
import "./profile.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import API_HOST from "../../env";
import axios from "axios";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "55vw",
  bgcolor: "background.paper",
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
  boxShadow: 24,
  p: 1,
};

export default function ProfileSkills({ user, width }) {
  

  const dispatch = useDispatch();
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [arrayof, setarrayof] = useState(user?.noOfSkillSet);
  const [skillset, setskillset] = useState([]);

  const [skilltext, setskilltext] = useState("");
  // const handletitleaddskills = () => {
  //   if (skilltext.length > 0) {
  //     axios
  //       .post(`${API_HOST}/users/updateSkills`, {
  //         skills: skilltext,
  //         userId: user?.userId,
  //       })
  //       .then((res) => {
  //         window.localStorage.setItem(
  //           "user",
  //           JSON.stringify({ ...res.data.success.data })
  //         );

  //         dispatch(
  //           userActions.setUser({
  //             user: { ...res.data.success.data },
  //           })
  //         );
  //       });
  //     setskilltext("");
  //   }
  // };
  const [allcategory, setAllcategory] = useState([0]);
  const [openx, setOpenx] = useState(false);
  const [istdropdown, setIstdropdown] = useState(false);
  const [setSelectedCategory, setSetSelectedCategory] = useState("");

  const handleSearchCategory = (e) => {
    // if (id && subcateid) {
    axios
      .get(
        `${API_HOST}/theSkill/viewSkill?pageSize=8&pageNumber=1&skill=${e.target.value}`
      )
      .then((res) => {
        setAllcategory(res?.data?.success?.data);
        setOpenx(true);
        if (res?.data?.success?.data?.length > 0) {
          setIstdropdown(true);
        }
      });
    // }
  };

  const handletitleremoveskills = (id) => {
    axios
      .post(`${API_HOST}/users/removeNoOfSkills`, {
        _id: id,
        userId: user?.userId,
      })
      .then((res) => {
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
          });
      });
  };

  useEffect(() => {
    setskillset(user?.noOfSkillSet);
  }, [user]);

  const handlePostJOb = (eskill) => {
    // const formdata = new FormData();

    // skillset?.length > 0 &&
    //   skillset?.map((data, index) => {
    //     formdata.append(`skill${index + 1}`, data);
    //   });

    axios
      .post(`${API_HOST}/users/updateSkills`, {
        skills: eskill,
        userId: user?.userId,
      })
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
      })
      .catch((error) => {
    
      });
  };

  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "2vw", margin: "0" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Skills</div>
        <div className="profiledetailnavmanu">
          <img
            onClick={handleOpen2}
            style={{ width: width > 700 ? "2.5vw" : "6vw", marginLeft: "0vw" }}
            src={img2}
            alt=""
          />
        </div>

        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={width > 700 ? style : style1}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Edit Skills</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose2}
                    style={{
                      fontSize: width > 700 ? "1.5vw" : "4.5vw",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000090" }} />

            <div className="editsillpopupskilltext">
              Keeping your skills up to date helps you get the jobs you want
            </div>

            {/* <div className="boxofskillsp">
              <div className="savedskillpopupcardp">
                {user?.noOfSkillSet?.map((skill) => {
                  return (
                    <div
                      style={{ borderRadius: "2vw" }}
                      className="savedskillwrapsinglep"
                    >
                      {skill?.skills}
                      <div
                        onClick={() => {
                          handletitleremoveskills(skill?._id);
                        }}
                      >
                        <CloseIcon
                          style={{
                            fontSize: "1.5vw",
                            marginLeft: "0.61vw",
                            cursor: "pointer",
                          }}
                        />
                      </div>{" "}
                    </div>
                  );
                })}
              </div>
              <div style={{ display: "flex" }}>
                <input
                  className="inputforskillp"
                  value={skilltext}
                  onChange={(e) => {
                    setskilltext(e.target.value);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handletitleaddskills();
                    }
                  }}
                />
              </div>
            </div> */}
            <div
              style={{ marginRight: "4vw", height: "fit-content" }}
              className="boxofskillsp"
              onClick={() => {
                setIstdropdown(false);
              }}
            >
              <div className="savedskillpopupcardp">
                {skillset?.slice(0, 10)?.map((skill, index) => {
                  return (
                    <div
                      style={{
                        borderRadius: "2vw",
                        padding:width>700?  " 0.5vw 1vw":"1vw 2vw",
                        margin: width>700? "0.51vw 0.5vw":"1vw",
                      }}
                      className="savedskillwrapsinglep"
                    >
                      {skill?.skills}
                      <div
                        onClick={() => {
                          setskillset([
                            ...skillset.slice(0, index),
                            ...skillset.slice(index + 1, skillset.length),
                          ]);
                        }}
                      >
                        <div
                          onClick={() => {
                            handletitleremoveskills(skill?._id);
                          }}
                        >
                          <CloseIcon
                            style={{
                              fontSize:width>700?  "1.4vw":"4vw",
                              marginLeft: "0.61vw",
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </div>{" "}
                    </div>
                  );
                })}
                <div style={{ height: width>700? "3vw":"8vw" }}>
                  {skillset?.length < 10 ? (
                    <input
                      style={{
                        border: "none",
                        outline: "none",
                        background: "white",
                        height: width>700?  "3vw":"8vw",
                        padding: "0.5vw",
                        width: "fit-content",
                        minWidth: "5vw",
                        fontSize: width>700? "1.1vw":"3.3vw",
                      }}
                      type="text"
                      placeholder="type here...."
                      value={setSelectedCategory}
                      onChange={(e) => {
                        handleSearchCategory(e);
                        setSetSelectedCategory(e.target.value);
                      }}
                      // onKeyPress={(e) => {
                      //   if (e.key === "Enter") {
                      //     e.preventDefault();
                      //     if (skillset.indexOf(setSelectedCategory) < 0) {
                      //       setskillset(
                      //         [...skillset, setSelectedCategory].slice(0, 10)
                      //       );
                      //     }
                      //   }
                      //  setSetSelectedCategory("")
                      // }}
                    />
                  ) : (
                    ""
                  )}
                  {istdropdown ? (
                    <Fade timeout={100}>
                      <div
                        onMouseLeave={() => setIstdropdown(false)}
                        className="dropdownboxhoverdefault"
                        style={{
                          left: "1vw",
                          width: "fit-content",
                          opacity: "1",
                          visibility: "visible",
                          zIndex: "300",
                        }}
                      >
                        {allcategory?.length > 0 &&
                          allcategory?.slice(0, 8)?.map((data) => {
                            return (
                              <Typography
                                sx={{
                                  p: 2,
                                  pb: 0.5,
                                  pt: 1,
                                  fontSize: "1vw",
                                  fontWeight: "500",
                                  fontFamily: "poppins",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  if (skillset.indexOf(data?.skill) < 0) {
                                    setskillset(
                                      [
                                        ...skillset,
                                        { skills: data?.skill },
                                      ].slice(0, 10)
                                    );
                                    handlePostJOb(data?.skill);
                                  }
                                  setIstdropdown(false);
                                  setSetSelectedCategory("");
                                }}
                              >
                                {data?.skill}
                              </Typography>
                            );
                          })}
                      </div>
                    </Fade>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="editsillpopupskilltext">Maximum 10 skills </div>

            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            ></div>
          </Box>
        </Modal>
      </div>

      <div className="pallskillboxes">
        {user?.noOfSkillSet?.map((skill) => {
          return <div className="pskillbox">{skill?.skills}</div>;
        })}
        {/* {data?.skill}
        {skillset} */}
      </div>
    </div>
  );
}

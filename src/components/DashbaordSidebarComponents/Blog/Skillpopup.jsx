import React from "react";
import { useNavigate } from "react-router";
import { DeleteForeverOutlined } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
import API_HOST from "../../../env";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 2,
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
export default function Skillpopup1({
  data,
  index,
  page,
  width,
  setAllusers,
  settotalpages,
  setSelectedCategory,
}) {
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const navigate = useNavigate();
  const handledeleteBlog = () => {
    axios
      .post(`${API_HOST}/contentManagement/removecontent`, {
        contentId: data?.contentId,
      })
      .then(() => {
        axios
          .get(
            `${API_HOST}/contentManagement/viewcontent?userName=${setSelectedCategory}&pageNumber=${page}&pageSize=10`
          )
          .then((res) => {
            setAllusers(res?.data?.success?.data);
            window.scrollTo(0, 0, { behavior: "smooth" });
          });
        axios
          .get(
            `${API_HOST}/contentManagement/viewcontent?contentName=${setSelectedCategory}&pageNumber=${
              page + 1
            }&pageSize=10`
          )
          .then((res) => {
            if (res?.data?.success?.data?.length > 0) {
              settotalpages(page + 1);
            } else {
              settotalpages(page);
            }
          });
      });
  };
  return (
    <div>
      <div
        style={{ alignItems: "center", padding: "1vw", width: "100%" }}
        className="navoftableblogsdata"
      >
        {width > 700 && (
          <div
            onClick={() => {
              navigate(`/dashbaord/blog/${data?.contentId}`);
            }}
            style={{ width: "5vw", cursor: "pointer" }}
          >
            #{(page - 1) * 10 + (index + 1)}
          </div>
        )}

        <div
          onClick={() => {
            navigate(`/dashbaord/blog/${data?.contentId}`);
          }}
          style={{ width: width > 700 ? "15vw" : "22vw", cursor: "pointer" }}
        >
          {data?.contentName?.slice(0, 50)}
        </div>
        <div
          onClick={() => {
            navigate(`/dashbaord/blog/${data?.contentId}`);
          }}
          style={{ width: width > 700 ? "12vw" : "30vw", cursor: "pointer" }}
        >
          {data?.category}
        </div>

        {width > 700 && (
          <div
            style={{
              width: "27vw",
              fontSize: width > 700 ? "0.85vw" : "2.5vw",
            }}
            dangerouslySetInnerHTML={{ __html: data?.toC[0]?.desc?.slice(0, 150) }}
          >
            {/* {data?.toC[0]?.desc?.slice(0, 150)} */}
          </div>
        )}
        
        <div
          style={{
            width: width > 700 ? "10vw" : "17vw",
            color: data?.status === "publish" ? "#2AC96A" : "red",
            fontWeight: "500",
          }}
        >

          {data?.status}
        </div>
        <div
          style={{
            width: width > 700 ? "10vw" : "17vw",
            color:
              (data?.trendingContent || data?.recentContent) === true
                ? "#2AC96A"
                : "red",
            fontWeight: "500",
          }}
        >
          {data?.trendingContent && "Trending"}
          {data?.recentContent && "Recent"}
          {(!data?.trendingContent && !data?.recentContent) && "None"}
        </div>
        {width > 700 && (
          <div style={{ width: width > 700 ? "5vw" : "7vw" }}>
            <RemoveRedEyeIcon
              onClick={() => navigate(`/dashbaord/blog/${data?.contentId}`)}
              style={{
                margin: "0 0.5vw",
                width: "2vw ",
                height: "2vw",
                borderRadius: "50%",
                cursor: "pointer",
                objectFit: "cover",
              }}
            />
          </div>
        )}
        <div style={{ width: "5vw" }}>
          <DeleteForeverOutlined
            onClick={() => {
              handleOpen3();
            }}
            style={{
              margin: "0 0.5vw",
              width: width > 700 ? "2vw " : "5vw",
              height: width > 700 ? "2vw" : "5vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
          />
        </div>
        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={width > 700 ? style : style1}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Delete Blog</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose3}
                    style={{
                      fontSize: width > 700 ? "1.5vw" : "4vw",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000090" }} />

            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              Are you really want to delete this ' Blog '
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
                onClick={handleClose3}
              >
                Cancel
              </div>
              <div
                onClick={() => {
                  handledeleteBlog();
                }}
                style={{ cursor: "pointer", background: "#FE2323" }}
                className="handlecirclieaboutsave"
              >
                Delete
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

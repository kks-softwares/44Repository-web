import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import imgedit from "../../assets/My profile – 28/Component 71 – 6.svg";
import axios from "axios";
import API_HOST from "../../env";

export default function Editportfoiliopreview({ width }) {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);
  const {
    title,
    date,
    datex,
    caption,
    iamge,
    skillset,
    projecturl,
    projectdescription,
    uplaodedfile,
    id,
  } = useOutletContext();

  const handlepublish = () => {
    if (iamge) {
      const formdata = new FormData();

      formdata.append("projectPortfolioId", id);
      formdata.append("projectDescription", projectdescription);
      formdata.append("projectTitle", title);
      formdata.append("projectUrl", projecturl);
      formdata.append("completionDate", date);
      formdata.append("startingDate", datex);
      formdata.append("title", title);
      formdata.append("fileName", iamge);
      formdata.append("caption", caption);
      formdata.append("skills", JSON.stringify(skillset));

      axios
        .post(`${API_HOST}/portfolio/editProjectPortfolio`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data.success.data);
          navigate("/profile");
        })
        .catch((err) => {
          console.log();
        });
    } else {
      const formdata = new FormData();

      formdata.append("projectPortfolioId", id);
      formdata.append("projectDescription", projectdescription);
      formdata.append("projectTitle", title);
      formdata.append("projectUrl", projecturl);
      formdata.append("completionDate", date);
      formdata.append("startingDate", datex);
      formdata.append("title", title);

      formdata.append("caption", caption);
      formdata.append("skills", JSON.stringify(skillset));

      axios
        .post(`${API_HOST}/portfolio/editProjectPortfolio`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data.success.data);
          navigate("/profile");
        })
        .catch((err) => {
          console.log();
        });
    }
  };
  return (
    <div className="addpfcontaineradd">
        <button
        style={{
          cursor: "pointer",
          zIndex: "100",
          padding: width > 700 ? "0.5vw 0.7vw" : "1vw",
          backgroundColor: "white",
          color: "#000",
          borderRadius: "0.3vw",
          border: "1px solid #d7d7d7",
          marginLeft: width > 700 ? "0vw" : "1vw",
          marginTop: width <= 700 && "1vw",
          marginBottom:"1vw"
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIosNewIcon />
      </button>
     
      <div className="profiletitleandmenunav">
        <div
          style={{ fontSize: width > 700 ? "1.7vw" : "4vw", fontWeight: "400" }}
          className="profiledetailstitle"
        >
          Preview
        </div>
        <div className="profiledetailnavmanu">
          <div></div>
        </div>
      </div>
      <hr style={{ color: "#00000070" }} />

      <div
        style={{
          background: iamge
            ? `url('${URL.createObjectURL(
                iamge
              )}') center center / cover no-repeat`
            : `url('${uplaodedfile}') center center / cover no-repeat`,
        }}
        className="pfaddimagepreview"
      >
        <div
          style={{
            position: "relative",
            left: width > 700 ? "52vw" : "79vw",
            top: "1vw",
          }}
          className="covereditimgqgeprofile"
        >
          <label htmlFor="coverpic">
            <img
              src={imgedit}
              onClick={() => navigate(`/updateportfolio/${id}/details`)}
              e
              alt=""
              style={{
                fontSize: "1.82vw",
                cursor: "pointer",
                position: "relative",
                width: "3vw",
              }}
            />
            <input type="file" name="" id="coverpic" hidden />
          </label>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{ marginBottom: "0.5vw", marginTop: "1.3vw" }}
          className="jobpodtedfieldtitile"
        >
          Title
        </div>
        <div>
          <img
            src={imgedit}
            onClick={() => {
              navigate(`/updateportfolio/${id}`);
            }}
            style={{ width: width > 700 ? "3vw" : "7vw" }}
            alt=""
          />
        </div>
      </div>

      <div className="addprjectpreviediv">{title}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{ marginBottom: "0.5vw", marginTop: "1.3vw" }}
          className="jobpodtedfieldtitile"
        >
          Description
        </div>
        <div>
          <img
            src={imgedit}
            onClick={() => navigate(`/updateportfolio/${id}/details`)}
            style={{ width: width > 700 ? "3vw" : "7vw" }}
            alt=""
          />
        </div>
      </div>
      <div className="addprjectpreviediv">{projectdescription}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{ marginBottom: "0.5vw", marginTop: "1.3vw" }}
          className="jobpodtedfieldtitile"
        >
          Skills
        </div>
        <div>
          <img
            src={imgedit}
            onClick={() => navigate(`/updateportfolio/${id}/details`)}
            style={{ width: width > 700 ? "3vw" : "7vw" }}
            alt=""
          />
        </div>
      </div>
      <div className="addprjectpreviediv">
        {skillset?.map((skill) => {
          return skill?.skills + ",";
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{ marginBottom: "0.5vw", marginTop: "1.3vw" }}
          className="jobpodtedfieldtitile"
        >
          Project URL
        </div>
        <div>
          <img
            src={imgedit}
            onClick={() => navigate(`/updateportfolio/${id}/details`)}
            style={{ width: width > 700 ? "3vw" : "7vw" }}
            alt=""
          />
        </div>
      </div>
      <div className="addprjectpreviediv">{projecturl} </div>

      <hr style={{ color: "#00000080" }} />
      <div style={{ marginTop: "0.31vw" ,marginBottom: width<700 &&"5vw" }} className="handlemoreaboutskill">
        <div
          onClick={() => navigate(`/updateportfolio/${id}/details`)}
          style={{
            background: "white",
            color: "black",
            cursor: "pointer",
          }}
          className="handlecirclieaboutsave"
        >
          Cancel
        </div>

        <div
          style={{
            cursor: "pointer",
            width: width > 700 ? "10vw" : "30vw",
            borderRadius: width > 700 ? "0.5vw" : "1vw",
          }}
          className="handlecirclieaboutsave"
          onClick={handlepublish}
        >
          Publish
        </div>
      </div>
    </div>
  );
}

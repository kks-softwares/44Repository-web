import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import img2 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { useNavigate } from "react-router";
export default function Listofjobbox({
  data,
  selecteddelete,
  setSelecteddelete,
  width,
}) {
  const [checkonex, setCheckonex] = useState(false);
  useEffect(() => {
    setCheckonex(false);
  }, [data]);
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          overflow: "hidden",
          display: "block",
          width: width > 700 ? "" : "90vw",
          marginLeft: width <= 700 && "2vw",
        }}
        className="activejobpostbox"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: width > 700 ? "1vw" : "4vw",
            marginBottom: width > 700 ? "0.751vw" : "2vw",
            justifyContent: "space-between",
          }}
        >
          <div
            className="checkbox"
            onClick={() => {
              setCheckonex(!checkonex);
              if (selecteddelete?.indexOf(data?.jobPostId) > -1) {
                setSelecteddelete([
                  ...selecteddelete.slice(
                    0,
                    selecteddelete.indexOf(data?.jobPostId)
                  ),
                  ...selecteddelete.slice(
                    selecteddelete.indexOf(data?.jobPostId) + 1,
                    selecteddelete.length
                  ),
                ]);
              } else {
                setSelecteddelete([...selecteddelete, data?.jobPostId]);
              }
            }}
          >
            {checkonex ? (
              <DoneIcon
                style={{
                  fontSize: width > 700 ? "0.81vw" : "3vw",
                  color: "blueviolet",
                  fontWeight: "600",
                }}
              />
            ) : (
              ""
            )}{" "}
          </div>
          <div style={{ width: width > 700 ? "2vw" : "5vw" }}>
            <img
              onClick={() =>
                navigate(`/dashbaord/editcreatework/${data?.jobPostId}`)
              }
              style={{
                margin: "0.5vw 0.5vw",
                width: width > 700 ? "1.4vw " : "4vw",
                height: width > 700 ? "1.4vw" : "4vw",
                borderRadius: "50%",
                cursor: "pointer",
                objectFit: "cover",
              }}
              src={img2}
              alt=""
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5vw",
          }}
        >
          <div style={{ marginLeft: "0vw" }} className="tagblue">
            {data?.category?.category}
          </div>
          <div
            style={{
              marginLeft: "1vw",
              fontSize: width > 700 ? "0.8vw" : "2.3vw",
            }}
          >
            {data?.subCategory?.subCategory}
          </div>
        </div>
        <div style={{ height: "1.1vw" }} className="activejobpostname">
          {data?.workTitle?.length > 40
            ? data?.workTitle?.slice(0, 40) + ".."
            : data?.workTitle} ({data?.trackingId})
        </div>
        <div
          style={{
            lineHeight: width > 700 ? "1.2vw !important" : "3vw !important",
            color: "#064C8790",
          }}
          className="activejobpistbudgetbox"
        >
          <div>
            Budget <br />{" "}
            <span
              style={{
                fontSize: width > 700 ? "0.9vw" : "2.7vw",
                position: "relative",
                bottom: "0.3vw",
                color: "#00000090",
              }}
            >
              ${data?.minimumBudget} - ${data?.maximuBudget}
            </span>
          </div>
          <div style={{ marginRight: "1vw" }}>
            Location <br />{" "}
            <span
              style={{
                fontSize: width > 700 ? "0.9vw" : "2.7vw",
                position: "relative",
                bottom: "0.3vw",
                color: "#00000090",
              }}
            >
              {data?.remote
                ? "Remote"
                : data?.onSite?.length > 20
                ? data?.onSite?.slice(0, 18) + ".."
                : data?.onSite}
            </span>
          </div>
          <div style={{ marginRight: "1vw" }}>
            Expired on <br />{" "}
            <span
              style={{
                fontSize: width > 700 ? "0.9vw" : "2.7vw",
                position: "relative",
                bottom: "0.3vw",
                color: "#00000090",
              }}
            >
              {data?.expiry} Days
            </span>
          </div>
        </div>
        <div
          style={{ height: width > 700 ? "4.5vw" : "12vw", margin: "0vw" }}
          className="descriptionactibeobbox"
        >
          <div
            style={{
              height: width > 700 ? "3.5vw" : "11vw",
              color: "#707070100",
              fontWeight: "400",
            }}
          >
            {data?.shortDescription?.slice(0, 180)}
          </div>
        </div>

        <hr />
        <div style={{ paddingLeft: "0vw" }} className="flexlastactiveb">
          <div>No of Proposoals - {data?.listOfBider?.length}</div>

          <div
            onClick={() => {
              navigate(
                `/dashbaord/jobdetail/${data?.jobPostId ? data?.jobPostId : 2}`
              );
            }}
            style={{ color: "#00000090", cursor: "pointer" }}
          >
            {" "}
            See More
          </div>
        </div>
      </div>
    </div>
  );
}

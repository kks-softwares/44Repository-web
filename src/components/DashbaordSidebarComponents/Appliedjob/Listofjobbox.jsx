import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
export default function Listofjobbox({ data, data1, width }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
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
            marginBottom: "0.5vw",
          }}
        >
          <div style={{ marginLeft: "0vw" }} className="tagblue">
            {data1?.category?.category}
          </div>
          <div
            style={{
              marginLeft: "1vw",
              fontSize: width > 700 ? "0.8vw" : "2.3vw",
            }}
          >
            {data1?.subCategory?.subCategory}{" "}
            <span>
              <FiberManualRecordIcon
                style={{
                  fontSize: width > 700 ? "1.5vw" : "4vw",
                  color:
                    data1?.assignedJob
                      ? "greenyellow"
                      : data1?.appliedForJobPost[0].jobPostId.jobDoerId
                      ? "red"
                      : "yellow",
                }}
              />
            </span>
          </div>
        </div>
        <div style={{ height: "1.1vw" }} className="activejobpostname">
          {data?.workTitle?.length > 40
            ? data?.workTitle?.slice(0, 40) + ".."
            : data?.workTitle}{" "}
          ({data?.trackingId})
        </div>
        <div
          style={{ lineHeight: "1.2vw !important", color: "#064C8790" }}
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
              {data?.minimumBudget}- ${data?.maximuBudget}
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
                ? "remote"
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
            {data?.shortDescription?.slice(0, 160)}
          </div>
        </div>

        <hr />
        <div style={{ paddingLeft: "0vw" }} className="flexlastactiveb">
          <div>
            Status -
            <span
              style={{
                color:
                  data1?.workStatus === "Completed"
                    ? "green"
                    : data1?.workStatus === "Accepted"
                    ? "#E2E228"
                    : "red",
              }}
            >
              {data1?.workStatus ? data1?.workStatus : "Pending"}
            </span>
          </div>

          <div
            onClick={() => {
              navigate(
                `/dashbaord/applieddetail/${
                  data?.jobPostId ? data?.jobPostId : 2
                }`
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

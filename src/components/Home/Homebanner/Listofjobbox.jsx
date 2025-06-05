import React from "react";
import StarIcon from "@mui/icons-material/Star";
import imgxx from "../../../assets/Success stories Definition/checkmark (1).svg";

export default function Listofjobbox({
  width,
  data,
  setListshow,
  setSelectedJob,
}) {
  return (
    <div>
      <div
        style={{
          overflow: "hidden",
          display: "block",
          border: "1px solid black",
          width: width > 700 ? "23vw" : "80vw",
          margin: width > 700 ? "1vw 0.5vw" : "2vw 1vw",
          marginRight: width <= 700 && "2vw",
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
            {data?.category?.category}
          </div>
          <div
            style={{
              marginLeft: width > 700 ? "1vw" : "2vw",
              fontSize: width > 700 ? "0.8vw" : "2.5vw",
            }}
          >
            {data?.subCategory?.subCategory}
          </div>
        </div>
        <div style={{ height: "1.1vw" }} className="activejobpostname">
          {data?.workTitle?.length > 35
            ? data?.workTitle?.slice(0, 35) + ".."
            : data?.workTitle} ({data?.trackingId})
        </div>
        <div
          style={{ lineHeight: "1.2vw !important", color: "#064C8790" }}
          className="activejobpistbudgetbox"
        >
          <div
            style={{ marginRight: "1vw", lineHeight: width > 700 ? "" : "4vw" }}
          >
            Budget <br />{" "}
            <span
              style={{
                fontSize: width > 700 ? "0.9vw" : "2.5vw",
                position: "relative",
                bottom: "0.3vw",
                color: "#00000090",
              }}
            >
              ${data?.minimumBudget}- ${data?.maximuBudget}
            </span>
          </div>
          <div
            style={{ marginRight: "1vw", lineHeight: width > 700 ? "" : "4vw" }}
          >
            Location <br />{" "}
            <span
              style={{
                fontSize: width > 700 ? "0.9vw" : "2.5vw",
                position: "relative",
                bottom: "0.3vw",
                color: "#00000090",
              }}
            >
              {data?.remote
                ? "remote"
                : data?.onSite?.length > 18
                ? data?.onSite?.slice(0, 17) + ".."
                : data?.onSite}
            </span>
          </div>
          <div
            style={{ marginRight: "1vw", lineHeight: width > 700 ? "" : "4vw" }}
          >
            Expired on <br />{" "}
            <span
              style={{
                fontSize: width > 700 ? "0.9vw" : "2.5vw",
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
          style={{ height: width > 700 ? "4vw" : "12vw", margin: "0vw" }}
          className="descriptionactibeobbox"
        >
          <div
            style={{
              height: width > 700 ? "3.8vw" : "11vw",
              color: "#707070100",
              fontWeight: "400",
            }}
          >
            {data?.shortDescription?.slice(0, 170)}
          </div>
        </div>

        <hr style={{ margin: width > 700 ? "1vw 0vw" : "2vw 0vw" }} />
        <div
          style={{ paddingLeft: "0vw", alignItems: "center" }}
          className="flexlastactiveb"
        >
          <div>
            {data?.user_id?.fullName?.slice(0, 15)}
            {/* <span>
              <StarIcon
                style={{ width: "1vw", height: "1vw", color: "#064C87" }}
              />
            </span>{" "}
            4.5{" "} */}
            {data?.user_id?.verifiedByAdmin && (
              <span
                style={{
                  color: "#064C87",
                }}
              >
                <img
                  style={{
                    width: width > 700 ? "1vw" : "2.5vw",
                    margin: width > 700 ? "0 0.3vw" : "0 1vw",
                  }}
                  src={imgxx}
                  alt=""
                />
                {"Verified"}
              </span>
            )}
          </div>

          <div
            onClick={() => {
              setSelectedJob(data);
              setListshow(5);
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

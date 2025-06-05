import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import imgxx from "../../../assets/Success stories Definition/checkmark (1).svg";
import { useNavigate } from "react-router";
export default function Listofjobbox({ data, width }) {
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
          marginLeft: width <= 700 && "1.92vw",
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
              marginLeft: "1vw",
              fontSize: width > 700 ? "0.8vw" : "2.3vw",
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
              ${data?.minimumBudget}- ${data?.maximuBudget}
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
          style={{ height: width > 700 ? "4.5vw" : "15vw", margin: "0vw" }}
          className="descriptionactibeobbox"
        >
          <div
            style={{
              height: width > 700 ? "3.5vw" : "14vw",
              color: "#707070100",
              fontWeight: "400",
            }}
          >
            {data?.shortDescription?.slice(0, 180)}
          </div>
        </div>

        <hr style={{ margin: width > 700 ? "1vw" : "2vw" }} />
        <div
          style={{ paddingLeft: "0vw", alignItems: "center",cursor:"pointer" }}
          className="flexlastactiveb"
        >
          <div onClick={()=>{navigate(`/profile/${data?.user_id?.userName}`)}}>
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
                    width: width > 700 ? "1vw" : "3vw",
                    margin: "0 0.3vw",
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
              navigate(
                `/dashbaord/addapplieddeatil/${
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

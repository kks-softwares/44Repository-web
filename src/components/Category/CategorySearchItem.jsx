import React from "react";
import img5 from "../../assets/My profile – 28/local_police_black_24dp.svg";
import { LockClockOutlined } from "@mui/icons-material";
import StarRatings from "react-star-ratings";
import img2 from "../../assets/My profile – 28/Component 85 – 16 (1).svg";
import edit_logo from "../../assets/My profile – 28/edit_logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import img46 from "../../assets/My profile – 28/Landing page – 19.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default function CategorySearchItem({
  searchedData,
  CatalogueTtile,
  totalcount,
  setpage,
  page,
  width,
}) {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100vw", padding: "2vw 4vw", paddingBottom: "0vw" }}>
      <div className="headingpopularcate">{CatalogueTtile}</div>
      <div className="pcatalofboxes">
        {searchedData?.length > 0 ? (
          searchedData?.map((item, index) => {
            return (
              <div
                style={{
                  marginRight: "1.5vw",
                  width: width > 700 ? "" : "80vw",
                }}
                className="pcatelogbox"
              >
                <div
                  style={{
                    background: `url('${
                      item?.files[0].file ? item?.files[0].file : img46
                    }') center center / cover no-repeat`,
                  }}
                  className="pcatelogimg"
                >
                  <div className="pcatelogimg2">
                    <div className="porfolioprofilemenu">
                      <RemoveRedEyeIcon
                        onClick={() =>
                          navigate(`/catalogue/${item?.catalogueId}`)
                        }
                        style={{
                          margin: "0 0.5vw",
                          width: width > 700 ? "2.6vw " : "8vw",
                          height: width > 700 ? "2.6vw " : "8vw",
                          borderRadius: "50%",
                          cursor: "pointer",
                          objectFit: "cover",
                          backgroundColor: "white",
                          padding: "3px",
                        }}
                      />
                    </div>
                    <div hidden className="porfolioprofilemenu">
                      <Link hidden to={`/updatecatalogue/`}>
                        <img src={edit_logo} alt="" />
                      </Link>
                    </div>
                    <div hidden className="porfolioprofilemenu">
                      <img src={img2} alt="" />
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "1vw" }} className="pcatelogperson">
                  <div className="pcatelogpersonimg">
                    <img src={item?.u_id?.media} alt="" />
                  </div>
                  <div className="pcatelogpersonname">
                    <div className="pcatelogpersonname1">
                      {" "}
                      {item?.u_id?.fullName}
                    </div>
                    <div hidden className="pcatelogpersonname2">
                      {" "}
                      <span>
                        <img src={img5} alt="" />
                      </span>{" "}
                      Top Rated
                    </div>
                  </div>
                  <div hidden className="pcatelogpersonRatings">
                    <span
                      style={{
                        position: "relative",
                        bottom: "0.15vw",
                        right: "0.2vw",
                      }}
                    >
                      <StarRatings
                        rating={1}
                        starDimension="1.3vw"
                        starSpacing="1vw"
                        numberOfStars={1}
                        starRatedColor="#064C87"
                      />
                    </span>
                    4.4 (512)
                  </div>
                </div>
                <div className="pcatelog-title">
                  {item?.catalougeTitle.slice(0, 35)}{" "}
                </div>
                <hr style={{ padding: "0vw", margin: "0.3vw" }} />
                <div className="pcatelogdate">
                  <div>
                    <span>
                      <LockClockOutlined style={{ fontSize: "1vw" }} />
                    </span>{" "}
                    {item?.deliveryDate} day delivery
                  </div>{" "}
                  <div>
                    Starting At <span>${item?.serviceDays1}</span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div
            style={{
              textAlign: "center",
              width: "100%",
              lineHeight: width > 700 ? "1vw" : "5vw",
              fontSize: width > 700 ? "1.5vw" : "4vw",
              fontWeight: "500",
            }}
          >
            There are no Catalogues related to This category or subCategory!
          </div>
        )}
      </div>
      {totalcount > 5 && (
        <div className="ViewMorebutton" onClick={() => setpage(page + 1)}>
          View More
        </div>
      )}
    </div>
  );
}

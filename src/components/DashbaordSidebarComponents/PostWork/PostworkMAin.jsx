import React, { useEffect, useState } from "react";
import "../BrowseWork/Browseworkcomp.css";
import { LockClockOutlined } from "@mui/icons-material";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import img2 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import edit_logo from "../../../assets/My profile – 28/edit_logo.svg";
import img46 from "../../../assets/My profile – 28/Landing page – 19.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useSelector } from "react-redux";
import axios from "axios";
import API_HOST from "../../../env";
import img44 from "../../../assets/Dashboard/austin-distel-tLZhFRLj6nY-unsplash.png";
import img5 from "../../../assets/My profile – 28/local_police_black_24dp.svg";
import New_beginner from "../../../assets/Badges/beginner.png";
import New_intermediate from "../../../assets/Badges/intermediate.png";
import New_master from "../../../assets/Badges/master.png";
import New_Pro from "../../../assets/Badges/Pro.png";
export default function PostworkMAin({ width }) {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [totalNoWorkPostBadges, setTotalNoWorkPostBadges] = useState("");
  const [totalJobsApplied, setTotalJobsApplied] = useState("");
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/usertotalDetails/viewDetailedModel?userName=${user?.userName}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        setTotalNoWorkPostBadges(res?.data?.success?.data[0]?.totalNoWorkPost);
        setTotalJobsApplied(res?.data?.success?.data[0]?.biddersId.length);
      })
      .catch((err) => {});
  }, [user]);
  const [categoryid, setCategoryid] = useState();
  const [viewAllCategories, setViewAllCategories] = useState([]);

  const [poplularCatelogue, setPoplularCatelogue] = useState([]);
  const [page1, setPage1] = useState(1);
  const [pagecount1, setPagecount1] = useState(1);
  const [page, setPage] = useState(1);
  const [pagecount, setPagecount] = useState(1);

  useEffect(() => {
    axios
      .get(`${API_HOST}/theCategory/viewCategory?pageSize=10&pageNumber=1`)
      .then((res) => {
        setViewAllCategories([
          ...viewAllCategories,
          ...res?.data?.success?.data,
        ]);
        setPagecount1(res?.data?.success?.data?.length);
      })
      .catch((err) => {});
  }, [page1]);

  useEffect(() => {
    if (categoryid) {
      axios
        .get(
          `${API_HOST}/catalouge/viewCatalouge?pageSize=6&pageNumber=${page}&category=${categoryid}`
        )
        .then((res) => {
          setPoplularCatelogue([
            ...poplularCatelogue,
            ...res?.data?.success?.data,
          ]);
          setPagecount(res?.data?.success?.data?.length);
        })
        .catch((err) => {});
    } else {
      axios
        .get(
          `${API_HOST}/catalouge/viewCatalouge?pageSize=6&pageNumber=${page}&popularCatalogue=true`
        )
        .then((res) => {
          console.log("Popular", res?.data?.success?.data);
          setPoplularCatelogue([
            ...poplularCatelogue,
            ...res?.data?.success?.data,
          ]);
          setPagecount(res?.data?.success?.data?.length);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [categoryid, page]);
  return (
    <div className="BrowseWorkMain-cntainer">
      <div className="dashboardtitilemain">Badges</div>
      <div className="badgescontainerdashbaoe">
        <div className="pbadegesbox">
          {/* Work Post Badges */}
          {totalNoWorkPostBadges === "" || totalNoWorkPostBadges === null ? (
            <div className="psbadege">
              <div>
                <img
                  src={New_beginner}
                  alt=""
                  style={{ filter: "grayscale(1)" }}
                />
              </div>
              <span
                style={{
                  color: "#064C87",
                  fontWeight: "600",
                  fontSize: width > 700 ? "0.8vw" : "2.6vw",
                }}
              >
                (Post First Work To Get the Badge)
              </span>
              <div style={{ fontWeight: "500" }}>Work Post</div>
            </div>
          ) : (
            ""
          )}
          {totalNoWorkPostBadges >= 1 && totalNoWorkPostBadges <= 4 ? (
            <div className="psbadege">
              <div>
                <img src={New_beginner} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Work Post</div>
            </div>
          ) : (
            ""
          )}
          {totalNoWorkPostBadges >= 5 && totalNoWorkPostBadges <= 9 ? (
            <div className="psbadege">
              <div>
                <img src={New_intermediate} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Work Post</div>
            </div>
          ) : (
            ""
          )}
          {totalNoWorkPostBadges >= 10 && totalNoWorkPostBadges <= 24 ? (
            <div className="psbadege">
              <div>
                <img src={New_Pro} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Work Post</div>
            </div>
          ) : (
            ""
          )}
          {totalNoWorkPostBadges >= 25 ? (
            <div className="psbadege">
              <div>
                <img src={New_master} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Work Post</div>
            </div>
          ) : (
            ""
          )}
          {/* Work Bidder Badges */}
          {totalJobsApplied === "" ||
          totalJobsApplied === null ||
          totalJobsApplied === 0 ? (
            <div className="psbadege">
              <div>
                <img
                  src={New_beginner}
                  alt=""
                  style={{ filter: "grayscale(1)" }}
                />
              </div>
              <span
                style={{
                  color: "#064C87",
                  fontWeight: "600",
                  fontSize: width > 700 ? "0.8vw" : "2.6vw",
                }}
              >
                (Bid First Work To Get the Badge)
              </span>
              <div style={{ fontWeight: "500" }}>Work Bidder</div>
            </div>
          ) : (
            ""
          )}
          {totalJobsApplied >= 1 && totalJobsApplied <= 4 ? (
            <div className="psbadege">
              <div>
                <img src={New_beginner} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Work Bidder</div>
            </div>
          ) : (
            ""
          )}
          {totalJobsApplied >= 5 && totalJobsApplied <= 9 ? (
            <div className="psbadege">
              <div>
                <img src={New_intermediate} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Work Bidder</div>
            </div>
          ) : (
            ""
          )}
          {totalJobsApplied >= 10 && totalJobsApplied <= 24 ? (
            <div className="psbadege">
              <div>
                <img src={New_Pro} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Work Bidder</div>
            </div>
          ) : (
            ""
          )}
          {totalJobsApplied >= 25 ? (
            <div className="psbadege">
              <div>
                <img src={New_master} alt="" />
              </div>
              <div style={{ fontWeight: "500" }}>Work Bidder</div>
            </div>
          ) : (
            ""
          )}
          {/* Skillset Level Badges */}
          <div className="psbadege">
            <div>
              <img
                src={New_beginner}
                alt=""
                style={{ filter: "grayscale(1)" }}
              />
            </div>
            <span
              style={{
                color: "#064C87",
                fontWeight: "600",
                fontSize: width > 700 ? "0.8vw" : "2.6vw",
              }}
            >
              (Clear First Skill Set Exam)
            </span>
            <div style={{ fontWeight: "500" }}>Skill Set</div>
          </div>
          {/* Refer Level Badges */}
          <div className="psbadege">
            <div>
              <img
                src={New_beginner}
                alt=""
                style={{ filter: "grayscale(1)" }}
              />
            </div>
            <span
              style={{
                color: "#064C87",
                fontWeight: "600",
                fontSize: width > 700 ? "0.8vw" : "2.6vw",
              }}
            >
              (Refer First Person)
            </span>
            <div style={{ fontWeight: "500" }}>Refer </div>
          </div>
          {/* Wallet Level Badges */}
          <div className="psbadege">
            <div>
              <img
                src={New_beginner}
                alt=""
                style={{ filter: "grayscale(1)" }}
              />
            </div>
            <span
              style={{
                color: "#064C87",
                fontWeight: "600",
                fontSize: width > 700 ? "0.8vw" : "2.6vw",
              }}
            >
              (Reach your wallet to 1000)
            </span>
            <div style={{ fontWeight: "500" }}>Wallet Amount</div>
          </div>
        </div>
      </div>
      <div className="dashboardtitilemain">Categories</div>
      <div className="flexofcategories">
       
        {viewAllCategories?.map((data, index) => {
          return (
            <div onClick={() => {setCategoryid(data?._id) 
                setPoplularCatelogue([])
                setPage(1)
            }}>
              <div
                className={
                  categoryid === data?._id
                    ? "Categoriessmallboxes"
                    : "Categoriessmallboxes"
                }
                style={{background:categoryid === data?._id&&"#064C87",color:categoryid === data?._id&&"white"}}
              >
                {data?.category}
              </div>
            </div>
          );
        })}
        {pagecount1 > 9 && (
          <div
            onClick={() => setPage1(page1 + 1)}
            className="Categoriessmallboxes"
          >
            More
          </div>
        )}
      </div>

      <div className="pcatalofboxes">
        {poplularCatelogue?.length > 0 ? (
          poplularCatelogue?.map((item, index) => {
            return (
              <div
                style={{
                  marginRight: "1vw",
                  width: width > 700 ? "23vw" : "90%",
                }}
                className="pcatelogbox"
              >
                <div
                  style={{
                    background: `url('${
                        item?.files[0].file
                        ?  item?.files[0].file
                        : img46
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
                          width: width>700 ?"2.6vw ":"8vw",
                          height: width>700 ?"2.6vw ":"8vw",
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
              lineHeight: "1vw",
              fontSize: "1.5vw",
              fontWeight: "500",
              marginTop: "2vw",
            }}
          >
            There are no Catalogues related to This category or subCategory!
          </div>
        )}
         {pagecount > 5 && (
        <div className="ViewMorebutton" onClick={() => setPage(page + 1)}>
          View More
        </div>
      )}
      </div>

      <div hidden className="dashboardtitilemain">
        My Offers
      </div>

      <div hidden className="offerContainerDash">
        <div className="offerboxexcard">
          <div className="imgofferCard">
            <img src={img44} alt="" />
          </div>
          <div className="nametitleofferbox">
            Done a 10 Project get vacation Broucher
          </div>
        </div>
        <div className="offerboxexcard">
          <div className="imgofferCard">
            <img src={img44} alt="" />
          </div>
          <div className="nametitleofferbox">
            Done a 10 Project get vacation Broucher
          </div>
        </div>
        <div className="offerboxexcard">
          <div className="imgofferCard">
            <img src={img44} alt="" />
          </div>
          <div className="nametitleofferbox">
            Done a 10 Project get vacation Broucher
          </div>
        </div>
        <div className="offerboxexcard">
          <div className="imgofferCard">
            <img src={img44} alt="" />
          </div>
          <div className="nametitleofferbox">
            Done a 10 Project get vacation Broucher
          </div>
        </div>
        <div className="offerboxexcard">
          <div className="imgofferCard">
            <img src={img44} alt="" />
          </div>
          <div className="nametitleofferbox">
            Done a 10 Project get vacation Broucher
          </div>
        </div>
        <div className="offerboxexcard">
          <div className="imgofferCard">
            <img src={img44} alt="" />
          </div>
          <div className="nametitleofferbox">
            Done a 10 Project get vacation Broucher
          </div>
        </div>
      </div>

      <div hidden className="dashboardtitilemain">
        Top Users
      </div>
      <div hidden className="displayflextopuserdashbaord">
        <div className="topuserbox">
          <img src={user?.media} alt="" />

          <div className="topusername">Yusuf khan</div>
          <div className="topusername1">Earn $56000</div>
          <div className="topusername2">Bid -56</div>
        </div>
        <div className="topuserbox">
          <img src={user?.media} alt="" />

          <div className="topusername">Yusuf khan</div>
          <div className="topusername1">Earn $56000</div>
          <div className="topusername2">Bid -56</div>
        </div>
        <div className="topuserbox">
          <img src={user?.media} alt="" />

          <div className="topusername">Yusuf khan</div>
          <div className="topusername1">Earn $56000</div>
          <div className="topusername2">Bid -56</div>
        </div>
        <div className="topuserbox">
          <img src={user?.media} alt="" />

          <div className="topusername">Yusuf khan</div>
          <div className="topusername1">Earn $56000</div>
          <div className="topusername2">Bid -56</div>
        </div>
        <div className="topuserbox">
          <img src={user?.media} alt="" />

          <div className="topusername">Yusuf khan</div>
          <div className="topusername1">Earn $56000</div>
          <div className="topusername2">Bid -56</div>
        </div>
        <div className="topuserbox">
          <img src={user?.media} alt="" />

          <div className="topusername">Yusuf khan</div>
          <div className="topusername1">Earn $56000</div>
          <div className="topusername2">Bid -56</div>
        </div>
        <div className="topuserbox">
          <img src={user?.media} alt="" />

          <div className="topusername">Yusuf khan</div>
          <div className="topusername1">Earn $56000</div>
          <div className="topusername2">Bid -56</div>
        </div>
        <div className="topuserbox">
          <img src={user?.media} alt="" />

          <div className="topusername">Yusuf khan</div>
          <div className="topusername1">Earn $56000</div>
          <div className="topusername2">Bid -56</div>
        </div>
        <div className="topuserbox">
          <img src={user?.media} alt="" />

          <div className="topusername">Yusuf khan</div>
          <div className="topusername1">Earn $56000</div>
          <div className="topusername2">Bid -56</div>
        </div>
        <div className="topuserbox">
          <img src={user?.media} alt="" />

          <div className="topusername">Yusuf khan</div>
          <div className="topusername1">Earn $56000</div>
          <div className="topusername2">Bid -56</div>
        </div>
      </div>
    </div>
  );
}

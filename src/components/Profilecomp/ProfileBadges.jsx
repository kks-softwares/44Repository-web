import React, { useEffect, useState } from "react";
import "./profile.css";
import bageds from "../../assets/My profile – 28/Group 9726.svg";
import img1 from "../../assets/My profile – 28/Component 70 – 6.svg";
import img2 from "../../assets/My profile – 28/Component 71 – 6.svg";
// New Badges Icons
import New_quickest_releaser from "../../assets/Badges/quickest_payout_releaser.png";
import New_quickest_assigner from "../../assets/Badges/quickest_work_assigner.png";
import New_quickest_performer from "../../assets/Badges/quickest_work_performer.png";
import axios from "axios";
import API_HOST from "../../env";
import { useSelector } from "react-redux";
import { Widgets } from "@mui/icons-material";

export default function ProfileBadges({ width }) {
  const { user, loggedInStatus } = useSelector((state) => state.user);

  const [QWorkAssigner, setQWorkAssigner] = useState([]);

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
        console.log(res?.data?.success?.data)
        setQWorkAssigner(res?.data?.success?.data[0].quicketsJobAssigner);
      })
      .catch((err) => {
      });
  }, [user]);

    //Badge QAW Clock Functionality ===========
  // const then = new Date('2022-10-06T12:09:03');
  // const now = new Date();

  // const msBetweenDates = Math.abs(then.getTime() - now.getTime());

  // // 👇️ convert ms to hours                  min  sec   ms
  // const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);

  // console.log(hoursBetweenDates);

  // if (hoursBetweenDates < 24) {
  //   console.log('date is within 24 hours');
  // } else {
  //   console.log('date is NOT within 24 hours');
  // }

  return (
    <div className="profilebadgecontainer">
      <div style={{ padding: "2vw", margin: "0 1vw" }} className="profiletitleandmenunav">
        <div className="profiledetailstitle">Badges</div>
        <div hidden className="profiledetailnavmanu">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
      <div className="pbadegesboxprofile">
        {/* Work Post Badges */}
        {/*
          {totalNoWorkPostBadges >= 5 && totalNoWorkPostBadges <= 9 ?
            <div className="psbadege">
              <div>
                <img src={New_intermediate} alt="" />
              </div>
              <div style={{fontWeight:'500'}}>Work Post L2</div>
            </div> : ""
          }
        {/* Quickest Work Assigner */}
        <div className="psbadege">
        {QWorkAssigner === true ?
          <div>
            <img src={New_quickest_assigner} alt="" />
            <div style={{ fontWeight: '500' }}>Quickest Work Assigner</div>
          </div>
        :
        <>
          <img src={New_quickest_assigner} alt="" style={{ filter: 'grayscale(1)' }} />
          <span style={{ color: '#064C87', fontWeight: '600', fontSize: width > 700 ? '0.9vw' : "2.3vw" }}>When Assigned work in a same day <br />( from Work Posting )</span>
          <div style={{ fontWeight: '500' }}>Quickest Work Assigner</div>
        </>
        }
        </div>
        {/* Quickest Work Performer */}
        <div className="psbadege">
          <div>
            <img src={New_quickest_performer} alt="" style={{ filter: 'grayscale(1)' }} />
          </div>
          <span style={{ color: '#064C87', fontWeight: '600', fontSize: width > 700 ? '0.9vw' : "2.3vw" }}>When Performed within or before due date {/*( Mention in Work Bidding Form )*/}</span>
          <div style={{ fontWeight: '500' }}>Quickest Work Performer</div>
        </div>
        {/* Quickest Payout Releaser */}
        <div className="psbadege">
          <div>
            <img src={New_quickest_releaser} alt="" style={{ filter: 'grayscale(1)' }} />
          </div>
          <span style={{ color: '#064C87', fontWeight: '600', fontSize: width > 700 ? '0.9vw' : "2.3vw" }}>When Released payment with in 3 days of work completion</span>
          <div style={{ fontWeight: '500' }}>Quickest Payout Releaser</div>
        </div>
      </div>
    </div>
  );
}

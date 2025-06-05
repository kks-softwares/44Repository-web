import React, { useState } from "react";
import { useParams } from "react-router";
import "./CommuintyPage.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CommuinityBanner2 from "../../components/Community/CommunityBanner2";
import CommunityWuesriesBoxes from "../../components/Community/CommunityWuesriesBoxes";
import CommunityForm from "../../components/Community/CommunityForm";
export default function CommunityTypePage() {
  const { type } = useParams();
  const [page, setpage] = useState(1);
  return (
    <div className="commuintydetailPageconTainer">
      <div className="breadcrumpDetailnav">
        <div>
          <HomeOutlinedIcon style={{ fontSize: "2vw" }} />
        </div>
        <div>
          <ChevronRightOutlinedIcon style={{ fontSize: "2vw" }} />
        </div>
        <div>Community</div>
        <div>
          <ChevronRightOutlinedIcon style={{ fontSize: "2vw" }} />
        </div>

        <div>{type}</div>
      </div>

      <div>
        <CommuinityBanner2 />
      </div>

      <div className="titlewelcomec">{type} - Queries</div>

      <div className="searchCommunitybar">
        <div
          style={{ width: "40vw", margin: "auto" }}
          className="SearchBoxCareer"
        >
          <SearchIcon style={{ fontSize: "1.7vw", margin: "0.6vw" }} />
          <input type="text" placeholder="Search relevant Categories" />
        </div>
      </div>

      <CommunityForm />

      <CommunityWuesriesBoxes />
      <CommunityWuesriesBoxes />
      <CommunityWuesriesBoxes />
      <CommunityWuesriesBoxes />
      <CommunityWuesriesBoxes />
      <CommunityWuesriesBoxes />
      <CommunityWuesriesBoxes />

      <div style={{width:"25vw"}} className="paginationbox">
        <div>
          <ArrowBackIosIcon style={{ fontSize: "1.5vw" }} />
        </div>
        <div style={{ color: page === 1 ? "#2A6599" : "" }}>1</div>
        <div>2</div>
        <div>3</div>
        <div>.</div>
        <div>.</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>
          <ArrowForwardIosIcon style={{ fontSize: "1.5vw" }} />
        </div>
      </div>
    </div>
  );
}

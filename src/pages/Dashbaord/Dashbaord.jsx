import React, { useEffect } from "react";
import "./Dashboard.css";
import DashbaordNav from "../../components/DashBaord/DashbaordNav";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import Topbar from "../../components/Topbar/Topbar";
import BrowseWorkSiadebar from "../../components/DashBaord/BrowseWorkSiadebar";


export default function Dashbaord({ width }) {
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);
  const { user } = useSelector((state) => state.user);

  
  return (
    <div style={{ height: "100vh" }}>
      <Topbar width={width} />
      <DashbaordNav user={user} width={width} />
      <div>
        <div style={{ display: "flex", height: "100%", overflow: "scroll" }}>
          {width > 700 && <BrowseWorkSiadebar  width={width}/>}
          <div
            style={{
              background: "#FBFBFB",
              width: width > 700 ? "84vw" : "100vw",
              height: "100%",
              overflow: "scroll",
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

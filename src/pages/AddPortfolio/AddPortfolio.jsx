import React, { useEffect, useState } from "react";
import "./addportfolio.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
export default function AddPortfolio({width}) {
  const [hello, setHello] = useState("hello");
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);

  const [title, setTitle] = useState("");
  const [date, setdate] = useState();
  const [datex, setdatex] = useState();
  const [caption, setCaption] = useState("");
  const [iamge, setIamge] = useState();
  const [skillset, setskillset] = useState([]);
  const [projecturl, setProjecturl] = useState("");
  const [projectdescription, setProjectdescription] = useState("");

  return (
    <div className="addpf-container">
     {width>700 && <div>
        <Sidebar links={"add"} />
      </div>}
      <div style={{ background: "#FBFBFB ", width:width>700? "85vw":"100vw" }}>
        <Outlet
          context={{
            title,
            setTitle,
            date,
            setdate,
            datex,
            setdatex,
            caption,
            setCaption,
            iamge,
            setIamge,
            skillset,
            setskillset,
            projecturl,
            setProjecturl,
            projectdescription,
            setProjectdescription,
          }}
        />
      </div>
    </div>
  );
}

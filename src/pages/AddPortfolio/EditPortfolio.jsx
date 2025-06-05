import React, { useEffect, useLayoutEffect, useState } from "react";
import "./addportfolio.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Outlet, Route, useParams } from "react-router-dom";
import API_HOST from "../../env";
import axios from "axios";

export default function EditPortfolio({ width }) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  });
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [date, setdate] = useState();
  const [datex, setdatex] = useState();
  const [caption, setCaption] = useState("");
  const [iamge, setIamge] = useState();
  const [skillset, setskillset] = useState([]);
  const [projecturl, setProjecturl] = useState("");
  const [projectdescription, setProjectdescription] = useState("");
  const [uplaodedfile, setUplaodedfile] = useState("");

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/portfolio/viewProjectPortfolio?projectPortfolioId=${id}`
      )
      .then((res) => {
        setTitle(res.data.success.data[0]?.projectTitle);
        setdate(res.data.success.data[0]?.completionDate);
        setdatex(res.data.success.data[0]?.startingDate);
        setCaption(res.data.success.data[0]?.caption);
        setProjecturl(res.data.success.data[0]?.projectUrl);
        setProjectdescription(res.data.success.data[0]?.projectDescription);
        setUplaodedfile(res.data.success.data[0]?.icon);
        setskillset(res.data.success.data[0]?.skills);
      });
  }, []);
  return (
    <div className="addpf-container">
      {width > 700 && (
        <div>
          <Sidebar links={"edit"} id={id} />
        </div>
      )}
      <div
        style={{
          background: "#FBFBFB ",
          width: width > 700 ? "85vw" : "100vw",
        }}
      >
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
            uplaodedfile,
            setUplaodedfile,
            id,
          }}
        />
      </div>
    </div>
  );
}

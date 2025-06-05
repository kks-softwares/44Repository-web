import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Homecategories.css";
import API_HOST from "../../../env";

import Homeccaresel from "./Homeccaresel";

import Homeexplorelist from "./Homeexplorelist";

export default function Homecategories({
  width,
}) {
  const [categoryid, setCategoryid] = useState();
  const [viewAllCategories, setViewAllCategories] = useState([]);

  const [poplularCatelogue, setPoplularCatelogue] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_HOST}/theCategory/viewCategory?pageSize=90&pageNumber=1`)
      .then((res) => {
        setViewAllCategories(res?.data?.success?.data);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    if (categoryid) {
      axios
        .get(
          `${API_HOST}/catalouge/viewCatalouge?pageSize=8&pageNumber=1&category=${categoryid}`
        )
        .then((res) => {
          setPoplularCatelogue(res?.data?.success?.data);
        })
        .catch((err) => {});
    } else {
      axios
        .get(
          `${API_HOST}/catalouge/viewCatalouge?pageSize=8&pageNumber=1&popularCatalogue=true`
        )
        .then((res) => {
          console.log("Popular", res?.data?.success?.data);
          setPoplularCatelogue(res?.data?.success?.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [categoryid]);

  return (
    <div className="home-categories-container">
      <div className="home-catetitle">Explore our Categories</div>
      <Homeexplorelist
        viewAllCategories={viewAllCategories}
        setCategoryid={setCategoryid}
        categoryid={categoryid}
      />

      <Homeccaresel poplularCatelogue={poplularCatelogue} width={width} />
    </div>
  );
}

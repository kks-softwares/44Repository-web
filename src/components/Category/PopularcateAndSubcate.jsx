import React from "react";

import { useState } from "react";
import axios from "axios";
import API_HOST from "../../env";
import { useEffect } from "react";
import PopularCategorycards from "../Home/Homecategories/PopularCategorycards";
import PopularSubCategory from "../Home/Homecategories/PopularSubCategory";

export default function PopularcateAndSubcate({
  page,
  setpage,
  setCategoryid,
  setCatalogueTtile,
  setSubcategoryid,
  setSearchedData,
  width,
}) {
  const [categoryCards, setCategoryCards] = useState();
  const [subCategoryCards, setSubcategoryCards] = useState();
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/theCategory/viewCategory?pageSize=90&pageNumber=1&popularCategory=true`
      )
      .then((res) => {
        setCategoryCards(res?.data?.success?.data);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/subCategory/viewSubCategory?pageSize=90&pageNumber=1&popularSubCategory=true`
      )
      .then((res) => {
        setSubcategoryCards(res?.data?.success?.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div style={{ width: "100vw", padding: "5vw", paddingTop: "1vw" }}>
      <div className="headingpopularcate mt-4">Popular Categories</div>

      <PopularCategorycards
        width={width}
        setSearchedData={setSearchedData}
        setpage={setpage}
        setCatalogueTtile={setCatalogueTtile}
        setCategoryid={setCategoryid}
        categoryCards={categoryCards}
        setSubcategoryid={setSubcategoryid}
      />

      <div className="headingpopularcate">Popular Sub-Categories</div>

      <PopularSubCategory
        width={width}
        setSearchedData={setSearchedData}
        setpage={setpage}
        setCatalogueTtile={setCatalogueTtile}
        setSubcategoryid={setSubcategoryid}
        setCategoryid={setCategoryid}
        subCategoryCards={subCategoryCards}
      />
    </div>
  );
}

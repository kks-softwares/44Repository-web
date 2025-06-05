import React, { useEffect, useState } from "react";
import CategorySearchItem from "../../components/Category/CategorySearchItem";
import CateGoryBanner from "../../components/Category/CateGoryBanner";
import PopularcateAndSubcate from "../../components/Category/PopularcateAndSubcate";
import axios from "axios";
import API_HOST from "../../env";

export default function PopularscateAndsubcate({ width }) {
  useEffect(() => {
    window.scrollTo(0, 700, { behavior: "smooth" });
  });

  const [searchedData, setSearchedData] = useState([]);
  const [categoryid, setCategoryid] = useState();
  const [subcategoryid, setSubcategoryid] = useState();
  const [page, setpage] = useState(1);
  const [CatalogueTtile, setCatalogueTtile] = useState("");
  const [totalcount, setTotalcount] = useState(1);

  const [settextdata, setSettextdata] = useState("");

  useEffect(() => {
    if (categoryid && !subcategoryid) {
      axios
        .get(
          `${API_HOST}/catalouge/viewCatalouge?pageSize=6&pageNumber=${page}&category=${categoryid}`
        )
        .then((res) => {
          setSearchedData([...searchedData, ...res?.data?.success?.data]);
          setTotalcount(res?.data?.success?.data?.length);
        })
        .catch((err) => {});
    } else if (!categoryid && subcategoryid) {
      axios
        .get(
          `${API_HOST}/catalouge/viewCatalouge?pageSize=6&pageNumber=${page}&subCategory=${subcategoryid}`
        )
        .then((res) => {
          setSearchedData([...searchedData, ...res?.data?.success?.data]);
          setTotalcount(res?.data?.success?.data?.length);
        })
        .catch((err) => {});
    } else if (settextdata) {
      axios
        .get(
          `${API_HOST}/catalouge/viewCatalouge?pageSize=6&pageNumber=${page}&catalougeTitle=${settextdata}`
        )
        .then((res) => {
          setSearchedData([...searchedData, ...res?.data?.success?.data]);
          setTotalcount(res?.data?.success?.data?.length);
          setCatalogueTtile(settextdata);
        })
        .catch((err) => {});
    }
  }, [page, categoryid, subcategoryid]);

  useEffect(() => {
    if (settextdata) {
      axios
        .get(
          `${API_HOST}/catalouge/viewCatalouge?pageSize=6&pageNumber=${page}&catalougeTitle=${settextdata}`
        )
        .then((res) => {
          setSearchedData([ ...res?.data?.success?.data]);
          setTotalcount(res?.data?.success?.data?.length);
          setCatalogueTtile(settextdata);
        })
        .catch((err) => {});
    }
  }, [settextdata]);

  return (
    <div>
      <CateGoryBanner
        width={width}
        setSearchedData={setSettextdata}
        setCategoryid={setCategoryid}
        setSubcategoryid={setSubcategoryid}
        setpage={setpage}
      />
      {CatalogueTtile !== "" && (
        <CategorySearchItem
          width={width}
          searchedData={searchedData}
          CatalogueTtile={CatalogueTtile}
          totalcount={totalcount}
          setTotalcount={setTotalcount}
          setpage={setpage}
          page={page}
        />
      )}
      <PopularcateAndSubcate
        width={width}
        page={page}
        setpage={setpage}
        setCategoryid={setCategoryid}
        setSubcategoryid={setSubcategoryid}
        setSearchedData={setSearchedData}
        setCatalogueTtile={setCatalogueTtile}
        searchedData={searchedData}
      />
    </div>
  );
}

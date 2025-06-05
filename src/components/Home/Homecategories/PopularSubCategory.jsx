import React from "react";

export default function PopularSubCategory({
  subCategoryCards,
  setCategoryid,
  setSubcategoryid,
  setCatalogueTtile,
  setpage,
  setSearchedData,
  width,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {subCategoryCards?.map((data, index) => {
        return (
          <div
            style={{
              width: width > 700 ? "20vw" : "42vw",
              height: width > 700 ? "25vw" : "42vw",
              margin: "2vw 1vw",
              cursor: "pointer",
              background: `url(${data?.subCategoryMedia})`,
            }}
            onClick={() => {
              setSubcategoryid(data?._id);
              setCategoryid()
              setCatalogueTtile(data?.subCategory);
              setpage(1);
              setSearchedData([]);
            }}
            className="baxkground1"
          >
            <div className="expertgbannercontainer2">
              <div className="boxofcatepageheading1">{data?.subCategory}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

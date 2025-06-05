import React from "react";

export default function PopularCategorycards({
  categoryCards,
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
      {categoryCards?.map((data, index) => {
        return (
          <div
            style={{
              width: width > 700 ? "20vw" : "42vw",
              height: width > 700 ? "25vw" : "42vw",
              margin: "2vw 1vw",
              cursor: "pointer",
              background: `url(${data?.categoryImage})`,
            }}
            className="baxkground1"
            onClick={() => {
              setCategoryid(data?._id);
              setCatalogueTtile(data?.category);
              setpage(1);
              setSearchedData([]);
              setSubcategoryid()
            }}
          >
            <div className="expertgbannercontainer2">
              <div className="boxofcatepageheading1">{data?.category}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

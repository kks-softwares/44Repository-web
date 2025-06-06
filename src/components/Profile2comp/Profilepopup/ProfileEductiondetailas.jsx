import React from "react";

export default function Profileeducationdetails({ education, width }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "95%",
        }}
      >
        <div className="pworkexperinxecontainer">
          <div className="pworkexperincebox">
            <div className="pworkexperinceboxtext">
              <div className="pworkexperincebox-name">
                {education?.college}{" "}
              </div>
              <div
                style={{ margin: width > 700 ? "0.1vw" : "0.5vw" }}
                className="pworkexperincebox-name1"
              >
                {education?.startYear}-{education?.endYear}
              </div>
              <div
                style={{
                  fontSize: width > 700 ? "0.851vw" : "2vw",
                  color: "black",
                  opacity: "0.7",
                }}
                className="profileuserfirstonedata"
              >
                {education?.description}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "82vw",
          margin: "0 4vw",
          marginBottom: "1vw",
          color: "#00000090",
        }}
      />
    </>
  );
}

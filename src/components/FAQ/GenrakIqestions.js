import React, { useState } from 'react'
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function GenrakIqestions({qnas}) {
    const [gpd1, setGpd1] = useState("+");
    return (
        <div>
            <div  className="gq-data-box">
          <div className="gq-data-heading">
            
            <div  style={{ cursor: "pointer" }}
              onClick={() => {
                if (gpd1 === "+") {
                  setGpd1("-");
                } else {
                  setGpd1("+");
                }
              }}>{qnas.question}</div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (gpd1 === "+") {
                  setGpd1("-");
                } else {
                  setGpd1("+");
                }
              }}
            >
              {gpd1 === "+" ? (
                <AddIcon className="addandremovefaqqa" style={{ fontSize: "1.5vw" }} />
              ) : (
                <RemoveIcon className="addandremovefaqqa" style={{ fontSize: "1.5vw" }} />
              )}
            </div>
          </div>
          {gpd1 === "-" ? (
            <div className="gp-data-para">
            {qnas.answer}
            </div>
          ) : (
            " "
          )}
        </div>
        <hr />
        </div>
    )
}
